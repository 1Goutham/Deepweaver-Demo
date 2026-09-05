/** Two hairline glyphs for the hero actions. 1.6 stroke, 24 grid, no fill. */
const p = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

export function CollaborateIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <circle cx="8.5" cy="8" r="3.2" />
      <circle cx="16" cy="9.5" r="2.6" />
      <path d="M2.8 19.2c.6-3.2 3-5 5.7-5s5.1 1.8 5.7 5" />
      <path d="M14.6 14.6c2.4.1 4.4 1.6 4.9 4.2" />
    </svg>
  );
}

export function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...p}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.8 7.2 8.2 6 8.2-6" />
    </svg>
  );
}
