export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-3 mb-5">
      <span className="block h-px w-10 bg-primary" />
      <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">
        {children}
      </span>
    </div>
  );
}
