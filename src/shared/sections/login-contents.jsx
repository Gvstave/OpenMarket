import loginBackground from "../assets/images/login_background.png";
import Button from "../shared/ui/button";
import googleIcon from '../assets/icons/googleIcon.svg'
import { Link } from "react-router-dom";
import Input from "../shared/ui/input";

export default function LoginContents() {
    return (
        <div className="flex flex-col lg:flex-row" >
            <div className="hidden lg:flex lg:w-1/2 relative bg-slate-100 overflow-hidden items-center justify-center p-12">
                <div className="absolute inset-0 bg-cover bg-center opacity-90"
                    data-alt="Modern bright open market checkout counter with blurred background"
                    style={{ backgroundImage: `url(${loginBackground})` }}>
                </div>
                <div className="absolute inset-0 bg-linear-to-t from-primary/90 to-primary/40 mix-blend-multiply"></div>
                <div className="relative z-10 max-w-lg text-white">
                    <h1 className="text-4xl font-bold mb-6 leading-tight">Join the world's most open marketplace.</h1>
                    <p className="text-lg opacity-90 mb-8 font-light">Connect with millions of buyers and sellers. Secure, fast,
                        and built for growth.</p>
                    {/* <div class="flex gap-4">
                    <div class="flex -space-x-3">
                        <img alt="User avatar 1" class="w-10 h-10 rounded-full border-2 border-primary"
                            data-alt="Portrait of a smiling woman"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCh2CgAVDGRBKkPFnQ57eN8ruLlY46jNBJqDPXdRP-sq2S_foZawxl9aWMJJuiWDAY31444Fc7BhG61hJdRYzQGZvAaR8mYXBlXkMe51l0rV8jqePzRllNmKE_TTqrpkEa59FdbZSiPvN5uy6cVA3xaDqBXPbKDq4LvH6v05NabV70_A27tF9XEH55XTeFYBFdVNM4vRNMQITtUVTYuSxIs1pZRLwqsku595SlB3HXHCtCHWwVLhCnCi4v68KxoT8GGihOg5kLQB6k" />
                        <img alt="User avatar 2" class="w-10 h-10 rounded-full border-2 border-primary"
                            data-alt="Portrait of a man looking confident"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAElbKFEqcv9PU-JRQvdhaEpRoozY_wCidrQC3-kIns4ks4Koj60OPxwOXVNyYOG16w_7ZK6cBMKdXwShakJ01JEhy5p4o3b_qIvkDWWLNKOiAuSOZjNPuSzYxm6TkqLU2HtBV4q6pnPOvKwdtq6wAgHCJcPdeB9F5SALqrpqG2YyuD8YxiBkCT-fiFizu0JtzCPMPEhLyNGPUq-iGVXQe8lbEHccaGC31P2YS5B4e56qWwZbGV6n62CCzm1NbWU8tgdEjvTsufHeU" />
                        <img alt="User avatar 3" class="w-10 h-10 rounded-full border-2 border-primary"
                            data-alt="Portrait of a smiling man"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAdmJSRcVOLAfLZXz3tS5WRqEh8wZbBrmaPWfC1wzRxSQAihiDH_rdADu5622oHn_i-06aDDm7ZqbRbQcvbMYnQXme9ooUTjWa_OYv8dWfxuwbsxLh4BvRWCXTZX47_pqKoDUzqSelIOVVzAmqssYrBfqw_VoiHeI3AbqwVuYX2TzVIo61__gfgh9NtvYgXBeRaMucB0BB4hQusfkKZKi1dBCrXBGH-7b-AjL7M7aVTvuoSjC9CVlGG0wSfsT_14JhQCnB3NegnzO4" />
                    </div>
                    <div class="flex flex-col justify-center">
                        <span class="text-sm font-bold">10k+ New Users</span>
                        <span class="text-xs opacity-80">Joined today</span>
                    </div>
                </div> */}
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center p-6 sm:p-12 lg:p-24 bg-white">
                <div className="w-full max-w-110 flex flex-col gap-8">
                    <div className="text-center lg:text-left">
                        <h1 className="text-3xl font-bold tracking-tight text-primary mb-2">Welcome back!</h1>
                        <p className="text-slate-500 text-base">Please enter your details to sign in.</p>
                    </div>
                    <form className="flex flex-col gap-5">
                        <Input label="Email" placeholder="Enter your email" type="email" />
                        <Input label="Password" placeholder="**************" type="text" isVisible={true} />
                        <div className="flex items-center justify-between">
                            <label className="flex items-center gap-2 cursor-pointer group">
                                <input className="rounded border-gray-300 text-primary focus:ring-primary/20 w-4 h-4 cursor-pointer" type="checkbox" />
                                <span className="text-sm font-medium text-slate-600 group-hover:text-primary transition-colors">Remember for 30 days</span>
                            </label>
                            <a className="text-sm font-medium text-primary hover:text-blue-700 transition-colors" href="#">Forgot password?</a>
                        </div>
                        <Button
                            className="w-full bg-primary hover:bg-blue-600 text-white font-semibold h-12 rounded-lg shadow-sm hover:shadow transition-all duration-200 flex items-center justify-center gap-2 mt-2"
                            type="submit">
                            Log In
                        </Button>
                        <div className="relative flex py-2 items-center">
                            <div className="grow border-t border-[#e7edf3]"></div>
                            <span
                                className="shrink-0 mx-4 text-slate-400 text-xs font-medium uppercase tracking-wider">OR</span>
                            <div className="grow border-t border-[#e7edf3]"></div>
                        </div>
                        <Button className="w-full bg-white border border-border hover:bg-slate-50 font-medium flex items-center justify-center gap-3">
                            <img src={googleIcon} alt="Google Icon" className="w-5 h-5" />
                            <span className="text-primary">
                                Log in with Google
                            </span>
                        </Button>
                    </form>
                    <p className="text-center text-sm text-slate-500 mt-2">
                        Don't have an account?
                        <Link className="font-medium text-primary hover:text-blue-700 transition-colors" to={"/sign-up"}> Sign up for free</Link>
                    </p>
                    <div className="flex justify-center gap-6 mt-8">
                        <a className="text-xs text-slate-400 hover:text-slate-600" href="#">Privacy
                            Policy</a>
                        <a className="text-xs text-slate-400 hover:text-slate-600" href="#">Terms of
                            Service</a>
                    </div>
                </div>
            </div>
        </div>
    )
}