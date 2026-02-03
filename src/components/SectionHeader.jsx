export default function SectionHeader({ subtitle, title }) {
  return (
    <div className="text-center mb-16">
      {subtitle && (
        <h2 className={`text-sm font-black text-primary-background uppercase tracking-[0.2em] mb-6`}>
          {subtitle}
        </h2>
      )}
      <h2 className={"text-4xl md:text-5xl font-black text-primary mb-4"}>
        {title}
      </h2>
    </div>
  );
}
