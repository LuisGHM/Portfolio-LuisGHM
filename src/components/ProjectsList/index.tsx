import { useTranslations } from "next-intl";
import { api } from "../../services/api";
import ProjectsCard from "./ProjectsCard";

export interface projectsGit {
  id: number;
  name: string;
  html_url: string;
  homepage: string;
}

const ProjectsList = async () => {
  const t = useTranslations("Projects");

  try {
    const response = await api.get("/users/luisghm/repos");

    if (response.status === 200) {
      const projects: projectsGit[] = response.data;

      return (
        <>
          <div className="p-5 flex flex-col gap-16 md:max-w-[80%] md:mx-auto" id="project">
            <div className="flex flex-col gap-5">
              <p className="mt-5 font-semibold text-base text-[#495057] dark:text-[#F8F9FA]">
                {t("projects")}
              </p>
              <h1 className="font-semibold text-2xl text-[#2D2E4D] dark:text-[#623CEA]">{t("origin")} <span className="text-[#5C63ED] dark:text-[#7D82F1]">{t("dedication")}</span> {t("detail")}
              </h1>
            </div>
            <div className="flex flex-col gap-16 md:max-w-full md:flex-row md:flex-wrap md:items-center md:justify-around">
              {projects
                .filter((item) => item.name !== "LuisGHM")
                .map((item) => (
                    <ProjectsCard item={item} key={item.id}/>
                ))}
            </div>
          </div>
        </>
      );
    } else {
      console.error("Erro ao obter a lista de projetos. Status:", response.status);
      return null;
    }
  } catch (error) {
    console.error("Erro ao obter a lista de projetos:", error);
    return null;
  }
};

export default ProjectsList;
