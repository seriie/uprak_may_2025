import { useTheme } from "../context/ThemeContext";
import Category from "./content/Category";
import Updates from "./content/Updates";

export default function Content() {
    const { theme } = useTheme();
    
    return (
        <>
            <div className={`${theme === "dark" ? 'bg-slate-900' : 'bg-slate-100'} p-4 md:p-20`}>
                <Category />
                <Updates />
            </div>
        </>
    )
}