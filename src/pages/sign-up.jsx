import { useState } from "react";
import LoginHeader from "../shared/ui/login-header";
import { Link } from "react-router-dom";
import buyer from "../assets/images/buyer.png";
import seller from "../assets/images/seller.png";
import Card from "../shared/ui/participant-card";
import SellerSignUp from "../features/auth/seller-sign-up";
import BuyerSignUp from "../features/auth/buyer-sign-up";

export default function SignUp() {
    const [selectedParticipant, setSelectedParticipant] = useState("buyer");

    return (
        <div className="bg-background-light text-primary min-h-screen flex flex-col">
            <LoginHeader />
            <main className="flex-1 flex flex-col items-center py-10 px-4">
                <div className="max-w-240 w-full flex flex-col gap-8">
                    <div className="flex flex-wrap justify-between items-end gap-3 px-4">
                        <div className="flex min-w-72 flex-col gap-2">
                            <h1 className="text-4xl font-black font-display">Join openMarket</h1>
                            <p className="text-secondary text-lg">Choose how you want to participate in the marketplace.</p>
                        </div>
                        <Link to="/" className="hidden sm:flex items-center justify-center rounded-lg h-10 px-6 bg-primary-background/10 text-primary-background text-sm font-bold border border-primary-background/20 hover:bg-primary-background/20 transition-all">Already have an account? Log in</Link>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
                        <Card
                            isSelected={selectedParticipant === "buyer"}
                            onClick={() => setSelectedParticipant("buyer")}
                            image={buyer}
                            participant="Buyer"
                            description="Shop for unique items and track your orders"

                        />
                        <Card
                            isSelected={selectedParticipant === "seller"}
                            onClick={() => setSelectedParticipant("seller")}
                            image={seller}
                            participant="Seller"
                            description="Start your business and reach millions of customers"
                        />
                    </div>
                    {selectedParticipant === "seller" && <SellerSignUp />}
                    {selectedParticipant === "buyer" && <BuyerSignUp />}
                </div>
            </main>
        </div>
    );
}


{/* <div className="group relative flex flex-col gap-4 p-6 rounded-xl border-2 border-primary bg-primary/5 transition-all cursor-pointer ring-primary ring-offset-4">
                            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg overflow-hidden relative" data-alt="Small business owner packing an order" style={{ backgroundImage: `url(${seller})` }}>
                            </div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[#0d141b] text-xl font-bold leading-normal">Seller</p>
                                    <p className="text-[#4c739a] text-sm font-normal">Start your business and reach millions of customers</p>
                                </div>
                                <span className="material-symbols-outlined text-primary text-3xl opacity-100">check_circle</span>
                            </div>
                        </div> */}

