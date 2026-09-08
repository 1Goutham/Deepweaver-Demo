import { test } from "node:test";
import assert from "node:assert/strict";
import { validateContact, contactSubject, contactBody, LIMITS } from "../src/lib/contact.ts";

const good = { name: "Ada Lovelace", org: "Analytical Engines", email: "Ada@Example.com", message: "Our pilots have no owner and the data cannot leave.", interest: "Digital AI" };

test("accepts a complete enquiry and normalises it", () => {
  const { data, errors } = validateContact(good);
  assert.deepEqual(errors, {});
  assert.equal(data.email, "ada@example.com");
  assert.equal(data.interest, "Digital AI");
});

test("requires name, email and a real message", () => {
  const { errors } = validateContact({});
  assert.ok(errors.name && errors.email && errors.message);
});

test("rejects malformed email addresses", () => {
  for (const email of ["ada", "ada@", "ada@example", "ada @example.com", "@example.com", "ada@example.c"]) {
    assert.ok(validateContact({ ...good, email }).errors.email, `should reject ${email}`);
  }
  for (const email of ["ada@example.com", "first.last+tag@sub.example.co.uk"]) {
    assert.equal(validateContact({ ...good, email }).errors.email, undefined, `should accept ${email}`);
  }
});

test("falls back to 'Not sure yet' for an unknown interest and trims to limits", () => {
  const { data } = validateContact({ ...good, interest: "Nope", message: "x".repeat(LIMITS.message + 50) });
  assert.equal(data.interest, "Not sure yet");
  assert.equal(data.message.length, LIMITS.message);
});

test("subject and body carry every field", () => {
  const { data } = validateContact(good);
  assert.equal(contactSubject(data), "Enquiry · Digital AI · Analytical Engines");
  const body = contactBody(data);
  for (const s of ["Ada Lovelace", "Analytical Engines", "ada@example.com", "Digital AI", "no owner"]) assert.ok(body.includes(s));
});
