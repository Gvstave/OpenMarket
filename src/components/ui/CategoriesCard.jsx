const CategoriesCard = ({ label, image}) => {
    return (
        <div className="group relative cursor-pointer active-card rounded-lg overflow-hidden transition-all duration-300 hover:shadow-xl ring-2 ring-primary-background">
            <div className="bg-cover bg-center flex flex-col gap-3 justify-end p-5 aspect-square" style={{ backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%), url("${image}")` }}>
                <p className="text-white text-lg font-bold leading-tight">{label}</p>
            </div>
            <div className="absolute top-3 right-3 selection-check size-7 rounded-full flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-sm font-bold">check</span>
            </div>
        </div>
    )
}

export default CategoriesCard;