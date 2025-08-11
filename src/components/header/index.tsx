"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import luis from "../../assets/imgs/luis.jpeg";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import CellNav from '../nav/CellNav';
import PcNav from '../nav/PcNav';

const Header = ({ portuguese, english, whatsapp }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleNav = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-40 transition-all duration-300 ${
            isScrolled 
                ? 'bg-white/90 dark:bg-[#0A0A0B]/90 backdrop-blur-md shadow-lg border-b border-gray-200/20 dark:border-[#2a2a2d]/20' 
                : 'bg-transparent'
        }`}>
            <div className={`flex flex-col w-full py-6 px-5 md:max-w-[80%] mx-auto ${
                isScrolled ? 'py-4' : 'py-6'
            } transition-all duration-300`}>
                <div className='flex justify-between items-center'>
                    {/* Logo/Brand */}
                    <div className='flex items-center gap-3 group cursor-pointer'>
                        <div className="relative">
                            <Image 
                                src={luis} 
                                alt="Luis Gustavo Hedel Marchiore" 
                                className="w-12 h-12 rounded-full border-2 border-[#5C63ED]/20 dark:border-[#623CEA]/20 group-hover:border-[#5C63ED] dark:group-hover:border-[#623CEA] transition-all duration-300 shadow-md" 
                            />
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#5C63ED]/10 to-[#623CEA]/10 group-hover:from-[#5C63ED]/20 group-hover:to-[#623CEA]/20 transition-all duration-300"></div>
                        </div>
                        <div>
                            <h2 className='font-bold text-lg text-[#2D2E4D] dark:text-[#F8F9FA] group-hover:text-[#5C63ED] dark:group-hover:text-[#623CEA] transition-colors duration-300'>
                                Luis Gustavo
                            </h2>
                            <p className='text-sm text-[#495057] dark:text-[#868E96] font-medium'>
                                Software Engineer
                            </p>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='flex items-center lg:hidden'>
                        <button 
                            className={`w-10 h-10 flex items-center justify-center rounded-lg border border-gray-200 dark:border-[#2a2a2d] bg-white/80 dark:bg-[#121214]/80 backdrop-blur-sm hover:bg-[#5C63ED] hover:border-[#5C63ED] dark:hover:bg-[#623CEA] dark:hover:border-[#623CEA] hover:text-white transition-all duration-300 shadow-sm`} 
                            onClick={toggleNav}
                            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                        >
                            {isOpen 
                                ? <IoClose className="w-5 h-5 transition-transform duration-300" /> 
                                : <IoMenuSharp className="w-5 h-5 transition-transform duration-300" />
                            }
                        </button>
                    </div>

                    {/* Desktop Navigation */}
                    <div className='hidden lg:block'>
                        <PcNav portuguese={portuguese} english={english} whatsapp={whatsapp}/>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
                }`}>
                    <div className="bg-white/80 dark:bg-[#121214]/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-[#2a2a2d]/50 p-4 shadow-lg">
                        <CellNav portuguese={portuguese} english={english} whatsapp={whatsapp}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;