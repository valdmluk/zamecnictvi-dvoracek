import { createFileRoute } from "@tanstack/react-router";
import { SectionLabel } from "@/components/SectionLabel";
import { ContactForm } from "@/components/ContactForm";
import { Phone, Mail, MapPin, Globe, ExternalLink } from "lucide-react";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt — Poptávka kovovýroby | Zámečnictví Dvořáček" },
      {
        name: "description",
        content:
          "Kontaktujte Zámečnictví Dvořáček s.r.o. — telefon +420 376 570 591, e-mail zamecnictvi@zamecnictvidvoracek.cz. Na vaši poptávku reagujeme co nejrychleji.",
      },
      { property: "og:title", content: "Kontakt — Zámečnictví Dvořáček" },
      {
        property: "og:description",
        content: "Telefon, e-mail a poptávkový formulář.",
      },
    ],
  }),
  component: ContactPage,
});

const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=Dobrovsk%C3%A9ho+768%2C+340+22+N%C3%BDrsko";

function ContactPage() {
  return (
    <>
      <section className="container-edge pt-16 md:pt-24">
        <SectionLabel>Kontakt</SectionLabel>
        <h1 className="font-display text-5xl md:text-7xl font-bold uppercase leading-[0.95] max-w-3xl">
          Pošlete poptávku. <br />
          <span className="text-gradient-forge">Ozveme se co nejdříve.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Napište nám, co potřebujete, nebo rovnou zavolejte. Ozveme se vám
          a projdeme váš projekt krok za krokem.
        </p>
      </section>

      <section className="container-edge mt-12 grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-12">
        {/* CONTACT INFO */}
        <div className="space-y-px h-fit">
          <div className="border border-border bg-card p-6 space-y-6">
            <div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-3">
                Společnost
              </div>
              <div className="font-display text-xl font-bold uppercase tracking-wide">
                Zámečnictví Dvořáček s.r.o.
              </div>
              <div className="text-xs text-muted-foreground mt-2">
                IČ: 27970035 · DIČ: CZ27970035
              </div>
            </div>

            <div className="border-t border-border pt-5 space-y-4">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-background border border-border text-primary shrink-0">
                  <Phone className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Telefon
                  </div>
                  <div className="mt-1 font-display text-base md:text-lg font-bold flex flex-col">
                    <a href="tel:+420376570591" className="hover:text-primary transition-colors">
                      +420 376 570 591
                    </a>
                    <a href="tel:+420777749422" className="hover:text-primary transition-colors">
                      +420 777 749 422
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-background border border-border text-primary shrink-0">
                  <Mail className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    E-mail
                  </div>
                  <a
                    href="mailto:zamecnictvi@zamecnictvidvoracek.cz"
                    className="mt-1 block font-display text-base md:text-lg font-bold break-all hover:text-primary transition-colors"
                  >
                    zamecnictvi@zamecnictvidvoracek.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-background border border-border text-primary shrink-0">
                  <Globe className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Web
                  </div>
                  <a
                    href="https://www.zamecnictvidvoracek.cz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 font-display text-base md:text-lg font-bold hover:text-primary transition-colors"
                  >
                    www.zamecnictvidvoracek.cz
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center bg-background border border-border text-primary shrink-0">
                  <MapPin className="h-4 w-4" strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Adresa
                  </div>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block font-display text-base md:text-lg font-bold leading-snug hover:text-primary transition-colors"
                  >
                    Dobrovského 768<br />
                    340 22 Nýrsko<br />
                    <span className="text-sm font-normal text-muted-foreground">Plzeňský kraj</span>
                  </a>
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-2 border border-border px-4 py-2 text-xs font-bold uppercase tracking-wider hover:border-primary hover:text-primary transition-colors"
                  >
                    Zobrazit na mapě <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FORM */}
        <div className="border border-border bg-card p-6 md:p-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold uppercase tracking-wide mb-2">
            Poptávkový formulář
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            Vyplňte, co potřebujete. Ozveme se vám co nejdříve.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* MAP */}
      <section className="container-edge mt-16">
        <div className="border border-border overflow-hidden">
          <iframe
            title="Mapa — Dobrovského 768, Nýrsko"
            src="https://www.openstreetmap.org/export/embed.html?bbox=13.13%2C49.27%2C13.18%2C49.30&amp;layer=mapnik&amp;marker=49.2867%2C13.1467"
            className="w-full h-[400px] grayscale-[60%] contrast-110"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
