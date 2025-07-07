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
}

const ProjectsList = async ({ generalTranslations, projectsTranslations }: ProjectsListProps) => {
  try {
    const response = await api.get("/users/luisghm/repos");

    if (response.status === 200) {
      const projects: projectsGit[] = response.data;

      // Filtrar e ordenar projetos
      const relevantProjects = projects
        .filter(project => 
          !project.name.includes('LuisGHM') && 
          !project.fork &&
          project.name !== 'LuisGHM' &&
          projectsTranslations[project.name] // Apenas projetos com tradução
        )
        .sort((a, b) => {
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
            <div className="mb-12">
              <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
                PROJECTS
              </p>
              <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
                {generalTranslations.origin} <span className="text-[#5C63ED] dark:text-[#7D82F1]">{generalTranslations.dedication}</span> {generalTranslations.detail}
              </h2>
              <p className="text-[#495057] dark:text-[#868E96] max-w-2xl">
                A collection of projects showcasing my expertise in full-stack development, AI, and computer vision
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
                <p className="text-[#868E96] text-lg">
                  No projects available at the moment.
                </p>
              </div>
            )}
          </div>
        </section>
      );
    } else {
      console.error("Erro ao obter a lista de projetos. Status:", response.status);
      return (
        <section className="py-16" id="project">
          <div className="max-w-[80%] mx-auto px-5 text-center">
            <p className="text-[#868E96]">
              Unable to load projects at the moment. Please try again later.
            </p>
          </div>
        </section>
      );
    }
  } catch (error) {
    console.error("Erro ao obter a lista de projetos:", error);
    return (
      <section className="py-16" id="project">
        <div className="max-w-[80%] mx-auto px-5 text-center">
          <p className="text-[#868E96]">
            Unable to load projects at the moment. Please try again later.
          </p>
        </div>
      </section>
    );
  }
};

export default ProjectsList;