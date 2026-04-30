import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";
import { MapPin, Building2, FileText, Hash } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O firmě — Zámečnictví Dvořáček s.r.o. | Nýrsko" },
      {
        name: "description",
        content:
          "Zámečnictví Dvořáček s.r.o. — zakázková kovovýroba a stavební zámečnictví v Nýrsku. Zábradlí, schodiště, brány, vrata, ploty a ocelové konstrukce.",
      },
    ],
  }),
  component: AboutPage,
});

const facts: { icon: typeof Building2; labelKey: TranslationKey; value: string }[] = [
  { icon: Building2, labelKey: "about.facts.seat", value: "Nýrsko" },
  { icon: MapPin, labelKey: "about.facts.address", value: "Dobrovského 768" },
  { icon: Hash, labelKey: "about.facts.seat", value: "27970035" },
  { icon: FileText, labelKey: "about.facts.seat", value: "CZ27970035" },
];

const valueItems: { n: string; tKey: TranslationKey; dKey: TranslationKey }[] = [
  { n: "01", tKey: "about.values.1.title", dKey: "about.values.1.desc" },
  { n: "02", tKey: "about.values.2.title", dKey: "about.values.2.desc" },
  { n: "03", tKey: "about.values.3.title", dKey: "about.values.3.desc" },
];

function AboutPage() {
  const { t } = useLang();
  // factual labels override (IČ/DIČ stay the same in any language as proper nouns)
  const factsLabels = [t("about.facts.seat"), t("about.facts.address"), "IČ", "DIČ"];

  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionLabel>{t("about.label")}</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
              {t("about.h1.prefix")} <br />
              <span className="text-gradient-forge">{t("about.h1.accent")}</span>
            </h1>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-semibold">{t("about.p1.bold")}</span>{" "}
                {t("about.p1.rest")}
              </p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
              <p className="text-foreground font-semibold">{t("about.p4")}</p>
              <p>{t("about.p5")}</p>
            </div>
          </div>

          <aside className="border border-border bg-card p-8 h-fit">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-6">
              {t("about.facts.title")}
            </h3>
            <div className="grid grid-cols-2 gap-px bg-border">
              {facts.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={i} className="bg-card p-5">
                    <Icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                    <div className="font-display text-lg font-bold break-words">{f.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {factsLabels[i]}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 text-xs text-muted-foreground">{t("about.facts.region")}</div>
          </aside>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-edge mt-24">
        <SectionLabel>{t("about.values.label")}</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-3xl">
          {t("about.values.h2.prefix")} <span className="text-gradient-forge">{t("about.values.h2.accent")}</span>
        </h2>
        <div className="mt-10 grid gap-px bg-border border border-border md:grid-cols-3">
          {valueItems.map((v) => (
            <div key={v.n} className="bg-card p-8">
              <div className="font-display text-5xl font-bold text-primary/30">{v.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">
                {t(v.tKey)}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{t(v.dKey)}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
