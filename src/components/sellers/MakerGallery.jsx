import MakerCard from "../ui/makerCard"
import TOP_MAKERS from '../../utils/top_makers'

export default function MakerGallery() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TOP_MAKERS.map(maker => (
                <MakerCard key={maker.id} maker={maker} />
            ))}

        </div>
    )
}