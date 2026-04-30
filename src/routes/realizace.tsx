import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/Gallery";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";

export const Route = createFileRoute("/realizace")({
  head: () => ({
    meta: [
      { title: "Realizace — Galerie prací | Nýrkov kovovýroba" },
      {
        name: "description",
        content:
          "Ukázky našich realizací — zábradlí, vrata, schodiště, přístřešky a ocelové konstrukce po celém Plzeňském kraji.",
      },
      { property: "og:title", content: "Realizace — Nýrkov" },
      { property: "og:description", content: "Galerie naší kovovýroby." },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <SectionLabel>Realizace</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] max-w-3xl">
          Naše práce <span className="text-gradient-forge">v terénu.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Vybrané zakázky z posledních let. Od minimalistických zábradlí přes
          ocelové haly až po kovářské detaily.
        </p>
      </section>

      <section className="container-edge mt-12">
        <Gallery />
      </section>

      <CtaBanner />
    </>
  );
}
