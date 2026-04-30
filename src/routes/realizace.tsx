import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/realizace")({
  head: () => ({
    meta: [
      { title: "Realizace — Naše práce | Zámečnictví Dvořáček" },
      {
        name: "description",
        content:
          "Naše realizace — zábradlí, schodiště, brány, vrata, ploty a ocelové konstrukce v Plzeňském kraji.",
      },
      { property: "og:title", content: "Realizace — Zámečnictví Dvořáček" },
      { property: "og:description", content: "Galerie naší kovovýroby a zámečnictví." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <SectionLabel>Naše realizace</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] max-w-3xl">
          Naše práce <span className="text-gradient-forge">v terénu.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Vybrané zakázky — zábradlí, schodiště, brány a ploty, přístřešky
          a ocelové konstrukce z Plzeňského kraje.
        </p>
      </section>

      <section className="container-edge mt-12">
        <Gallery />
      </section>

      <CtaBanner />
    </>
  );
}
