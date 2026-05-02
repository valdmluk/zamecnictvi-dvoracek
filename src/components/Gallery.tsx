import { useCallback, useEffect, useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import railing from "@/assets/work-railing.jpg";
import gate from "@/assets/work-gate.jpg";
import canopy from "@/assets/work-canopy.jpg";
import bridge from "@/assets/work-bridge.jpg";
import staircase from "@/assets/work-staircase.jpg";
import { useLang } from "@/i18n/LanguageProvider";
import type { TranslationKey } from "@/i18n/translations";

const items: { src: string; titleKey: TranslationKey; tagKey: TranslationKey; span?: string }[] = [
  { src: railing, titleKey: "gallery.item.1.title", tagKey: "gallery.item.1.tag", span: "md:col-span-2 md:row-span-2" },
  { src: gate, titleKey: "gallery.item.2.title", tagKey: "gallery.item.2.tag" },
  { src: canopy, titleKey: "gallery.item.3.title", tagKey: "gallery.item.3.tag" },
  { src: bridge, titleKey: "gallery.item.4.title", tagKey: "gallery.item.4.tag" },
  { src: staircase, titleKey: "gallery.item.5.title", tagKey: "gallery.item.5.tag" },
];

export function Gallery({ limit }: { limit?: number }) {
  const { t } = useLang();
  const list = limit ? items.slice(0, limit) : items;
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);
  const next = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i + 1) % list.length)),
    [list.length],
  );
  const prev = useCallback(
    () => setOpenIndex((i) => (i === null ? i : (i - 1 + list.length) % list.length)),
    [list.length],
  );

  useEffect(() => {
    if (openIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowRight") next();
      else if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [openIndex, close, next, prev]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  const active = openIndex !== null ? list[openIndex] : null;

  return (
    <>
      <div className="grid gap-3 md:gap-4 md:grid-cols-3 md:auto-rows-[220px]">
        {list.map((item, i) => (
          <figure
            key={item.titleKey}
            className={`group relative overflow-hidden bg-secondary cursor-zoom-in ${i === 0 && !limit ? items[0].span ?? "" : ""}`}
            onClick={() => setOpenIndex(i)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setOpenIndex(i);
              }
            }}
            aria-label={t(item.titleKey)}
          >
            <img
              src={item.src}
              alt={t(item.titleKey)}
              loading="lazy"
              width={1024}
              height={1024}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
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

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label={t(active.titleKey)}
          onClick={close}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              close();
            }}
            aria-label="Zavřít"
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 flex h-11 w-11 items-center justify-center bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
          >
            <X className="h-5 w-5" />
          </button>

          {list.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  prev();
                }}
                aria-label="Předchozí"
                className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  next();
                }}
                aria-label="Další"
                className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-10 flex h-12 w-12 items-center justify-center bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <figure
            className="relative max-h-[92vh] max-w-[94vw] flex flex-col items-center animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={active.src}
              src={active.src}
              alt={t(active.titleKey)}
              className="max-h-[85vh] max-w-[94vw] object-contain"
            />
            <figcaption className="mt-4 text-center">
              <div className="text-[10px] uppercase tracking-[0.25em] text-primary">
                {t(active.tagKey)}
              </div>
              <div className="font-display text-lg md:text-xl font-bold uppercase tracking-wide text-white mt-1">
                {t(active.titleKey)}
              </div>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
