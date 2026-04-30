import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Toaster } from "@/components/ui/sonner";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-bold text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl font-bold uppercase tracking-wide">
          Stránka nenalezena
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Stránka, kterou hledáte, neexistuje nebo byla přesunuta.
        </p>
        <div className="mt-6">
          <a
            href="/"
            className="inline-flex items-center justify-center bg-primary px-6 py-3 text-sm font-bold uppercase tracking-wider text-primary-foreground"
          >
            Zpět na úvod
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Zámečnictví Dvořáček — Kovovýroba na míru | Nýrsko, Plzeňsko" },
      {
        name: "description",
        content:
          "Zámečnictví Dvořáček s.r.o. — zakázková kovovýroba a stavební zámečnictví v Nýrsku. Zábradlí, schodiště, brány, vrata, ploty a ocelové konstrukce na míru.",
      },
      { property: "og:title", content: "Zámečnictví Dvořáček — Kovovýroba na míru" },
      {
        property: "og:description",
        content: "Zábradlí, schodiště, brány, vrata, ploty a ocelové konstrukce na míru. Nýrsko, Plzeňský kraj.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
      <Toaster richColors theme="dark" position="top-center" />
    </div>
  );
}
