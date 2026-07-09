import {
  Boxes,
  Cog,
  Cpu,
  Disc3,
  Gauge,
  PackageSearch,
  RotateCw,
  Settings2,
  ShieldEllipsis,
  Truck,
  Waves,
  Wrench,
} from "lucide-react";

const visualMap = {
  starter: { icon: Cog, label: "Starter Assembly" },
  alternator: { icon: RotateCw, label: "Alternator" },
  "starter-components": { icon: Wrench, label: "Starter Components" },
  "alternator-components": { icon: Cpu, label: "Alternator Components" },
  bushing: { icon: Disc3, label: "Bushings" },
  drive: { icon: Gauge, label: "Starter Drive" },
  lever: { icon: ShieldEllipsis, label: "Shift Lever" },
  regulator: { icon: Settings2, label: "Voltage Regulator" },
  brushes: { icon: Boxes, label: "Brushes" },
  diodes: { icon: Cpu, label: "Diodes & Insulators" },
  inventory: { icon: PackageSearch, label: "Excess Inventory" },
  equipment: { icon: Truck, label: "Equipment" },
  marine: { icon: Waves, label: "Marine" },
} as const;

export default function ProductVisual({
  visual,
  title,
  compact = false,
}: {
  visual: string;
  title: string;
  compact?: boolean;
}) {
  const config = visualMap[visual as keyof typeof visualMap] ?? visualMap.inventory;
  const Icon = config.icon;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-xl bg-[linear-gradient(145deg,#0a2340_0%,#123a67_58%,#0c1c31_100%)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(242,194,48,0.25),transparent_28%),linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:auto,26px_26px,26px_26px]" />
      <div className="relative flex h-full flex-col justify-between p-4 text-white md:p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="rounded-2xl border border-white/15 bg-white/10 p-3 shadow-lg backdrop-blur-sm">
            <Icon className={compact ? "h-8 w-8 text-[var(--color-accent)]" : "h-10 w-10 text-[var(--color-accent)]"} />
          </div>
          <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90">
            EGI Product
          </span>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-accent)]">{config.label}</p>
          <h3 className={compact ? "mt-2 text-lg font-bold leading-tight" : "mt-2 text-2xl font-bold leading-tight"}>{title}</h3>
          <div className="mt-4 flex gap-2">
            <span className="h-2 w-10 rounded-full bg-[var(--color-accent)]/90" />
            <span className="h-2 w-2 rounded-full bg-white/65" />
            <span className="h-2 w-2 rounded-full bg-white/35" />
          </div>
        </div>
      </div>
    </div>
  );
}
