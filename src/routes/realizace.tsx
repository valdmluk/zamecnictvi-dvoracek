import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";
import { useLang } from "@/i18n/LanguageProvider";

export const Route = createFileRoute("/realizace")({
  head: () => ({
    meta: [
      { title: "Realizace — Naše práce | Zámečnictví Dvořáček" },
      {
        name: "description",
        content:
          "Naše realizace — zábradlí, schodiště, brány, vrata, ploty a ocelové konstrukce v Plzeňském kraji.",
      },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  const { t } = useLang();
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <SectionLabel>{t("gallery.label")}</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] max-w-3xl">
          {t("gallery.h1.prefix")} <span className="text-gradient-forge">{t("gallery.h1.accent")}</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">{t("gallery.lead")}</p>
      </section>

      <section className="container-edge mt-12">
        <Gallery />
      </section>

      <CtaBanner />
    </>
  );
}
