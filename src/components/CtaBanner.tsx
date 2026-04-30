import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="container-edge mt-24">
      <div className="relative overflow-hidden border border-border bg-card p-8 md:p-14">
        <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute top-0 left-0 h-1 w-full stripe-bar" />
        <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-xs font-bold uppercase tracking-[0.3em] text-primary mb-3">
              Máte projekt? Pošlete poptávku.
            </div>
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase leading-tight">
              Cenovou nabídku<br />
              <span className="text-gradient-forge">připravíme do 48 hodin.</span>
            </h2>
            <p className="mt-4 text-sm md:text-base text-muted-foreground max-w-xl">
              Ozveme se vám a projdeme váš projekt krok za krokem.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+420376570591"
              className="inline-flex items-center justify-center gap-2 bg-primary px-6 py-4 text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Zavolat
            </a>
            <Link
              to="/kontakt"
              className="inline-flex items-center justify-center gap-2 border border-border bg-background px-6 py-4 text-sm font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
            >
              Poslat poptávku <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
