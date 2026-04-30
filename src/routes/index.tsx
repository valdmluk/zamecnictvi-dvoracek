import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, ArrowRight, ShieldCheck, Hammer, Clock, MapPin } from "lucide-react";
import heroImg from "@/assets/hero-welder.jpg";
import { ServicesGrid } from "@/components/ServicesGrid";
import { Gallery } from "@/components/Gallery";
import { SectionLabel } from "@/components/SectionLabel";
import { CtaBanner } from "@/components/CtaBanner";

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

const reasons = [
  {
    icon: Hammer,
    title: "Vlastní výroba v Nýrsku",
    desc: "Veškerá kovovýroba probíhá v naší dílně v Nýrsku — od návrhu po finální povrchovou úpravu.",
    stat: "Nýrsko",
    statLabel: "vlastní dílna",
  },
  {
    icon: ShieldCheck,
    title: "Individuální řešení na míru",
    desc: "Každá zakázka je jiná. Navrhneme řešení podle vašich rozměrů, prostoru a stylu.",
    stat: "100%",
    statLabel: "na míru",
  },
  {
    icon: Clock,
    title: "Férová cenová nabídka",
    desc: "Jasná domluva a konkrétní cena. Na vaši poptávku reagujeme co nejrychleji.",
    stat: "Rychlá",
    statLabel: "cenová nabídka",
  },
];

const trustItems = [
  { label: "Od roku 2000" },
  { label: "Zakázková kovovýroba" },
  { label: "Rychlá cenová nabídka" },
  { label: "Nýrsko • Plzeňský kraj" },
];

function HomePage() {
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

        <div className="relative container-edge pt-20 pb-28 md:pt-32 md:pb-44">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-border bg-background/60 backdrop-blur px-4 py-2 mb-8">
              <span className="h-2 w-2 bg-primary animate-pulse" />
              <span className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <MapPin className="inline h-3 w-3 mr-1 -mt-0.5" />
                Nýrsko • Plzeňský kraj • od 2000
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold uppercase leading-[1.0]">
              Zámečnictví Dvořáček —{" "}
              <span className="text-gradient-forge">kovovýroba na míru po celém Plzeňském kraji.</span>
            </h1>

            <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Zábradlí, schodiště, brány, vrata, ploty, ocelové konstrukce a zakázková
              kovovýroba. Navrhneme, vyrobíme a namontujeme řešení přesně podle vás.
            </p>

            <p className="mt-4 text-base font-semibold text-primary">
              Na vaši poptávku reagujeme co nejrychleji.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+420376570591"
                className="inline-flex items-center justify-center gap-3 bg-primary px-8 py-5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-1"
                style={{ boxShadow: "var(--shadow-forge)" }}
              >
                <Phone className="h-5 w-5" />
                Zavolat a domluvit konzultaci
              </a>
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center gap-2 border border-border bg-background/60 backdrop-blur px-8 py-5 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
              >
                Nezávazná poptávka <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 border-t border-border pt-8">
              {trustItems.map((t) => (
                <div key={t.label} className="flex items-start gap-2">
                  <span className="mt-1.5 h-2 w-2 bg-primary shrink-0" />
                  <div className="text-xs md:text-sm font-semibold uppercase tracking-wider text-foreground/90 leading-snug">
                    {t.label}
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
            <SectionLabel>Co pro vás vyrobíme</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-2xl">
              Co pro vás <span className="text-gradient-forge">vyrobíme</span>
            </h2>
          </div>
          <Link
            to="/sluzby"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
          >
            Všechny služby <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <ServicesGrid />
      </section>

      {/* WHY US */}
      <section className="container-edge mt-24">
        <div className="grid gap-10 lg:grid-cols-[1fr_2fr] lg:gap-16">
          <div>
            <SectionLabel>Proč Zámečnictví Dvořáček</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight">
              Jasná domluva. <br />
              <span className="text-gradient-forge">Férová cena.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              Jsme zámečnická a kovovýrobní firma z Nýrska. Realizujeme zakázky
              pro domácnosti, firmy i stavební projekty po celém Plzeňském kraji a okolí.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-foreground/90">
              {[
                "Vlastní výroba v Nýrsku",
                "Individuální řešení na míru",
                "Kvalitní materiály a povrchové úpravy",
                "Jasná domluva a férová cenová nabídka",
                "Montáž podle domluvy",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 bg-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-px bg-border border border-border">
            {reasons.map((r) => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-card p-7 md:p-8 grid md:grid-cols-[auto_1fr_auto] gap-6 items-center">
                  <div className="flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{r.desc}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl md:text-3xl font-bold text-primary">{r.stat}</div>
                    <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {r.statLabel}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="container-edge mt-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <SectionLabel>Naše realizace</SectionLabel>
            <h2 className="font-display text-4xl md:text-5xl font-bold uppercase leading-tight max-w-2xl">
              Práce mluví <span className="text-gradient-forge">za nás.</span>
            </h2>
          </div>
          <Link
            to="/realizace"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:gap-3 transition-all"
          >
            Celá galerie <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <Gallery />
      </section>

      <CtaBanner />
    </>
  );
}
