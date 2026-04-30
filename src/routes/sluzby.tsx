import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";
import { Check } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Zakázková kovovýroba | Zámečnictví Dvořáček" },
      {
        name: "description",
        content:
          "Zábradlí, schodiště, brány, vrata, ploty, ocelové konstrukce a zámečnické opravy na míru. Návrh, výroba i montáž v Plzeňském kraji.",
      },
    ],
  }),
  component: ServicesPage,
});

const process: { step: string; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { step: "01", titleKey: "services.process.1.title", descKey: "services.process.1.desc" },
  { step: "02", titleKey: "services.process.2.title", descKey: "services.process.2.desc" },
  { step: "03", titleKey: "services.process.3.title", descKey: "services.process.3.desc" },
];

const materials: TranslationKey[] = ["materials.1", "materials.2", "materials.3"];

function ServicesPage() {
  const { t } = useLang();
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <SectionLabel>{t("services.label")}</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] max-w-3xl">
          {t("services.h1.prefix")} <span className="text-gradient-forge">{t("services.h1.accent")}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t("services.lead")}</p>
      </section>

      <section className="container-edge mt-12">
        <ServicesGrid />
      </section>

      {/* PROCESS */}
      <section className="container-edge mt-24">
        <SectionLabel>{t("services.processLabel")}</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-2xl">
          {t("services.process.h2.prefix")} <span className="text-gradient-forge">{t("services.process.h2.accent")}</span>
        </h2>
        <div className="mt-10 grid gap-px bg-border border border-border md:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="bg-card p-8">
              <div className="font-display text-5xl font-bold text-primary/30">{p.step}</div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">
                {t(p.titleKey)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(p.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="container-edge mt-24">
        <div className="grid gap-10 lg:grid-cols-2 border border-border bg-card p-8 md:p-14">
          <div>
            <SectionLabel>{t("services.materialsLabel")}</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight">
              {t("services.materials.h2.prefix")} <br />
              <span className="text-gradient-forge">{t("services.materials.h2.accent")}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{t("services.materials.lead")}</p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {materials.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{t(m)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
