import { Phone } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import { CallCtaButton } from "@/components/CallCtaButton";

export function CtaBanner() {
  const { t } = useLang();
  return (
    <section className="container-edge mt-24">
      <div className="relative overflow-hidden border border-border bg-card p-8 md:p-14">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-0 left-0 h-1 w-full stripe-bar" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
              {t("cta.eyebrow")}
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase leading-tight">
              {t("cta.h2.prefix")}<br />
              <span className="text-gradient-forge">{t("cta.h2.accent")}</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
              {t("cta.lead")}
            </p>
            <p className="mt-3 text-xs md:text-sm text-foreground/80 max-w-xl">
              {t("consult.note")}
            </p>
          </div>
          <div className="flex">
            <a
              href="tel:+420376570591"
              className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> {t("cta.call")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
