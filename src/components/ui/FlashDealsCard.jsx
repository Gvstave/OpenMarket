import Button from "./Button"

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

const FlashDealsCard = ({ title, image, tag, rating, price, oldPrice, category, instock }) => {
    return (
        <div key={title} className="group flex flex-col">
            <div className="relative aspect-4/5 overflow-hidden rounded-lg bg-background-light">
                <div className="absolute top-4 left-4 z-10 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
                    {tag}
                </div>
                <img
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    src={image}
                />
                <div className="text-white absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <Button variant="accent">
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
                <h3 className="text-base font-bold text-primary truncate">{title}</h3>
                <div className="flex items-center gap-2 mt-1">
                    <span className="text-lg font-extrabold text-primary">{price}</span>
                    <span className="text-sm text-secondary line-through">{oldPrice}</span>
                </div>
            </div>
            {
                instock && <QuantityLeft quantity={instock}/>
            }
        </div>
    )
}

export default FlashDealsCard