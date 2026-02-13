const PillButton = ({ name, bgColor, textColor, icon }) => {
    return (
        <button
            className="flex h-10 items-center gap-2 rounded-full bg-white border border-border px-4 pr-6 transition-all hover:shadow-md">
            <span
                className={`flex h-6 w-6 items-center justify-center rounded-full ${bgColor} ${textColor} group-hover:scale-110 transition-transform`}>
                <span className="material-symbols-outlined text-[18px]">{icon}</span>
            </span>
            <span
                className="text-sm font-medium text-slate-700 group-hover:text-primary">{name}</span>
        </button>
    )
}

export default PillButton;