"use client"
import { FaCode, FaServer, FaBrain, FaTools } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

interface DetailedSkillsProps {
  translations: {
    sectionTitle: string;
    title: string;
    subtitle: string;
    categories: {
      frontend: string;
      backend: string;
      ai: string;
      tools: string;
    };
    skillsList: {
      frontend: {
        react: string;
        nextJS: string;
        typeScript: string;
        tailwindCSS: string;
        javaScript: string;
      };
      backend: {
        python: string;
        djangoREST: string;
        fastAPI: string;
        postgreSQL: string;
        restfulAPIs: string;
      };
      ai: {
        tensorFlow: string;
        keras: string;
        yolov11: string;
        vgg16: string;
        cvae: string;
      };
      tools: {
        gitGitHub: string;
        docker: string;
        scikitLearn: string;
        dataAnalysis: string;
      };
    };
  };
}

const DetailedSkills = ({ translations }: DetailedSkillsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: translations.categories.frontend,
      icon: <FaCode />,
      color: "bg-blue-500",
      skills: [
        { name: translations.skillsList.frontend.react, level: 90 },
        { name: translations.skillsList.frontend.nextJS, level: 85 },
        { name: translations.skillsList.frontend.typeScript, level: 85 },
        { name: translations.skillsList.frontend.tailwindCSS, level: 80 },
        { name: translations.skillsList.frontend.javaScript, level: 90 }
      ]
    },
    {
      title: translations.categories.backend, 
      icon: <FaServer />,
      color: "bg-green-500",
      skills: [
        { name: translations.skillsList.backend.python, level: 90 },
        { name: translations.skillsList.backend.djangoREST, level: 85 },
        { name: translations.skillsList.backend.fastAPI, level: 80 },
        { name: translations.skillsList.backend.postgreSQL, level: 85 },
        { name: translations.skillsList.backend.restfulAPIs, level: 90 }
      ]
    },
    {
      title: translations.categories.ai,
      icon: <FaBrain />,
      color: "bg-purple-500", 
      skills: [
        { name: translations.skillsList.ai.tensorFlow, level: 85 },
        { name: translations.skillsList.ai.keras, level: 80 },
        { name: translations.skillsList.ai.yolov11, level: 75 },
        { name: translations.skillsList.ai.vgg16, level: 70 },
        { name: translations.skillsList.ai.cvae, level: 75 }
      ]
    },
    {
      title: translations.categories.tools,
      icon: <FaTools />,
      color: "bg-orange-500",
      skills: [
        { name: translations.skillsList.tools.gitGitHub, level: 90 },
        { name: translations.skillsList.tools.docker, level: 70 },
        { name: translations.skillsList.tools.scikitLearn, level: 80 },
        { name: translations.skillsList.tools.dataAnalysis, level: 85 }
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section className="py-16" id="skills" ref={ref}>
      <div className="max-w-[80%] mx-auto px-5">
        <div className="mb-12">
          <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
            {translations.sectionTitle}
          </p>
          <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
            {translations.title}
          </h2>
          <p className="text-[#495057] dark:text-[#868E96] max-w-2xl">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-[#F8F9FA] dark:bg-[#0A0A0B] p-6 rounded-lg border border-gray-100 dark:border-[#1a1a1d] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center gap-3 mb-6">
                <div className={`${category.color} p-3 rounded-full text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#212529] dark:text-[#F8F9FA]">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[#495057] dark:text-[#868E96] font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-[#868E96]">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-[#1a1a1d] rounded-full h-2">
                      <div 
                        className="bg-[#5C63ED] dark:bg-[#623CEA] h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: isVisible ? `${skill.level}%` : '0%',
                          transitionDelay: `${(index * 200) + (skillIndex * 100)}ms`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DetailedSkills;