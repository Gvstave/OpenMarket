const MakerCard = ({ name, feedback, avatar, products = [] }) => {
    const productImages = products.slice(0, 3)

    return (
        <div
            className="rounded-xl bg-white p-5 shadow-sm border border-background-light">
            <div className="flex items-center gap-3 mb-4">
                <div
                    className="h-12 w-12 rounded-full bg-background-light bg-cover bg-center"
                    style={{ backgroundImage: `url('${avatar}')` }}
                >
                </div>
                <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-primary truncate">{name}</h3>
                    <p className="text-xs text-secondary">{feedback}</p>
                </div>
                <button
                    className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 hover:bg-slate-200">Visit</button>
            </div>
            <div className="grid grid-cols-3 gap-2">
                {productImages.map((image) => (
                    <div
                        key={image}
                        className="aspect-square rounded-md bg-slate-100 bg-cover bg-center"
                        style={{ backgroundImage: `url('${image}')` }}
                    ></div>
                ))}
                {productImages.length < 3 &&
                    Array.from({ length: 3 - productImages.length }).map((_, index) => (
                        <div key={`placeholder-${index}`} className="aspect-square rounded-md bg-slate-100"></div>
                    ))}
            </div>
        </div>
    )
}

export default MakerCard;