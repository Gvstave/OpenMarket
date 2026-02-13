export default function MissionCard({ icon, title, description }) {
  return (
    <div className="flex gap-5">
      <div className="flex-none size-12 rounded-xl bg-primary-background/10 flex items-center justify-center text-primary-background">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <h4 className="text-xl font-bold text-primary mb-2">{title}</h4>
        <p className="text-secondary">{description}</p>
      </div>
    </div>
  );
}
