import { cn } from "@/lib/utils";

/** Small definition list for hero asides: label / value rows with hairlines. */
export default function Facts({ items, className }: { items: [string, string][]; className?: string }) {
  return (
    <dl className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map(([k, v]) => (
        <div key={k} className="grid grid-cols-[7rem_1fr] gap-4 py-3">
          <dt className="eyebrow pt-1">{k}</dt>
          <dd className="text-sm text-fg">{v}</dd>
        </div>
      ))}
    </dl>
  );
}
