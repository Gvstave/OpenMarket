import { useState } from "react";

const Input = ({ label, placeholder, type = "text", isVisible = false }) => {
    const [hidePassword, setHidePassword] = useState(true);
    return (
        <label className="flex flex-col gap-1.5">
            <span className="text-primary text-sm leading-normal font-bold">
                {label}
            </span>
            <div className="relative w-full">
                <input
                    className="form-input w-full rounded-lg border border-[#cfdbe7] text-primary focus:ring-2 focus:ring-primary h-12 pl-4 pr-12 placeholder:text-secondary text-base transition-all"
                    placeholder={placeholder}
                    type={isVisible && hidePassword ? "password" : type}
                    required
                />
                {isVisible && (
                    <button
                        type="button"
                        onClick={() => setHidePassword(!hidePassword)}
                        className="absolute right-0 top-0 h-full px-3 text-secondary hover:text-primary-background flex items-center justify-center transition-colors"
                        aria-label={hidePassword ? "Hide password" : "Show password"}
                    >
                        <span className="material-symbols-outlined text-[20px]">
                            {hidePassword ? "visibility_off" : "visibility"}
                        </span>
                    </button>
                )}
            </div>
        </label>
    );
};

export default Input;
