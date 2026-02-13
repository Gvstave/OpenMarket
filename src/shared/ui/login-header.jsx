import Logo from "./Logo";
import { Link } from "react-router-dom";

const LoginHeader = () => {
    return (
        <header
            className="w-full border-b border-[#e7edf3] bg-white px-6 py-4 flex items-center justify-between z-10 sticky top-0 ">
            <Logo />
            <nav className="flex items-center gap-6 text-primary">
                <Link className="text-sm font-medium hover:text-primary-background transition-colors" to={"/home"}>Home</Link>
                <Link className="text-sm font-medium hover:text-primary-background transition-colors" to={"/help"}>Help</Link>
            </nav>
        </header>
    )
}

export default LoginHeader;