import { useTranslations } from "next-intl"
import Header from "../../components/header/index"
import AboutMe from "@/components/Section/aboutMe";
import Experience from "@/components/Section/Experience";
import Education from "@/components/Section/Education";
import DetailedSkills from "@/components/Section/DetailedSkills";
import Technologies from "@/components/Section/Technologies";
import ProjectsList from "@/components/ProjectsList";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/footer";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  const t = useTranslations("Home");
  const portuguese = t("Portuguese")
  const english = t("English")
  const whatsapp = t("Whatsapp")
  
  const t2 = useTranslations("technologies");
  const Proficient = t2("Proficient")
  
  const t3 = useTranslations("Footer")
  
  const tAbout = useTranslations("AboutMe");
  const aboutTranslations = {
    projects: tAbout("Projects"),
    technologies: tAbout("Technologies")
  };

  const tContact = useTranslations("Contact");
  const contactTranslations = {
    title: tContact("Title"),
    subtitle: tContact("Subtitle"),
    getInTouch: tContact("GetInTouch"),
    followMe: tContact("FollowMe"),
    name: tContact("Name"),
    email: tContact("Email"),
    message: tContact("Message"),
    sendMessage: tContact("SendMessage"),
    sending: tContact("Sending"),
    successMessage: tContact("SuccessMessage"),
    errorMessage: tContact("ErrorMessage"),
    location: tContact("Location"),
    whatsApp: tContact("WhatsApp")
  };

  // Traduções dos projetos
  const tProjects = useTranslations("Projects");
  const projectsGeneralTranslations = {
    origin: tProjects("origin"),
    dedication: tProjects("dedication"),
    detail: tProjects("detail"),
    language: tProjects("language"),
    application: tProjects("application")
  };

  // Lista de projetos com traduções (aqueles que têm tradução no JSON)
  const projectNames = [
    "controle-de-projetos-kenzievelopers-LuisGHM",
    "ControleFinanceiroKenzie",
    "crud_admin_m4_LuisGHM",
    "EcommerceKenzie",
    "hamburgueria-Kenzie_LuisGHM",
    "kenzie-hub-LuisGHM",
    "LojaGeekKenzie",
    "m4-kimoveis_LuisGHM",
    "m5-Kenzie-bandkamp-generic-view-LuisGHM",
    "m5-kenzie-buster-LuisGHM",
    "m5Kenzie-kiosque-LuisGHM",
    "m5Kenzie-pet-kare-LuisGHM",
    "M5KenzieKopaDoMundo-LuisGHM",
    "market-sp1-m4-LuisGHM",
    "movies-sp2-m4_LuisGHM",
    "OpenMusic-Kenzie",
    "Portifolio-Generico-Kenzie",
    "SiteInstitucionalGenerico",
    "nu-kenzie_LuisGHM",
    "Kenzie-fullstack-challenge-Back-LuisGHM",
    "Kenzie-fullstack-challenge-Front-LuisGHM"
  ];

  const projectsTranslations: Record<string, { name: string; description: string }> = {};
  
  projectNames.forEach(projectName => {
    const tProject = useTranslations(`Projects.${projectName}`);
    const name = tProject("Name");
    const description = tProject("Description");
    
    // Verificar se tem tradução válida
    if (!(name.includes("Projects") && name.includes("Name"))) {
      projectsTranslations[projectName] = {
        name,
        description
      };
    }
  });
  
  return(
    <>
      <header className="border-2 border-gray-100 dark:border-[#0A0A0B] dark:border-b-[#623CEA] dark:bg-[#0A0A0B] dark:text-white">
        <Header portuguese={portuguese} english={english} whatsapp={whatsapp}/>
      </header>
      
      <section className="relative bg-gradient-to-br from-[#5C63ED] via-[#623CEA] to-[#4C51BF] dark:from-[#121214] dark:via-[#1a1a1d] dark:to-[#0A0A0B] min-h-screen">
        <AboutMe translations={aboutTranslations} />
      </section>
      
      <section className="bg-white dark:bg-[#121214]">
        <Experience/>
      </section>
      
      <section className="bg-[#F1F3F5] dark:bg-[#0A0A0B]">
        <Education/>
      </section>
      
      <section className="bg-white dark:bg-[#121214]">
        <DetailedSkills/>
      </section>
      
      <section className="bg-[#F1F3F5] dark:bg-[#0A0A0B]">
        <Technologies Proficient={Proficient}/>
      </section>
      
      <main className="bg-white dark:bg-[#121214]">
        <ProjectsList 
          generalTranslations={projectsGeneralTranslations}
          projectsTranslations={projectsTranslations}
        />
      </main>
      
      <section className="bg-[#F1F3F5] dark:bg-[#0A0A0B]">
        <ContactSection translations={contactTranslations} />
      </section>
      
      <footer className="bg-[#5C63ED] dark:bg-[#623CEA]">
        <FooterSection thanks={t3("thanks")}/>
      </footer>
      
      <BackToTop />
    </>
  )
}