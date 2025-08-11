"use client"

interface FooterProp {
    thanks: string
}

const FooterSection = ({thanks}: FooterProp) => {
    return (
        <div className="flex flex-col items-center justify-center p-10 mt-5 max-w-[80%] mx-auto">
            <h1 className="text-[#FFFFFF] font-semibold text-center">{thanks}</h1>
            <div className="mt-4 w-16 h-0.5 bg-[#FFFFFF] opacity-30"></div>
        </div>
    );
};

export default FooterSection;
