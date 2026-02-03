import AccordionItem from "../AccordionItem";

export default function FAQAccordion({ items }) {
  return (
    <div className="flex flex-col divide-y divide-border">
      {items.map((item) => (
        <AccordionItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </div>
  );
}
