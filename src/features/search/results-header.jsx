import IconButton from "../../shared/ui/icon-button";

export default function ResultsHeader({results, count}) {
    return (
        <div className="bg-white p-4 rounded-xl border border-border shadow-sm mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-primary leading-tight">Results for '{results}'</h1>
                    <p className="text-slate-500 text-sm mt-1">Showing {count} results</p>
                </div>
                <div className="flex items-center gap-3">
                    <label className="hidden sm:flex items-center gap-2">
                        <span className="text-sm font-medium text-slate-700 whitespace-nowrap">Sort by:</span>
                        <div className="relative">
                            <select className="appearance-none bg-slate-50 border border-border rounded-lg py-2 pl-3 pr-8 text-sm focus:ring-primary-background focus:border-primary-background cursor-pointer text-slate-700">
                                <option>Best Match</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                                <option>Newest Arrivals</option>
                            </select>
                            <span className="material-symbols-outlined absolute right-2 top-2 text-slate-400 pointer-events-none text-[20px]">expand_more</span>
                        </div>
                    </label>
                    <div className="flex bg-background-light p-1 rounded-lg">
                        <IconButton icon={'grid_view'} />
                        <IconButton icon={'view_list'} />
                    </div>
                </div>
            </div>
        </div>
    )
}
