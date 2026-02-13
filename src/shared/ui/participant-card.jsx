const Card = ({ isSelected, onClick, image, participant, description }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white group relative flex flex-col gap-4 p-6 rounded-xl cursor-pointer transition-all
                ${isSelected
                    ? "border-2 border-primary-background bg-primary-background/5"
                    : "border-2 border-[#e7edf3] hover:border-primary-background"
                }
            `}
        >
            <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden relative"
                style={{ backgroundImage: `url(${image})` }}
            />
            <div className="flex items-center justify-between">
                <div className="w-5/6">
                    <p className="text-primary text-xl font-bold">{participant}</p>
                    <p className="text-secondary text-sm">{description}</p>
                </div>
                {isSelected &&
                    <span className="material-symbols-outlined text-primary-background transition-opacity">
                        check_circle
                    </span>
                }
            </div>
        </div>
    );
};

export default Card;
