import Logo from "./Logo";
import Search from "./Search";
import IconButton from "./IconButton";
import { NavLink } from "react-router-dom";
import Ping from "./PingUI";
import PrimaryButton from "./PrimaryButton";

const NAVIGATION_LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'Deals',
        path: '/deals'
    },
    {
        name: 'Sell',
        path: '/sell'
    },
    {
        name: 'Help',
        path: '/help'
    }
]

const Header = () => {

    return (
        <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-360 items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
                <Logo />
                <div className="hidden md:flex flex-1 max-w-2xl px-4">
                    <Search />
                </div>
                <div className="flex items-center gap-2 sm:gap-4 shrink-0">
                    <nav className="hidden lg:flex items-center gap-6 mr-4">
                        {NAVIGATION_LINKS.map((linkItem) => (
                            <NavLink
                                key={linkItem.path}
                                to={linkItem.path}
                                className={({ isActive }) =>
                                    `transition-colors ${isActive
                                        ? "text-primary-background"
                                        : "text-primary hover:text-primary-background"
                                    }`
                                }
                            >
                                {linkItem.name}
                            </NavLink>
                        ))}
                    </nav>
                    <div className="text-border">
                        |
                    </div>
                    <div className="flex items-center gap-2">
                        <IconButton icon="notifications" />
                        <IconButton icon="shopping_cart">
                            <span className="absolute right-1.5 top-1.5 flex h-2 w-2">
                                <Ping color={"bg-orange-accent"}  />
                            </span>
                        </IconButton>
                        {/* <PrimaryButton label={"Sign In"} className={"ml-2 hidden sm:flex h-10"}  /> */}
                        <div className="h-8 w-8 rounded-full bg-slate-200 bg-cover bg-center" data-alt="User avatar placeholder" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAsUwtLhSRk8rhqMz4BmWOBGvDug3_fJGxtB6O9GUm8eeezwr3o70XJ2pcqgUKX9y0drT8oDiGczmIGwjrjra4mC1HzhjwoVksHLeXi_iVhwISycXPplluG7Qbft4Gw76JSw43DR-iuawcScSbV_GFxHtzBm0NPqLp_GjtMLtDjUaBAkKec5-asH0ACLF-7prVtJyqh-ScarpsSqLwJzR2onJ0guv9-YFDrzMA259eHwVor1_KxHDV6A8zZ6iZ3eHb1B2y5P1ZSBRA')" }}></div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;