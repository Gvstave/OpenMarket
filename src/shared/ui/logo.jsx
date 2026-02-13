const Logo = () => {
    return (
        <div className="flex items-center gap-3 cursor-pointer">
            <div className="size-8 text-primary-background">
                <svg className="w-full h-full" fill="currentColor" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                    <path d="M44 4H30.6666V17.3334H17.3334V30.6666H4V44H44V4Z"></path>
                </svg>
            </div>
            <h2 className="text-xl font-bold leading-tight tracking-tight text-primary">OpenMarket</h2>
        </div>
    )
}

export default Logo;