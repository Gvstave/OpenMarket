const Badge = ({ children }) => {
    return (
        <div className="absolute top-4 left-4 z-10 rounded-full bg-red-600 px-3 py-1 text-[10px] font-bold text-white uppercase tracking-wider">
            {children}
        </div>
    )
}

export default Badge;