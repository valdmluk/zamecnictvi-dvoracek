import railing from "@/assets/work-railing.jpg";
import gate from "@/assets/work-gate.jpg";
import staircase from "@/assets/work-staircase.jpg";
import canopy from "@/assets/work-canopy.jpg";
import structure from "@/assets/work-structure.jpg";
import custom from "@/assets/work-custom.jpg";

const items = [
  { src: railing, title: "Moderní zábradlí", tag: "Rodinný dům · Klatovy", span: "md:col-span-2 md:row-span-2" },
  { src: gate, title: "Vjezdová vrata", tag: "Rodinný dům · Plzeň" },
  { src: staircase, title: "Ocelové schodiště", tag: "Interiér · Domažlice" },
  { src: canopy, title: "Přístřešek pro auto", tag: "Rodinný dům · Nýrsko" },
  { src: structure, title: "Ocelová hala", tag: "Průmysl · Sušice" },
  { src: custom, title: "Kovářská práce", tag: "Atypická zakázka" },
];

export function Gallery({ limit }: { limit?: number }) {
  const list = limit ? items.slice(0, limit) : items;

  return (
    <div className="grid gap-3 md:gap-4 md:grid-cols-3 md:auto-rows-[220px]">
      {list.map((item, i) => (
        <figure
          key={item.title}
          className={`group relative overflow-hidden bg-secondary ${i === 0 && !limit ? items[0].span : ""}`}
        >
          <img
            src={item.src}
            alt={item.title}
            loading="lazy"
            width={1024}
            height={1024}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90" />
          <figcaption className="absolute inset-x-0 bottom-0 p-5">
            <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{item.tag}</div>
            <div className="font-display text-xl font-bold uppercase tracking-wide mt-1">
              {item.title}
            </div>
          </figcaption>
          <div className="absolute top-4 right-4 h-2 w-2 bg-primary opacity-0 transition-opacity group-hover:opacity-100" />
        </figure>
      ))}
    </div>
  );
}
