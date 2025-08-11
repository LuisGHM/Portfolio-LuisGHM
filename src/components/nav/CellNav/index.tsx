import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { MdOutlineDarkMode, MdOutlineLightMode, MdLanguage } from "react-icons/md";
import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "../../../navigation"

export interface CellNavProps {
    portuguese: any;
    english: any;
    whatsapp: any;
}

const CellNav = ({ portuguese, english, whatsapp }: CellNavProps) => {
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
        <nav className="space-y-4">
            {/* Social Links Row */}
            <div className="flex gap-3">
                <a 
                    target="_blank" 
                    href="https://www.linkedin.com/in/luis-gustavo-hedel-marchiore/" 
                    className="flex-1 h-12 flex items-center justify-center bg-[#0077B5] hover:bg-[#005885] text-white rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                    <CiLinkedin className="w-6 h-6" />
                </a>
                <a 
                    target="_blank" 
                    href="https://github.com/LuisGHM" 
                    className="flex-1 h-12 flex items-center justify-center bg-[#333] hover:bg-[#555] text-white rounded-lg transition-all duration-300 hover:shadow-lg"
                >
                    <FaGithub className="w-5 h-5" />
                </a>
            </div>

            {/* Controls Row */}
            <div className="flex gap-3">
                <button 
                    onClick={() => setTheme(theme == "dark"? "light": "dark")} 
                    className="flex-1 h-12 flex items-center justify-center bg-white dark:bg-[#1a1a1d] border border-gray-200 dark:border-[#2a2a2d] rounded-lg hover:bg-[#5C63ED] hover:border-[#5C63ED] dark:hover:bg-[#623CEA] dark:hover:border-[#623CEA] hover:text-white transition-all duration-300 text-[#495057] dark:text-[#868E96]"
                >
                    {theme == "light" ? <MdOutlineLightMode className="w-5 h-5" /> : <MdOutlineDarkMode className="w-5 h-5" />}
                </button>
                
                <div className="flex-1 relative" ref={optsRef}>
                    <button 
                        onClick={() => setIsOptOpen(!isOptOpen)} 
                        className="w-full h-12 flex items-center justify-center bg-white dark:bg-[#1a1a1d] border border-gray-200 dark:border-[#2a2a2d] rounded-lg hover:bg-[#5C63ED] hover:border-[#5C63ED] dark:hover:bg-[#623CEA] dark:hover:border-[#623CEA] hover:text-white transition-all duration-300 text-[#495057] dark:text-[#868E96]"
                    >
                        <MdLanguage className="w-5 h-5"/>
                    </button>
                    {isOptOpen && (
                        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-[#1a1a1d] border border-gray-200 dark:border-[#2a2a2d] rounded-lg shadow-xl z-50 overflow-hidden">
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
            </div>

            {/* WhatsApp Button */}
            <a 
                target="_blank" 
                href="https://api.whatsapp.com/send/?phone=5541995117543&text&type=phone_number&app_absent=0" 
                className="block w-full h-12 bg-[#25D366] hover:bg-[#128C7E] text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center"
            >
                {whatsapp}
            </a>
        </nav>
    );
}

export default CellNav;