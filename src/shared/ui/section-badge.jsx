import Ping from "./ping-ui"

const SectionBadge = ({ text, color }) => {
    return (
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-primary text-xs font-bold uppercase tracking-wider mb-8">
            <Ping color={color} />
            {text}
        </div>
    )
}

export default SectionBadge
