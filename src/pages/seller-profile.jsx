import { useParams } from "react-router-dom";
import Button from "../shared/ui/button";
import ProductTileCard from "../shared/ui/product-tile-card";
import { productsList } from "../utils/products_list";
import SELLER_PROFILES from "../utils/seller_profiles";

export default function SellerProfile() {
    const { sellerId } = useParams();
    const normalizedId = Number(sellerId);
    const normalizeSlug = (value) => value?.toString().trim().toLowerCase().replace(/\s+/g, "-");
    const normalizedSlug = normalizeSlug(sellerId);

    const fallbackSeller = SELLER_PROFILES[0];
    const seller = SELLER_PROFILES.find((sellerEntry) => sellerEntry.id === normalizedId)
        || SELLER_PROFILES.find((sellerEntry) => normalizeSlug(sellerEntry.name) === normalizedSlug)
        || fallbackSeller;

    const productList = (seller.productIds || [])
        .map((productId) => productsList.find((product) => product.id === productId))
        .filter(Boolean);
    const itemsCount = productList.length;
    const categoryList = itemsCount
        ? [
            { name: "All Products", count: itemsCount },
            ...Object.entries(
                productList.reduce((acc, product) => {
                    if (product.category) {
                        acc[product.category] = (acc[product.category] || 0) + 1;
                    }
                    return acc;
                }, {})
            ).map(([name, count]) => ({ name, count }))
        ]
        : (seller.categories?.length ? seller.categories : fallbackSeller.categories);
    const sellerRating = seller.rating ? seller.rating.toFixed(1) : "4.8";
    const reviewCount = seller.reviewCount || "0";
    const logoImage = seller.logoImage;
    return (
        <div className="font-display text-slate-900 min-h-screen">
            <main className="max-w-7xl mx-auto px-4 py-6">
                <section className="relative bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200">
                    <div className="h-64 w-full relative group">
                        <img className="w-full h-full object-cover" data-alt="Store decorative brand banner showing modern electronics" src={seller.bannerImage} />
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent"></div>
                    </div>
                    <div className="px-8 pb-8 -mt-12 relative flex flex-col md:flex-row items-end gap-6">
                        <div className="w-32 h-32 rounded-xl bg-white p-1 shadow-lg border-4 border-white">
                            <img className="w-full h-full object-cover rounded-lg" data-alt="Minimalist technology brand circular logo design" src={logoImage} />
                        </div>
                        <div className="flex-1 flex flex-col md:flex-row md:items-center justify-between gap-4 mb-2">
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <h1 className="text-3xl font-bold text-primary-background drop-shadow-md">{seller.name}</h1>
                                </div>
                                <div className="flex items-center gap-4 text-primary-background text-sm">
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-sm">location_on</span>
                                        <span>{seller.location}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-yellow-400">star</span>
                                        <span className="font-medium">{sellerRating}</span>
                                        <span className="opacity-75">({reviewCount} Reviews)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Button>
                                    <span className="material-symbols-outlined text-sm pr-2">person_add</span>
                                    <span>Follow</span>
                                </Button>
                                <Button variant="secondary">
                                    <span className="material-symbols-outlined text-sm pr-2">chat_bubble_outline</span>
                                    Contact
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 py-4 bg-slate-50/50/50">
                        <div className="px-8 flex flex-col items-center md:items-start">
                            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Total Sales</span>
                            <span className="text-lg font-bold">{seller.stats?.totalSales}</span>
                        </div>
                        <div className="px-8 flex flex-col items-center md:items-start">
                            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Response Time</span>
                            <span className="text-lg font-bold text-green-500">{seller.stats?.responseTime}</span>
                        </div>
                        <div className="px-8 flex flex-col items-center md:items-start">
                            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Join Date</span>
                            <span className="text-lg font-bold text-slate-700">{seller.stats?.joinDate}</span>
                        </div>
                        <div className="px-8 flex flex-col items-center md:items-start">
                            <span className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-1">Items</span>
                            <span className="text-lg font-bold text-slate-700">{itemsCount}</span>
                        </div>
                    </div>
                </section>
                <div className="mt-8 flex flex-col lg:flex-row gap-8">
                    <aside className="w-full lg:w-64 shrink-0 space-y-6">
                        {/* <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-semibold mb-3">Search in Shop</h3>
                            <div className="relative">
                                <input className="w-full text-sm border-slate-200 rounded-lg pr-10 focus:ring-primary-background focus:border-primary-background" placeholder="Find items..." type="text" />
                                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary-background">
                                    <span className="material-symbols-outlined text-xl">search</span>
                                </button>
                            </div>
                        </div> */}
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-semibold mb-4">Store Categories</h3>
                            <nav className="space-y-1">
                                {categoryList.map((category, index) => (
                                    <a
                                        key={`${category.name}-${index}`}
                                        className={
                                            index === 0
                                                ? "flex items-center justify-between group py-2 px-3 rounded-lg bg-primary-background/10 text-primary-background font-medium"
                                                : "flex items-center justify-between group py-2 px-3 rounded-lg text-slate-600 hover:bg-slate-50 transition-colors"
                                        }
                                        href="#"
                                    >
                                        <span>{category.name}</span>
                                        <span className="text-xs opacity-60">({category.count})</span>
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                            <h3 className="font-semibold mb-3">About the Seller</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">
                                {seller.about}
                            </p>
                            <div className="mt-4 pt-4 border-t border-slate-100 flex gap-4">
                                <a className="text-slate-400 hover:text-primary-background transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
                                <a className="text-slate-400 hover:text-primary-background transition-colors" href="#"><span className="material-symbols-outlined">facebook</span></a>
                                <a className="text-slate-400 hover:text-primary-background transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
                            </div>
                        </div>
                    </aside>
                    <div className="flex-1">
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                            <h2 className="text-xl font-bold">Recommended for You</h2>
                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                <select className="text-sm border-slate-200 rounded-lg focus:ring-primary-background focus:border-primary-background">
                                    <option>Popularity</option>
                                    <option>Newest Arrivals</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                </select>
                                <div className="flex bg-white border border-slate-200 rounded-lg overflow-hidden">
                                    <button className="p-2 bg-slate-100"><span className="material-symbols-outlined text-xl">grid_view</span></button>
                                    <button className="p-2 text-slate-400 hover:text-primary-background"><span className="material-symbols-outlined text-xl">view_list</span></button>
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
                            {productList.map((product) => (
                                <ProductTileCard key={product.id} {...product} image={product.images} />
                            ))}
                        </div>
                    </div>
                </div>
                <section className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 pb-12">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 bg-primary-background/10 rounded-full flex items-center justify-center text-primary-background">
                            <span className="material-symbols-outlined">local_shipping</span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">Fast Global Shipping</h4>
                            <p className="text-sm text-slate-500">Free delivery on orders over $150. Tracked and insured.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 bg-primary-background/10 rounded-full flex items-center justify-center text-primary-background">
                            <span className="material-symbols-outlined">security</span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">Safe Payments</h4>
                            <p className="text-sm text-slate-500">Buyer protection policy and secure payment processing.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 shrink-0 bg-primary-background/10 rounded-full flex items-center justify-center text-primary-background">
                            <span className="material-symbols-outlined">assignment_return</span>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-1">30-Day Returns</h4>
                            <p className="text-sm text-slate-500">Easy returns if you're not satisfied with your purchase.</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

