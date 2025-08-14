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
  
  // AboutMe translations
  const tAbout = useTranslations("AboutMe");
  const aboutTranslations = {
    projects: tAbout("Projects"),
    technologies: tAbout("Technologies"),
    greeting: tAbout("Greeting"),
    description: tAbout("Description"),
    webTech: tAbout("WebTech"),
    and: tAbout("And"),
    ai: tAbout("AI"),
    stats: {
      projects: tAbout("Stats.Projects"),
      yearsExp: tAbout("Stats.YearsExp"),
      companies: tAbout("Stats.Companies")
    },
    buttons: {
      downloadCV: tAbout("Buttons.DownloadCV"),
      viewProjects: tAbout("Buttons.ViewProjects")
    },
    specializations: {
      fullStack: tAbout("Specializations.FullStack"),
      computerVision: tAbout("Specializations.ComputerVision")
    },
    scrollText: tAbout("ScrollText")
  };

  // Experience translations
  const tExperience = useTranslations("Experience");
  const experienceTranslations = {
    sectionTitle: tExperience("SectionTitle"),
    title: tExperience("Title"),
    subtitle: tExperience("Subtitle"),
    companies: {
      stylest: {
        company: tExperience("Companies.Stylest.Company"),
        position: tExperience("Companies.Stylest.Position"),
        period: tExperience("Companies.Stylest.Period"),
        location: tExperience("Companies.Stylest.Location"),
        highlights: [
          tExperience("Companies.Stylest.Highlights.0"),
          tExperience("Companies.Stylest.Highlights.1"),
          tExperience("Companies.Stylest.Highlights.2"),
          tExperience("Companies.Stylest.Highlights.3")
        ]
      },
      kpercon: {
        company: tExperience("Companies.Kpercon.Company"),
        position: tExperience("Companies.Kpercon.Position"),
        period: tExperience("Companies.Kpercon.Period"),
        location: tExperience("Companies.Kpercon.Location"),
        highlights: [
          tExperience("Companies.Kpercon.Highlights.0"),
          tExperience("Companies.Kpercon.Highlights.1"),
          tExperience("Companies.Kpercon.Highlights.2"),
          tExperience("Companies.Kpercon.Highlights.3")
        ]
      }
    }
  };

  // Education translations
  const tEducation = useTranslations("Education");
  const educationTranslations = {
    sectionTitle: tEducation("SectionTitle"),
    title: tEducation("Title"),
    subtitle: tEducation("Subtitle"),
    focusLabel: tEducation("FocusLabel"),
    degrees: {
      masters: {
        degree: tEducation("Degrees.Masters.Degree"),
        school: tEducation("Degrees.Masters.School"),
        period: tEducation("Degrees.Masters.Period"),
        focus: tEducation("Degrees.Masters.Focus"),
        status: tEducation("Degrees.Masters.Status"),
        description: tEducation("Degrees.Masters.Description")
      },
      bachelor: {
        degree: tEducation("Degrees.Bachelor.Degree"),
        school: tEducation("Degrees.Bachelor.School"),
        period: tEducation("Degrees.Bachelor.Period"),
        focus: tEducation("Degrees.Bachelor.Focus"),
        status: tEducation("Degrees.Bachelor.Status"),
        description: tEducation("Degrees.Bachelor.Description")
      }
    }
  };

  // Skills translations
  const tSkills = useTranslations("Skills");
  const skillsTranslations = {
    sectionTitle: tSkills("SectionTitle"),
    title: tSkills("Title"),
    subtitle: tSkills("Subtitle"),
    categories: {
      frontend: tSkills("Categories.Frontend"),
      backend: tSkills("Categories.Backend"),
      ai: tSkills("Categories.AI"),
      tools: tSkills("Categories.Tools")
    },
    skillsList: {
      frontend: {
        react: tSkills("SkillsList.Frontend.React"),
        nextJS: tSkills("SkillsList.Frontend.NextJS"),
        typeScript: tSkills("SkillsList.Frontend.TypeScript"),
        tailwindCSS: tSkills("SkillsList.Frontend.TailwindCSS"),
        javaScript: tSkills("SkillsList.Frontend.JavaScript")
      },
      backend: {
        python: tSkills("SkillsList.Backend.Python"),
        djangoREST: tSkills("SkillsList.Backend.DjangoREST"),
        fastAPI: tSkills("SkillsList.Backend.FastAPI"),
        postgreSQL: tSkills("SkillsList.Backend.PostgreSQL"),
        restfulAPIs: tSkills("SkillsList.Backend.RESTfulAPIs")
      },
      ai: {
        tensorFlow: tSkills("SkillsList.AI.TensorFlow"),
        keras: tSkills("SkillsList.AI.Keras"),
        yolov11: tSkills("SkillsList.AI.YOLOv11"),
        vgg16: tSkills("SkillsList.AI.VGG16"),
        cvae: tSkills("SkillsList.AI.CVAE")
      },
      tools: {
        gitGitHub: tSkills("SkillsList.Tools.GitGitHub"),
        docker: tSkills("SkillsList.Tools.Docker"),
        scikitLearn: tSkills("SkillsList.Tools.ScikitLearn"),
        dataAnalysis: tSkills("SkillsList.Tools.DataAnalysis")
      }
    }
  };

  // Contact translations
  const tContact = useTranslations("Contact");
  const contactTranslations = {
    sectionTitle: tContact("SectionTitle"),
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
    whatsApp: tContact("WhatsApp"),
    placeholders: {
      name: tContact("Placeholders.Name"),
      email: tContact("Placeholders.Email"),
      message: tContact("Placeholders.Message")
    }
  };

  // Projects translations
  const tProjects = useTranslations("Projects");
  const projectsGeneralTranslations = {
    origin: tProjects("origin"),
    dedication: tProjects("dedication"),
    detail: tProjects("detail"),
    language: tProjects("language"),
    application: tProjects("application")
  };

  const projectsSectionTranslations = {
    sectionTitle: tProjects("SectionTitle"),
    title: tProjects("Title"),
    description: tProjects("Description")
  };

  // 🚀 MUDANÇA PRINCIPAL: Buscar TODOS os projetos traduzidos automaticamente
  const tProjectsSection = useTranslations("Projects");
  
  // Lista completa de todos os projetos traduzidos (24 projetos!)
  const allAvailableProjects = [
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
    "Kenzie-fullstack-challenge-Front-LuisGHM",
    "Portfolio-LuisGHM",
    "titanic-kaggle-ml",
    "clothing-detection-tools"
  ];

  // Criar objeto de traduções para TODOS os projetos usando hook uma única vez
  const tProjectsAll = useTranslations("Projects");
  const projectsTranslations: Record<string, { name: string; description: string }> = {};
  
  allAvailableProjects.forEach(projectKey => {
    try {
      projectsTranslations[projectKey] = {
        name: tProjectsAll(`${projectKey}.Name`),
        description: tProjectsAll(`${projectKey}.Description`)
      };
    } catch (error) {
      console.warn(`⚠️ Tradução não encontrada para projeto: ${projectKey}`);
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
        <Experience translations={experienceTranslations} />
      </section>
      
      <section className="bg-[#F1F3F5] dark:bg-[#0A0A0B]">
        <Education translations={educationTranslations} />
      </section>
      
      <section className="bg-white dark:bg-[#121214]">
        <DetailedSkills translations={skillsTranslations} />
      </section>
      
      <section className="bg-[#F1F3F5] dark:bg-[#0A0A0B]">
        <Technologies Proficient={Proficient}/>
      </section>
      
      <main className="bg-white dark:bg-[#121214]">
        <ProjectsList 
          generalTranslations={projectsGeneralTranslations}
          projectsTranslations={projectsTranslations}
          sectionTranslations={projectsSectionTranslations}
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