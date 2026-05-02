import railing from "@/assets/work-railing.jpg";
import gate from "@/assets/work-gate.jpg";
import canopy from "@/assets/work-canopy.jpg";
import bridge from "@/assets/work-bridge.jpg";
import { useLang } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

const items: { src: string; titleKey: TranslationKey; tagKey: TranslationKey; span?: string }[] = [
  { src: railing, titleKey: "gallery.item.1.title", tagKey: "gallery.item.1.tag", span: "md:col-span-2 md:row-span-2" },
  { src: gate, titleKey: "gallery.item.2.title", tagKey: "gallery.item.2.tag" },
  { src: canopy, titleKey: "gallery.item.3.title", tagKey: "gallery.item.3.tag" },
  { src: bridge, titleKey: "gallery.item.4.title", tagKey: "gallery.item.4.tag" },
];

export function Gallery({ limit }: { limit?: number }) {
  const { t } = useLang();
  const list = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid gap-3 md:gap-4 md:grid-cols-3 md:auto-rows-[220px]">
      {list.map((item, i) => (
        <figure
          key={item.titleKey}
          className={`group relative overflow-hidden bg-secondary ${i === 0 && !limit ? items[0].span ?? "" : ""}`}
        >
          <img
            src={item.src}
            alt={t(item.titleKey)}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{t(item.tagKey)}</div>
            <div className="font-display text-xl font-bold uppercase tracking-wide mt-1">
              {t(item.titleKey)}
            </div>
          </figcaption>
          <div className="absolute top-4 right-4 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </figure>
      ))}
    </div>
  );
}
