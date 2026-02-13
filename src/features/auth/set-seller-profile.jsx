import LoginHeader from "../../shared/ui/login-header";
import Button from "../../shared/ui/button";
import { useState } from "react";
import RegionCard from "../../shared/ui/region-card";
import { useRef } from "react";
import AudienceCard from "../../shared/ui/audience-card";
import { useNavigate } from "react-router-dom";
import TextArea from "../../shared/ui/text-area";

export default function SetSellerProfile() {
    const navigate = useNavigate();
    const [deliveryRegion, setDeliveryRegion] = useState("local");
    const [targetAudience, setTargetAudience] = useState("retail");
    const [_, setImageFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null)
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (file && file.type.substring(0, 5) === "image") {
            setImageFile(file);
            setPreviewUrl(URL.createObjectURL(file));
        } else {
            setImageFile(null);
            setPreviewUrl(null);
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        navigate('/home')
    }
    return (
        <div className="bg-background-light text-primary min-h-screen font-display">
            <div className="layout-container flex h-full grow flex-col">
                <LoginHeader />
                <form onSubmit={handleSubmit} className="flex flex-1 justify-center py-8 px-4">
                    <div className="layout-content-container flex flex-col max-w-200 flex-1 gap-6">
                        <div className="flex flex-col gap-2 px-2">
                            <h1 className="text-primary text-3xl font-black leading-tight tracking-[-0.033em]">Set Up Your Shop Profile</h1>
                            <p className="text-secondary text-base">Tell us more about your business to help buyers find your shop and understand your reach.</p>
                        </div>
                        <div className="bg-white rounded-xl border border-[#e7edf3] overflow-hidden shadow-sm">
                            <h2 className="text-primary text-xl font-bold px-6 pt-6 pb-2">Brand Identity</h2>
                            <div className="flex p-4 w-full flex-row max-sm:flex-col gap-6 items-center justify-between">
                                <div className="flex gap-6 items-center">
                                    <div className="border-2 border-dashed border-border aspect-square rounded-lg min-h-32 w-32 flex items-center justify-center" data-alt="Placeholder for shop logo upload area">
                                        {
                                            previewUrl ? (<img src={previewUrl} alt="Preview" className="w-full h-full rounded-lg" />) : (<span className="material-symbols-outlined text-slate-400 text-4xl">add_a_photo</span>)
                                        }
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-primary text-lg font-bold">Shop Logo</p>
                                        <p className="text-secondary text-sm">Upload a high-resolution logo (PNG or JPG). Min 500x500px.</p>
                                    </div>
                                </div>
                                <Button onClick={() => fileInputRef.current.click()} variant="primary">
                                    <span className="truncate">Upload Logo</span>
                                </Button>
                                <input ref={fileInputRef} type="file" accept="image/*" placeholder="Upload file" onChange={handleFileChange} className="hidden" />
                            </div>
                            <div className="px-6 pb-6">
                                <TextArea label={"Shop Description"} placeholder={"Describe what you sell and what makes your shop unique..."} />
                            </div>
                        </div>
                        <div className="bg-white rounded-xl border border-[#e7edf3] p-6 shadow-sm">
                            <h2 className="text-primary text-xl font-bold mb-4">Business Focus</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col gap-2">
                                    <label className="block text-sm font-bold mb-2">Primary Business Category</label>
                                    <select className="h-12 px-4 rounded-lg border border-border bg-white focus:ring-2 focus:ring-primary-background transition-all">
                                        <option>Select a category</option>
                                        <option>Electronics & Gadgets</option>
                                        <option>Fashion & Apparel</option>
                                        <option>Beauty & Health</option>
                                        <option>Sports & Outdoors</option>
                                        <option>Home & Living</option>
                                        <option>Art & Collectibles</option>
                                        <option>General</option>
                                    </select>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="block text-sm font-bold mb-2">Target Audience</label>
                                    <div className="flex flex-row max-sm:flex-col gap-2">
                                        <AudienceCard title="Retail (B2C)" selected={targetAudience === "retail"} onSelect={() => setTargetAudience("retail")} />
                                        <AudienceCard title="Wholesale (B2B)" selected={targetAudience === "wholesale"} onSelect={() => setTargetAudience("wholesale")} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl border border-[#e7edf3] p-6 shadow-sm">
                            <h2 className="text-primary text-xl font-bold mb-2">Delivery Preferences</h2>
                            <p className="text-secondary text-sm mb-6">Where are you able to fulfill orders?</p>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <RegionCard
                                    title="Local Only"
                                    description="Within your city or 50km radius."
                                    icon="near_me"
                                    selected={deliveryRegion === "local"}
                                    onSelect={() => setDeliveryRegion("local")}
                                />

                                <RegionCard
                                    title="Provincial"
                                    description="Deliver anywhere in the province."
                                    icon="map"
                                    selected={deliveryRegion === "provincial"}
                                    onSelect={() => setDeliveryRegion("provincial")}
                                />

                                <RegionCard
                                    title="National"
                                    description="Deliver anywhere in the country."
                                    icon="public"
                                    selected={deliveryRegion === "national"}
                                    onSelect={() => setDeliveryRegion("national")}
                                />
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <div className="flex flex-col sm:flex-row flex-1 gap-4 px-4 py-3 max-w-150 justify-center items-center">
                                <Button variant="secondary">
                                    <span className="truncate">Skip for now</span>
                                </Button>
                                <Button variant="primary" type="submit">
                                    <span className="truncate">Done</span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
