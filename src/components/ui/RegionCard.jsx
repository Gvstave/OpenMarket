export default function RegionCard({
  title,
  description,
  icon,
  selected,
  onSelect,
}) {
  return (
    <div
      onClick={onSelect}
      className={`flex flex-col gap-3 p-4 rounded-xl cursor-pointer border-2 transition-all duration-200
        ${
          selected
            ? "border-primary-background bg-primary-background/5"
            : "border-border hover:border-primary-background/50 hover:bg-secondary/5"
        }
      `}
    >
      <div className="flex justify-between items-start">
        <span
          className={`material-symbols-outlined text-2xl transition-colors
            ${selected ? "text-primary-background fill-1" : "text-secondary"}
          `}
        >
          {icon}
        </span>

        <div
          className={`size-5 rounded-full transition-all
            ${
              selected
                ? "border-4 border-primary-background bg-white"
                : "border border-secondary/5"
            }
          `}
        />
      </div>

      <div>
        <p className="font-bold text-sm">{title}</p>
        <p className="text-xs text-slate-500">{description}</p>
      </div>
    </div>
  );
}
