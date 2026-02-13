import MakerCard from "../ui/maker-card";
import TOP_MAKERS from "../../utils/top_makers";

export default function TopMakersSection() {
    return (
        <section className="py-4">
            <div className="flex items-center gap-2 mb-6">
                <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-background/10 text-primary-background">
                    <span className="material-symbols-outlined">storefront</span>
                </span>
                <h2 className="text-2xl font-bold text-slate-900">Meet our Top Makers</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {TOP_MAKERS.map((maker) => (
                    <MakerCard
                        key={maker.id}
                        id={maker.id}
                        name={maker.name}
                        feedback={maker.feedback}
                        avatar={maker.avatar}
                        products={maker.products}
                    />
                ))}
            </div>
        </section>
    )
}
