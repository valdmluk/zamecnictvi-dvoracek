import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Fence, DoorOpen, MoveUpRight, Home, Wrench, Construction } from "lucide-react";

const services = [
  {
    icon: Fence,
    title: "Zábradlí",
    desc: "Vnitřní i venkovní zábradlí na míru — moderní minimalistická i klasická provedení.",
  },
  {
    icon: DoorOpen,
    title: "Vrata a brány",
    desc: "Posuvná, křídlová a pojezdová vrata pro rodinné domy i průmyslové areály.",
  },
  {
    icon: MoveUpRight,
    title: "Schodiště",
    desc: "Ocelová schodiště — samonosná, točitá nebo s dřevěnými stupni.",
  },
  {
    icon: Home,
    title: "Přístřešky",
    desc: "Přístřešky pro auta, vchody i terasy. Ocel + sklo, polykarbonát nebo plech.",
  },
  {
    icon: Construction,
    title: "Ocelové konstrukce",
    desc: "Haly, přístavby, nosné konstrukce. Kompletní dodávka včetně montáže.",
  },
  {
    icon: Wrench,
    title: "Atypická výroba",
    desc: "Cokoliv, co potřebujete vyrobit z oceli. Mříže, regály, nábytek, opravy.",
  },
];

export function ServicesGrid() {
  return (
    <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3 border border-border">
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.title}
            to="/sluzby"
            className="group relative bg-card p-8 transition-colors hover:bg-secondary"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-14 w-14 items-center justify-center bg-background border border-border text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary">
                <Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>
              <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
            <h3 className="mt-6 font-display text-2xl font-bold uppercase tracking-wide">
              {s.title}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
          </Link>
        );
      })}
    </div>
  );
}
