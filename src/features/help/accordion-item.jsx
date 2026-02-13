export default function AccordionItem({ question, answer }) {
  return (
    <details className="group py-4">
      <summary className="flex cursor-pointer items-center justify-between font-medium text-primary group-open:text-primary">
        <span>{question}</span>
        <span className="transition group-open:rotate-180">
          <span className="material-symbols-outlined">expand_more</span>
        </span>
      </summary>
      <p className="group-open:animate-fadeIn mt-3 text-secondary text-sm leading-relaxed">
        {answer}
      </p>
    </details>
  );
}
