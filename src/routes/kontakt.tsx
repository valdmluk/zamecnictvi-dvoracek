import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Poptávka kovovýroby | Nýrkov" },
      {
        name: "description",
        content:
          "Kontaktujte nás telefonicky nebo přes formulář. Cenovou nabídku připravíme do 48 hodin. Nýrsko, Plzeňský kraj.",
      },
      { property: "og:title", content: "Kontakt — Nýrkov kovovýroba" },
      {
        property: "og:description",
        content: "Telefon, e-mail a poptávkový formulář.",
      },
    ],
  }),
  component: ContactPage,
});

const contactItems = [
  { icon: Phone, label: "Telefon", value: "+420 777 123 456", href: "tel:+420777123456" },
  { icon: Mail, label: "E-mail", value: "info@nyrkov.cz", href: "mailto:info@nyrkov.cz" },
  { icon: MapPin, label: "Adresa", value: "Strážovská 245, 340 22 Nýrsko" },
  { icon: Clock, label: "Otevírací doba", value: "Po–Pá 7:00–16:00" },
];

function ContactPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <SectionLabel>Kontakt</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] max-w-3xl">
          Pošlete poptávku. <br />
          <span className="text-gradient-forge">Cenu znáte do 48h.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Napište nám, co potřebujete, nebo rovnou zavolejte. Cenovou nabídku
          vám zpracujeme nezávazně a obvykle do dvou pracovních dnů.
        </p>
      </section>

      <section className="container-edge mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        {/* CONTACT INFO */}
        <div className="space-y-px bg-border border border-border h-fit">
          {contactItems.map((c) => {
            const Icon = c.icon;
            const Inner = (
              <div className="bg-card p-6 flex items-start gap-4 transition-colors group-hover:bg-secondary">
                <div className="flex h-12 w-12 items-center justify-center bg-background border border-border text-primary shrink-0">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="mt-1 font-display text-lg font-bold">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block group">
                {Inner}
              </a>
            ) : (
              <div key={c.label} className="group">{Inner}</div>
            );
          })}
        </div>

        {/* FORM */}
        <div className="border border-border bg-card p-6 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2">
            Poptávkový formulář
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Vyplňte, co potřebujete. Ozveme se obvykle do 24 hodin.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* MAP */}
      <section className="container-edge mt-16">
        <div className="border border-border overflow-hidden">
          <iframe
            title="Mapa — Nýrsko"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.13%2C49.27%2C13.18%2C49.30&amp;layer=mapnik&amp;marker=49.2867%2C13.1467"
            className="w-full h-[400px] grayscale-[60%] contrast-110"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
