import PrimaryButton from "./primary-button";

const Search = ({
    value,
    onChange,
    onSearch,
    placeholder = "Search for products, brands, or categories...",
    showButton = true,
    buttonLabel = "Search",
    className
}) => {
    return (
        <div className={`flex items-center w-full h-10 gap-3 rounded-lg bg-background-light p-1 transition-all focus-within:ring focus-within:ring-primary-background ${className}`}>
            <div className="flex items-center w-full gap-2 px-2 text-secondary">
                <span className="material-symbols-outlined text-base">
                    search
                </span>

                <input
                    type="search"
                    aria-label="Search"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && onSearch) {
                            onSearch();
                        }
                    }}
                    className="w-full bg-transparent placeholder-secondary outline-none border-none group text-inherit "
                />
            </div>
            {showButton && (
                <PrimaryButton
                    label={buttonLabel}
                    className="h-7 px-4"
                    onClick={onSearch}
                />
            )}
        </div>
    );
};

export default Search;

