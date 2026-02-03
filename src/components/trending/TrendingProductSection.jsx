import TrendingProductCard from "../ui/TrendingProductCard"
import TRENDING_PRODUCTS from "../../utils/trending_products"

export default function TrendingProductSection() {
    return (
        <section>
            <div className="flex items-center justify-between pb-4 pt-2">
                <h2 className="text-2xl font-bold tracking-tight text-primary">Trending Now</h2>
                <a className="text-sm font-bold text-primary hover:underline" href="#">See all</a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {
                    TRENDING_PRODUCTS.map((product) => (
                        <TrendingProductCard key={product.id} id={product.id} name={product.name} price={product.price} rating={product.rating} reviews={product.reviews} image={product.image} badge={product.badge} />
                    ))
                }
            </div>
        </section>
    )
}