import CallToActionSection from "../shared/ui/call-to-action-section";
import Search from "../shared/ui/search";
import HelpCategoryCard from "../shared/ui/help-category-card";
import FAQAccordion from "../shared/ui/faq-accordion";
import { helpCategories } from "../utils/help_categories";
import { FAQITEMS } from "../utils/faq_items";

export default function HelpCenter() {
    return (
        <div className="text-primary min-h-screen">
            <main>
                <section className="p-40 border-b border-border">
                    <div className="max-w-240 mx-auto px-6 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-8">Unified Help Center</h1>
                        <div className="max-w-2xl mx-auto">
                            <div className="relative group">
                                <Search placeholder="How can we help you?" showButton={false} className={"shadow-2xs border border-border/50 py-8 pl-2 text-lg"} />
                            </div>
                            <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-secondary">
                                <span>Popular:</span>
                                <a className="text-primary-background hover:underline underline-offset-4" href="#">Track order</a>
                                <a className="text-primary-background hover:underline underline-offset-4" href="#">Return policy</a>
                                <a className="text-primary-background hover:underline underline-offset-4" href="#">Change address</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="py-20 container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {helpCategories.map((category) => (
                            <HelpCategoryCard
                                key={category.id}
                                icon={category.icon}
                                title={category.title}
                                description={category.description}
                            />
                        ))}
                    </div>
                </section>
                <section className="pb-20 py-20 container mx-auto px-6 max-w-6xl">
                    <h2 className="text-3xl font-bold mb-8 px-2">Top FAQs</h2>
                    <div className="bg-white rounded-xl border border-border p-6 shadow-sm">
                        <FAQAccordion items={FAQITEMS} />
                    </div>
                </section>
                <CallToActionSection
                    title={"Still need help?"}
                    description={"Our support team is available 24/7 to help you with any issues you might be facing on the platform."}
                    primaryAction={{
                        label: "Live Chat",
                        variant: "secondary",
                        icon: "chat"
                    }}
                    secondaryAction={{
                        label: "Email Support",
                        variant: "transparent",
                        icon: "mail"
                    }}
                    />
            </main>
        </div>
    )
}

