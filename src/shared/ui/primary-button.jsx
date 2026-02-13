const PrimaryButton = ({ className, label, onClick, type = "button", children }) => {
    return (
        <button type={type} className={`${className} flex flex-row items-center justify-center gap-2 cursor-pointer rounded-lg bg-primary-background px-4 text-sm font-bold text-white hover:bg-primary-background/90 transition-colors`} onClick={onClick}>
            {label}
            {children}
        </button>
    )
}

export default PrimaryButton;