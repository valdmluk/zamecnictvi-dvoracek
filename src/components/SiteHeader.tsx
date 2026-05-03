import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { useLang } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { CallCtaButton } from "@/components/CallCtaButton";
import type { TranslationKey } from "@/i18n/translations";

const nav: { to: string; key: TranslationKey }[] = [
  { to: "/", key: "nav.home" },
  { to: "/sluzby", key: "nav.services" },
  { to: "/realizace", key: "nav.gallery" },
  { to: "/o-nas", key: "nav.about" },
  { to: "/kontakt", key: "nav.contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();

  return (
    <header
      className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-md"
      style={{ paddingTop: "env(safe-area-inset-top)" }}
    >
      <div className="container-edge flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="relative flex h-10 w-10 items-center justify-center bg-primary text-primary-foreground font-display text-xl font-bold">
            <span className="relative z-10">D</span>
            <div className="absolute inset-0 stripe-bar opacity-20" />
          </div>
          <div className="leading-none">
            <div className="font-display text-base md:text-lg font-bold tracking-wide uppercase">
              {t("brand.name")}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
              {t("header.tagline")}
            </div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm font-medium uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {t(n.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <CallCtaButton
            className="hidden md:inline-flex items-center gap-2 bg-primary px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Phone className="h-4 w-4" />
            376 570 591
          </CallCtaButton>
          <button
            type="button"
            aria-label="Menu"
            className="md:hidden p-2 text-foreground"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container-edge flex flex-col py-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-3 text-base font-medium uppercase tracking-wider text-muted-foreground"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {t(n.key)}
              </Link>
            ))}
            <a
              href="tel:+420376570591"
              className="mt-3 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> 376 570 591
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
