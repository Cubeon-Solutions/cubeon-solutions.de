export default function ServiceBadge({ label }: { label: string }) {
  return (
    <span className="inline-block rounded-full border border-[var(--color-border)] bg-white px-4 py-2 text-sm text-[var(--color-body)] shadow-sm">
      {label}
    </span>
  );
}
