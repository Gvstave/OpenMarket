const IconButton = ({ onClick, icon, children, className }) => {
    return (
        <button className={`flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors ${className}`} onClick={onClick}>
            <span className="material-symbols-outlined" style={{
                fontVariationSettings: "'wght' 500, 'opsz' 24"
            }}>{icon}</span>
            {children}
        </button>
    )
}

export default IconButton;