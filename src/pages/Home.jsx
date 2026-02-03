import Footer from "../components/ui/Footer";
import Header from "../components/ui/Header";
import HeroSection from "../components/Hero";
import CategoryPill from "../components/categories/CategoryPill";
import FlashDealsSection from "../components/deals/FlashDealsSection";
import TrendingProductSection from "../components/trending/TrendingProductSection";
import TopMakersSection from "../components/sellers/TopMakersSection";
import Product from "../components/product/Product";

export default function Homepage() {
    return (
        <div className="relative flex min-h-screen flex-col">
            <Header />
            <main className="flex-1 w-full max-w-360 mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-12">
                <HeroSection />
                <CategoryPill />
                <FlashDealsSection />
                <TrendingProductSection />
                <TopMakersSection />
                <Product />
                {/* Additional sections can be converted similarly if needed */}
            </main>
            <Footer />
        </div>
    )
}