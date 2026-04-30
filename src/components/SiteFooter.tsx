import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Globe } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="h-1 stripe-bar opacity-80" />
      <div className="container-edge py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground font-display text-xl font-bold">
              D
            </div>
            <div>
              <div className="font-display text-lg font-bold uppercase tracking-wide">
                Zámečnictví Dvořáček
              </div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Kovovýroba • Zámečnictví • Nýrsko
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Zakázková kovovýroba a stavební zámečnictví pro domácnosti, firmy
            i stavební projekty v Plzeňském kraji. Zábradlí, schodiště, brány,
            vrata, ploty a ocelové konstrukce na míru.
          </p>
          <div className="mt-5 text-xs text-muted-foreground space-y-1">
            <div>Zámečnictví Dvořáček s.r.o.</div>
            <div>IČ: 27970035 · DIČ: CZ27970035</div>
          </div>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Navigace</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sluzby" className="hover:text-foreground">Služby</Link></li>
            <li><Link to="/realizace" className="hover:text-foreground">Realizace</Link></li>
            <li><Link to="/o-nas" className="hover:text-foreground">O firmě</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <div className="flex flex-col">
                <a href="tel:+420376570591" className="hover:text-foreground">+420 376 570 591</a>
                <a href="tel:+420777749422" className="hover:text-foreground">+420 777 749 422</a>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a href="mailto:zamecnictvi@zamecnictvidvoracek.cz" className="hover:text-foreground break-all">
                zamecnictvi@zamecnictvidvoracek.cz
              </a>
            </li>
            <li className="flex items-start gap-2">
              <Globe className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <a
                href="https://www.zamecnictvidvoracek.cz"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground"
              >
                www.zamecnictvidvoracek.cz
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary shrink-0" />
              <span>Dobrovského 768, 340 22 Nýrsko</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edge py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Zámečnictví Dvořáček s.r.o. · Všechna práva vyhrazena</div>
          <div className="uppercase tracking-[0.2em]">Vyrobeno z oceli · Postaveno pro generace</div>
        </div>
      </div>
    </footer>
  );
}
