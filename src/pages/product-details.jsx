import Button from "../shared/ui/button";
import { useParams } from "react-router-dom"
import products from "../utils/products_list";
import PrimaryButton from "../shared/ui/primary-button";
import RelatedProducts from "../shared/sections/related-products";
import IconButton from "../shared/ui/icon-button";

const formatCurrency = (value) => {
    if (value === null || value === undefined || Number.isNaN(value)) {
        return "";
    }
    return Number(value).toFixed(2);
};

const formatPercent = (value) => `${Math.round(value)}%`;

const buildBreakdown = (summary) => {
    const breakdown = summary?.breakdown || {};
    return [5, 4, 3, 2, 1].map((star) => {
        const percent = Number(breakdown[star] ?? 0);
        return { star, percent };
    });
};

const renderStars = (value) => {
    const safeValue = Number(value) || 0;
    return [1, 2, 3, 4, 5].map((star) => {
        if (safeValue >= star) {
            return "star";
        }
        if (safeValue >= star - 0.5) {
            return "star_half";
        }
        return "star";
    });
};

export default function ProductDetails() {
    const { slug } = useParams();
    const product = products.find(
        p => p.name.toLowerCase().replace(/\s+/g, "-") === slug
    );
    const {
        name,
        category,
        price,
        originalPrice,
        rating,
        images,
        badge,
        description,
        soldBy,
        features,
        specifications,
        reviewsSummary
    } = product;

    // const productImages = Array.isArray(images) && images.length ? images
    const productImages = product.images
    console.log(productImages);
    const starIcons = renderStars(rating);
    const reviewCount = reviewsSummary?.count ?? 0;
    const reviewAverage = reviewsSummary?.average ?? rating ?? 0;
    const breakdownRows = buildBreakdown(reviewsSummary);
    const discountPercent = originalPrice && price ? Math.round(((originalPrice - price) / originalPrice) * 100) : null;
    const specsEntries = specifications ? Object.entries(specifications) : [];
    const highlights = Array.isArray(features) && features.length ? features.slice(0, 3) : [];

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <p className="text-lg font-semibold">Product not found</p>
            </div>
        );
    }
    return (
        <div className=" text-primary font-display antialiased min-h-screen flex flex-col">
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 py-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="w-full aspect-4/3 bg-white rounded-xl overflow-hidden border border-border shadow-sm relative group">
                            <div className="w-full h-full bg-center bg-contain bg-no-repeat transition-transform duration-500 hover:scale-105 cursor-zoom-in" data-alt={name} style={{ backgroundImage: `url('${productImages[0]}')`, backgroundSize: 'cover' }}>
                            </div>
                            <div className="absolute top-4 right-4">
                                <IconButton className="bg-white/90 shadow-md flex items-center justify-center text-secondary hover:text-red-500" icon={'favorite'} />
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                            {productImages.map((imageUrl, index) => (
                                <button key={`${imageUrl}-${index}`} className={`shrink-0 w-20 h-20 rounded-lg border-2 ${index === 0 ? "border-primary-background" : "border-transparent hover:border-border"} overflow-hidden bg-white`}>
                                    <div className="w-full h-full bg-center bg-cover" data-alt={name} style={{ backgroundImage: `url('${imageUrl}')` }}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1">
                                {badge ? (
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">{badge}</span>
                                ) : null}
                                <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">check_circle</span> In Stock
                                </span>
                            </div>
                            <h1 className="text-3xl font-black tracking-tight text-primary leading-tight">{name}</h1>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex text-amber-400">
                                    {starIcons.map((icon, index) => (
                                        <span key={`${icon}-${index}`} className="material-symbols-outlined text-[18px] fill-current">{icon}</span>
                                    ))}
                                </div>
                                <a className="text-sm text-primary-background hover:underline font-medium" href="#reviews">{reviewAverage.toFixed(1)} ({reviewCount.toLocaleString()} reviews)</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-4xl font-bold text-primary">${formatCurrency(price)}</span>
                                {originalPrice ? (
                                    <span className="text-lg text-secondary line-through">${formatCurrency(originalPrice)}</span>
                                ) : null}
                                {discountPercent ? (
                                    <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">-{discountPercent}%</span>
                                ) : null}
                            </div>
                            <div className="flex items-center gap-3 py-3 border-y border-border mb-6">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-secondary">
                                    <span className="material-symbols-outlined">storefront</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-secondary">Sold by</p>
                                    <p className="text-sm font-bold text-primary hover:text-primary-background cursor-pointer">{soldBy}</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-secondary">Seller Rating</p>
                                    <p className="text-sm font-bold text-primary">98% Positive</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <span className="text-sm font-semibold text-primary mb-2 block">Color: <span className="font-normal text-secondary">Midnight Black</span></span>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-primary-background ring-offset-white"></button>
                                        <button className="w-8 h-8 rounded-full bg-slate-200 hover:ring-2 hover:ring-offset-2 hover:ring-border transition-all"></button>
                                        <button className="w-8 h-8 rounded-full bg-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-blue-800 transition-all"></button>
                                    </div>
                                </div>
                                {/* <div>
                                    <span className="text-sm font-semibold text-primary mb-2 block">Configuration</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="px-4 py-2 border-2 border-primary-background bg-primary-background/5 text-primary-background rounded-lg text-sm font-semibold">Headphones Only</button>
                                        <button className="px-4 py-2 border border-slate-200 hover:border-secondary text-secondary rounded-lg text-sm font-medium">Bundle + Case</button>
                                    </div>
                                </div> */}
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-4">
                                    <div className="w-24">
                                        <label className="sr-only">Quantity</label>
                                        <div className="relative flex items-center rounded-lg border border-border gap-2">
                                            <button className="w-8 h-10 flex items-center justify-center text-secondary hover:bg-border rounded-l-lg" type="button">
                                                <span className="material-symbols-outlined text-[16px]">remove</span>
                                            </button>
                                            <input className="w-full h-10 text-center border-none bg-transparent p-0 focus:ring-0 text-primary font-medium" readOnly="" type="text" value="1" />
                                            <button className="w-8 h-10 flex items-center justify-center text-secondary hover:bg-border rounded-r-lg" type="button">
                                                <span className="material-symbols-outlined text-[16px]">add</span>
                                            </button>
                                        </div>
                                    </div>
                                    <PrimaryButton className={"w-full"}>
                                        <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                        Add to Cart
                                    </PrimaryButton>
                                </div>
                                <PrimaryButton className={"w-full bg-primary hover:bg-slate-800 text-white font-bold h-10 rounded-lg transition-colors"} label={"Buy Now"} />
                            </div>
                        </div>
                        <div className="text-sm text-secondary space-y-2 pl-1">
                            {highlights.map((item, index) => (
                                <div key={`${item}-${index}`} className="flex gap-3">
                                    <span className="material-symbols-outlined text-primary-background-background text-[20px]">bolt</span>
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <div className="border-b border-slate-200 mb-8">
                        <nav className="flex gap-8 -mb-px">
                            <button className="border-b-2 border-primary-background text-primary-background font-bold py-4 px-1 text-sm">Description</button>
                            <button className="border-b-2 border-transparent hover:border-border text-secondary hover:text-secondary font-medium py-4 px-1 text-sm transition-colors">Specifications</button>
                            <button className="border-b-2 border-transparent hover:border-border text-secondary hover:text-secondary font-medium py-4 px-1 text-sm transition-colors">Shipping &amp; Returns</button>
                        </nav>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-secondary leading-relaxed">
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold text-primary mb-4">Experience the Next Level of Silence</h3>
                            <p className="mb-6">
                                {description}
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <div className="bg-white p-4 rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-2">Category</h4>
                                    <p className="text-sm">{category}</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-border">
                                    <h4 className="font-bold text-primary mb-2">Seller</h4>
                                    <p className="text-sm">{soldBy}</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl h-fit">
                            <h4 className="font-bold text-primary mb-4 border-b border-slate-200 pb-2">Technical Specs</h4>
                            <ul className="space-y-3 text-sm">
                                {specsEntries.length ? (
                                    specsEntries.map(([label, value]) => (
                                        <li key={label} className="flex justify-between">
                                            <span className="text-secondary">{label}</span>
                                            <span className="font-medium">{Array.isArray(value) ? value.join(", ") : value}</span>
                                        </li>
                                    ))
                                ) : (
                                    <li className="text-secondary">Specs coming soon.</li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="scroll-mt-24 mb-16" id="reviews">
                    <h2 className="text-2xl font-bold text-primary mb-8">Customer Reviews</h2>
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-5xl font-black text-primary">{reviewAverage.toFixed(1)}</span>
                                    <div className="flex flex-col mb-1">
                                        <div className="flex text-amber-400 text-sm">
                                            {starIcons.map((icon, index) => (
                                                <span key={`${icon}-${index}`} className="material-symbols-outlined text-[20px] fill-current">{icon}</span>
                                            ))}
                                        </div>
                                        <span className="text-sm text-secondary">Based on {reviewCount.toLocaleString()} reviews</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    {breakdownRows.map((row) => (
                                        <div key={row.star} className="flex items-center gap-3 text-sm">
                                            <span className="w-3 font-medium text-secondary">{row.star}</span>
                                            <div className="flex-1 h-2 bg-border rounded-full overflow-hidden">
                                                <div className="h-full bg-primary-background rounded-full" style={{ width: formatPercent(row.percent) }}></div>
                                            </div>
                                            <span className="w-8 text-right text-secondary">{formatPercent(row.percent)}</span>
                                        </div>
                                    ))}
                                </div>
                                {/* <button className="w-full mt-6 py-2.5 border border-border rounded-lg text-sm font-bold text-secondary hover:bg-slate-50 transition-colors">Write a Review</button> */}
                                <Button className="w-full mt-6 border border-border" variant="transparent">Write a Review</Button>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div className="border-b border-border pb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">JD</div>
                                        <div>
                                            <p className="text-sm font-bold text-primary">John Doe</p>
                                            <p className="text-xs text-secondary">Verified Purchase • 2 days ago</p>
                                        </div>
                                    </div>
                                    <div className="flex text-amber-400 text-sm">
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                    </div>
                                </div>
                                <h4 className="font-bold text-primary text-sm mb-1">Absolutely incredible noise cancelling</h4>
                                <p className="text-secondary text-sm leading-relaxed">
                                    I upgraded from the XM3s and the difference is noticeable. The comfort is top tier, I can wear these for 8 hours straight while working without any ear fatigue. The call quality is also significantly improved.
                                </p>
                            </div>
                            <div className="border-b border-border pb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">SM</div>
                                        <div>
                                            <p className="text-sm font-bold text-primary">Sarah Miller</p>
                                            <p className="text-xs text-secondary">Verified Purchase • 1 week ago</p>
                                        </div>
                                    </div>
                                    <div className="flex text-amber-400 text-sm">
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] text-border">star</span>
                                    </div>
                                </div>
                                <h4 className="font-bold text-primary text-sm mb-1">Great sound, but the case is big</h4>
                                <p className="text-secondary text-sm leading-relaxed">
                                    The sound profile is excellent out of the box. My only gripe is that they don't fold up as compact as the previous models, so the case takes up quite a bit of space in my bag.
                                </p>
                            </div>
                            <button className="text-primary-background font-medium text-sm hover:underline">Show all {reviewCount.toLocaleString()} reviews</button>
                        </div>
                    </div>
                </div>
                <RelatedProducts />
            </main>
        </div>
    )
}

