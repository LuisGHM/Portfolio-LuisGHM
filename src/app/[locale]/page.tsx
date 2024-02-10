import { useTranslations } from "next-intl"
import Header from "../../components/header/index"


export default function Home() {
  const t = useTranslations("Home");
  const portuguease = t("Portuguese")
  const english = t("English")
  const whatsapp = t("Whatsapp")
  
  return(
    <>
      <Header portuguease={portuguease} english={english} whatsapp={whatsapp}/>
    </>
  )
}
