import { useTranslations } from "next-intl"
import Header from "../../components/header/index"
import AboutMe from "@/components/Section/aboutMe";
import Technologies from "@/components/Section/Technologies";
import ProjectsList from "@/components/ProjectsList";
import FooterSection from "@/components/footer";


export default function Home() {
  const t = useTranslations("Home");
  const portuguease = t("Portuguese")
  const english = t("English")
  const whatsapp = t("Whatsapp")
  const t2 = useTranslations("technologies");
  const Proficient = t2("Proficient")
  const t3 = useTranslations("Footer")
  
  return(
    <>
      <header className="border-2 border-gray-100 dark:border-[#0A0A0B] dark:border-b-[#623CEA] dark:bg-[#0A0A0B] dark:text-white">
        <Header portuguease={portuguease} english={english} whatsapp={whatsapp}/>
      </header>
      <section className="to-blue-500 relative bg-[#5C63ED]">
        <AboutMe/>
      </section>
      <section className="bg-[#F1F3F5] dark:bg-[#0A0A0B]">
        <Technologies Proficient={Proficient}/>
      </section>
      <main className="bg-white dark:bg-[#121214]">
          <ProjectsList/>
      </main>
      <footer className="bg-[#5C63ED] dark:bg-[#623CEA]">
        <FooterSection thanks={t3("thanks")}/>
      </footer>
    </>
  )
}
