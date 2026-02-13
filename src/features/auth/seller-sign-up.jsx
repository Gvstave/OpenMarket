import Button from "../../shared/ui/button"
import { useNavigate } from "react-router-dom"
import Input from "../../shared/ui/input";

export default function SellerSignUp() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Add API call before navigation
        navigate('/set-seller-profile');
    }
    return (
        <div className="bg-white rounded-xl border border-[#e7edf3] p-8 mx-4 shadow-sm">
            <h2 className="text-primary text-2xl font-bold leading-tight tracking-[-0.015em] pb-6 border-b border-[#e7edf3] mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined">person_add</span>
                Seller Account Details
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Input label="Shop Name" placeholder="e.g. Modern Collectibles" />
                    <Input label="Business Tax ID (TPIN)" placeholder="XX-XXXXXXX" disabled/>
                </div>
                <Input label="Business Email" placeholder="hello@yourshop.com" type="email" />
                <Input label="password" placeholder="Minimum 8 characters" isVisible />
                <div className="flex items-center gap-3 py-2">
                    <input className="w-5 h-5 text-primary border-border rounded focus:ring-primary cursor-pointer" id="terms" type="checkbox" />
                    <label className="text-secondary text-sm leading-relaxed" htmlFor="terms">
                        I agree to the <a className="text-primary-background font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary-background font-semibold hover:underline" href="#">Privacy Policy</a> including MarketOpen's seller guidelines.
                    </label>
                </div>
                <div className="pt-4">
                    <Button className="w-full h-14 bg-primary-background hover:bg-primary-background/90 text-white font-bold text-lg transition-all flex items-center justify-center gap-2 rounded-lg shadow-sm" type="submit">
                        <span>Continue</span>
                        <span className="material-symbols-outlined">arrow_forward</span>
                    </Button>
                </div>
            </form>
        </div>
    )
}
