import PillButton from "../ui/PillButton"
import { CATEGORY_LIST } from "../../utils/category_list"

export default function CategoriyPill() {
    return (
        <section className="overflow-x-auto scrollbar-hide">
            <div className="flex gap-4 min-w-max justify-center">
                {CATEGORY_LIST.map((category) => (
                    <PillButton key={category.name} bgColor={category.bgColor} textColor={category.textColor} icon={category.icon} name={category.name} />
                ))}
            </div>
        </section>
    )
} 