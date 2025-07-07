import { FaGraduationCap, FaUniversity } from "react-icons/fa";

const Education = () => {
  const education = [
    {
      degree: "Master's in Electrical Engineering & Industrial Computer Science (CPGEI)",
      school: "UTFPR (Federal University of Technology - Paraná)",
      period: "2025 - Present",
      focus: "Computer Vision & Machine Learning",
      status: "In Progress",
      description: "Advanced research in computer vision applications, focusing on deep learning models for image classification and object detection."
    },
    {
      degree: "Bachelor's in Software Engineering", 
      school: "UniBrasil",
      period: "2020 - 2024",
      focus: "Full-Stack Development & Software Architecture",
      status: "Completed",
      description: "Comprehensive software engineering education covering web development, database design, software architecture, and project management."
    }
  ];

  return (
    <section className="py-16" id="education">
      <div className="max-w-[80%] mx-auto px-5">
        <div className="mb-12">
          <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
            EDUCATION
          </p>
          <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
            Academic Background
          </h2>
          <p className="text-[#495057] dark:text-[#868E96] max-w-2xl">
            Academic foundation in software engineering and advanced AI research
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
                      edu.status === 'Completed' 
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
                    <strong>Focus:</strong> {edu.focus}
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