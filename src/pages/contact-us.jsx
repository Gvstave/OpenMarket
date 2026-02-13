import Button from "../shared/ui/button";
import ContactCard from "../features/contact/contact-card";
import AccordionItem from "../features/help/accordion-item";
import ContactForm from "../features/contact/contact-form";
import { contactInfo } from "../utils/contact_info";
import { FAQITEMS } from "../utils/faq_items";

export default function ContactUs() {
    return (
        <div className="relative flex min-h-screen w-full flex-col">
            <main className="flex-1 flex justify-center py-5 lg:py-10 px-4 lg:px-20">
                <div className="flex flex-col max-w-300 w-full gap-10">
                    <div className="flex flex-col-reverse lg:flex-row gap-8 items-center bg-white rounded-xl p-6 lg:p-10 ">
                        <div className="flex flex-col gap-6 lg:w-1/2 items-start">
                            <div className="flex flex-col gap-3 text-left">
                                <span className="text-primary-background font-bold tracking-wide uppercase text-sm">Customer Support</span>
                                <h1 className="text-primary text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em]">
                                    How can we help?
                                </h1>
                                <p className="text-secondary text-lg font-normal leading-relaxed">
                                    We are here to assist you with your orders, account inquiries, and selling questions. Our team is available 24/7.
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <Button variant="primary">
                                    <span className="material-symbols-outlined text-[20px]">chat</span>
                                    <span>Start a Chat</span>
                                </Button>
                                <Button variant="secondary">
                                    <span>Visit Help Center</span>
                                </Button>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 h-64 lg:h-auto min-h-75 bg-center bg-no-repeat bg-cover rounded-lg overflow-hidden relative" data-alt="Customer support representative helping a client at a modern desk" style={{ backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCt144AMMcHBWmZEKQaG60XZPi2cFauJS__DhgGln10Qnc_G78-BZBaIYj7wJqfW8lmnMCmyn6xTPcV_WoJZRuRM2Lx2I9a8W7mq0NLLsrkx8J0qf7xKmh4nf4-bARWs4W5N0uTCHK8CQKHN65Zt1kD0Z9Df2znGjtsH3RHeQ25bFYtcRU8bW2DWYAc0fwiXkMtg2sjCNV2tPaFzazbktIzlH9GA5K2zLKqpZx5x4ZrDYC5xLL619SlaVf0Yx_NWcgI5HTuNyN09Yw")` }}>
                            <div className="absolute inset-0 bg-linear-to-t from-primary/40 to-transparent"></div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                        <div className="lg:col-span-5 flex flex-col gap-8">
                            <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-6">Get in touch</h3>
                                <div className="flex flex-col gap-6">
                                    {contactInfo.map((info) => (
                                        <ContactCard key={info.id} icon={info.icon} title={info.title}>
                                            {info.type === "email" && (
                                                <>
                                                    <a className="text-base font-semibold text-primary hover:text-primary" href={info.href}>{info.label}</a>
                                                    <p className="text-xs text-secondary mt-1">{info.note}</p>
                                                </>
                                            )}
                                            {info.type === "phone" && (
                                                <>
                                                    <a className="text-base font-semibold text-primary hover:text-primary" href={info.href}>{info.label}</a>
                                                    <p className="text-xs text-secondary mt-1">{info.note}</p>
                                                </>
                                            )}
                                            {info.type === "address" && (
                                                <>
                                                    <p className="text-base font-semibold text-primary">{info.label}</p>
                                                    <p className="text-sm text-slate-500">{info.location}</p>
                                                </>
                                            )}
                                        </ContactCard>
                                    ))}
                                </div>
                                <div className="mt-8 w-full h-40 rounded-lg overflow-hidden relative bg-border">
                                    <img alt="Map showing location of headquarters in city center" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" data-alt="Map showing location of headquarters in city center" data-location="San Francisco, USA" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSXtqsMv7BGWHtngugFhCy1nalBCQ-zhsMjG-07OacPkBBAmeHoQbhCT8aYH1laPxflVLmbZVwXeR04ptOwPs8caFEsk2yWBvN9kUw2QxU2G2GzXQYGDQ57zDcvPU_eDAr8kmjCwJbQpBYqT8xd43iI0EnYXK-lZyITibJB-a6ZAk4rfHhnT7axwPcQ9HXPB8Ka_9XN96dhxwii2Of-E5siL50mKD8cvwzq8v9a5xeqtXSYjnQyA2p3-BqzDM-Go2rY7zVb8E7lpw" />
                                    <div className="absolute bottom-2 right-2 bg-white text-xs px-2 py-1 rounded shadow text-slate-700 font-medium pointer-events-none">
                                        OpenMarket HQ
                                    </div>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
                                <h3 className="text-xl font-bold text-primary mb-4">Common Questions</h3>
                                <div className="flex flex-col divide-y divide-border">
                                    {FAQITEMS.map((faq) => (
                                        <AccordionItem key={faq.id} question={faq.question} answer={faq.answer} />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-7">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </main>
            <div className="fixed bottom-6 right-6 z-40">
                <Button className="flex items-center justify-center size-14 rounded-full bg-primary text-white shadow-xl hover:scale-105 transition-transform hover:shadow-2xl active:scale-95 group">
                    <span className="material-symbols-outlined text-3xl group-hover:animate-pulse">chat_bubble</span>
                </Button>
            </div>
        </div>
    )
}

