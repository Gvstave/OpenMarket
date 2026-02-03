export default function ContactCard({ icon, title, children }) {
  return (
    <div className="flex gap-4 items-start">
      <div className="size-10 rounded-full bg-primary-background/10 flex items-center justify-center text-primary-background shrink-0">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
      <div>
        <p className="text-sm font-medium text-secondary">{title}</p>
        {children}
      </div>
    </div>
  );
}
