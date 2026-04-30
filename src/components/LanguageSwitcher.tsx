import { useLang } from "@/i18n/LanguageProvider";
import type { Lang } from "@/i18n/translations";

const flags: { code: Lang; flag: string; label: string }[] = [
  { code: "cs", flag: "🇨🇿", label: "Čeština" },
  { code: "de", flag: "🇩🇪", label: "Deutsch" },
];

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`inline-flex items-center gap-1 border border-border bg-background/60 backdrop-blur ${className}`}
      role="group"
      aria-label="Language"
    >
      {flags.map((f) => {
        const active = lang === f.code;
        return (
          <button
            key={f.code}
            type="button"
            onClick={() => setLang(f.code)}
            aria-label={f.label}
            aria-pressed={active}
            title={f.label}
            className={`inline-flex h-9 w-10 items-center justify-center text-lg leading-none transition-all ${
              active
                ? "bg-primary/15 scale-105"
                : "opacity-60 hover:opacity-100 hover:bg-secondary"
            }`}
          >
            <span aria-hidden>{f.flag}</span>
            <span
              className={`absolute -bottom-0 h-0.5 w-6 transition-colors ${
                active ? "bg-primary" : "bg-transparent"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
