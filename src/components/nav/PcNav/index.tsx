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
        <div>
            <nav className={`flex flex-row gap-2 dark:bg-[#0A0A0B] dark:text-white`}>
                <a target="_blank" href="https://api.whatsapp.com/send/?phone=5541995117543&text&type=phone_number&app_absent=0" className={`col-span-2 h-11 border-2 flex items-center justify-center zapBtn dark:border-transparent md:px-11`}><h2 className="font-semibold">{whatsapp}</h2></a>
                <a target="_blank" href="https://www.linkedin.com/in/luis-gustavo-hedel-marchiore/" className={`h-11 border-2 flex items-center iconsBtn dark:bg-[#121214] dark:border-[#121214] dark:text-white dark:hover:bg-white dark:hover:text-black md:w-24`}><CiLinkedin className="w-full h-7" /></a>
                <a target="_blank" href="https://github.com/LuisGHM" className={`h-11 border-2 flex items-center iconsBtn dark:bg-[#121214] dark:border-[#121214] dark:text-white dark:hover:bg-white dark:hover:text-black md:w-24`}><FaGithub className="w-full h-7" /></a>
                <a onClick={() => setTheme(theme == "dark"? "light": "dark")} className={`aqui h-11 border-2 flex items-center justify-center iconsBtn dark:bg-[#121214] dark:border-[#121214] dark:text-white dark:hover:bg-white dark:hover:text-black md:w-24`}>{theme == "light" ? <MdOutlineLightMode className="w-full h-7" /> : <MdOutlineDarkMode className="w-full h-7" />}</a>
                <div className="relative" ref={optsRef}>
                    <button id="opts" onClick={() => setIsOptOpen(!isOptOpen)} className={`h-11 border-2 flex items-center w-full iconsBtn dark:bg-[#121214] dark:border-[#121214] dark:text-white dark:hover:bg-white dark:hover:text-black md:w-24`}><MdLanguage className="w-full h-7"/></button>
                    {isOptOpen && (
                        <ul className={`absolute dark:bg-gray-900 z-10 mt-2 w-full rounded-md shadow-lg`} style={{ top: "calc(100% - 8px)", left: 0 }}>
                            <li onClick={() => router.push(pathname, {locale: 'en'})} className={`w-full px-3 py-1 bg-white dark:bg-[#121214] dark:border-[#121214] dark:text-white dark:hover:bg-white dark:hover:text-black border-b border-gray-300 hover:bg-gray-200 cursor-pointer`}>{english}</li>
                            <li onClick={() => router.push(pathname, {locale: 'pt'})} className={`w-full px-3 py-1 bg-white dark:bg-[#121214] dark:border-[#121214] dark:text-white dark:hover:bg-white dark:hover:text-black hover:bg-gray-200 cursor-pointer`}>{portuguese}</li>
                        </ul>
                    )}
                </div>
            </nav>
        </div>
    );
}

export default PcNav;