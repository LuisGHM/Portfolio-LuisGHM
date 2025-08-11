"use client"
import { api } from "@/services/api";
import { FaGithub, FaExternalLinkAlt, FaStar } from "react-icons/fa";
import { useState, useEffect } from "react";

export interface ProjectsCardProps {
    item: {
        id: number;
        name: string;
        html_url: string;
        homepage: string;
        stargazers_count: number;
        forks_count: number;
        language: string;
        description: string;
        created_at: string;
        updated_at: string;
        fork: boolean;
        translatedName: string;
        translatedDescription: string;
    };
    translations: {
        language: string;
        application: string;
    };
}

export const ProjectsCard = ({ item, translations }: ProjectsCardProps) => {
    const [isHovered, setIsHovered] = useState(false);
    const [languages, setLanguages] = useState<string[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // Categorizar projetos baseado no que cada um realmente é
    const getProjectCategory = () => {
        const name = item.name;
        
        // 🤖 AI/Computer Vision - Projetos reais de IA
        const aiProjects = [
            'clothing-detection-tools',
            'curitibaBusRecognition', 
            'StyleSight'
        ];
        
        // 🛠️ APIs/Backend - APIs e sistemas backend
        const apiProjects = [
            'controle-de-projetos-kenzievelopers-LuisGHM', // API REST TypeScript
            'm5-Kenzie-bandkamp-generic-view-LuisGHM', // API Django
            'm5-kenzie-buster-LuisGHM', // API robusta
            'm5Kenzie-pet-kare-LuisGHM', // API para petshop
            'M5KenzieKopaDoMundo-LuisGHM', // API para campeonato
            'm5Kenzie-kiosque-LuisGHM', // API para loja de comidas
            'm4-kimoveis_LuisGHM', // API imobiliária TypeScript
            'crud_admin_m4_LuisGHM', // API TypeScript com admin
            'market-sp1-m4-LuisGHM', // API REST TypeScript
            'movies-sp2-m4_LuisGHM', // API para locadora
            'TaskManagementAPI', // API de gerenciamento
            'sistemaEscolar' // Sistema escolar
        ];
        
        // 🚀 Full-Stack - Projetos completos front+back
        const fullStackProjects = [
            'Kenzie-fullstack-challenge-Back-LuisGHM',
            'Kenzie-fullstack-challenge-Front-LuisGHM',
            'cardealerapp', // App completo
            'PPAM' // Projeto mobile/web completo
        ];
        
        if (aiProjects.includes(name)) {
            return 'ai';
        } else if (fullStackProjects.includes(name)) {
            return 'fullstack';
        } else if (apiProjects.includes(name)) {
            return 'api';
        }
        
        // 🌐 Frontend/Web - Todo o resto (páginas web, apps React, etc.)
        return 'web';
    };

    const categoryColors: Record<'web' | 'api' | 'ai' | 'fullstack', string> = {
        web: 'bg-blue-500',      // 🌐 Frontend/Web
        api: 'bg-orange-500',    // 🛠️ APIs/Backend  
        ai: 'bg-purple-500',     // 🤖 AI/Computer Vision
        fullstack: 'bg-green-500' // 🚀 Full-Stack
    };

    const categoryLabels: Record<'web' | 'api' | 'ai' | 'fullstack', string> = {
        web: 'Frontend/Web',
        api: 'API/Backend',
        ai: 'AI/Computer Vision',
        fullstack: 'Full-Stack'
    };

    const fetchLanguages = async () => {
        if (isLoaded || isLoading) return languages;
        
        setIsLoading(true);
        try {
            const response = await api.get(`/repos/luisghm/${item.name}/languages`);
            
            if (response.status === 200) {
                const languageData = response.data;
                const langArray = Object.keys(languageData);
                setLanguages(langArray);
                setIsLoaded(true);
                return langArray;
            }
        } catch (error) {
            // Em caso de erro, usar a linguagem principal se disponível
            if (item.language) {
                setLanguages([item.language]);
            }
            setIsLoaded(true);
        } finally {
            setIsLoading(false);
        }
    };

    // 🚀 MUDANÇA PRINCIPAL: Carregar linguagens assim que o componente monta
    useEffect(() => {
        fetchLanguages();
    }, [item.name]); // Executar quando o nome do projeto mudar

    const category = getProjectCategory();

    return (
        <div 
            className="group relative bg-white dark:bg-[#0A0A0B] rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:translate-y-[-8px] border border-gray-100 dark:border-[#1a1a1d] overflow-hidden max-w-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Project Preview/Header */}
            <div className="relative h-48 bg-gradient-to-br from-[#5C63ED] to-[#623CEA] overflow-hidden">
                {/* Placeholder for project image */}
                <div className="flex items-center justify-center h-full">
                    <div className="text-white text-4xl font-bold opacity-50">
                        {item.translatedName.substring(0, 2).toUpperCase()}
                    </div>
                </div>
                
                {/* Category Badge */}
                <div className={`absolute top-4 left-4 ${categoryColors[category]} text-white px-3 py-1 rounded-full text-xs font-medium`}>
                    {categoryLabels[category]}
                </div>

                {/* Stars if available */}
                {item.stargazers_count > 0 && (
                    <div className="absolute top-4 right-4 bg-black/30 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs flex items-center gap-1">
                        <FaStar size={12} className="text-yellow-400" />
                        {item.stargazers_count}
                    </div>
                )}

                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                    <a 
                        href={item.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors"
                        aria-label="View GitHub repository"
                    >
                        <FaGithub size={20} />
                    </a>
                    {item.homepage && (
                        <a 
                            href={item.homepage}
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white text-black p-3 rounded-full hover:bg-gray-100 transition-colors"
                            aria-label="View live demo"
                        >
                            <FaExternalLinkAlt size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="p-6">
                <div className="mb-4">
                    <h3 className="text-xl font-semibold text-[#212529] dark:text-[#F8F9FA] group-hover:text-[#5C63ED] dark:group-hover:text-[#623CEA] transition-colors mb-2">
                        {item.translatedName}
                    </h3>
                    
                    <p className="text-[#495057] dark:text-[#868E96] text-sm line-clamp-3 leading-relaxed">
                        {item.translatedDescription}
                    </p>
                </div>

                {/* Technologies - Sempre mostra a seção, mas com diferentes estados */}
                <div className="mb-4">
                    <p className="text-xs font-medium text-[#868E96] mb-2">{translations.language}:</p>
                    <div className="flex flex-wrap gap-2">
                        {isLoading ? (
                            // Estado de loading
                            <div className="flex gap-2">
                                <div className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs animate-pulse">
                                    <span className="opacity-0">Loading...</span>
                                </div>
                                <div className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded-full text-xs animate-pulse">
                                    <span className="opacity-0">...</span>
                                </div>
                            </div>
                        ) : languages.length > 0 ? (
                            // Linguagens carregadas
                            <>
                                {languages.slice(0, 4).map((lang, index) => (
                                    <span 
                                        key={index}
                                        className="bg-[#E7E8FC] dark:bg-[#1a1a1d] text-[#5C63ED] dark:text-[#868E96] px-2 py-1 rounded-full text-xs font-medium"
                                    >
                                        {lang}
                                    </span>
                                ))}
                                {languages.length > 4 && (
                                    <span className="text-xs text-[#868E96]">+{languages.length - 4}</span>
                                )}
                            </>
                        ) : (
                            // Fallback se não conseguir carregar
                            <span className="bg-[#E7E8FC] dark:bg-[#1a1a1d] text-[#5C63ED] dark:text-[#868E96] px-2 py-1 rounded-full text-xs font-medium">
                                {item.language || "Mixed"}
                            </span>
                        )}
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between items-center">
                    <div className="flex gap-4">
                        <a 
                            href={item.html_url}
                            target="_blank"
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 text-[#495057] dark:text-[#868E96] hover:text-[#5C63ED] dark:hover:text-[#623CEA] transition-colors text-sm"
                        >
                            <FaGithub size={14} />
                            Code
                        </a>
                        {item.homepage && (
                            <a 
                                href={item.homepage}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-[#495057] dark:text-[#868E96] hover:text-[#5C63ED] dark:hover:text-[#623CEA] transition-colors text-sm"
                            >
                                <FaExternalLinkAlt size={12} />
                                {translations.application}
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectsCard;