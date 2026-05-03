import { useEffect, useState, type ReactNode } from "react";
import { X, Phone, Send } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";

const PHONE_DISPLAY = "+420 376 570 591";
const PHONE_HREF = "tel:+420376570591";

function isDesktop() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(min-width: 768px)").matches;
}

export function CallCtaButton({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isDesktop()) {
      e.preventDefault();
      setOpen(true);
    }
  };

  const scrollToForm = () => {
    setOpen(false);
    if (typeof window === "undefined") return;
    const el = document.getElementById("kontakt-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.location.href = "/kontakt#kontakt-form";
    }
  };

  return (
    <>
      <a href={PHONE_HREF} onClick={handleClick} className={className}>
        {children}
      </a>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fade-in"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-md bg-card border border-border p-8 md:p-10 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t("modal.close")}
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
              {t("modal.eyebrow")}
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight">
              {t("modal.title")}
            </h3>

            <a
              href={PHONE_HREF}
              className="mt-6 inline-flex items-center gap-3 text-2xl md:text-3xl font-display font-bold text-primary hover:underline"
            >
              <Phone className="h-6 w-6" />
              {PHONE_DISPLAY}
            </a>

            <p className="mt-5 text-sm text-muted-foreground">{t("modal.text")}</p>

            <button
              type="button"
              onClick={scrollToForm}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Send className="h-4 w-4" />
              {t("modal.submitCta")}
            </button>
          </div>
        </div>
      )}
    </>
  );
}
