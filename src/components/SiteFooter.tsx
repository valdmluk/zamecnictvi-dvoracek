import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card/40 mt-24">
      <div className="h-1 stripe-bar opacity-80" />
      <div className="container-edge py-14 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground font-display text-xl font-bold">
              N
            </div>
            <div>
              <div className="font-display text-lg font-bold uppercase tracking-wide">Nýrkov</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Kovovýroba · od 2000
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Zakázková kovovýroba pro domácnosti i stavební firmy v Plzeňském kraji.
            Zábradlí, vrata, schodiště, přístřešky a ocelové konstrukce na míru.
          </p>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Navigace</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/sluzby" className="hover:text-foreground">Služby</Link></li>
            <li><Link to="/realizace" className="hover:text-foreground">Realizace</Link></li>
            <li><Link to="/o-nas" className="hover:text-foreground">O nás</Link></li>
            <li><Link to="/kontakt" className="hover:text-foreground">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-sm font-bold uppercase tracking-wider mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <a href="tel:+420777123456" className="hover:text-foreground">+420 777 123 456</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary" />
              <a href="mailto:info@nyrkov.cz" className="hover:text-foreground">info@nyrkov.cz</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              <span>Nýrsko, Plzeňský kraj</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-edge py-5 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Nýrkov s.r.o. · Všechna práva vyhrazena</div>
          <div className="uppercase tracking-[0.2em]">Vyrobeno z oceli · Postaveno pro generace</div>
        </div>
      </div>
    </footer>
  );
}
