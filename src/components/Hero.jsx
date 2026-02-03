import Button from "./ui/Button"
import Ping from "./ui/PingUI";

const HeroSection = () => {
    return (
        <section className="relative w-full overflow-hidden rounded-3xl bg-slate-900 shadow-2xl">
            <div className="absolute inset-0">
                <div
                    className="h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDXBv9tJ1qOu01pP9gGTkZWYpIqSb8lwmgUo-Hz5L6cPIlZs5JQaNI2pGoopVn4F7xwcztgPoCBd-OdgFR_jmv42vj_mlgjWjSGav81ShPq5KAGr8xNOapPfwabzjpkEMt4XpkVnJRXpmHDTdUNRXlPNdJ5ndnpPvyrF14bGAQBA04DZZRF-ATGtEiKwsLSzKwgQ9OXnfThyxEBL7db6XtSF-0wYvF-QoeVPO7oVhKCwOY54xUv4wdE5lmJ6E5QNDtZGz2ccj2l-f4')" }}
                />
                <div className="absolute inset-0 bg-linear-to-r from-slate-950 via-slate-950/60 to-transparent" />
            </div>
            <div className="relative z-10 flex min-h-125 flex-col items-start justify-center p-8 md:p-16 lg:p-20 max-w-3xl">
                <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-4 py-1.5 border border-white/20">
                    <Ping color={"bg-blue-accent"} />
                    <span className="text-xs font-bold uppercase tracking-widest text-white">Exclusive Summer Drop</span>
                </div>
                <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl mb-6 leading-[1.1]">
                    Evolve Your <br />
                    <span className="text-primary-background italic">Digital Life.</span>
                </h1>
                <p className="text-lg text-slate-300 mb-10 leading-relaxed max-w-xl">
                    Experience the next generation of premium tech and accessories. Curated by experts, delivered with care.
                </p>
                <div className="flex max-sm:flex-wrap gap-5">
                    <Button>
                        Shop Now
                    </Button>
                    <Button variant="transparent">
                        Learn More
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default HeroSection;