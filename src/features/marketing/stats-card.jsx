export default function StatsCard({ value, label }) {
  return (
    <div>
      <div className="text-5xl font-black text-slate-900 mb-2">{value}</div>
      <div className="text-sm text-slate-500 font-bold uppercase tracking-widest">{label}</div>
    </div>
  );
}
