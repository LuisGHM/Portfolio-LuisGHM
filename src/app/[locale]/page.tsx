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

  // CORREÇÃO: Buscar traduções FORA do forEach
  const tProjectControle = useTranslations("Projects.controle-de-projetos-kenzievelopers-LuisGHM");
  const tProjectControleFinanceiro = useTranslations("Projects.ControleFinanceiroKenzie");
  const tProjectCrud = useTranslations("Projects.crud_admin_m4_LuisGHM");
  const tProjectEcommerce = useTranslations("Projects.EcommerceKenzie");
  const tProjectHamburgueria = useTranslations("Projects.hamburgueria-Kenzie_LuisGHM");
  const tProjectKenzieHub = useTranslations("Projects.kenzie-hub-LuisGHM");
  const tProjectLojaGeek = useTranslations("Projects.LojaGeekKenzie");
  const tProjectKimoveis = useTranslations("Projects.m4-kimoveis_LuisGHM");
  const tProjectBandkamp = useTranslations("Projects.m5-Kenzie-bandkamp-generic-view-LuisGHM");
  const tProjectBuster = useTranslations("Projects.m5-kenzie-buster-LuisGHM");
  const tProjectKiosque = useTranslations("Projects.m5Kenzie-kiosque-LuisGHM");
  const tProjectPetKare = useTranslations("Projects.m5Kenzie-pet-kare-LuisGHM");
  const tProjectKopa = useTranslations("Projects.M5KenzieKopaDoMundo-LuisGHM");
  const tProjectMarket = useTranslations("Projects.market-sp1-m4-LuisGHM");
  const tProjectMovies = useTranslations("Projects.movies-sp2-m4_LuisGHM");
  const tProjectOpenMusic = useTranslations("Projects.OpenMusic-Kenzie");
  const tProjectPortfolio = useTranslations("Projects.Portifolio-Generico-Kenzie");
  const tProjectSite = useTranslations("Projects.SiteInstitucionalGenerico");
  const tProjectNuKenzie = useTranslations("Projects.nu-kenzie_LuisGHM");
  const tProjectFullstackBack = useTranslations("Projects.Kenzie-fullstack-challenge-Back-LuisGHM");
  const tProjectFullstackFront = useTranslations("Projects.Kenzie-fullstack-challenge-Front-LuisGHM");

  const projectsTranslations: Record<string, { name: string; description: string }> = {
    "controle-de-projetos-kenzievelopers-LuisGHM": {
      name: tProjectControle("Name"),
      description: tProjectControle("Description")
    },
    "ControleFinanceiroKenzie": {
      name: tProjectControleFinanceiro("Name"),
      description: tProjectControleFinanceiro("Description")
    },
    "crud_admin_m4_LuisGHM": {
      name: tProjectCrud("Name"),
      description: tProjectCrud("Description")
    },
    "EcommerceKenzie": {
      name: tProjectEcommerce("Name"),
      description: tProjectEcommerce("Description")
    },
    "hamburgueria-Kenzie_LuisGHM": {
      name: tProjectHamburgueria("Name"),
      description: tProjectHamburgueria("Description")
    },
    "kenzie-hub-LuisGHM": {
      name: tProjectKenzieHub("Name"),
      description: tProjectKenzieHub("Description")
    },
    "LojaGeekKenzie": {
      name: tProjectLojaGeek("Name"),
      description: tProjectLojaGeek("Description")
    },
    "m4-kimoveis_LuisGHM": {
      name: tProjectKimoveis("Name"),
      description: tProjectKimoveis("Description")
    },
    "m5-Kenzie-bandkamp-generic-view-LuisGHM": {
      name: tProjectBandkamp("Name"),
      description: tProjectBandkamp("Description")
    },
    "m5-kenzie-buster-LuisGHM": {
      name: tProjectBuster("Name"),
      description: tProjectBuster("Description")
    },
    "m5Kenzie-kiosque-LuisGHM": {
      name: tProjectKiosque("Name"),
      description: tProjectKiosque("Description")
    },
    "m5Kenzie-pet-kare-LuisGHM": {
      name: tProjectPetKare("Name"),
      description: tProjectPetKare("Description")
    },
    "M5KenzieKopaDoMundo-LuisGHM": {
      name: tProjectKopa("Name"),
      description: tProjectKopa("Description")
    },
    "market-sp1-m4-LuisGHM": {
      name: tProjectMarket("Name"),
      description: tProjectMarket("Description")
    },
    "movies-sp2-m4_LuisGHM": {
      name: tProjectMovies("Name"),
      description: tProjectMovies("Description")
    },
    "OpenMusic-Kenzie": {
      name: tProjectOpenMusic("Name"),
      description: tProjectOpenMusic("Description")
    },
    "Portifolio-Generico-Kenzie": {
      name: tProjectPortfolio("Name"),
      description: tProjectPortfolio("Description")
    },
    "SiteInstitucionalGenerico": {
      name: tProjectSite("Name"),
      description: tProjectSite("Description")
    },
    "nu-kenzie_LuisGHM": {
      name: tProjectNuKenzie("Name"),
      description: tProjectNuKenzie("Description")
    },
    "Kenzie-fullstack-challenge-Back-LuisGHM": {
      name: tProjectFullstackBack("Name"),
      description: tProjectFullstackBack("Description")
    },
    "Kenzie-fullstack-challenge-Front-LuisGHM": {
      name: tProjectFullstackFront("Name"),
      description: tProjectFullstackFront("Description")
    }
  };
  
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