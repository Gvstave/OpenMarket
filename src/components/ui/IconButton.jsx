const IconButton = ({ onClick, icon, children }) => {
    return (
        <button className="relative flex h-10 w-10 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors " onClick={onClick}>
            <span className="material-symbols-outlined" style={{
                fontVariationSettings: "'FILL' 1, 'wght' 500, 'opsz' 24"
            }}>{icon}</span>
            {children}
        </button>
    )
}

export default IconButton;