import products from "./products_list";
import SELLER_PROFILES from "./seller_profiles";

const productLookup = new Map(products.map((product) => [product.id, product]));

const TOP_MAKERS = SELLER_PROFILES.map((seller) => {
  const productImages = (seller.productIds || [])
    .map((productId) => productLookup.get(productId)?.images[0])
    .filter(Boolean);

  return {
    id: seller.id,
    name: seller.name,
    feedback: seller.feedback,
    avatar: seller.logoImage,
    products: productImages
  };
});

export default TOP_MAKERS;