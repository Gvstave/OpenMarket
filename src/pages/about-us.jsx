import Button from "../shared/ui/button";
import SectionBadge from "../shared/ui/section-badge";
import SectionHeader from "../features/marketing/section-header";
import TeamMemberCard from "../features/marketing/team-member-card";
import MissionCard from "../features/marketing/mission-card";
import JourneyCard from "../features/marketing/journey-card";
import StatsCard from "../features/marketing/stats-card";
import { teamMembers } from "../utils/team_members";
import { missionItems } from "../utils/mission_items";
import { journeyMilestones } from "../utils/journey_milestones";
import { stats } from "../utils/stats";
import { sectionHeaders } from "../utils/section_headers";
import CallToActionSection from "../shared/ui/call-to-action-section";

export default function AboutUs() {
    return (
        <div className="bg-background-light">
            <section className="relative pt-20 pb-32 overflow-hidden bg-grid-pattern">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <SectionBadge color={"bg-blue-accent"} text={"Our vision for Commerce"} />
                        <h1 className="text-5xl md:text-7xl font-black text-primary leading-[1.1] tracking-tight mb-8 text-balance">
                            Building the infrastructure for the next <span className="text-primary-background">Generation entrepreneurs</span>.
                        </h1>
                        <p className="text-xl md:text-2xl text-secondary leading-relaxed max-w-3xl mx-auto mb-12">
                            We're on a mission to dismantle the barriers to local trade, creating a country where anyone, anywhere can launch and grow a business.
                        </p>
                    </div>
                </div>
                <div className="mx-auto px-6">
                    <div className="relative rounded-lg overflow-hidden shadow-2xl border border-border">
                        <img alt="Collaborative workspace" className="w-full h-125 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAnNsjiDsE0UnsTYLFW7GauNYIF95juQfUAURNwFVH762LJ_KSR--qSEo1XdRATuIGl1TIpoObRMGuJ01Z3_dIEeyMinqZ7ESBoPbu187SD4-3dSh9XrjtXzibr7wjL8NuBbAfgQD7ULfrQ2uCRLtSddH-0mDp5wEWY6Kzl2-LYenGSPSYK8NnTAD9hW9fQ7tkfK2NthMxgCTtWZv_m4GabvVeiejZAyfDDeeCc_637z82HHLuHUalXoJSoZTqf8KCxHS9Z62Z7Uu4" />
                        <div className="absolute inset-0 bg-linear-to-t from-primary to-transparent"></div>
                        <div className="absolute bottom-12 left-12 right-12 flex flex-col md:flex-row justify-between items-end gap-6">
                            <div className="max-w-lg">
                                <h3 className="text-white text-3xl font-bold mb-2">Our National Headquarters</h3>
                                <p className="text-border text-lg">A space designed for innovation, collaboration, and building the future of open trade.</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl text-center">
                                    <div className="text-3xl font-bold text-white mb-1">2+</div>
                                    <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">Provinces</div>
                                </div>
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                                    <div className="text-xs text-white/70 uppercase tracking-widest font-semibold">Uptime</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center max-w-6xl mx-auto">
                        <div className="order-2 lg:order-1">
                            <div className="relative">
                                <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                                <img alt="Mission imagery" className="relative rounded-2xl shadow-xl z-10 aspect-4/5 object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJaZJ0bDfou1qFSJX0Q2tQw5HUNwWo8mx_VydSEseFmGukjz8jIq-ZiASfhEtLA7GyXpdlXnG3S6HWPX4qJ96Cd6BxtOrlzxeUXy01GGKoWuaBscma-gxPFXxQRqIPbFVQP2-TnHPRNZANOMEEsULJT61yaR5E_FiS2DiZnK_P9gPhT2dX6mbrUCCEBAW1iGKt3I9HnWdn3fXzR6Oqb5TPQA2rUpDXbBnujuc-UHLRgc4jDtUCtZb7d-79E1PkexS-IoWJcZFPLrI" />
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <SectionHeader
                                subtitle={sectionHeaders.missionSection.subtitle}
                                title={sectionHeaders.missionSection.title}
                            />
                            <p className="text-lg text-secondary mb-10 leading-relaxed">
                                We believe that the best products don't always come from the biggest brands. Our platform is engineered to surface quality, authenticity, and innovation from creators who were previously excluded from the digital economy.
                            </p>
                            <div className="space-y-8">
                                {missionItems.map((item) => (
                                    <MissionCard
                                        key={item.id}
                                        icon={item.icon}
                                        title={item.title}
                                        description={item.description}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div className="max-w-2xl">
                            <h2 className="text-sm font-black text-primary-background uppercase tracking-[0.2em] mb-6">{sectionHeaders.journeySection.subtitle}</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">{sectionHeaders.journeySection.title}</h3>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-16 items-start">
                        <div className="space-y-24">
                            {journeyMilestones.slice(0, 1).map((milestone) => (
                                <JourneyCard
                                    key={milestone.id}
                                    number={milestone.number}
                                    year={milestone.year}
                                    title={milestone.title}
                                    description={milestone.description}
                                    image={milestone.image}
                                />
                            ))}
                        </div>
                        <div className="space-y-24 pt-0 md:pt-48">
                            {journeyMilestones.slice(1).map((milestone) => (
                                <JourneyCard
                                    key={milestone.id}
                                    number={milestone.number}
                                    year={milestone.year}
                                    title={milestone.title}
                                    description={milestone.description}
                                    image={milestone.image}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-20 px-4">
                <div className="container mx-auto max-w-6xl">
                    <SectionHeader
                        subtitle={sectionHeaders.teamSection.subtitle}
                        title={sectionHeaders.teamSection.title}
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member) => (
                            <TeamMemberCard key={member.id} member={member} />
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-20 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-6 max-w-6xl">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
                        {stats.map((stat) => (
                            <StatsCard key={stat.id} value={stat.value} label={stat.label} />
                        ))}
                    </div>
                </div>
            </section>
            <CallToActionSection
                title="Ready to grow with us?"
                description="Join thousands of sellers who have found their home on OpenMarket. It takes less than 5 minutes to set up your shop."
                primaryAction={{
                    label: "Become a Seller",
                    variant: "secondary",
                    onClick: () => console.log("Seller signup"),
                }}
                secondaryAction={{
                    label: "Browse Marketplace",
                    variant: "transparent",
                    onClick: () => console.log("Browse marketplace"),
                }}
            />
        </div>
    )
}

