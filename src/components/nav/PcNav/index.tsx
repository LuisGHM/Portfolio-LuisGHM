import { CellNavProps } from "../CellNav";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode, MdLanguage } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "../../../navigation"

export const PcNav = ({portuguese, english, whatsapp}: CellNavProps) => {
    const [isOptOpen, setIsOptOpen] = useState(false);
    const optsRef = useRef<HTMLDivElement>(null);
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme();
    const router = useRouter();
    const pathname = usePathname();

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (optsRef.current && !optsRef.current.contains(event.target as Node)) {
                setIsOptOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    useEffect(() => {
        setMounted(true)
    },[])

    if (!mounted) {
        return null;
    }

    return (
        <nav className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <a 
                target="_blank" 
                href="https://api.whatsapp.com/send/?phone=5541995117543&text&type=phone_number&app_absent=0" 
                className="px-6 py-2.5 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 flex items-center gap-2"
            >
                <span>{whatsapp}</span>
            </a>
            
            {/* Social Links */}
            <a 
                target="_blank" 
                href="https://www.linkedin.com/in/luis-gustavo-hedel-marchiore/" 
                className="w-11 h-11 flex items-center justify-center bg-white dark:bg-[#121214] border border-gray-200 dark:border-[#2a2a2d] rounded-lg hover:bg-[#0077B5] hover:border-[#0077B5] hover:text-white dark:hover:bg-[#0077B5] dark:hover:border-[#0077B5] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-[#495057] dark:text-[#868E96]"
            >
                <CiLinkedin className="w-5 h-5" />
            </a>
            
            <a 
                target="_blank" 
                href="https://github.com/LuisGHM" 
                className="w-11 h-11 flex items-center justify-center bg-white dark:bg-[#121214] border border-gray-200 dark:border-[#2a2a2d] rounded-lg hover:bg-[#333] hover:border-[#333] hover:text-white dark:hover:bg-[#333] dark:hover:border-[#333] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-[#495057] dark:text-[#868E96]"
            >
                <FaGithub className="w-5 h-5" />
            </a>
            
            {/* Theme Toggle */}
            <button 
                onClick={() => setTheme(theme == "dark"? "light": "dark")} 
                className="w-11 h-11 flex items-center justify-center bg-white dark:bg-[#121214] border border-gray-200 dark:border-[#2a2a2d] rounded-lg hover:bg-[#5C63ED] hover:border-[#5C63ED] dark:hover:bg-[#623CEA] dark:hover:border-[#623CEA] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-[#495057] dark:text-[#868E96]"
                aria-label="Alternar tema"
            >
                {theme == "light" ? <MdOutlineLightMode className="w-5 h-5" /> : <MdOutlineDarkMode className="w-5 h-5" />}
            </button>
            
            {/* Language Selector */}
            <div className="relative" ref={optsRef}>
                <button 
                    onClick={() => setIsOptOpen(!isOptOpen)} 
                    className="w-11 h-11 flex items-center justify-center bg-white dark:bg-[#121214] border border-gray-200 dark:border-[#2a2a2d] rounded-lg hover:bg-[#5C63ED] hover:border-[#5C63ED] dark:hover:bg-[#623CEA] dark:hover:border-[#623CEA] hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 text-[#495057] dark:text-[#868E96]"
                    aria-label="Selecionar idioma"
                >
                    <MdLanguage className="w-5 h-5"/>
                </button>
                {isOptOpen && (
                    <div className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-[#121214] border border-gray-200 dark:border-[#2a2a2d] rounded-lg shadow-xl z-50 overflow-hidden">
                        <button 
                            onClick={() => {
                                router.push(pathname, {locale: 'en'});
                                setIsOptOpen(false);
                            }} 
                            className="w-full px-4 py-3 text-left text-sm font-medium text-[#495057] dark:text-[#868E96] hover:bg-[#5C63ED] hover:text-white dark:hover:bg-[#623CEA] transition-all duration-200 flex items-center gap-2"
                        >
                            🇺🇸 {english}
                        </button>
                        <button 
                            onClick={() => {
                                router.push(pathname, {locale: 'pt'});
                                setIsOptOpen(false);
                            }} 
                            className="w-full px-4 py-3 text-left text-sm font-medium text-[#495057] dark:text-[#868E96] hover:bg-[#5C63ED] hover:text-white dark:hover:bg-[#623CEA] transition-all duration-200 flex items-center gap-2"
                        >
                            🇧🇷 {portuguese}
                        </button>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default PcNav;