import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export default function ProductDetails() {
    return(
        <div className="bg-background-light text-slate-900 font-display antialiased min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 w-full max-w-7xl mx-auto px-4 lg:px-8 py-6">
                <nav className="flex flex-wrap gap-2 mb-6 text-sm">
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#">Home</a>
                    <span className="text-slate-400">/</span>
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#">Electronics</a>
                    <span className="text-slate-400">/</span>
                    <a className="text-slate-500 hover:text-primary transition-colors" href="#">Audio</a>
                    <span className="text-slate-400">/</span>
                    <span className="text-slate-900 font-medium">Headphones</span>
                </nav>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16">
                    <div className="lg:col-span-7 flex flex-col gap-4">
                        <div className="w-full aspect-4/3 bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm relative group">
                            <div className="w-full h-full bg-center bg-contain bg-no-repeat transition-transform duration-500 hover:scale-105 cursor-zoom-in" data-alt="Close up of high-end wireless headphones on a light background" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAl0VgfHPhH-8Da1vvGAZ1pi1aTrG5ifD4LG6Xxzzwk7RLRmIBiUnYyrmaNBSfKq_2SmszbS_NJTUAzydWom5HQFtW_lAPEFe4D6UYgVa9koE5V2u-Rt0kFeC2ucpEct7FpFbP_dmeZqG4W370Eb9cB4e8flpyfMPEE6V-A-LLFjFVmAE-Vf33pV2hE57v83plQVaXOyCp3_b_HgwwoBS5OlRcMXpj7WqZkoNw7z1mW0fcXZHNTjH43AhyAIAOonRrnW-Gxzk310A4');">
                            </div>
                            <div className="absolute top-4 right-4">
                                <button className="w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center text-slate-400 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined text-[20px] font-variation-settings-'FILL'1">favorite</span>
                                </button>
                            </div>
                        </div>
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                            <button className="shrink-0 w-20 h-20 rounded-lg border-2 border-primary overflow-hidden bg-white">
                                <div className="w-full h-full bg-center bg-cover" data-alt="Front view of headphones" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDSkTG7HEeWzTda_kkob4Btucg_m74IRQLEzPK8leatDrwsYfZNq0-Uku2IFrCqqGgZa-IhLcZVq5MxEDuDk50BAM9pdrFFv_3c8jr5DKgTq6j57OKGkeOch88ZaeYq2jAp1q9fNPzZ5V6iOD1A9WLCOWp35CXhlyCUFi0bmED1JHQfEdcP7xfAbsN9pFXJ9gGtt6Pg1vsu2Kk9HCziMPkBMM7k2H_8g9OwZ-TPzMPXcKIrSX6Tb6twjjDvUeuIS8vG-asptOgZOgc');"></div>
                            </button>
                            <button className="shrink-0 w-20 h-20 rounded-lg border-2 border-transparent hover:border-slate-300 overflow-hidden bg-white">
                                <div className="w-full h-full bg-center bg-cover" data-alt="Side profile of headphones showing ear cushion" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnZCxYhpcA_-dUXvMIDH0GhXDQPiYQVE3jImw4_5ob10vchjh3jJqYQwgdx_Skb5awfyYHvb0IChv_9Y5TxD1txBdzt3B6gh-UQ4sQhxJN32Ifm0SMSfepP7fn0u-Fhu6zN-uaOTuqdTMIca4pU705SKwHl72enYUO2pu342N00NByls8wUIF8Cl6kjiHn3Ea_ctBaxYwbGwrrNCWwU80rfM1kUHPO-NdariIIgmkEi1hiflSrMUnZsxNePwe6OZvEbx-xy5sfhFo');"></div>
                            </button>
                            <button className="shrink-0 w-20 h-20 rounded-lg border-2 border-transparent hover:border-slate-300 overflow-hidden bg-white">
                                <div className="w-full h-full bg-center bg-cover" data-alt="Headphones resting on a wooden table" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDFKjLTePcD1aRfNEWNC5xH8n6oHKyUxmRR6LVIiJWjWSSN8dLIBvuiDIUcwxXAUXK-JP538hP0ZKKN2UbFp7CXU83H977xv3rbpPzBY6YTgkRtAQ2t0IGYvF2V9d9UGcVHgLGBMa8Ke9rO9sKUocESCJXCe2JZXxIyepJv1xMGJ8gjMm49i2MEU8CJw8YNGxBm0LyS7pBTxSaD5TXDTKI1s3i_HuHphMM4HLk-Yvv1szb5OAPda-jYXw6Kh3f55QIzZO946M3XUU8');"></div>
                            </button>
                            <button className="shrink-0 w-20 h-20 rounded-lg border-2 border-transparent hover:border-slate-300 overflow-hidden bg-white">
                                <div className="w-full h-full bg-center bg-cover" data-alt="Lifestyle shot of person wearing headphones" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6hFejnCcLkYw2_lrbliwdAFumL7UI3nBTWGG6ygz92gqKRiagChrZPwIounIU58GsiEUy9pxdjR7-LAtzhHelzsSlqcxoGaFIrk2CSTs68Z0x2dsIjr0okalg54p4tCOkEE3J97g0fpeq2nTPC9Ge_FjG8ck_UL12TSlN1KM4zRzlTazp-P67jsZN7UGdaQm_LEj3f-CpIVCu5N8ZbsEJqdgZyrFO29Y9dtyZLV7E1i42EueOCBcFIydf1ds70Q4noXZhiPrZJdI');"></div>
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2 mb-1">
                                <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">Best Seller</span>
                                <span className="text-green-600 text-xs font-bold flex items-center gap-1">
                                    <span className="material-symbols-outlined text-[14px]">check_circle</span> In Stock
                                </span>
                            </div>
                            <h1 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">Sony WH-1000XM5 Wireless Noise Canceling Headphones</h1>
                            <div className="flex items-center gap-2 mt-1">
                                <div className="flex text-amber-400">
                                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                    <span className="material-symbols-outlined text-[18px] fill-current">star_half</span>
                                </div>
                                <a className="text-sm text-primary hover:underline font-medium" href="#reviews">4.8 (2,453 reviews)</a>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-sm">
                            <div className="flex items-baseline gap-3 mb-4">
                                <span className="text-4xl font-bold text-slate-900">$348.00</span>
                                <span className="text-lg text-slate-400 line-through">$399.99</span>
                                <span className="text-sm font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded">-13%</span>
                            </div>
                            <div className="flex items-center gap-3 py-3 border-y border-slate-100 mb-6">
                                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-slate-500">
                                    <span className="material-symbols-outlined">storefront</span>
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-500">Sold by</p>
                                    <p className="text-sm font-bold text-slate-900 hover:text-primary cursor-pointer">AudioWorld Official</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-500">Seller Rating</p>
                                    <p className="text-sm font-bold text-slate-900">98% Positive</p>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div>
                                    <span className="text-sm font-semibold text-slate-900 mb-2 block">Color: <span className="font-normal text-slate-500">Midnight Black</span></span>
                                    <div className="flex gap-2">
                                        <button className="w-8 h-8 rounded-full bg-black ring-2 ring-offset-2 ring-primary ring-offset-white"></button>
                                        <button className="w-8 h-8 rounded-full bg-slate-200 hover:ring-2 hover:ring-offset-2 hover:ring-slate-300 transition-all"></button>
                                        <button className="w-8 h-8 rounded-full bg-blue-900 hover:ring-2 hover:ring-offset-2 hover:ring-blue-800 transition-all"></button>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-sm font-semibold text-slate-900 mb-2 block">Configuration</span>
                                    <div className="grid grid-cols-2 gap-2">
                                        <button className="px-4 py-2 border-2 border-primary bg-primary/5 text-primary rounded-lg text-sm font-semibold">Headphones Only</button>
                                        <button className="px-4 py-2 border border-slate-200 hover:border-slate-400 text-slate-700 rounded-lg text-sm font-medium">Bundle + Case</button>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col gap-3">
                                <div className="flex gap-4">
                                    <div className="w-24">
                                        <label className="sr-only">Quantity</label>
                                        <div className="relative flex items-center rounded-lg border border-slate-300">
                                            <button className="w-8 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-l-lg" type="button">
                                                <span className="material-symbols-outlined text-[16px]">remove</span>
                                            </button>
                                            <input className="w-full h-10 text-center border-none bg-transparent p-0 focus:ring-0 text-slate-900 font-medium" readonly="" type="text" value="1" />
                                            <button className="w-8 h-10 flex items-center justify-center text-slate-600 hover:bg-slate-100 rounded-r-lg" type="button">
                                                <span className="material-symbols-outlined text-[16px]">add</span>
                                            </button>
                                        </div>
                                    </div>
                                    <button className="flex-1 bg-primary hover:bg-blue-600 text-white font-bold h-10 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2">
                                        <span className="material-symbols-outlined text-[20px]">shopping_cart</span>
                                        Add to Cart
                                    </button>
                                </div>
                                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold h-10 rounded-lg transition-colors">
                                    Buy Now
                                </button>
                            </div>
                        </div>
                        <div className="text-sm text-slate-600 space-y-2 pl-1">
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary text-[20px]">bolt</span>
                                <span>30-hour battery life with quick charging</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary text-[20px]">graphic_eq</span>
                                <span>Industry-leading noise cancellation</span>
                            </div>
                            <div className="flex gap-3">
                                <span className="material-symbols-outlined text-primary text-[20px]">call</span>
                                <span>Crystal clear hands-free calling</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-16">
                    <div className="border-b border-slate-200 mb-8">
                        <nav className="flex gap-8 -mb-px">
                            <button className="border-b-2 border-primary text-primary font-bold py-4 px-1 text-sm">Description</button>
                            <button className="border-b-2 border-transparent hover:border-slate-300 text-slate-500 hover:text-slate-700 font-medium py-4 px-1 text-sm transition-colors">Specifications</button>
                            <button className="border-b-2 border-transparent hover:border-slate-300 text-slate-500 hover:text-slate-700 font-medium py-4 px-1 text-sm transition-colors">Shipping &amp; Returns</button>
                        </nav>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 text-slate-700 leading-relaxed">
                        <div className="lg:col-span-2">
                            <h3 className="text-xl font-bold text-slate-900 mb-4">Experience the Next Level of Silence</h3>
                            <p className="mb-6">
                                The Sony WH-1000XM5 headphones rewrite the rules for distraction-free listening. With two processors controlling 8 microphones, Auto NC Optimizer for automatically optimizing noise canceling based on your wearing conditions and environment, and a specially designed driver unit, they deliver industry-leading noise canceling.
                            </p>
                            <p className="mb-6">
                                From airplane noise to people's voices, the WH-1000XM5 wireless headphones with multiple microphone noise canceling keep out more high and mid frequency sounds than ever. And with Auto NC Optimizer, noise canceling is automatically optimized based on your wearing conditions and environment.
                            </p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                                <div className="bg-white p-4 rounded-lg border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Magnificent Sound</h4>
                                    <p className="text-sm">Engineered to perfection with the new Integrated Processor V1.</p>
                                </div>
                                <div className="bg-white p-4 rounded-lg border border-slate-100">
                                    <h4 className="font-bold text-slate-900 mb-2">Crystal Clear Calls</h4>
                                    <p className="text-sm">Precise Voice Pickup Technology uses four beamforming microphones.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-slate-50 p-6 rounded-xl h-fit">
                            <h4 className="font-bold text-slate-900 mb-4 border-b border-slate-200 pb-2">Technical Specs</h4>
                            <ul className="space-y-3 text-sm">
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Weight</span>
                                    <span className="font-medium">250g</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Bluetooth</span>
                                    <span className="font-medium">Version 5.2</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Battery Life</span>
                                    <span className="font-medium">Max 30 hrs (NC ON)</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Charging Time</span>
                                    <span className="font-medium">Approx. 3.5 hrs</span>
                                </li>
                                <li className="flex justify-between">
                                    <span className="text-slate-500">Frequency Response</span>
                                    <span className="font-medium">4Hz-40,000Hz</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="scroll-mt-24 mb-16" id="reviews">
                    <h2 className="text-2xl font-bold text-slate-900 mb-8">Customer Reviews</h2>
                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="w-full lg:w-1/3">
                            <div className="bg-white p-6 rounded-xl border border-slate-200">
                                <div className="flex items-end gap-2 mb-4">
                                    <span className="text-5xl font-black text-slate-900">4.8</span>
                                    <div className="flex flex-col mb-1">
                                        <div className="flex text-amber-400 text-sm">
                                            <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[20px] fill-current">star</span>
                                            <span className="material-symbols-outlined text-[20px] fill-current">star_half</span>
                                        </div>
                                        <span className="text-sm text-slate-500">Based on 2,453 reviews</span>
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="w-3 font-medium text-slate-700">5</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[81%] rounded-full"></div>
                                        </div>
                                        <span className="w-8 text-right text-slate-500">81%</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="w-3 font-medium text-slate-700">4</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[12%] rounded-full"></div>
                                        </div>
                                        <span className="w-8 text-right text-slate-500">12%</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="w-3 font-medium text-slate-700">3</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[4%] rounded-full"></div>
                                        </div>
                                        <span className="w-8 text-right text-slate-500">4%</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="w-3 font-medium text-slate-700">2</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[1%] rounded-full"></div>
                                        </div>
                                        <span className="w-8 text-right text-slate-500">1%</span>
                                    </div>
                                    <div className="flex items-center gap-3 text-sm">
                                        <span className="w-3 font-medium text-slate-700">1</span>
                                        <div className="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden">
                                            <div className="h-full bg-primary w-[2%] rounded-full"></div>
                                        </div>
                                        <span className="w-8 text-right text-slate-500">2%</span>
                                    </div>
                                </div>
                                <button className="w-full mt-6 py-2.5 border border-slate-300 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors">Write a Review</button>
                            </div>
                        </div>
                        <div className="flex-1 space-y-6">
                            <div className="border-b border-slate-100 pb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-700 font-bold">JD</div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">John Doe</p>
                                            <p className="text-xs text-slate-500">Verified Purchase • 2 days ago</p>
                                        </div>
                                    </div>
                                    <div className="flex text-amber-400 text-sm">
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                    </div>
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Absolutely incredible noise cancelling</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    I upgraded from the XM3s and the difference is noticeable. The comfort is top tier, I can wear these for 8 hours straight while working without any ear fatigue. The call quality is also significantly improved.
                                </p>
                            </div>
                            <div className="border-b border-slate-100 pb-6">
                                <div className="flex items-center justify-between mb-2">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold">SM</div>
                                        <div>
                                            <p className="text-sm font-bold text-slate-900">Sarah Miller</p>
                                            <p className="text-xs text-slate-500">Verified Purchase • 1 week ago</p>
                                        </div>
                                    </div>
                                    <div className="flex text-amber-400 text-sm">
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] fill-current">star</span>
                                        <span className="material-symbols-outlined text-[18px] text-slate-300">star</span>
                                    </div>
                                </div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Great sound, but the case is big</h4>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    The sound profile is excellent out of the box. My only gripe is that they don't fold up as compact as the previous models, so the case takes up quite a bit of space in my bag.
                                </p>
                            </div>
                            <button className="text-primary font-medium text-sm hover:underline">Show all 2,453 reviews</button>
                        </div>
                    </div>
                </div>
                <div className="mb-8">
                    <h2 className="text-2xl font-bold text-slate-900 mb-6">Related Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square bg-slate-50 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Black wireless headphones floating" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAqnAMT259nTw9WbZev67v4NtAKzlmGqPFt5FJb62QJEHnA9AFXVeeD6ytD44r-3g5xfDXRL1fRSc_psCmYh7n9-_nB9y4hpqVJMmTblDaJvmkOFqxp_Pv60zCiQtbWZvw2anbh1QsoMTCivSIO4XJQSybzb5tLm18Gmr18aGjVlSx2D53-9qBrDwxdP8wkdI7GhOxjA2mOhy2qjzpLmQ_mxwDN409gC9K3EsrFLwpc2LUrT-MgYB9ip6wVSysjwx6trlfXf6-DENA');"></div>
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-red-500">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 truncate">Beats Studio Pro</h3>
                                <p className="text-sm text-slate-500 mb-2">Wireless Noise Cancelling</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-primary">$179.99</span>
                                    <div className="flex items-center text-amber-400 text-xs">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="text-slate-500 ml-1">4.5</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square bg-slate-50 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Apple AirPods Max Silver" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWacUatbIraa1pW6tgDmpkJFflMLkLMZd-xCyQzjnc1CghfvJqlPqqRJakHnEnTDDw-yZNXHjJjnYD3mFmRJGzatA_UbcxQrEp0Gg0vIHjmDrnJTeDxzXHFQb_OQBhkdaRaFvw80zKqMiX9uy2vl0up37dKH28GLxrBhTEhaT4ny-JkaSoRpTGgawbbi00BTrveun7EvubzWLXU83OyPmyCvH12uBFd-9Oufk1l38pmmeSB1Unh-ZUM-bsMnKvRboF8MlH-Ps5WTI');"></div>
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-red-500">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 truncate">Apple AirPods Max</h3>
                                <p className="text-sm text-slate-500 mb-2">Over-Ear Headphones</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-primary">$549.00</span>
                                    <div className="flex items-center text-amber-400 text-xs">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="text-slate-500 ml-1">4.8</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square bg-slate-50 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Bose headphones on a stand" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAym-AvkQfTKmkMr9laj6m3muaYBQfE2n5l0W4HLoGrZPXIE8amLmbsqcaZrLCjdGFAWKgpn3xnbMXUrJzlIZIBHmGUMP0Z95XkKCKu4swVf0n3wni6I1BHauhG1WxjEybcDGvjxY5oRkZWLFL9cweO-otcuuEGGrcodTPeS4O8VgWb8T3FdHNEmq67XgprUybqXGRFOAl6txl0JsRn30dqzJ0XVVPmkpqzCRR-sVeP-8IrfKkhr3fO0keOQmQlS-ya6nj7wbIMzd8');"></div>
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-red-500">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 truncate">Bose QuietComfort 45</h3>
                                <p className="text-sm text-slate-500 mb-2">Bluetooth Wireless</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-primary">$329.00</span>
                                    <div className="flex items-center text-amber-400 text-xs">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="text-slate-500 ml-1">4.7</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                            <div className="aspect-square bg-slate-50 relative overflow-hidden">
                                <div className="w-full h-full bg-center bg-cover group-hover:scale-105 transition-transform duration-500" data-alt="Sennheiser headphones black" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuC6aBbXPxXJKsr0WKt3aEa5_1CwWG3XDHd4I75Sr2POQCM-SSEF-_h8OVZXKi6GEe9mukYhMOsqRPjC1cKhbco9w6fWIiWh-WahUiIxatceCnNin1pDiNvtS4LSMKAOOoeWvQfm5A6wteByclbR5VtD1_MIuCRW9eUji_pgdcBmu-Wjg6ynAXDfEpdoom0qPR-edTGi8AOQ-pA_MFDHYKz48KCfrhJPvIQ8Nm87eu4l46ettc7SJf0_fG_x0sYRQZwAzz07TlilLwc');"></div>
                                <button className="absolute top-2 right-2 w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-slate-400 hover:text-red-500">
                                    <span className="material-symbols-outlined text-[18px]">favorite</span>
                                </button>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-slate-900 truncate">Sennheiser Momentum 4</h3>
                                <p className="text-sm text-slate-500 mb-2">Premium Sound</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-bold text-primary">$299.95</span>
                                    <div className="flex items-center text-amber-400 text-xs">
                                        <span className="material-symbols-outlined text-[14px] fill-current">star</span>
                                        <span className="text-slate-500 ml-1">4.6</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}