import { useNavigate } from "react-router-dom"

const TrendingProductCard = ({ id, price, reviews, name, image, badge }) => {
    const navigate = useNavigate()
    const normalizedName = name?.toString().trim().toLowerCase().replace(/\s+/g, "-")
    const productId = id ?? normalizedName ?? "product"
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
            className="group flex flex-col gap-3 pb-3 rounded-lg p-2 transition-colors hover:bg-white hover:shadow-sm cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light"
            role="link"
            tabIndex={0}
            onClick={handleNavigate}
            onKeyDown={handleKeyDown}
            aria-label={`View details for ${name}`}
        >
            <div className="w-full aspect-square overflow-hidden rounded-lg bg-background-light">
                <img className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" alt={name} src={image} />
            </div>
            <div>
                <p className="truncate text-base font-medium text-primary">{name}</p>
                <div className="flex items-center gap-1 text-yellow-400 my-1">
                    <span className="material-symbols-outlined text-[6px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[6px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[6px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[6px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[6px] fill-current">star_half</span>
                    <span className="text-secondary ml-1">({reviews})</span>
                </div>
                <p className="text-sm font-bold text-primary">{price}</p>
                <p className="text-xs text-green-600 font-medium">{badge}</p>
            </div>
        </div>
    )
}

export default TrendingProductCard;