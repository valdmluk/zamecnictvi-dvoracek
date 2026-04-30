import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Fence, DoorOpen, MoveUpRight, Home, Wrench, Construction } from "lucide-react";

const services = [
  {
    icon: Fence,
    title: "Zábradlí na míru",
    desc: "Vnitřní i venkovní zábradlí podle rozměrů, stylu domu a požadované povrchové úpravy.",
  },
  {
    icon: MoveUpRight,
    title: "Schodiště",
    desc: "Rovná, šikmá i točitá schodiště pro rodinné domy, provozy a technické objekty.",
  },
  {
    icon: DoorOpen,
    title: "Brány, vrata a ploty",
    desc: "Brány, vrata, branky a plotové prvky pro rodinné domy, firmy a areály.",
  },
  {
    icon: Home,
    title: "Přístřešky a ocelové konstrukce",
    desc: "Ocelové konstrukce, přístřešky, rámy a svařované díly na míru.",
  },
  {
    icon: Construction,
    title: "Zakázková kovovýroba",
    desc: "Zakázková výroba kovových dílů, plechových prvků a svařovaných konstrukcí.",
  },
  {
    icon: Wrench,
    title: "Zámečnické opravy",
    desc: "Opravy, úpravy a drobné zámečnické práce podle domluvy.",
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
