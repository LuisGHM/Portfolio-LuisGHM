import { useTranslations } from "next-intl"
import Header from "../../components/header/index"
import AboutMe from "@/components/Section/aboutMe";
import Technologies from "@/components/Section/Technologies";
import ProjectsList from "@/components/ProjectsList";


export default function Home() {
  const t = useTranslations("Home");
  const portuguease = t("Portuguese")
  const english = t("English")
  const whatsapp = t("Whatsapp")
  const t2 = useTranslations("technologies");
  const Proficient = t2("Proficient")
  
  return(
    <>
      <Header portuguease={portuguease} english={english} whatsapp={whatsapp}/>
      <section className="w-full to-blue-500">
        <AboutMe/>
      </section>
      <section>
        <Technologies Proficient={Proficient}/>
      </section>
      <main className="bg-white">
          <ProjectsList/>
      </main>
    </>
  )
}
