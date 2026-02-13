import ProductCard from "../ui/product-card"
import { productsList } from "../../utils/products_list"

export default function Product() {
    return (
        <section className="mx-auto py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
                {productsList.map((product, productImage) => (
                    <ProductCard key={product.id} image={product.images[0]} {...product} />
                ))}
            </div>
            <div className="mt-16 flex justify-center">
                <button className="bg-white border border-surface-200 text-surface-700 font-bold text-sm px-10 h-12 rounded-lg hover:bg-surface-50 transition-all shadow-sm font-sans tracking-tight">
                    Load More Deals
                </button>
            </div>
        </section>
    )
}
