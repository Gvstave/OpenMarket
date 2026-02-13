import LoginHeader from "../../shared/ui/login-header";
import { useNavigate } from "react-router-dom"
import Button from "../../shared/ui/button";
import Input from "../../shared/ui/input";

export default function BuyerSignUp() {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Add API call before navigation
        navigate('/set-buyer-profile');
    }
    return (
        <div className="bg-background-light text-primary min-h-screen flex flex-col" onSubmit={handleSubmit}>
            <div className="max-w-240 w-full flex flex-col gap-8">
                <div className="bg-white rounded-xl border border-[#e7edf3] p-8 mx-4 shadow-sm">
                    <h2 className="text-primary text-2xl font-bold leading-tight tracking-[-0.015em] pb-6 border-b border-[#e7edf3] mb-8 flex items-center gap-2">
                        <span className="material-symbols-outlined">person_add</span>
                        Buyer Account Details
                    </h2>
                    <form className="space-y-6">
                        <Input label="Full Name" type="text" placeholder="Enter your full name" />
                        <Input label="Email" type="email" placeholder="name@example.com" />
                        <Input label="Password" placeholder="Min. 8 characters" isVisible />
                        <div className="flex items-start gap-3 py-2">
                            <input className="mt-1 w-5 h-5 text-primary-background border-border rounded focus:ring-primary-background cursor-pointer" id="terms" type="checkbox" />
                            <label className="text-secondary text-sm leading-relaxed" htmlFor="terms">
                                I agree to the <a className="text-primary-background font-semibold hover:underline" href="#">Terms of Service</a> and <a className="text-primary-background font-semibold hover:underline" href="#">Privacy Policy</a>.
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
            </div>
        </div>
    )
}
