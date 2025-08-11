"use client"
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrolled = window.pageYOffset;
      
      // Mostra o botão quando rolar mais de 300px (simples e direto)
      setIsVisible(scrolled > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#5C63ED] dark:bg-[#623CEA] text-white p-4 rounded-full shadow-xl hover:bg-[#4C51BF] dark:hover:bg-[#311E75] transition-all duration-300 transform hover:scale-110 z-50 group backdrop-blur-sm"
          aria-label="Voltar ao topo"
        >
          <FaArrowUp size={20} className="group-hover:-translate-y-1 transition-transform duration-300" />
        </button>
      )}
    </>
  );
};

export default BackToTop;