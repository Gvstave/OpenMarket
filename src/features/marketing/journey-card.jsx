export default function JourneyCard({ number, year, title, description, image }) {
  return (
    <div className="relative group">
      <div className="aspect-16/10 rounded-2xl overflow-hidden mb-8 border border-border shadow-lg">
        <img
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={image}
        />
      </div>
      <div className="flex gap-6">
        <div className="text-6xl font-black text-border tabular-nums">{number}</div>
        <div>
          <h4 className="text-2xl font-bold text-primary mb-4">{title} ({year})</h4>
          <p className="text-secondary leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
