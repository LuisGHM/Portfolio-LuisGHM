'use client'
import Slider from "react-slick";
import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaDatabase, FaGit, FaNodeJs, FaDotCircle } from 'react-icons/fa';
import { SiTypescript, SiCsharp, SiPostgresql, SiDotnet, SiDjango } from 'react-icons/si';
import { IconType } from 'react-icons';
import Tooltip from "../../modal/TechModal/index";

interface Proficient{
  Proficient: string
}

const Technologies = ({ Proficient }: Proficient) => {
  const icons: { [key: string]: IconType } = {
    HTML: FaHtml5,
    CSS: FaCss3Alt,
    JavaScript: FaJs,
    TypeScript: SiTypescript,
    "C#": SiCsharp,
    Python: FaPython,
    SQL: FaDatabase,
    postgreSQL: SiPostgresql,
    "Git/GitHub": FaGit,
    React: FaReact,
    ".NET Core": SiDotnet,
    Express: FaNodeJs,
    Django: SiDjango
  };

  const [hoveredTech, setHoveredTech] = useState("");

  const techIcons = Object.keys(icons).map((tech, index) => {
    const Icon = icons[tech as keyof typeof icons];
    return (
      <div key={index} className="mr-3 relative mt-16 mb-10" onMouseEnter={() => setHoveredTech(tech)} onMouseLeave={() => setHoveredTech("")}>
        <div className="bg-white p-3 flex flex-col justify-center items-center w-40 h-28 dark:bg-black">
          {hoveredTech === tech && <Tooltip text={tech} />}
          <Icon className="w-14 h-14 mb-2 text-4xl"/>
        </div>
      </div>
    );
  });

  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="bg-[#F1F3F5] p-5 overflow-x-hidden dark:bg-[#0A0A0B]" id="tech">
      <h1 className="text-2xl font-medium text-[#2D2E4D] mt-5 dark:text-[#F8F9FA]">{Proficient}</h1>
      <Slider {...settings}>
        {techIcons}
      </Slider>
    </div>
  );
};

export default Technologies;
