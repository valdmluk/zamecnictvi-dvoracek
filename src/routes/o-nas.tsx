import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";
import { Award, Users, MapPin, Wrench } from "lucide-react";

export const Route = createFileRoute("/o-nas")({
  head: () => ({
    meta: [
      { title: "O nás — Rodinná kovovýroba od 2000 | Nýrkov" },
      {
        name: "description",
        content:
          "Rodinná kovovýrobní firma z Nýrska. Více než 25 let zkušeností, vlastní dílna, kvalifikovaný tým. Plzeňský kraj.",
      },
      { property: "og:title", content: "O nás — Nýrkov kovovýroba" },
      {
        property: "og:description",
        content: "Rodinná kovovýrobní firma z Nýrska s 25+ lety praxe.",
      },
    ],
  }),
  component: AboutPage,
});

const facts = [
  { icon: Award, label: "Založeno", value: "2000" },
  { icon: Users, label: "Tým", value: "12 lidí" },
  { icon: Wrench, label: "Dílna", value: "1200 m²" },
  { icon: MapPin, label: "Působnost", value: "Plzeňský kraj" },
];

function AboutPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <div>
            <SectionLabel>O firmě</SectionLabel>
            <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95]">
              Čtvrt století <br />
              <span className="text-gradient-forge">u nakovadliny.</span>
            </h1>
            <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Firmu Nýrkov založil v roce 2000 zámečník Pavel Novák v malé dílně
                na okraji Nýrska. Začínali jsme s jedním svářečem a jednou bruskou.
                Dnes máme tým 12 lidí, vlastní halu o ploše 1200 m² a vozový park
                pro montáže po celém Plzeňském kraji.
              </p>
              <p>
                Co se ale nezměnilo — jsme pořád rodinná firma. S každým zákazníkem
                mluvíme osobně. Každou zakázku vedeme od návrhu po předání. A pod
                každý kus svaru se podepíše konkrétní svářeč. Tak víme, že to drží.
              </p>
              <p>
                Děláme práci, na kterou se dá ukázat za dvacet let. Bez kompromisů
                v materiálech, bez „to nějak vyjde" v montáži. Kovovýroba není
                fast food.
              </p>
            </div>
          </div>

          <aside className="border border-border bg-card p-8 h-fit">
            <h3 className="font-display text-xl font-bold uppercase tracking-wide mb-6">
              Firma v číslech
            </h3>
            <div className="grid grid-cols-2 gap-px bg-border">
              {facts.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="bg-card p-5">
                    <Icon className="h-5 w-5 text-primary mb-3" strokeWidth={1.5} />
                    <div className="font-display text-2xl font-bold">{f.value}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                      {f.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </aside>
        </div>
      </section>

      {/* VALUES */}
      <section className="container-edge mt-24">
        <SectionLabel>Naše pravidla</SectionLabel>
        <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-3xl">
          Tři věci, na kterých <span className="text-gradient-forge">stojíme.</span>
        </h2>
        <div className="mt-10 grid gap-px bg-border border border-border md:grid-cols-3">
          {[
            { n: "01", t: "Termíny", d: "Slíbený termín je závazek. Když víme, že nestihneme, řekneme to dopředu — ne den před montáží." },
            { n: "02", t: "Materiál", d: "Žádné šmejdy. Ocel s atestem, povrchové úpravy podle prostředí, spojovací materiál v odpovídající třídě." },
            { n: "03", t: "Cena", d: "Cenová nabídka platí. Žádné překvapení na faktuře. Vícepráce řešíme předem a písemně." },
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
