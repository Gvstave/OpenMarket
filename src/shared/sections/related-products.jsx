import ProductTileCard from "../ui/product-tile-card"
import products from "../../utils/products_list";
import { useParams } from "react-router-dom";

export default function RelatedProducts() {
    const { slug } = useParams();
    const product = products.find(
        p => p.name.toLowerCase().replace(/\s+/g, "-") === slug
    );
    const relatedProductIds = product.relatedProductIds
    const relatedProducts = products.filter((item) => relatedProductIds.includes(item.id))
    
    return (
        <div className="mb-8">
            <h2 className="text-2xl font-bold text-primary mb-6">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map((product) => (
                    <ProductTileCard key={product.id} {...product} image={product.images[0]} />
                ))}
            </div>
        </div>
    )
}
