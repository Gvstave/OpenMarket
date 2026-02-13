import PriceRange from "../../shared/ui/price-range"

export default function Aside() {
    return (
        <aside className="sticky top-22 w-60 space-y-8">
            <div className="hidden lg:block space-y-8">
                <div>
                    <h3 className="font-bold text-primary mb-4 flex items-center gap-2">
                        Categories
                    </h3>
                    <ul className="space-y-2 text-sm text-slate-600">
                        <li><a className="text-primary-background font-medium" href="#">Keyboards (532)</a></li>
                        <li><a className="hover:text-primary-background" href="#">Mice &amp; Pointers (124)</a></li>
                        <li><a className="hover:text-primary-background" href="#">Desk Mats (45)</a></li>
                    </ul>
                </div>
                <PriceRange />
                <div className="pt-6 border-t border-border">
                    <h3 className="font-bold text-primary mb-4">Brand</h3>
                    <div className="space-y-3">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="size-4 rounded border-slate-300 text-primary-background focus:ring-primary-background bg-slate-50" type="checkbox" />
                            <span className="text-sm text-slate-600 group-hover:text-primary-background">Logitech (140)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input checked="" className="size-4 rounded border-slate-300 text-primary-background focus:ring-primary-background bg-slate-50" type="checkbox" />
                            <span className="text-sm text-slate-600 group-hover:text-primary-background">Keychron (85)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="size-4 rounded border-slate-300 text-primary-background focus:ring-primary-background bg-slate-50" type="checkbox" />
                            <span className="text-sm text-slate-600 group-hover:text-primary-background">Razer (64)</span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input className="size-4 rounded border-slate-300 text-primary-background focus:ring-primary-background bg-slate-50" type="checkbox" />
                            <span className="text-sm text-slate-600 group-hover:text-primary-background">Corsair (42)</span>
                        </label>
                    </div>
                </div>
            </div>
        </aside>
    )
}
