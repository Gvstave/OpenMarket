import Button from "../../shared/ui/button";
import CategoriesCard from "../../shared/ui/categories-card";
import LoginHeader from "../../shared/ui/login-header";
import { CATEGORY_LIST } from "../../utils/category_list";

export default function SetBuyerProfile() {
    return (
        <div className="bg-background-light min-h-screen flex flex-col">
            <LoginHeader />
            <main className="flex-1 flex flex-col items-center justify-center px-2 gap-12">
                <div className="flex flex-col gap-3 max-w-240 mx-auto text-center max-sm:mt-16 sm:text-left">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">Personalize Your Feed</h1>
                    <p className="text-secondary text-lg leading-normal max-w-2xl">
                        Select the categories you love to help us curate your OpenMarket experience. We'll use these to show you the most relevant deals and products.
                    </p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                    {CATEGORY_LIST.map(({ name, imageUrl }) => (
                        <CategoriesCard key={name} label={name} image={imageUrl} />
                    ))}
                </div>
                <div className="flex justify-center">
                    <div className="flex flex-col sm:flex-row flex-1 gap-4 px-4 py-3 max-w-150 justify-center items-center">
                        <Button variant="secondary">
                            <span className="truncate">Skip for now</span>
                        </Button>
                        <Button variant="primary" >
                            <span className="truncate">Done</span>
                        </Button>
                    </div>
                </div>
            </main>
        </div>
    )
}
