import Category from "./content/Category";
import Updates from "./content/Updates";

export default function Content() {
    return (
        <>
            <div className="bg-slate-900 p-20">
                <Category />
                <Updates />
            </div>
        </>
    )
}