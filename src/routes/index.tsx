import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ShieldCheck, Hammer, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-welder.jpg";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Gallery } from "@/components/Gallery";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";
import { useLang } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zámečnictví Dvořáček — Kovovýroba na míru | Nýrsko, Plzeňsko" },
      {
        name: "description",
        content:
          "Zakázková kovovýroba a zámečnictví v Nýrsku. Zábradlí, schodiště, brány, vrata, ploty a ocelové konstrukce na míru. Na vaši poptávku reagujeme co nejrychleji.",
      },
    ],
  }),
  component: HomePage,
});

const reasons: { icon: typeof Hammer; titleKey: TranslationKey; descKey: TranslationKey; statKey: TranslationKey; statLabelKey: TranslationKey }[] = [
  { icon: Hammer, titleKey: "reason.1.title", descKey: "reason.1.desc", statKey: "reason.1.stat", statLabelKey: "reason.1.statLabel" },
  { icon: ShieldCheck, titleKey: "reason.2.title", descKey: "reason.2.desc", statKey: "reason.2.stat", statLabelKey: "reason.2.statLabel" },
  { icon: Clock, titleKey: "reason.3.title", descKey: "reason.3.desc", statKey: "reason.3.stat", statLabelKey: "reason.3.statLabel" },
];

const trustItems: TranslationKey[] = ["trust.since", "trust.custom", "trust.fastQuote", "trust.region"];
const whyPoints: TranslationKey[] = ["why.point.1", "why.point.2", "why.point.3", "why.point.4", "why.point.5"];

function HomePage() {
  const { t } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Svářeč při práci na ocelové konstrukci"
            width={1920}
            height={1080}
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative container-edge pt-12 pb-28 md:pt-32 md:pb-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-border bg-background/60 backdrop-blur px-4 py-2 mb-8">
              <span className="h-2 w-2 bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <MapPin className="inline h-3 w-3 mr-1 -mt-0.5" />
                {t("home.badge")}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.0]">
              {t("home.h1.prefix")}{" "}
              <span className="text-gradient-forge">{t("home.h1.accent")}</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              {t("home.lead")}
            </p>

            <p className="mt-4 text-base font-semibold text-primary">{t("home.subLead")}</p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+420376570591"
                className="inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-forge)" }}
              >
                <Phone className="h-5 w-5" />
                {t("home.cta.call")}
              </a>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-border pt-8">
              {trustItems.map((k) => (
                <div key={k} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 bg-primary shrink-0" />
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground/90 leading-snug">
                    {t(k)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-1 stripe-bar opacity-80" />
      </section>

      {/* SERVICES */}
      <section className="container-edge mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionLabel>{t("section.servicesLabel")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-2xl">
              {t("section.services.h2.prefix")} <span className="text-gradient-forge">{t("section.services.h2.accent")}</span>
            </h2>
            <p className="mt-4 max-w-2xl text-sm md:text-base text-muted-foreground">
              {t("services.focus")}
            </p>
          </div>
          <Link
            to="/sluzby"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
          >
            {t("section.allServices")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ServicesGrid />
      </section>

      {/* WHY US */}
      <section className="container-edge mt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <SectionLabel>{t("section.whyLabel")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              {t("section.why.h2.prefix")} <br />
              <span className="text-gradient-forge">{t("section.why.h2.accent")}</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{t("section.why.lead")}</p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/90">
              {whyPoints.map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-primary shrink-0" />
                  {t(p)}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-px bg-border border border-border">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.titleKey} className="bg-card p-7 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                  <div className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                      {t(r.titleKey)}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{t(r.descKey)}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary">{t(r.statKey)}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {t(r.statLabelKey)}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TECHNOLOGY / CAPABILITIES */}
      <section className="container-edge mt-24">
        <div className="grid gap-10 lg:grid-cols-2 border border-border bg-card p-8 md:p-14">
          <div>
            <SectionLabel>{t("tech.label")}</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight">
              {t("tech.h2.prefix")} <br />
              <span className="text-gradient-forge">{t("tech.h2.accent")}</span>
            </h2>
            <p className="mt-4 text-muted-foreground">{t("tech.lead")}</p>
          </div>
          <ul className="grid gap-3">
            {(["tech.1", "tech.2", "tech.3", "tech.4"] as TranslationKey[]).map((k) => (
              <li key={k} className="flex items-start gap-3 text-sm md:text-base">
                <span className="mt-2 h-1.5 w-1.5 bg-primary shrink-0" />
                <span>{t(k)}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-edge mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionLabel>{t("section.galleryLabel")}</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-2xl">
              {t("section.gallery.h2.prefix")} <span className="text-gradient-forge">{t("section.gallery.h2.accent")}</span>
            </h2>
          </div>
          <Link
            to="/realizace"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
          >
            {t("section.fullGallery")} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Gallery />
      </section>

      <CtaBanner />
    </>
  );
}
