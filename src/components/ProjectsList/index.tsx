import { api } from "../../services/api";
import ProjectsCard from "./ProjectsCard";

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
}

interface ProjectsListProps {
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
}

const ProjectsList = async ({ generalTranslations, projectsTranslations, sectionTranslations }: ProjectsListProps) => {
  try {
    const response = await api.get("/users/LuisGHM/repos");

    if (response.status === 200) {
      const projects: projectsGit[] = response.data;

      // FILTRO CORRIGIDO - Agora só remove projetos específicos que não devem aparecer
      const filteredProjects = projects.filter(project => {
        const hasTranslation = !!projectsTranslations[project.name];
        const isNotFork = !project.fork;
        // Removido o filtro problemático que excluía projetos com "LuisGHM"
        // Agora só exclui repositórios específicos que não devem aparecer
        const isNotExcluded = project.name !== 'LuisGHM'; // Só remove o repo do perfil principal
        
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
      const projectsWithTranslations = relevantProjects.map(project => ({
        ...project,
        translatedName: projectsTranslations[project.name]?.name || project.name,
        translatedDescription: projectsTranslations[project.name]?.description || project.description || "No description available"
      }));

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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
              {projectsWithTranslations.map((item) => (
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
            
            {projectsWithTranslations.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#868E96] text-lg mb-4">
                  No projects available at the moment.
                </p>
                {/* Debug adicional */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="text-sm text-gray-500">
                    <p>Total repositories found: {projects.length}</p>
                    <p>Projects with translations: {Object.keys(projectsTranslations).length}</p>
                    <p>Check console for more details</p>
                  </div>
                )}
              </div>
            )}
          </div>
        </section>
      );
    } else {
      console.error("❌ Erro ao obter a lista de projetos. Status:", response.status);
      return (
        <section className="py-16" id="project">
          <div className="max-w-[80%] mx-auto px-5 text-center">
            <p className="text-[#868E96]">
              Unable to load projects. Status: {response.status}
            </p>
          </div>
        </section>
      );
    }
  } catch (error: any) {
    console.error("❌ Erro ao obter a lista de projetos:", error);
    console.error("❌ Detalhes do erro:", {
      message: error?.message,
      status: error?.response?.status,
      statusText: error?.response?.statusText,
      data: error?.response?.data
    });
    
    return (
      <section className="py-16" id="project">
        <div className="max-w-[80%] mx-auto px-5 text-center">
          <p className="text-[#868E96] mb-4">
            Unable to load projects at the moment. Please try again later.
          </p>
          {process.env.NODE_ENV === 'development' && (
            <div className="text-sm text-red-500">
              <p>Error: {error?.message}</p>
              <p>Status: {error?.response?.status}</p>
            </div>
          )}
        </div>
      </section>
    );
  }
};

export default ProjectsList;