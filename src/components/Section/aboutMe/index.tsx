"use client"
import { FaDownload, FaArrowRight, FaCode, FaBrain } from "react-icons/fa";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface AboutMeProps {
  translations: {
    projects: string;
    technologies: string;
    greeting: string;
    description: string;
    webTech: string;
    and: string;
    ai: string;
    stats: {
      projects: string;
      yearsExp: string;
      companies: string;
    };
    buttons: {
      downloadCV: string;
      viewProjects: string;
    };
    specializations: {
      fullStack: string;
      computerVision: string;
    };
    scrollText: string;
  };
}

const ROLES_EN = [
    "Software Engineer", 
    "Full-Stack Developer", 
    "AI Specialist",
    "Computer Vision Engineer"
];

const ROLES_PT = [
    "Engenheiro de Software",
    "Desenvolvedor Full-Stack", 
    "Especialista em IA",
    "Engenheiro de Visão Computacional"
];

export const AboutMe = ({ translations }: AboutMeProps) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const pathname = usePathname();
    
    // Detectar idioma atual de forma mais elegante
    const currentLocale = pathname.startsWith('/pt') ? 'pt' : 'en';
    const ROLES = currentLocale === 'pt' ? ROLES_PT : ROLES_EN;

    useEffect(() => {
        const currentRole = ROLES[currentIndex];
        let timeout: NodeJS.Timeout;

        if (!isDeleting && displayText === currentRole) {
            // Pausar quando terminar de escrever
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            // Ir para próximo título quando terminar de apagar
            setIsDeleting(false);
            setCurrentIndex((prev) => (prev + 1) % ROLES.length);
        } else {
            // Escrever ou apagar caracteres
            const typingSpeed = isDeleting ? 50 : 100;
            
            timeout = setTimeout(() => {
                if (isDeleting) {
                    setDisplayText(prev => prev.slice(0, -1));
                } else {
                    setDisplayText(prev => currentRole.slice(0, prev.length + 1));
                }
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [displayText, currentIndex, isDeleting, ROLES]);

    return(
        <div className="w-full flex flex-col justify-center items-center p-5 gap-8 md:max-w-[80%] mx-auto min-h-screen relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full blur-xl"></div>
                <div className="absolute bottom-32 right-32 w-48 h-48 bg-white rounded-full blur-xl"></div>
                <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white rounded-full blur-lg"></div>
            </div>

            <div className="space-y-8 relative z-10 text-center lg:text-left max-w-4xl">
                <div className="space-y-4">
                    <p className="text-[#FFFFFFCC] dark:text-[#868E96] font-medium text-lg">
                        {translations.greeting}
                    </p>
                    
                    <div className="min-h-[80px] lg:min-h-[120px] flex items-center justify-center lg:justify-start">
                        <h1 className="text-4xl lg:text-6xl font-bold text-white dark:text-[#F8F9FA] leading-tight">
                            {displayText}
                            <span className="inline-block w-1 h-12 lg:h-16 bg-white ml-2 animate-pulse"></span>
                        </h1>
                    </div>
                    
                    <p className="text-xl text-[#FFFFFFCC] dark:text-[#868E96] max-w-3xl leading-relaxed">
                        {translations.description}{' '}
                        <span className="text-white font-semibold">{translations.webTech}</span> {translations.and}{' '}
                        <span className="text-white font-semibold">{translations.ai}</span>
                    </p>
                </div>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-8 py-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">20+</div>
                        <div className="text-[#FFFFFFCC] text-sm">{translations.stats.projects}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">2+</div>
                        <div className="text-[#FFFFFFCC] text-sm">{translations.stats.yearsExp}</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">2</div>
                        <div className="text-[#FFFFFFCC] text-sm">{translations.stats.companies}</div>
                    </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a 
                        href="/cv-luis-marchiore.pdf" 
                        download
                        className="group bg-white text-[#5C63ED] px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-gray-100 transition-all duration-300 transform hover:translate-y-[-2px] shadow-lg justify-center"
                    >
                        <FaDownload />
                        {translations.buttons.downloadCV}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                        href="#project" 
                        className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-white hover:text-[#5C63ED] transition-all duration-300 transform hover:translate-y-[-2px] justify-center"
                    >
                        <FaCode />
                        {translations.buttons.viewProjects}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center gap-2">
                        <FaCode size={16} />
                        {translations.specializations.fullStack}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center gap-2">
                        <FaBrain size={16} />
                        {translations.specializations.computerVision}
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm">{translations.scrollText}</span>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;