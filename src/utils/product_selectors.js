// Get product by slug (SAFE)
export const getProductBySlug = (products, slug) => products.find((p) => p.slug === slug);

// Get related products (SAFE, no self, no crashes)
export const getRelatedProducts = (products, product) => {
    if (!product || !product.relatedProductIds?.length) return [];

    return products.filter(
        (p) =>
            product.relatedProductIds.includes(p.id) &&
            p.id !== product.id
    );
};

// Filter by category
export const getProductsByCategory = (products, category) =>
    products.filter((p) => p.category === category);

// Filter by seller
export const getProductsBySeller = (products, seller) =>
    products.filter((p) => p.soldBy === seller);
