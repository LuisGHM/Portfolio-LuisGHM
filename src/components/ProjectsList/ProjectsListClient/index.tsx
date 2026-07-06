"use client"
import { useState, useEffect } from "react";
import { api } from "../../../services/api";
import ProjectsCard from "../ProjectsCard";
import ProjectsSkeleton from "../ProjectsSkeleton";
import { useScrollAnimation } from "../../../hooks/useScrollAnimation";

export interface projectsGit {
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
}

interface ProjectsListClientProps {
  generalTranslations: {
    origin: string;
    dedication: string;
    detail: string;
    language: string;
    application: string;
  };
  projectsTranslations: Record<string, { name: string; description: string }>;
  sectionTranslations: {
    sectionTitle: string;
    title: string;
    description: string;
  };
  errorTranslations: {
    loading: string;
    error: string;
    noProjects: string;
    tryAgain: string;
  };
}

const ProjectsListClient = ({
  generalTranslations,
  projectsTranslations,
  sectionTranslations,
  errorTranslations
}: ProjectsListClientProps) => {
  const [projects, setProjects] = useState<projectsGit[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Scroll animation for section header
  const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation({ threshold: 0.3 });

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const response = await api.get("/users/LuisGHM/repos");

        if (response.status === 200) {
          const projectsData: projectsGit[] = response.data;

          // FILTRO CORRIGIDO
          const filteredProjects = projectsData.filter(project => {
            const hasTranslation = !!projectsTranslations[project.name];
            const isNotFork = !project.fork;
            const isNotExcluded = project.name !== 'LuisGHM';
            
            return hasTranslation && isNotFork && isNotExcluded;
          });

          const relevantProjects = filteredProjects.sort((a, b) => {
            // Ordenar por: stars > updated_at > name
            if (a.stargazers_count !== b.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          });

          // Adicionar traduções aos projetos
          const projectsWithTranslations: projectsGit[] = relevantProjects.map(project => ({
            ...project,
            translatedName: projectsTranslations[project.name]?.name || project.name,
            translatedDescription: projectsTranslations[project.name]?.description || project.description || "No description available"
          }));

          setProjects(projectsWithTranslations);
        } else {
          throw new Error(`API returned status: ${response.status}`);
        }
      } catch (err: any) {
        console.error("❌ Erro ao obter a lista de projetos:", err);
        setError(err?.message || errorTranslations.error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, [projectsTranslations, errorTranslations.error]);

  const handleRetry = () => {
    setProjects([]);
    setLoading(true);
    setError(null);
    // Trigger useEffect again
    window.location.reload();
  };

  if (loading) {
    return <ProjectsSkeleton count={6} />;
  }

  if (error) {
    return (
      <section className="py-16" id="project">
        <div className="max-w-[80%] mx-auto px-5">
          {/* Section Header */}
          <div className="mb-12">
            <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
              {sectionTranslations.sectionTitle}
            </p>
            <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
              {sectionTranslations.title}
            </h2>
            <p className="text-[#495057] dark:text-[#868E96] max-w-3xl">
              {sectionTranslations.description}
            </p>
          </div>

          <div className="text-center py-12">
            <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-8 max-w-md mx-auto">
              <div className="text-red-600 dark:text-red-400 mb-4">
                <svg className="w-12 h-12 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-semibold text-red-800 dark:text-red-400 mb-2">
                {errorTranslations.error}
              </h3>
              <p className="text-red-600 dark:text-red-300 text-sm mb-4">
                {error}
              </p>
              <button
                onClick={handleRetry}
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors duration-200"
              >
                {errorTranslations.tryAgain}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16" id="project">
      <div className="max-w-[80%] mx-auto px-5">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`mb-12 transition-all duration-700 ${
            headerVisible ? 'animate-fade-in' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
            {sectionTranslations.sectionTitle}
          </p>
          <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
            {sectionTranslations.title}
          </h2>
          <p className="text-[#495057] dark:text-[#868E96] max-w-3xl">
            {sectionTranslations.description}
          </p>
        </div>
        
        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {projects.map((item) => (
              <ProjectsCard 
                item={item} 
                key={item.id}
                translations={{
                  language: generalTranslations.language,
                  application: generalTranslations.application
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-[#868E96] mb-4">
              <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <p className="text-[#868E96] text-lg">
              {errorTranslations.noProjects}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsListClient;