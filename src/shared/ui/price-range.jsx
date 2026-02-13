import { useState } from "react";

const PriceInput = ({ id, label, min, max, placeholder, value, onChange, inputClassName }) => (
  <div className="flex items-center justify-between w-full px-2 py-2 bg-border border-border rounded-lg">
    <label htmlFor={id} className="text-secondary text-[12px] mr-2">
      {label}
    </label>
    <input
      name={id}
      type="number"
      min={min}
      max={max}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className={`${inputClassName} w-full border-none outline-none text-xs font-medium focus:ring-primary focus:border-primary no-spinner`}
    />
  </div>
);

const PriceRange = () => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(500);
  console.log(max)

  return (
    <div className="pt-6 border-t border-border">
      <h3 className="font-bold text-primary mb-4">Price Range</h3>
      <div className="flex items-center justify-between gap-3">
        <PriceInput
          id="min"
          label="Min."
          min={0}
          max={500}
          placeholder="0"
          value={min}
          onChange={(e) => setMin(Number(e.target.value) || 0)}
        />
        <span className="text-slate-400 font-bold">-</span>
        <PriceInput
          id="max"
          label="Max."
          min={1}
          max={500}
          placeholder="500"
          value={max}
          onChange={(e) => setMax(Number(e.target.value) || 0)}
        />
      </div>
    </div>
  );
};

export default PriceRange;
