"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import luis from "../../assets/imgs/luis.jpg";
import { IoMenuSharp } from "react-icons/io5";
import CellNav from '../nav';
import { IoClose } from "react-icons/io5";

const Header = ({ portuguease, english, whatsapp }: any) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    const toggleNav = () => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsOpen(!isOpen);
            setIsAnimating(false);
        }, 500);
    };

    useEffect(() => {
        if (!isOpen && isAnimating) {
            setTimeout(() => {
                setIsOpen(!isOpen);
            }, 500);
        }
    }, [isOpen, isAnimating]);

    return (
        <div className={`flex flex-col w-full py-8 px-5 md:max-w-[90%] mx-auto`}>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 w-full'>
                    <Image src={luis} alt="Luis" className="w-10 h-10 rounded-full overflow-hidden" />
                    <h2 className='font-semibold size-4 w-full h-full'>Luis Gustavo Hedel Marchiore</h2>
                </div>
                <div className='flex items-center md:hidden'>
                    <button className={`w-7 h-7 items-center dark:hover:bg-slate-900 `} onClick={toggleNav}>
                        {isOpen ? <IoClose className={`font-semibold size-4 w-full h-full rounded-sm dark:hover:bg-slate-800 dark:hover:font-bold`} /> : <IoMenuSharp className={`font-semibold size-4 w-full h-full rounded-sm dark:hover:bg-slate-800 dark:hover:font-bold`} />}
                    </button>
                </div>
                <div className='hidden md:block'>

                </div>
            </div>
            <div className={`mt-4 max-h-screen transition-all duration-500 ${isAnimating ? 'opacity-0' : isOpen ? 'opacity-100 max-h-full' : 'opacity-0 max-h-0'}`} style={{ display: isOpen || isAnimating ? 'block' : 'none' }}>
                <CellNav portuguease={portuguease} english={english} whatsapp={whatsapp}/>
            </div>
        </div>
    );
}

export default Header;
