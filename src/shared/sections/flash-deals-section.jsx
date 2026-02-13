import ProductCard from "../ui/product-card"
import FLASH_DEALS_LIST from "../../utils/flash_deals_list"

export default function FlashDealsSection() {
    return (
        <section className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-border">
            <div className="mb-10 flex flex-col md:flex-row md:deals-end justify-between gap-6">
                <div className="flex deals-center gap-6">
                    <div className="h-16 w-16 rounded-2xl bg-red-50 flex items-center justify-center text-red-600">
                        <span className="material-symbols-outlined text-3xl animate-pulse">bolt</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-bold text-primary">Flash Deals</h2>
                        <p className="text-secondary text-sm mt-1">Limited time offers, for the day.</p>
                    </div>
                </div>
                {/* <div className="flex deals-center gap-4 bg-background-light p-2 rounded-2xl border border-slate-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 pl-2">Ends in:</span>
                    <div className="flex gap-2 text-center">
                        {["04", "32", "15"].map((time, idx) => (
                            <div key={time + idx}>
                                <div className="bg-white rounded-lg px-3 py-1 shadow-sm">
                                    <span className="block text-xl font-bold text-primary">{time}</span>
                                </div>
                                {idx < 2 && <span className="py-1 text-xl font-bold text-slate-300">:</span>}
                            </div>
                        ))}
                    </div>
                </div> */}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {FLASH_DEALS_LIST.map((deal) => (
                    <ProductCard key={deal.title} {...deal} />
                ))}
            </div>
        </section>
    )
}
