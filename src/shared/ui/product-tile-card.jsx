import { useNavigate } from "react-router-dom"
import IconButton from "./icon-button"

const ProductTileCard = ({ id, price, reviews, rating, name, image, badge, category }) => {
    const navigate = useNavigate()
    const productId = name ?? id ?? "product"
    const productLink = `/product/${encodeURIComponent(productId)}`
    const displayRating = rating ?? reviews
    const hasReviews = typeof reviews === "number" && reviews > 0

    const handleNavigate = () => {
        navigate(productLink)
    }

    return (
        <div
            className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
            tabIndex={0}
            onClick={handleNavigate}
            aria-label={`View details for ${name}`}
        >
            <div className="aspect-square bg-slate-50 relative overflow-hidden">
                <img className="w-full h-full bg-center bg-cover group-hover:scale-105 transition-transform duration-500" alt={name} src={image} />
                <IconButton onClick={null} icon={"favorite"} className={"text-[18px] absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-secondary hover:text-red-500"} />
            </div>
            <div className="p-4">
                <h3 className="font-bold text-primary truncate">{name}</h3>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-primary-background">${price}</span>
                    <div className="flex items-center text-amber-400 text-xs">
                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                        {displayRating !== undefined && displayRating !== null && (
                            <span className="text-secondary ml-1">{displayRating}</span>
                        )}
                        {hasReviews && <span className="text-secondary ml-1">({reviews})</span>}
                    </div>
                </div>
                {badge && <p className="text-xs text-green-600 font-medium mt-1">{badge}</p>}
            </div>
        </div>
    )
}

export default ProductTileCard;
