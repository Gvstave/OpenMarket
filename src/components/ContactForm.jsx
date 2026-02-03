import Input from "./ui/Input";
import Button from "./ui/Button";
import TextArea from "./ui/TextArea";

export default function ContactForm() {
    return (
        <div
            className="rounded-lg border border-border p-6 lg:p-10 shadow-sm h-full">
            <h2
                className="text-primary text-[22px] font-bold leading-tight tracking-[-0.015em] pb-2">
                Send us a message</h2>
            <p className="text-secondary mb-8">Fill out the form below and we'll get
                back to you as soon as possible.</p>
            <form className="flex flex-col gap-6">
                <label className="flex flex-col flex-1 mt-2">
                    <p className="text-primary text-base font-medium leading-normal pb-2">
                        Topic</p>
                    <div className="relative">
                        <select
                            className="form-select w-full rounded-lg border border-border text-primary h-14 px-4 pr-10 appearance-none focus:border-primary-background focus:ring-0">
                            <option disabled="" selected="" value="">Select a topic</option>
                            <option value="order">Order Issue</option>
                            <option value="selling">Selling Inquiry</option>
                            <option value="tech">Technical Support</option>
                            <option value="general">General Question</option>
                        </select>
                        <div
                            className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <span className="material-symbols-outlined">expand_more</span>
                        </div>
                    </div>
                </label>
                <div className="flex flex-col md:flex-row gap-6 mt-2">
                    <Input label={"Full Name"} type="text" placeholder={"John Kabwe"} />
                    <Input label={"Email Address"} type="email" placeholder={"jonh@gmail.com"} />
                </div>
                <div className="flex flex-col gap-1 mt-2">
                    <Input label={"Order ID (Optional)"} placeholder={"#ORD-1234"} type="text" />
                </div>
                <div>
                    <TextArea label={"Message"} placeholder={"Please describe your issue..."} />
                </div>
                <div>
                    <Button
                        className="mt-2 w-full"
                        type="button" variant="primary">
                        <span className="truncate">Send Message</span>
                    </Button>
                </div>
            </form>
        </div>
    );
}
