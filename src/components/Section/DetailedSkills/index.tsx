"use client"
import { FaCode, FaServer, FaBrain, FaTools } from "react-icons/fa";
import { useState, useEffect, useRef } from "react";

const DetailedSkills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode />,
      color: "bg-blue-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 80 },
        { name: "JavaScript", level: 90 }
      ]
    },
    {
      title: "Backend Development", 
      icon: <FaServer />,
      color: "bg-green-500",
      skills: [
        { name: "Python", level: 90 },
        { name: "Django REST", level: 85 },
        { name: "FastAPI", level: 80 },
        { name: "PostgreSQL", level: 85 },
        { name: "RESTful APIs", level: 90 }
      ]
    },
    {
      title: "AI & Computer Vision",
      icon: <FaBrain />,
      color: "bg-purple-500", 
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "Keras", level: 80 },
        { name: "YOLOv11", level: 75 },
        { name: "VGG16", level: 70 },
        { name: "CVAE", level: 75 }
      ]
    },
    {
      title: "Tools & Others",
      icon: <FaTools />,
      color: "bg-orange-500",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "Scikit-Learn", level: 80 },
        { name: "Data Analysis", level: 85 }
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
            SKILLS
          </p>
          <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
            Technical Expertise
          </h2>
          <p className="text-[#495057] dark:text-[#868E96] max-w-2xl">
            Expertise across the full technology stack with specialization in AI and computer vision
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