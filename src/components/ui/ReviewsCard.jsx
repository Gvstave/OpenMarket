const reviewsCard = ({name, heading, description}) => {
    return (
        <div className="border-b border-slate-100 pb-6">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">SM</div>
                    <div>
                        <p className="text-sm font-bold text-slate-900">{name}</p>
                        <p className="text-xs text-slate-500">Verified Purchase • 1 week ago</p>
                    </div>
                </div>
                <div className="flex text-amber-400 text-sm">
                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                    <span className="material-symbols-outlined text-[18px] text-slate-300">star</span>
                </div>
            </div>
            <h4 className="font-bold text-slate-900 text-sm mb-1">{heading}</h4>
            <p className="text-slate-600 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    )
}

export default reviewsCard;