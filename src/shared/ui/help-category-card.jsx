export default function HelpCategoryCard({ icon, title, description }) {
  return (
    <div className="group bg-white p-8 rounded-lg border border-border hover:border-primary-background transition-all hover:shadow-xl hover:shadow-border/40 cursor-pointer">
      <div className="size-12 rounded-lg bg-primary-background/10 text-primary-background flex items-center justify-center mb-6 group-hover:bg-primary-background group-hover:text-white transition-colors">
        <span className="material-symbols-outlined text-3xl">{icon}</span>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondary leading-relaxed text-sm">{description}</p>
    </div>
  );
}
