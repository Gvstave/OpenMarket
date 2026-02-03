import { useNavigate } from "react-router-dom"
import Button from "./Button"
import Badge from "./Badge"

const QuantityLeft = ({quantity}) => {
    return (
        <>
            <div className="mt-2 h-1.5 w-full rounded-full bg-border">
                <div className="h-1.5 w-3/4 rounded-full bg-red-500"></div>
            </div>
            <p className="mt-1 text-xs text-red-500 font-medium">{quantity} left in stock</p>
        </>
    )
}

const ProductCard = ({ 
    id,
    name, 
    title,
    image, 
    badge,
    tag,
    rating, 
    price, 
    originalPrice,
    oldPrice,
    category, 
    instock 
}) => {
    // Normalize props - support both naming conventions
    const displayTitle = name || title
    const displayBadge = badge || tag
    const displayOldPrice = originalPrice || oldPrice
    const displayPrice = typeof price === 'number' ? `$${price.toFixed(2)}` : price
    const displayOriginalPrice = typeof displayOldPrice === 'number' ? `$${displayOldPrice.toFixed(2)}` : displayOldPrice

    // Calculate percentage discount
    const calculateDiscount = () => {
        const priceNum = typeof price === 'number' ? price : parseFloat(price?.replace('$', ''))
        const oldPriceNum = typeof displayOldPrice === 'number' ? displayOldPrice : parseFloat(displayOldPrice?.replace('$', ''))
        
        if (priceNum && oldPriceNum && oldPriceNum > priceNum) {
            const discount = Math.round(((oldPriceNum - priceNum) / oldPriceNum) * 100)
            return `-${discount}% OFF`
        }
        return null
    }

    // Determine badge content: discount percentage takes priority, then status/tag
    const badgeContent = calculateDiscount() || displayBadge
    const hasBadge = badgeContent && badgeContent !== null && badgeContent !== undefined

    const navigate = useNavigate()
    const normalizedTitle = displayTitle?.toString().trim().toLowerCase().replace(/\s+/g, "-")
    const productId = id ?? normalizedTitle ?? "product"
    const productLink = `/product/${encodeURIComponent(productId)}`

    const handleNavigate = () => {
        navigate(productLink)
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            navigate(productLink)
        }
    }

    return (
        <div
            key={id || displayTitle}
            className="group flex flex-col cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light"
            role="link"
            tabIndex={0}
            onClick={handleNavigate}
            onKeyDown={handleKeyDown}
            aria-label={`View details for ${displayTitle}`}
        >
            <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-background-light">
                {hasBadge && (
                    <Badge>{badgeContent}</Badge>
                )}
                <img
                    alt={displayTitle}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                />
                <div className="text-white absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button
                        variant="accent"
                        onClick={(event) => {
                            event.stopPropagation()
                        }}
                        className="w-full"
                    >
                        <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                        Add to Cart
                    </Button>
                </div>
            </div>
            <div className="mt-4">
                <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-semibold text-secondary uppercase tracking-wider">{category}</span>
                    <div className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px] text-yellow-400 fill-current">star</span>
                        <span className="text-xs font-bold">{rating}</span>
                    </div>
                </div>
                <h3 className="text-base font-bold text-primary truncate">{displayTitle}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-extrabold text-primary">{displayPrice}</span>
                    <span className="text-sm text-secondary line-through">{displayOriginalPrice}</span>
                </div>
            </div>
            {instock && <QuantityLeft quantity={instock}/>}
        </div>
    )
}

export default ProductCard
