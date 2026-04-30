import { createFileRoute } from "@tanstack/react-router";
import { ServicesGrid } from "@/components/ServicesGrid";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";
import { Check } from "lucide-react";

export const Route = createFileRoute("/sluzby")({
  head: () => ({
    meta: [
      { title: "Služby — Zakázková kovovýroba | Zámečnictví Dvořáček" },
      {
        name: "description",
        content:
          "Zábradlí, schodiště, brány, vrata, ploty, ocelové konstrukce a zámečnické opravy na míru. Návrh, výroba i montáž v Plzeňském kraji.",
      },
      { property: "og:title", content: "Služby — Zámečnictví Dvořáček" },
      {
        property: "og:description",
        content: "Kompletní kovovýroba a zámečnictví na míru pro domácnosti i firmy.",
      },
    ],
  }),
  component: ServicesPage,
});

const process = [
  { step: "01", title: "Návrh & cena", desc: "Připravíme technický návrh a cenovou nabídku. Obvykle do 48 hodin." },
  { step: "02", title: "Výroba", desc: "Vyrobíme v naší dílně v Nýrsku z kvalitních materiálů s odpovídající povrchovou úpravou." },
  { step: "03", title: "Montáž", desc: "Dovezeme a namontujeme podle domluvy. Po sobě uklidíme a předáme dílo." },
];

const materials = [
  "Konstrukční ocel",
  "Nerez",
  "Povrchové úpravy (zinkování, lakování)",
];

function ServicesPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <SectionLabel>Služby</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] max-w-3xl">
          Co pro vás <span className="text-gradient-forge">vyrobíme.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Od jednoduchého zábradlí po ocelovou konstrukci. Navrhneme, vyrobíme
          a namontujeme u vás — po celém Plzeňském kraji a okolí.
        </p>
      </section>

      <section className="container-edge mt-12">
        <ServicesGrid />
      </section>

      {/* PROCESS */}
      <section className="container-edge mt-24">
        <SectionLabel>Jak to probíhá</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-2xl">
          Tři kroky <span className="text-gradient-forge">k hotovému dílu.</span>
        </h2>
        <div className="mt-10 grid gap-px bg-border border border-border md:grid-cols-3">
          {process.map((p) => (
            <div key={p.step} className="bg-card p-8">
              <div className="font-display text-5xl font-bold text-primary/30">{p.step}</div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MATERIALS */}
      <section className="container-edge mt-24">
        <div className="grid gap-10 lg:grid-cols-2 border border-border bg-card p-8 md:p-14">
          <div>
            <SectionLabel>Materiály</SectionLabel>
            <h2 className="font-display text-3xl md:text-4xl font-bold uppercase leading-tight">
              Pracujeme jen s tím, <br />
              <span className="text-gradient-forge">co vydrží.</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Materiál a povrchovou úpravu volíme podle účelu a prostředí, kde
              bude dílo sloužit. Dlouhá životnost je u kovovýroby zásadní.
            </p>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2">
            {materials.map((m) => (
              <li key={m} className="flex items-start gap-3 text-sm">
                <Check className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span>{m}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
