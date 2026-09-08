import { test } from "node:test";
import assert from "node:assert/strict";
import { mailConfig } from "../src/lib/mail.ts";

const SITE = "contact@deepweaver.ai";
const good = { RESEND_API_KEY: "re_x", CONTACT_FROM_EMAIL: "DeepWeaver Website <website@deepweaver.ai>" };

test("configured when key and a verified-domain sender are set; recipient defaults to the site inbox", () => {
  const c = mailConfig(good, SITE);
  assert.equal(c.ok, true);
  if (c.ok) {
    assert.deepEqual(c.to, [SITE]);
    assert.equal(c.from, good.CONTACT_FROM_EMAIL);
    assert.equal(c.url, "https://api.resend.com/emails");
  }
});

test("not configured without a key", () => {
  const c = mailConfig({ CONTACT_FROM_EMAIL: good.CONTACT_FROM_EMAIL }, SITE);
  assert.equal(c.ok, false);
  if (!c.ok) assert.deepEqual(c.missing, ["RESEND_API_KEY"]);
});

test("not configured without a sender — there is no provider test-sender default", () => {
  const c = mailConfig({ RESEND_API_KEY: "re_x" }, SITE);
  assert.equal(c.ok, false);
  if (!c.ok) assert.deepEqual(c.missing, ["CONTACT_FROM_EMAIL"]);
  const bad = mailConfig({ RESEND_API_KEY: "re_x", CONTACT_FROM_EMAIL: "not an address" }, SITE);
  assert.equal(bad.ok, false);
});

test("accepts a bare sender address and a comma-separated recipient list", () => {
  const c = mailConfig({ RESEND_API_KEY: "re_x", CONTACT_FROM_EMAIL: "website@deepweaver.ai", CONTACT_TO_EMAIL: "a@deepweaver.ai, b@deepweaver.ai" }, SITE);
  assert.equal(c.ok, true);
  if (c.ok) assert.deepEqual(c.to, ["a@deepweaver.ai", "b@deepweaver.ai"]);
});

test("rejects a malformed recipient list", () => {
  const c = mailConfig({ ...good, CONTACT_TO_EMAIL: "nope" }, SITE);
  assert.equal(c.ok, false);
  if (!c.ok) assert.deepEqual(c.missing, ["CONTACT_TO_EMAIL"]);
});
