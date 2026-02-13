import HeroSection from "../shared/sections/hero";
import CategoryPill from "../shared/sections/category-pill";
import FlashDealsSection from "../shared/sections/flash-deals-section";
import TrendingProductSection from "../shared/sections/trending-product-section";
import TopMakersSection from "../shared/sections/top-makers-section";
import Product from "../shared/sections/product";

export default function Homepage() {
    return (
        <div className="relative flex min-h-screen flex-col">
            <main className="flex-1 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-12">
                <HeroSection />
                <CategoryPill />
                <FlashDealsSection />
                <TrendingProductSection />
                <TopMakersSection />
                <Product />
            </main>
        </div>
    )
}

