export default function Home() {
    return(
        
        <div className="bg-background-light font-display text-slate-900 antialiased overflow-x-hidden">
            <div className="relative flex min-h-screen flex-col">
                <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
                    <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
                        <div className="flex items-center gap-4 shrink-0">
                            <a className="flex items-center gap-2 group" href="#">
                                <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                                    <span className="material-symbols-outlined">shopping_bag</span>
                                </div>
                                <span className="text-lg font-bold tracking-tight text-slate-900 group-hover:text-primary transition-colors">Marketplace</span>
                            </a>
                        </div>
                        <div className="hidden md:flex flex-1 max-w-2xl px-4">
                            <div className="relative flex w-full items-center">
                                <div className="absolute left-3 flex items-center justify-center text-slate-400">
                                    <span className="material-symbols-outlined">search</span>
                                </div>
                                <input className="h-10 w-full rounded-lg border-none bg-slate-100 pl-10 pr-4 text-sm text-slate-900 placeholder-slate-500 focus:ring-2 focus:ring-primary focus:bg-white transition-all" placeholder="Search for products, brands, or categories..." type="text" />
                                <button className="absolute right-1.5 top-1.5 h-7 rounded bg-primary px-3 text-xs font-medium text-white hover:bg-blue-600">
                                    Search
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                            <nav className="hidden lg:flex items-center gap-6 mr-4">
                                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Deals</a>
                                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Sell</a>
                                <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Help</a>
                            </nav>
                            <div className="flex items-center gap-2">
                                <button className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
                                    <span className="material-symbols-outlined">favorite</span>
                                </button>
                                <button className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors text-slate-700">
                                    <span className="material-symbols-outlined">shopping_cart</span>
                                    <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                        <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                                    </span>
                                </button>
                                <button className="ml-2 hidden sm:flex h-10 items-center justify-center rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm hover:bg-blue-600 transition-colors">
                                    Sign In
                                </button>
                                <div className="sm:hidden h-8 w-8 rounded-full bg-slate-200 bg-cover bg-center" data-alt="User avatar placeholder" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsUwtLhSRk8rhqMz4BmWOBGvDug3_fJGxtB6O9GUm8eeezwr3o70XJ2pcqgUKX9y0drT8oDiGczmIGwjrjra4mC1HzhjwoVksHLeXi_iVhwISycXPplluG7Qbft4Gw76JSw43DR-iuawcScSbV_GFxHtzBm0NPqLp_GjtMLtDjUaBAkKec5-asH0ACLF-7prVtJyqh-ScarpsSqLwJzR2onJ0guv9-YFDrzMA259eHwVor1_KxHDV6A8zZ6iZ3eHb1B2y5P1ZSBRA')"}}></div>
                            </div>
                        </div>
                    </div>
                    <div className="md:hidden border-t border-slate-200 p-2">
                        <input className="h-10 w-full rounded-lg border-none bg-slate-100 px-4 text-sm" placeholder="Search..." type="text" />
                    </div>
                </header>
                <main className="flex-1 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-8">
                    <section className="relative w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg">
                        <div className="absolute inset-0 z-0">
                            <div className="h-full w-full bg-cover bg-center transition-transform duration-700 hover:scale-105" data-alt="Abstract colorful shopping bags and gifts background" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXBv9tJ1qOu01pP9gGTkZWYpIqSb8lwmgUo-Hz5L6cPIlZs5JQaNI2pGoopVn4F7xwcztgPoCBd-OdgFR_jmv42vj_mlgjWjSGav81ShPq5KAGr8xNOapPfwabzjpkEMt4XpkVnJRXpmHDTdUNRXlPNdJ5ndnpPvyrF14bGAQBA04DZZRF-ATGtEiKwsLSzKwgQ9OXnfThyxEBL7db6XtSF-0wYvF-QoeVPO7oVhKCwOY54xUv4wdE5lmJ6E5QNDtZGz2ccj2l-f4')"}}>
                            </div>
                            <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent"></div>
                        </div>
                        <div className="relative z-10 flex min-h-100 flex-col items-start justify-center p-8 md:p-12 lg:p-16">
                            <span className="mb-4 inline-flex items-center rounded-full bg-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wide text-blue-200 backdrop-blur-sm border border-primary/30">
                                Limited Time Offer
                            </span>
                            <h1 className="max-w-2xl text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl mb-4">
                                Summer Sale: <br /><span className="text-primary">Up to 50% Off</span> Top Tech
                            </h1>
                            <p className="max-w-lg text-lg text-slate-200 mb-8">
                                Discover the best deals from top-rated sellers this season. Free shipping on all electronics over $50.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="h-12 rounded-lg bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-blue-600 hover:shadow-primary/50 transition-all">
                                    Shop Now
                                </button>
                                <button className="h-12 rounded-lg bg-white/10 px-8 text-base font-bold text-white backdrop-blur-md hover:bg-white/20 transition-all">
                                    View Categories
                                </button>
                            </div>
                        </div>
                    </section>
                    <section className="overflow-x-auto pb-4 scrollbar-hide">
                        <div className="flex gap-4 min-w-max">
                            <button className="group flex h-10 items-center gap-2 rounded-full bg-white border border-slate-200 px-4 pr-6 transition-all hover:border-primary hover:shadow-md">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 text-primary group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">memory</span>
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Electronics</span>
                            </button>
                            <button className="group flex h-10 items-center gap-2 rounded-full bg-white border border-slate-200 px-4 pr-6 transition-all hover:border-primary hover:shadow-md">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-50 text-purple-600 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">styler</span>
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Fashion</span>
                            </button>
                            <button className="group flex h-10 items-center gap-2 rounded-full bg-white border border-slate-200 px-4 pr-6 transition-all hover:border-primary hover:shadow-md">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-50 text-green-600 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">chair</span>
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Home &amp; Garden</span>
                            </button>
                            <button className="group flex h-10 items-center gap-2 rounded-full bg-white border border-slate-200 px-4 pr-6 transition-all hover:border-primary hover:shadow-md">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-50 text-orange-600 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">directions_car</span>
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Motors</span>
                            </button>
                            <button className="group flex h-10 items-center gap-2 rounded-full bg-white border border-slate-200 px-4 pr-6 transition-all hover:border-primary hover:shadow-md">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-yellow-50 text-yellow-600 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">hotel_class</span>
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Collectibles</span>
                            </button>
                            <button className="group flex h-10 items-center gap-2 rounded-full bg-white border border-slate-200 px-4 pr-6 transition-all hover:border-primary hover:shadow-md">
                                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-red-50 text-red-600 group-hover:scale-110 transition-transform">
                                    <span className="material-symbols-outlined text-[18px]">sports_soccer</span>
                                </span>
                                <span className="text-sm font-medium text-slate-700 group-hover:text-primary">Sports</span>
                            </button>
                        </div>
                    </section>
                    <section className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-900/5">
                        <div className="mb-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
                            <div>
                                <div className="flex items-center gap-2 text-red-500 mb-1">
                                    <span className="material-symbols-outlined text-xl">timer</span>
                                    <span className="text-sm font-bold uppercase tracking-wider">Ending Soon</span>
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900">Deals of the Day</h2>
                            </div>
                            <div className="flex gap-2 text-center">
                                <div className="bg-slate-100 rounded p-2 min-w-14">
                                    <span className="block text-lg font-bold text-slate-900">04</span>
                                    <span className="block text-xs text-slate-500">Hrs</span>
                                </div>
                                <div className="py-2 text-lg font-bold text-slate-400">:</div>
                                <div className="bg-slate-100 rounded p-2 min-w-14">
                                    <span className="block text-lg font-bold text-slate-900">32</span>
                                    <span className="block text-xs text-slate-500">Mins</span>
                                </div>
                                <div className="py-2 text-lg font-bold text-slate-400">:</div>
                                <div className="bg-slate-100 rounded p-2 min-w-14">
                                    <span className="block text-lg font-bold text-slate-900">15</span>
                                    <span className="block text-xs text-slate-500">Secs</span>
                                </div>
                            </div>
                            <a className="hidden md:block text-sm font-bold text-primary hover:underline" href="#">View All Deals -&gt;</a>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            <div className="group relative flex flex-col gap-3 rounded-lg bg-white">
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                                    <div className="absolute top-2 left-2 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">-40%</div>
                                    <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Modern smartwatch with black band" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpCiNuohepPLFUeMYK3ZXkdx0_OgPeB_RJNEwg_EG6LGRAJ4oYylRRgHCPiQymlSW8C-x457fiK2kKPhpsxj6aX3ViAxrQ70FTIR4me83JtBBhYfQxIYWQZoCfs3pNYZA2rAlj5fkUvdCu0j8BK1M3DhVnD1dmL3tw3rulyycbZBC3FrFvN7N-kDUaepODIbtjObJswQmVdTccnSJpFZ017xFaCvEVYotOSHtwNmm9_Og8baFup_fgoNsekHF665SPSSxB48bMD6o" />
                                    <button className="absolute bottom-2 right-2 flex h-8 w-8 translate-y-2 opacity-0 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">TechGadgets Inc.</p>
                                    <h3 className="truncate text-base font-medium text-slate-900 group-hover:text-primary">Smart Watch Series 7</h3>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-lg font-bold text-slate-900">$249.00</span>
                                        <span className="text-sm text-slate-400 line-through">$415.00</span>
                                    </div>
                                    <div className="mt-2 h-1.5 w-full rounded-full bg-slate-100">
                                        <div className="h-1.5 w-3/4 rounded-full bg-red-500"></div>
                                    </div>
                                    <p className="mt-1 text-xs text-red-500 font-medium">12 left in stock</p>
                                </div>
                            </div>
                            <div className="group relative flex flex-col gap-3 rounded-lg bg-white">
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                                    <div className="absolute top-2 left-2 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">-25%</div>
                                    <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Over-ear wireless headphones silver" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBT1NptYEiJneME070PbMKasD2bKLnabXEgVS4nTUTH6UV7Cs9G1umhngIb7ZwHdIpsk4BklZGRGJNFlQ8TSUGi_ylJY2bp6XB7g9YQOKEM76-UC7DngE6NKdxVygs5Jxo-9_Pez0OYHxQNjv2Xo9h-NG-GQZKS5b8jTq0i3QOwJwG6ysiJnqMuo7YdlW4ybyEbbJm7OTvKXtT0M5oGE5Wb2UHioFnqCSGsPxyV9x4QSz9Agp4h0r6I4Jw6MMTWaoSXpqZLQSGbatE" />
                                    <button className="absolute bottom-2 right-2 flex h-8 w-8 translate-y-2 opacity-0 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">AudioWorld</p>
                                    <h3 className="truncate text-base font-medium text-slate-900 group-hover:text-primary">Premium Noise Cancelling</h3>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-lg font-bold text-slate-900">$199.99</span>
                                        <span className="text-sm text-slate-400 line-through">$265.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative flex flex-col gap-3 rounded-lg bg-white">
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                                    <div className="absolute top-2 left-2 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">-15%</div>
                                    <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="White modern wristwatch product shot" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhQUq-Jx7t3auy-qltXangskTlDY0c0IkpYNwOGHkm1yUec1_KPdoyG3seEMBo98XSZaaNRwqW5aFH90Mhlq_8wewyFEah5bR2xVq4mzm0kT1CcZoaE8lxyBH6B8a4C_TK2x0QmaGh-v5QZaS6kgTkoHyQtXxsPuwqTmuEaeq-kqCFMivDQEIiZZVOXP6S2mudmMAKRvFdXAk0ocm0tHpVOb2C-iOwYthnWML6gvdYp5BsLIyIo43lUInoBgwHITsSPzRIUWb6_oE" />
                                    <button className="absolute bottom-2 right-2 flex h-8 w-8 translate-y-2 opacity-0 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Timeless Pieces</p>
                                    <h3 className="truncate text-base font-medium text-slate-900 group-hover:text-primary">Minimalist Analog Watch</h3>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-lg font-bold text-slate-900">$85.00</span>
                                        <span className="text-sm text-slate-400 line-through">$100.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="group relative flex flex-col gap-3 rounded-lg bg-white">
                                <div className="relative aspect-square w-full overflow-hidden rounded-lg bg-slate-100">
                                    <div className="absolute top-2 left-2 z-10 rounded bg-red-500 px-2 py-1 text-xs font-bold text-white">-30%</div>
                                    <img className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" data-alt="Cosmetic cream jar packaging" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdut3gIpIDnjN99c9YmSPXU_frOB5nee9AiiVUSMbDL1R4V6bl-EY6RkVxv43t0NKB7uc1fGRLWu1pMtaBFldtVPjv5Xwdy6P2J9ex_Yad7WnJZ3MCSzNr2s5I5XdmdfoQSlYBfcYaPFQBbZ7R48WXBpnlbweedx61X5t9O8ndTouUnhB5PfV0kYqhf6gJ3znpQE4wvn4nueg5S6xBx-1onnntZ_DcF8PUL57d9tSIMxgTBYbehxON6SOnycWvN3v27ezzEnUekUs" />
                                    <button className="absolute bottom-2 right-2 flex h-8 w-8 translate-y-2 opacity-0 items-center justify-center rounded-full bg-white text-slate-900 shadow-md transition-all group-hover:translate-y-0 group-hover:opacity-100 hover:bg-primary hover:text-white">
                                        <span className="material-symbols-outlined text-[20px]">add_shopping_cart</span>
                                    </button>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-500">Beauty Glow</p>
                                    <h3 className="truncate text-base font-medium text-slate-900 group-hover:text-primary">Hydrating Night Cream</h3>
                                    <div className="flex items-baseline gap-2 mt-1">
                                        <span className="text-lg font-bold text-slate-900">$34.99</span>
                                        <span className="text-sm text-slate-400 line-through">$49.99</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="flex items-center justify-between pb-4 pt-2">
                            <h2 className="text-2xl font-bold tracking-tight text-slate-900">Trending Now</h2>
                            <a className="text-sm font-bold text-primary hover:underline" href="#">See all</a>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                            <div className="group flex flex-col gap-3 pb-3 rounded-lg p-2 transition-colors hover:bg-white hover:shadow-sm">
                                <div className="w-full aspect-square overflow-hidden rounded-lg bg-slate-100">
                                    <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Red sport sneaker shoe" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxgKy5P5ToplD4O3b1be9M5YIufqimuU7RBKb4hLcm-fsONYCGaQA-w2J6RMhppxqlgQ7HAL4dAUIDgxm1x1tKX1UQq5ljpFvMKVlqneGZJ6FJhdlmTg6wufHO2LN8HKoG05aizRWA5r0L6d_Hk6x76xSByBNcZEYKo5X9lGgjk38_jOMAh4csOJ7-YlulZo27bA9GCguv1SCPYGOaykuN02sUV0pih6aalWaquze-7em4LdeM8WFwzXsGw7l9Lu9rEgUGga61cj0" />
                                </div>
                                <div>
                                    <p className="truncate text-base font-medium text-slate-900">Nike Air Max Red</p>
                                    <div className="flex items-center gap-1 text-yellow-400 text-xs my-1">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star_half</span>
                                        <span className="text-slate-400 ml-1">(420)</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">$120.00</p>
                                    <p className="text-xs text-green-600 font-medium">Free Shipping</p>
                                </div>
                            </div>
                            <div className="group flex flex-col gap-3 pb-3 rounded-lg p-2 transition-colors hover:bg-white hover:shadow-sm">
                                <div className="w-full aspect-square overflow-hidden rounded-lg bg-slate-100">
                                    <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Instant film camera product" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQTDBGMlyLvU5_6rk1O0RhXE0qxYJU3JUnAkOTbTsBsN3YFjNSHXCrNvlPv_RubmUkUA36n_DyVamo-XUcs1QTt34WXdYM5xzRoRRG7evPtgnZoLTqe7EhilLHOoynEqDUHOY2su127pd-triFb-YuCoxb87k33C_6Qr9mAFiOcY93dpwa2E1mZtChgihWplqjB8Y2hgy7-0czPCma4cvGEEgTInNnBsJQohSm39b3miAxVIraSBSJnQHhjXEtNugloJfD6oadbkM" />
                                </div>
                                <div>
                                    <p className="truncate text-base font-medium text-slate-900">Polaroid Instant Cam</p>
                                    <div className="flex items-center gap-1 text-yellow-400 text-xs my-1">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px]">star</span>
                                        <span className="text-slate-400 ml-1">(85)</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">$99.99</p>
                                    <p className="text-xs text-slate-500">Best Seller</p>
                                </div>
                            </div>
                            <div className="group flex flex-col gap-3 pb-3 rounded-lg p-2 transition-colors hover:bg-white hover:shadow-sm">
                                <div className="w-full aspect-square overflow-hidden rounded-lg bg-slate-100">
                                    <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Leather bag fashion accessory" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSaicAmdl_bkx514eOQ1kQ4ep_6ZdFuSxdIWZYUfZ0SG5pHJLk2B01hbBoOPvBS6FilCnyEli_AyG-wcY5WmPCA24QhshJKaWDfUrojr342eP_hrxh9IxZFHLhuVGKxiY0EwMqrwy3rdgG_DehVl5qNgPG4Xbu6vdOChoqGDyLg5F4ZNelpOa7fkwKe3-7PM-rIBduxk7CNR-TANOfzHBa_2Z58UpkLZGR2w7s7q4vR350VpXNEj3FCF7K0YddJ--awLMF5dyFGJg" />
                                </div>
                                <div>
                                    <p className="truncate text-base font-medium text-slate-900">Vintage Leather Bag</p>
                                    <div className="flex items-center gap-1 text-yellow-400 text-xs my-1">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="text-slate-400 ml-1">(12)</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">$145.00</p>
                                    <p className="text-xs text-slate-500">Handmade</p>
                                </div>
                            </div>
                            <div className="group flex flex-col gap-3 pb-3 rounded-lg p-2 transition-colors hover:bg-white hover:shadow-sm">
                                <div className="w-full aspect-square overflow-hidden rounded-lg bg-slate-100">
                                    <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Modern gaming headphones with microphone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFB20AxXUYpmBTIOgIsZxK47xOCXcn_fWQC5saAPgOYEqx35JfCeBGluiBIAe0c6LXAb1gU8XrQrDgpbxNqXebxaL7vXahaFaUNv0pdKluGTPk9DJRBjEgsvfZI_qEsEpv1ZvLP3KV5V5_9a2FNWavv10R5Xw9aMtbhpdBCco5X5jPAxjR7QKv8fRg6iHjDrLO_CIgVEohZazWiSnM5nJB2FqsTuDoWL4Ypq_6INoNwpfVlXP2suOGuINWnOCj_j7w48al1mouuiM" />
                                </div>
                                <div>
                                    <p className="truncate text-base font-medium text-slate-900">Pro Gaming Headset</p>
                                    <div className="flex items-center gap-1 text-yellow-400 text-xs my-1">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star_half</span>
                                        <span className="material-symbols-outlined text-[14px]">star</span>
                                        <span className="text-slate-400 ml-1">(2.1k)</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">$59.95</p>
                                    <p className="text-xs text-primary font-medium">-20% Off</p>
                                </div>
                            </div>
                            <div className="group flex flex-col gap-3 pb-3 rounded-lg p-2 transition-colors hover:bg-white hover:shadow-sm">
                                <div className="w-full aspect-square overflow-hidden rounded-lg bg-slate-100">
                                    <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" data-alt="Round black sunglasses" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJ1nURII-n83tmnhU-HkKRKaN9D3TsCbLpGGoefOd_JmeuIN2eTF577GOpziWqnyxmo4B_hZvqnVhCc-gsLBj9vUgYXtGINV_-WM2s5btF9l82yIRRF8LtkVe2oAXMq7AALONx8WFoSaKrzKAphRS3x58u8HkyUDFmcjYkuWt_FwZpwI8CBwEsVt84c46ePepddv2EndFwQOjCG0QSVzjWAez0_wrIJONQhXUgpJHBxHNZjZiBA3BEAVpQViJ3WK9-hjCRr1-q_nk" />
                                </div>
                                <div>
                                    <p className="truncate text-base font-medium text-slate-900">Classic Sunglasses</p>
                                    <div className="flex items-center gap-1 text-yellow-400 text-xs my-1">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="text-slate-400 ml-1">(300)</span>
                                    </div>
                                    <p className="text-sm font-bold text-slate-900">$25.00</p>
                                    <p className="text-xs text-slate-500">New Arrival</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="py-4">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-primary">
                                <span className="material-symbols-outlined">storefront</span>
                            </span>
                            <h2 className="text-2xl font-bold text-slate-900">Meet our Top Makers</h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Seller Logo Urban Outfitters" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDJ48FVDWnuQCzCLNSn7tL-5VsrzIN31-o642PXy9tznXxc0L73SOvBKcHQWaDqIA5vZCsBUj2GgmWplfYV1KM0MeQYs34c-PK2AqW3wlDsNnMSPInVSXTaz8MJHcdU2Izqh5WlkAVb5aAkikPQieJzw_xtQebWl-Fn_W52yPrQGbGP3SxK8oiu9qBLyyYFX1iuZ4ncuWyHUIWyS1n1mtwQuMksbxwDIQQSNtQoiHrtKTlKSiAlTh90jRVP4x3OZSX8X7sQFeBJZUs')"}}></div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-slate-900 truncate">Urban Threads</h3>
                                        <p className="text-xs text-slate-500">98% Positive Feedback</p>
                                    </div>
                                    <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200">Visit</button>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Cotton t-shirt close up" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB_HAQaRy2jvqIvfrdRsu3fBVghnzTOG3PH94KjoBNdiukDMIDnCeaxu__0TuozxEL_hFFxHfXdtHyWyGoSPK6UPKthSW7fmUwoFTgTt-ttdefxr5PrRxo1ZCe8vLdoZAmKbU5Qd6qo2n1qb1Xwi2CgX5nKjnD1qs9HW0TjafkgBtpfNJUlFSU4MGtEYV0PIMSwYEzpzubkhirhTnVIASbgBrMD-C9D_SNjqN0sQm2lOceGwt_e1hxJaQ8OaPX3gbTwQawI9ucDOaw')"}}></div>
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Denim jeans texture" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAfSvvZcVaZOTVnmCMOpeDNWdhgynsoxeWfDbDUZTeI7CI4oVHCMozHQS8fzolfYnr9RIlbBodaO7Ae_su_CmemleuwV514n7g3CIuLOK1pNslMOIEl8BMryL6qHJWPHKcP5d002hFK88t2wM36VAqUTjtTL2amVO6tb0j3lEAlOypXtXN0Kzpn1KSv6XINE6T97V1hWn_Ld74yvt_CoY6iCvJn5JyOxgvaORBk09hsD6qGt3_2Y2Oqim5ifZx4HNi3-LAnzvyajUY')"}}></div>
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Checkered shirt pattern" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDkvVCTze-x4enJZHoQmbjSgrn0fQoEx0b2nEnwPGynE_iXu0RVggqWaKibiAVzPi78lDD_zlGRsmTQ665RzBOC_0i30d2vJPenVoJO-R6r9siigruCAmdgovr7-_8ZRV-SIu_HzozKFc8Pbz3kyF12JsvHgMmtnm6_-D9vHlp2M2-m3E5d42BWfqQpXVhpLGpNx_MHuMYTto6u9hiPsRu6etDMiipiLuIQcJTe0TLKjChalkoS_QpISq0gySCmpKvtfbq71043Mjk')"}}></div>
                                </div>
                            </div>
                            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Seller Logo Tech Haven" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAoswkUkz5Nl_-KSjVylz-wTBIlXa82uGEhEz3gPql5aEahjCpMeKTAxvKjG5jE7jCQ_sWbWQy_fa7kLRLQ7vONVH44mvCPHjeR3YRrSY1jWTwUbr097lp8tHvEElRyI00HYfo15p8zo4m1P_vUHqFLKHlsmw-N2KsnQZZMMInHgybXZohn_CiXIR1LOnWsehBkg6dIt7U_A5H0cGUkE4gFAu-oXas8etXFQgTpWcgDxjKLvph1j9gL-FCKeEzO9dnOaTa-loTP4qo')"}}></div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-slate-900 truncate">Tech Haven</h3>
                                        <p className="text-xs text-slate-500">Top Rated Seller</p>
                                    </div>
                                    <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200">Visit</button>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Circuit board electronics" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBQ8pjjIzVKRFZolEyRZITrT45IKyrrP2d4-zD5eFX5X8o8kHHeDIj2iEFxwtRuLibYZHmfh07i_Rz2pjKji32UlCLGZOcdn1VFLcF1WaeeGzPz1UFsRDze3_pIjezgh1HgjgH3AWYUDdcEeyGWJbDRTSwMPgFn2AvzLIgP6v141c_IRlLYC4_DiH_UnVJfayXuc_1Ry6MOJ_pNAWGjfNlza8ItwkyDIFBbJRG8Mt1oF23ky54kxQVdVVRe9giEgy66xEh91Gt2BD4')"}}></div>
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Laptop computer keyboard" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBYz6w2yqQ3eZV9g9BP_B9c5jckCAx3cejj62S5HbJjheIUotactfcVKRZPS4wfxQUEvn8S8HYP3b72PQitubguxRrWMFqRSt8vUPSlCDrjDfSuaAPD3XlwfdTsE9ICpdZcgpzlq60idoWVJzIyqdSWtLxtOrIHUJmYshIuqE2MsM3Se4C2tF7Z6YGjqJ851lgMaVrtvZkNmiFHyR3xwPl_k7rEyVVRTH-BP4HgcxdenXtwcL6KGqPUCakCk8HwnfGdag3n5X_pumg')"}}></div>
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Computer mouse" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDh4DdI1HVaIBPhGNzuF69-DCIjx-w80GsY898Umq7kJKuAxgkwNsR8PedYemsJNM2PsmqQo3NXtV5WrSdo2hDa3Y5TKMqPeL51k4vJFjo8p32pCxpcAGmMV_4sopWhMNiP-gRroOpGm1T4vkrrEE8-MDL-bEIw7msSETy6lGPb50XYpJUSj0Oym4_oZjzfREEjhTnnpweA9BgRDih5bfEPNTSf6k9QLCMoB78QBYNMvsyRdajrMO_u_JEg4tctPGlcYrfyfZ-ZbPI')"}}></div>
                                </div>
                            </div>
                            <div className="rounded-xl bg-white p-5 shadow-sm border border-slate-100">
                                <div className="flex items-center gap-3 mb-4">
                                    <div className="h-12 w-12 rounded-full bg-slate-200 bg-cover bg-center" data-alt="Seller Logo Green Life" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuApSlYSwUXZE759UExQbt5j7bHkHJRs9ZaYsqcRgJXSpaWegcaNSADC09B457B7wnIyAk5hAsVO5hzGDhu1gEYNfIqm0-kbhDievb8qIBXoTfjdVJ5gK0IoTnEVeroBMDhmP3U-2jRrmJ1BUkD9UJ_20Jc-UeqarniV2tBc4mKSncpLCB9SvMoE0cma8n7MIfdf3kLQV2lVq3vQunS2VDokA6Y5slNbwxAx3eKHjL9FZyXMQH0fxRg3d4UailTL5QgQr-psksftl-k')"}}></div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-bold text-slate-900 truncate">Green Life Home</h3>
                                        <p className="text-xs text-slate-500">Eco-Friendly Badge</p>
                                    </div>
                                    <button className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200">Visit</button>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Succulent plant in pot" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAasG9oc5oRy33rKYB8iP05GkKh7pxxokUrymduOfpvKpGi4RDHl5K7d2zUSJKHGZ4mZZjwj6fQB6oEulWX39s9Mv1-iTWpNPqtqm9YRGkEKsbv2zQijJ_UawLG-EEZzKier8ZjEurwztmo_BW2ojFdb2t3wdyyOVlXQi36S4p5DUEOaVZ6aIPV10qcytmrozA0riz6OUBtIGYpqahsXj71yCW3WYrkYCdSzeq7IUkKKBXBPFMSiQgx8_kqJpUZ3UcayN0PCRrMW0k')"}}></div>
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Ceramic coffee mug" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvRzzvnLmSjH3sCaY4MKWoQBF-L8GS_hilR-vRlMO4pRwPLWN6H7NvV5qA5YqUKfaSrNvnvAA99fL3O1JJqFxjmk93Am2QScgTYpgQs7jtQHZKDlcl6ehq3MNNXKCUhX1-II7di0RRjHFXjThsPQ899OxHzzQjaw_FcFiUjWrgOKvRbTde_oyhBE3OWhwhdUdwgFyy6JeG7DzkEXt_FqK34wB6IPpfWjsDYZlJQiZTS0t_gC2kcvJiB4qJH0IYHA92dVGy9hFBDjg')"}}></div>
                                    <div className="aspect-square rounded-md bg-slate-100 bg-cover bg-center" data-alt="Wooden kitchen utensils" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBbmSAcy0melBo7dS20rhMglZ5bYhA658-FZkPTh6PTdnR1yM9fLBTdJScgXb6GDts7A2OpNd9M3BzN2B2aBiQH6wLXRJ6obXd1wy82mohNiCx7Z_Uf9LHj73dJEClV6E_Mqout9ffXtmP5iFY3A-DCUUuDrhDn1ihrnGrsF4yhEtc0CtbBrkLiTRucnSJ8ZqW3pHPH3BA2XMWGhOnA5a6Up4QwTPOJaFjuG6LMvgetzYkATlHsD_ueMLsplXqE6JrPwsteZu6pC2M')"}}></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <footer className="mt-auto border-t border-slate-200 bg-white transition-colors">
                    <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50">
                                <div className="mb-4 rounded-full bg-blue-50 p-4 text-primary">
                                    <span className="material-symbols-outlined text-3xl">verified_user</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Buyer Protection</h3>
                                <p className="mt-2 text-sm text-slate-500 max-w-62.5">Shop with confidence. We guarantee your money back if you're not satisfied.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50">
                                <div className="mb-4 rounded-full bg-blue-50 p-4 text-primary">
                                    <span className="material-symbols-outlined text-3xl">credit_card</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Secure Payment</h3>
                                <p className="mt-2 text-sm text-slate-500 max-w-62.5">All transactions are processed through 256-bit encrypted secure channels.</p>
                            </div>
                            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-slate-50">
                                <div className="mb-4 rounded-full bg-blue-50 p-4 text-primary">
                                    <span className="material-symbols-outlined text-3xl">local_shipping</span>
                                </div>
                                <h3 className="text-lg font-bold text-slate-900">Fast Shipping</h3>
                                <p className="mt-2 text-sm text-slate-500 max-w-62.5">Global shipping network providing free fast delivery on orders over $50.</p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto max-w-360 px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16 md:grid-cols-5">
                            <div className="col-span-2 md:col-span-1">
                                <a className="flex items-center gap-2 mb-6" href="#">
                                    <div className="flex h-8 w-8 items-center justify-center rounded bg-primary text-white">
                                        <span className="material-symbols-outlined text-lg">shopping_bag</span>
                                    </div>
                                    <span className="text-lg font-bold tracking-tight text-slate-900">Marketplace</span>
                                </a>
                                <p className="text-sm text-slate-500 leading-relaxed">
                                    The world's leading open market for unique products and verified sellers. Connect, shop, and grow.
                                </p>
                            </div>
                            <div>
                                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Company</h4>
                                <ul className="space-y-4 text-sm text-slate-500">
                                    <li><a className="hover:text-primary transition-colors" href="#">About Us</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Careers</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Press</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Impact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Support</h4>
                                <ul className="space-y-4 text-sm text-slate-500">
                                    <li><a className="hover:text-primary transition-colors" href="#">Help Center</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Shipping</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Returns</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Legal</h4>
                                <ul className="space-y-4 text-sm text-slate-500">
                                    <li><a className="hover:text-primary transition-colors" href="#">Privacy Policy</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Terms of Service</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Cookie Policy</a></li>
                                    <li><a className="hover:text-primary transition-colors" href="#">Accessibility</a></li>
                                </ul>
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-slate-900">Connect</h4>
                                <div className="flex flex-wrap gap-3">
                                    <a aria-label="Facebook" className="social-icon" href="#">
                                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
                                        </svg>
                                    </a>
                                    <a aria-label="Instagram" className="social-icon" href="#">
                                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                                        </svg>
                                    </a>
                                    <a aria-label="Twitter" className="social-icon" href="#">
                                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                                        </svg>
                                    </a>
                                    <a aria-label="LinkedIn" className="social-icon" href="#">
                                        <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="mt-8">
                                    <p className="text-sm font-bold text-slate-900 mb-4">Subscribe to our newsletter</p>
                                    <div className="flex">
                                        <input className="w-full rounded-l-lg border-slate-200 bg-white px-4 py-2 text-sm focus:border-primary focus:ring-primary transition-all" placeholder="Enter your email" type="email" />
                                        <button className="rounded-r-lg bg-primary px-6 py-2 text-sm font-bold text-white hover:bg-blue-600 transition-colors">Join</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="border-t border-slate-100 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="text-sm text-slate-400">
                                Â© 2024 Marketplace Inc. All rights reserved. Built with passion for a better commerce.
                            </div>
                            <div className="flex items-center gap-6">
                                <img alt="Visa" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCfMV7fds6syhkxliqSchON6IgqoMQj6MvSIwwggZXhjDCYOuVVO8hlhr4RCCSG5k3KyI4PCEY91Q14B6huI1TdBm_l-fvUO5mmlkl7OYZGS6u0Hm19rJUD8PRMVd3fSj2QPKg8rwT5yRiJu6DjXT39iV7_tR_lkWhABCcblH-VQfdmw53Rn3Yaf4YFe6cCgZJfay9Y5kqM0SDe4f6Oc3JIsth66y7Q4LRw2x9rNGPPK3sT2gNLip4leBqJLxHaR0e_gtu10KBhiE" />
                                <img alt="Mastercard" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfty1SoAWOteH4ouBtc9uoejtffi3o-m-IzPTJipp0hkbQR3ruPUlyrUxU-SSmXXSW7ks4ErCGALg4EppkYuOvfFcYnpBo55IESx2TekXNTqsIFaDpLZHuYl3RbvcEZF93pc3RwDoHRzF_j4jjdWbqgUzmDMr8oWPtLHLdkQ_RmEq6wnopj5bfmefZrm2c0lJRK9UBOCYWh34c3X5CoRusWJDQTbnQ2hZeifeWpaZldaDlpknZYj8sCqLSrNH3bq_hK40kjCsvBRo" />
                                <img alt="Paypal" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB46r3JMdM_iing_kKp9q3_gibpj4Pd0EfRx4_mW0jor8pBADJG-WPRhAPBLKeg9xHaajA8aGxv8vUBjgj5trEy4ES9GUXBNDtkiRU5UCeSJkNGGtM6dZp2i0kffZ76FlRFdnLVLRKtkRPPtV6HwEBg1WABn5vf3VIJsSozi2-HXWMJg1bO4H-lPnvSQDY7xHggRk4EhWBj2iRa1pmjqwLxA79nfiUfW45pFdpEf8sTWR4d7PEmPOa8uOM_sfjAmhft6Lovq0_Pny8" />
                                <img alt="Apple Pay" className="h-6 opacity-60 grayscale hover:grayscale-0 transition-all cursor-default" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCG4kBB9vertKQlfDUAWmRywkdVigspVZ_vaJwnZ9FBUXHSiJZaHW-Vytm-jzjPs1KV1Z7L7xSZG0Vr5l0DTDDzL9ho5lKBszA06Ez1ThNa4UGlPA7i_21xwCBg7_aEfHZFp-FpgnCqdzyuPwk_lsUsU_7zzmSO6aaomqP7lclXI-50CjsAfOiaYoAfBIYUpiOG8T10_nspYZZgA7Tha3k89-VV75mOQYjHe1l7QQhUE7T2484E9UayvTisa3sYZWqii3FyFBSWfUQ" />
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

        </div>
    )
}