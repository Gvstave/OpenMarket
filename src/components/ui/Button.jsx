import clsx from "clsx";

export default function Button({
    variant = "primary",
    className = "",
    type = "button",
    onClick, children, disabled = false
}) {
    const base =
        "flex min-w-50 items-center justify-center overflow-hidden rounded-lg h-14 px-10 text-base font-bold leading-normal tracking-[0.015em] cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
        primary:
            "bg-primary-background text-white hover:bg-primary-background/90",
        accent:
            "bg-primary text-white hover:bg-primary/90",
        secondary:
            "bg-[#e7edf3] text-primary hover:bg-slate-200",
        transparent:
            "bg-white/10 backdrop-blur-md hover:bg-white/20 text-white",
        outline:
            "bg-[#e7edf3] text-primary hover:bg-slate-200",
        ghost:
            "text-primary hover:bg-slate-100",
        danger:
            "bg-red-600 text-white hover:bg-red-700",
    };

    return (
        <button
            type={type}
            className={clsx(base, variants[variant], className)}
            onClick={onClick}
            disabled={disabled
            }
        >{children}</button>
    );
}