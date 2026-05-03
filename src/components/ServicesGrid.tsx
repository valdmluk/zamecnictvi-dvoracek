import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Fence, DoorOpen, MoveUpRight, Home, Construction } from "lucide-react";
import { useLang } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

const services: { icon: typeof Fence; titleKey: TranslationKey; descKey: TranslationKey }[] = [
  { icon: Fence, titleKey: "services.1.title", descKey: "services.1.desc" },
  { icon: MoveUpRight, titleKey: "services.2.title", descKey: "services.2.desc" },
  { icon: DoorOpen, titleKey: "services.3.title", descKey: "services.3.desc" },
  { icon: Home, titleKey: "services.4.title", descKey: "services.4.desc" },
  { icon: Construction, titleKey: "services.5.title", descKey: "services.5.desc" },
  
];

export function ServicesGrid() {
  const { t } = useLang();
  return (
    <div className="grid gap-px bg-border md:grid-cols-2 border border-border [&>*:last-child]:md:col-span-2">
      {services.map((s) => {
        const Icon = s.icon;
        return (
          <Link
            key={s.titleKey}
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
              {t(s.titleKey)}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{t(s.descKey)}</p>
          </Link>
        );
      })}
    </div>
  );
}
