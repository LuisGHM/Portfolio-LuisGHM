"use client"
import { FaDownload, FaArrowRight, FaCode, FaBrain } from "react-icons/fa";
import { useState, useEffect, useCallback } from "react";

interface AboutMeProps {
  translations: {
    projects: string;
    technologies: string;
  };
}

export const AboutMe = ({ translations }: AboutMeProps) => {
    const [displayText, setDisplayText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const roles = [
        "Software Engineer", 
        "Full-Stack Developer", 
        "AI Specialist",
        "Computer Vision Engineer"
    ];

    // Função para resetar o typewriter
    const resetTypewriter = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % roles.length);
        setDisplayText("");
    }, [roles.length]);

    useEffect(() => {
        const role = roles[currentIndex];
        let charIndex = 0;
        
        const typeWriter = setInterval(() => {
            if (charIndex < role.length) {
                setDisplayText(role.substring(0, charIndex + 1));
                charIndex++;
            } else {
                clearInterval(typeWriter);
                setTimeout(() => {
                    resetTypewriter();
                }, 2000);
            }
        }, 100);

        return () => clearInterval(typeWriter);
    }, [currentIndex, roles, resetTypewriter]);

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
                        Hello, I&apos;m Luis 👋
                    </p>
                    
                    <h1 className="text-4xl lg:text-6xl font-bold text-white dark:text-[#F8F9FA] leading-tight">
                        {displayText}
                        <span className="inline-block w-1 h-12 lg:h-16 bg-white ml-2 animate-pulse"></span>
                    </h1>
                    
                    <p className="text-xl text-[#FFFFFFCC] dark:text-[#868E96] max-w-3xl leading-relaxed">
                        Building intelligent solutions that bridge 
                        <span className="text-white font-semibold"> web technologies</span> and 
                        <span className="text-white font-semibold"> artificial intelligence</span>
                    </p>
                </div>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start gap-8 py-6">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">20+</div>
                        <div className="text-[#FFFFFFCC] text-sm">Projects</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">2+</div>
                        <div className="text-[#FFFFFFCC] text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-white">2</div>
                        <div className="text-[#FFFFFFCC] text-sm">Companies</div>
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
                        Download CV
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    
                    <a 
                        href="#project" 
                        className="group border-2 border-white text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-3 hover:bg-white hover:text-[#5C63ED] transition-all duration-300 transform hover:translate-y-[-2px] justify-center"
                    >
                        <FaCode />
                        {translations.projects}
                        <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>

                {/* Specializations */}
                <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center gap-2">
                        <FaCode size={16} />
                        Full-Stack Development
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white flex items-center gap-2">
                        <FaBrain size={16} />
                        Computer Vision
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <div className="flex flex-col items-center gap-2">
                    <span className="text-sm">Scroll to explore</span>
                    <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;