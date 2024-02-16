import { api } from "@/services/api";
import { projectsGit } from "..";
import { useTranslations } from "next-intl";
import { FaGithub } from "react-icons/fa";
import { FaShare } from "react-icons/fa";

export interface ProjectsCardProps {
    item: projectsGit;
}

export const ProjectsCard = async ({ item }: ProjectsCardProps) => {
    try {
        const t = useTranslations("Projects." + item.name); 
        const projectName = t("Name"); 
        const projectDescription = t("Description"); 
        const t2 = useTranslations("Projects"); 
        const language = t2("language"); 
        
        const response = await api.get(`/repos/luisghm/${item.name}/languages`);

        if (item.name == "LuisGHM") {
            return null
        }
        
        if (response.status === 200) {
            const languages = response.data;

            return (
                <>
                    <div className="flex flex-col gap-6 max-w-[500px]">
                        <h1 className="font-medium text-2xl text-[#212529] dark:text-[#F8F9FA]">{projectName}</h1>
                        <div className="flex flex-row gap-2 items-center">
                            <p className=" font-medium text-sm dark:text-[#868E96]">{language}:</p>
                            {Object.keys(languages).map((key) => <span className=" bg-[#E7E8FC] font-medium text-sm text-[#5C63ED] p-1 dark:bg-[#1a1a1d] dark:text-[#868E96]" key={key}>{key}</span>)}
                        </div>
                        <p className=" font-normal text-base text-[#495057] dark:text-[#868E96]">{projectDescription}</p>
                        <div className="flex flex-row gap-10 items-center">
                            <a href={`${item.html_url}`} className="flex items-center gap-1 font-medium text-base text-[#495057] p-1 rounded-lg hover:bg-[#F8F9FA] dark:text-[#868E96]"><FaGithub /> Github Code</a>
                            {item.homepage ? <a href={`${item.homepage}`} className="flex flex-row items-center gap-1 font-medium text-base text-[#495057]  p-1 rounded-lg hover:bg-[#F8F9FA] dark:text-[#868E96]"><FaShare /> {t2("application")}</a> : null}
                        </div>
                    </div>
                </>
            );
        } else {
            console.error("Erro ao obter as linguagens do projeto. Status:", response.status);
            return null;
        }
    } catch (error) {
        console.error("Erro ao obter as linguagens do projeto:", error);
        return null;
    }
}

export default ProjectsCard;
