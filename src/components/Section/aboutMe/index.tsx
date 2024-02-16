import { useTranslations } from "next-intl";

export const AboutMe = () => {
    const t = useTranslations("AboutMe");
    return(
        <div className="w-full flex flex-col justify-center items-center text-center p-5 gap-5 dark:bg-[#121214] md:max-w-[90%] mx-auto">
            <h1 className="text-3xl font-bold font-serif text-[#FFFFFFCC] dark:text-[#F8F9FA]">{t("Title")}</h1>
            <p className="font-normal text-base text-white dark:text-[#868E96]">{t("Text")}</p>
            <a href="#project" className="bg-white font-semibold w-full flex justify-center items-center rounded-lg py-2 hover:bg-[#ECEFF1] dark:bg-[#623CEA] dark:hover:bg-[#311E75]">{t("Projects")}</a>
            <a href="#tech" className="text-white font-semibold w-full flex justify-center items-center rounded-lg py-2 hover:bg-[#7D82F1] mb-10 dark:hover:bg-white dark:hover:text-black border-[#121214]">{t("Technologies")}</a>
            <div className="absolute bottom-2 right-0 flex flex-col-reverse gap-5 mt-6 ">
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 bg-white rounded-full"
                            style={{ marginRight: '10px' }}
                        ></div>
                    ))}
                </div>
                <div className="flex">
                    {[...Array(5)].map((_, index) => (
                        <div
                            key={index}
                            className="w-2 h-2 bg-white rounded-full"
                            style={{ marginRight: '10px' }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutMe;