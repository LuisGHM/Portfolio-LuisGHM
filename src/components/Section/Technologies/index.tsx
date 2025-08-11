'use client'
import React, { useState } from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaPython, FaGit, FaNodeJs, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiPostgresql, SiDjango, SiExpress, SiGithub, SiJupyter, SiNestjs, SiNextdotjs, SiPandas, SiPytorch, SiTensorflow } from 'react-icons/si';
import { IconType } from 'react-icons';
import Tooltip from "../../modal/TechModal/index";

interface ProficientProps {
  Proficient: string
}

const Technologies = ({ Proficient }: ProficientProps) => {
  const icons: { [key: string]: { icon: IconType; color: string } } = {
    JavaScript: { icon: FaJs, color: "#F7DF1E" },
    TypeScript: { icon: SiTypescript, color: "#3178C6" },
    React: { icon: FaReact, color: "#61DAFB" },
    HTML5: { icon: FaHtml5, color: "#E34F26" },
    CSS3: { icon: FaCss3Alt, color: "#1572B6" },
    Python: { icon: FaPython, color: "#3776AB" },
    Django: { icon: SiDjango, color: "#092E20" },
    Docker: { icon: FaDocker, color: "#2496ED" },
    Express: { icon: SiExpress, color: "#000000" },
    Git: { icon: FaGit, color: "#F05032" },
    GitHub: { icon: SiGithub, color: "#181717" },
    Jupyter: { icon: SiJupyter, color: "#F37626" },
    NestJS: { icon: SiNestjs, color: "#E0234E" },
    "Next.js": { icon: SiNextdotjs, color: "#000000" },
    "Node.js": { icon: FaNodeJs, color: "#339933" },
    Pandas: { icon: SiPandas, color: "#150458" },
    PostgreSQL: { icon: SiPostgresql, color: "#336791" },
    PyTorch: { icon: SiPytorch, color: "#EE4C2C" },
    TensorFlow: { icon: SiTensorflow, color: "#FF6F00" }
  };

  const [hoveredTech, setHoveredTech] = useState("");

  const techCategories = {
    "Frontend": ["JavaScript", "TypeScript", "React", "Next.js", "HTML5", "CSS3"],
    "Backend": ["Python", "Node.js", "Django", "Express", "NestJS"],
    "Database & Tools": ["PostgreSQL", "Git", "GitHub", "Docker"],
    "Data Science & AI": ["Pandas", "Jupyter", "PyTorch", "TensorFlow"]
  };

  const renderTechIcon = (tech: string, index: number) => {
    const { icon: Icon, color } = icons[tech];
    return (
      <div 
        key={`${tech}-${index}`} 
        className="group relative flex flex-col items-center p-4 bg-white dark:bg-[#1a1a1d] rounded-xl border border-gray-200 dark:border-[#2a2a2d] hover:border-[#5C63ED] dark:hover:border-[#623CEA] transition-all duration-300 hover:shadow-lg hover:-translate-y-2 cursor-pointer"
        onMouseEnter={() => setHoveredTech(tech)}
        onMouseLeave={() => setHoveredTech("")}
      >
        <div className="relative">
          <Icon 
            className="w-12 h-12 mb-2 transition-colors duration-300" 
            style={{ color: hoveredTech === tech ? color : '#6B7280' }}
          />
          {hoveredTech === tech && <Tooltip text={tech} />}
        </div>
        <span className="text-sm font-medium text-[#495057] dark:text-[#F8F9FA] text-center group-hover:text-[#5C63ED] dark:group-hover:text-[#623CEA] transition-colors duration-300">
          {tech}
        </span>
      </div>
    );
  };

  return (
    <section className="py-16" id="tech">
      <div className="max-w-[80%] mx-auto px-5">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
            TECNOLOGIAS
          </p>
          <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
            {Proficient}
          </h2>
          <p className="text-[#495057] dark:text-[#868E96] max-w-3xl">
            Tecnologias e ferramentas que utilizo para criar soluções eficientes e modernas
          </p>
        </div>

        {/* Technologies by Category */}
        <div className="space-y-12">
          {Object.entries(techCategories).map(([category, techs]) => (
            <div key={category}>
              <h3 className="text-xl font-semibold text-[#212529] dark:text-[#F8F9FA] mb-6">
                {category}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {techs.map((tech, index) => renderTechIcon(tech, index))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Technologies;