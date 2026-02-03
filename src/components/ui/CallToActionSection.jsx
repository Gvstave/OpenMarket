import Button from "./Button";

const buttonStyle = 'sm:w-auto flex items-center justify-center gap-2'

const CallToActionSection = ({
    title,
    description,
    backgroundClass = "bg-primary-background",
    primaryAction,
    secondaryAction,
}) => {
    return (
        <section className={`py-24 px-4 ${backgroundClass} text-white relative overflow-hidden`}>
            <div className="container mx-auto text-center relative z-10">
                <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">
                    {title}
                </h2>
                <p className="text-border text-lg md:text-xl max-w-2xl mx-auto mb-10">
                    {description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    {primaryAction && (
                        <Button
                            variant={primaryAction.variant}
                            onClick={primaryAction.onClick}
                            className={buttonStyle}
                        >
                            <span className="material-symbols-outlined">{primaryAction.icon}</span>
                            {primaryAction.label}
                        </Button>
                    )}
                    {secondaryAction && (
                        <Button
                            variant={secondaryAction.variant}
                            onClick={secondaryAction.onClick}
                            className={buttonStyle}
                        >
                            <span className="material-symbols-outlined">{secondaryAction.icon}</span>
                            {secondaryAction.label}
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default CallToActionSection;
