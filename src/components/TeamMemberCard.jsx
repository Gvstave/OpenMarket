export default function TeamMemberCard({ member }) {
  const { name, title, description, image, imageAlt } = member;

  return (
    <div className="group">
      <div className="aspect-square w-full rounded-lg overflow-hidden mb-4 bg-border">
        <img
          alt={`Portrait of ${name}`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-alt={imageAlt}
          src={image}
        />
      </div>
      <h3 className="text-lg font-bold text-primary">{name}</h3>
      <p className="text-sm text-primary-background font-medium mb-2">{title}</p>
      <p className="text-sm text-secondary">{description}</p>
    </div>
  );
}
