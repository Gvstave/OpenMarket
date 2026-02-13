import { useState } from "react";

const TextArea = ({label, placeholder}) => {

    const [text, setText] = useState("");
    const textLength = text.length;

    return (
        <label className="flex flex-col flex-1">
            <p className="text-primary text-base font-medium leading-normal pb-2">{label}</p>
            <textarea maxLength={500}
                className="form-textarea w-full rounded-lg border border-border bg-background-light text-primary h-40 resize-none focus:ring-0 focus:border-primary-background p-4 placeholder:text-secondary"
                placeholder={placeholder} onChange={(e) => setText(e.target.value)}></textarea>
                <p className="text-right text-xs text-secondary mt-1">{textLength || 0} / 500 characters</p>
        </label>
    )
}

export default TextArea;
