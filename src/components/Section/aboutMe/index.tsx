import { useTranslations } from "next-intl";

export const AboutMe = () => {
    const t = useTranslations("AboutMe");
    return(
        <div className="w-full flex flex-col justify-center items-center p-5 gap-5 md:max-w-[80%] mx-auto md:gap-8">
            <h1 className="text-3xl font-bold font-serif text-[#FFFFFF] dark:text-[#F8F9FA] md:self-start md:mt-10 max-w-[700px] md:text-[44px]">{t("Title")}</h1>
            <p className="font-normal text-base text-[#FFFFFFCC] dark:text-[#868E96] md:self-start max-w-[700px]">{t("Text")}</p>
            <div className="flex flex-col w-full gap-5 md:flex-row max-w-[600px] self-start mb-14">
                <a href="#project" className="bg-white font-semibold w-full flex justify-center items-center rounded-lg py-2 hover:bg-[#ECEFF1] dark:bg-[#623CEA] dark:hover:bg-[#311E75] md:max-w-[113px] md:max-h-[44px]">{t("Projects")}</a>
                <a href="#tech" className="text-white font-semibold w-full flex justify-center items-center rounded-lg py-2 hover:bg-[#7D82F1] dark:hover:bg-white dark:hover:text-black border-[#121214] md:max-w-[113px] md:max-h-[44px]">{t("Technologies")}</a>
            </div>
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