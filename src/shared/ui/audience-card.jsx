export default function AudienceCard({ title, selected, onSelect }) {
  return (
    <div
      onClick={onSelect}
      className={`flex-1 w-full sm:w-auto items-center overflow-hidden h-12 max-sm:py-4 flex flex-row rounded-xl cursor-pointer border-2 transition-all duration-200
        ${
          selected
            ? "border-primary-background bg-primary-background/5"
            : "border-border hover:border-primary-background/50 hover:bg-secondary/5"
        }
      `}
    >
      <div className="flex-1 flex justify-between items-center px-4">
        <div className="w-2 h-2"></div>
        <p className="font-bold text-sm">{title}</p>
        <div
          className={`size-5 rounded-full transition-all ${
            selected
              ? "border-4 border-primary-background bg-white"
              : "border border-secondary/5"
          }
          `}
        />
      </div>
    </div>
  );
}
