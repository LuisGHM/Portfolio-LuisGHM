import { FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

interface ExperienceProps {
  translations: {
    sectionTitle: string;
    title: string;
    subtitle: string;
    companies: {
      stylest: {
        company: string;
        position: string;
        period: string;
        location: string;
        highlights: string[];
      };
      kpercon: {
        company: string;
        position: string;
        period: string;
        location: string;
        highlights: string[];
      };
    };
  };
}

const Experience = ({ translations }: ExperienceProps) => {
  // Array de experiências usando as traduções
  const experiences = [
    {
      company: translations.companies.stylest.company,
      position: translations.companies.stylest.position,
      period: translations.companies.stylest.period,
      location: translations.companies.stylest.location,
      technologies: ["Python", "TensorFlow", "YOLOv11", "FastAPI", "Computer Vision"],
      highlights: translations.companies.stylest.highlights
    },
    {
      company: translations.companies.kpercon.company,
      position: translations.companies.kpercon.position,
      period: translations.companies.kpercon.period,
      location: translations.companies.kpercon.location,
      technologies: ["React", "Next.js", "Django", "PostgreSQL", "TypeScript"],
      highlights: translations.companies.kpercon.highlights
    }
  ];

  return (
    <section className="py-16" id="experience">
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

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 border-l-2 border-[#5C63ED] dark:border-[#623CEA]">
              <div className="absolute -left-2 top-0 w-4 h-4 bg-[#5C63ED] dark:bg-[#623CEA] rounded-full"></div>
              
              <div className="bg-[#F8F9FA] dark:bg-[#0A0A0B] p-6 rounded-lg shadow-sm border border-gray-100 dark:border-[#1a1a1d]">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[#212529] dark:text-[#F8F9FA]">
                      {exp.position}
                    </h3>
                    <p className="text-[#5C63ED] dark:text-[#623CEA] font-medium text-lg">
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-sm text-[#868E96] mt-2 md:mt-0">
                    <div className="flex items-center gap-1 mb-1">
                      <FaCalendarAlt size={12} />
                      {exp.period}
                    </div>
                    <div className="flex items-center gap-1">
                      <FaMapMarkerAlt size={12} />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-4">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-[#495057] dark:text-[#868E96] flex items-start">
                      <span className="text-[#5C63ED] dark:text-[#623CEA] mr-2 mt-1">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="bg-[#E7E8FC] dark:bg-[#1a1a1d] text-[#5C63ED] dark:text-[#868E96] px-3 py-1 rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;