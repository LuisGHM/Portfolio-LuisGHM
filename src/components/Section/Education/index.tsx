import { FaGraduationCap, FaUniversity } from "react-icons/fa";

interface EducationProps {
  translations: {
    sectionTitle: string;
    title: string;
    subtitle: string;
    focusLabel: string;
    degrees: {
      masters: {
        degree: string;
        school: string;
        period: string;
        focus: string;
        status: string;
        description: string;
      };
      bachelor: {
        degree: string;
        school: string;
        period: string;
        focus: string;
        status: string;
        description: string;
      };
    };
  };
}

const Education = ({ translations }: EducationProps) => {
  const education = [
    {
      degree: translations.degrees.masters.degree,
      school: translations.degrees.masters.school,
      period: translations.degrees.masters.period,
      focus: translations.degrees.masters.focus,
      status: translations.degrees.masters.status,
      description: translations.degrees.masters.description
    },
    {
      degree: translations.degrees.bachelor.degree, 
      school: translations.degrees.bachelor.school,
      period: translations.degrees.bachelor.period,
      focus: translations.degrees.bachelor.focus,
      status: translations.degrees.bachelor.status,
      description: translations.degrees.bachelor.description
    }
  ];

  return (
    <section className="py-16" id="education">
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
          {education.map((edu, index) => (
            <div key={index} className="bg-white dark:bg-[#121214] p-6 rounded-lg shadow-sm border border-gray-100 dark:border-[#1a1a1d] hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-3 rounded-full">
                  <FaGraduationCap className="text-white" size={20} />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold text-[#212529] dark:text-[#F8F9FA] leading-tight">
                      {edu.degree}
                    </h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
                      edu.status === 'Completed' || edu.status === 'Concluído'
                        ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                        : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-[#5C63ED] dark:text-[#623CEA] mb-2">
                    <FaUniversity size={14} />
                    <p className="font-medium">{edu.school}</p>
                  </div>
                  
                  <p className="text-sm text-[#868E96] mb-3">{edu.period}</p>
                  
                  <p className="text-[#495057] dark:text-[#868E96] italic mb-3">
                    <strong>{translations.focusLabel}</strong> {edu.focus}
                  </p>
                  
                  <p className="text-sm text-[#495057] dark:text-[#868E96] leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;