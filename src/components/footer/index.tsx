"use client"
import { FaArrowUp } from "react-icons/fa";

interface FooterProp {
    thanks: string
}

const FooterSection = ({thanks}: FooterProp) => {

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <div className="flex flex-col items-center justify-center p-10 mt-5 relative max-w-[90%] mx-auto">
            <a href="#" onClick={scrollToTop} className="absolute top-0 transform -translate-y-1/2 bg-white rounded-full p-2 text-black">
                <FaArrowUp />
            </a>
            <h1 className="text-[#FFFFFF] font-semibold">{thanks}</h1>
        </div>
    );
};

export default FooterSection;
