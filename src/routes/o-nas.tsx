import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";
import { MapPin, Building2, FileText, Hash } from "lucide-react";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O firmě — Zámečnictví Dvořáček s.r.o. | Nýrsko" },
      {
        name: "description",
        content:
          "Zámečnictví Dvořáček s.r.o. — zakázková kovovýroba a stavební zámečnictví v Nýrsku. Zábradlí, schodiště, brány, vrata, ploty a ocelové konstrukce.",
      },
      { property: "og:title", content: "O firmě — Zámečnictví Dvořáček" },
      {
        property: "og:description",
        content: "Zakázková kovovýroba a zámečnictví v Nýrsku, Plzeňský kraj.",
      },
    ],
  }),
  component: AboutPage,
});

const facts = [
  { icon: Building2, label: "Sídlo", value: "Nýrsko" },
  { icon: MapPin, label: "Adresa", value: "Dobrovského 768" },
  { icon: Hash, label: "IČ", value: "27970035" },
  { icon: FileText, label: "DIČ", value: "CZ27970035" },
];

function AboutPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionLabel>O firmě</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
              Zámečnictví <br />
              <span className="text-gradient-forge">Dvořáček s.r.o.</span>
            </h1>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Zámečnictví Dvořáček s.r.o. sídlí v Nýrsku na adrese Dobrovského 768.
                Zaměřujeme se na zakázkovou kovovýrobu, stavební zámečnictví, výrobu
                zábradlí, schodišť, bran, vrat, plotů, ocelových konstrukcí a kovových
                dílů na míru.
              </p>
              <p>
                Každou zakázku řešíme individuálně — od konzultace a zaměření přes
                výrobu až po montáž. Pracujeme pro domácnosti, stavební firmy
                i menší provozy v Plzeňském kraji.
              </p>
            </div>
          </div>

          <aside className="border border-border bg-card p-8 h-fit">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-6">
              Údaje o firmě
            </h3>
            <div className="grid grid-cols-2 gap-px bg-border">
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="bg-card p-5">
                    <Icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                    <div className="font-display text-lg font-bold break-words">{f.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {f.label}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5 text-xs text-muted-foreground">
              340 22 Nýrsko · Plzeňský kraj
            </div>
          </aside>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-edge mt-24">
        <SectionLabel>Jak pracujeme</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-3xl">
          Tři věci, na kterých <span className="text-gradient-forge">stojíme.</span>
        </h2>
        <div className="mt-10 grid gap-px bg-border border border-border md:grid-cols-3">
          {[
            { n: "01", t: "Individuální přístup", d: "Každou zakázku řešíme od konzultace a zaměření až po montáž. Žádná univerzální řešení." },
            { n: "02", t: "Materiál a úpravy", d: "Pracujeme s kvalitními materiály a povrchovými úpravami podle prostředí — pozink, komaxit, nátěry." },
            { n: "03", t: "Férová cena", d: "Cenovou nabídku zpracujeme jasně a srozumitelně. Žádná překvapení po dokončení zakázky." },
          ].map((v) => (
            <div key={v.n} className="bg-card p-8">
              <div className="font-display text-5xl font-bold text-primary/30">{v.n}</div>
              <h3 className="mt-4 font-display text-xl font-bold uppercase tracking-wide">
                {v.t}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
