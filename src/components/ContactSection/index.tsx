import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt } from "react-icons/fa";

interface ContactSectionProps {
  translations: {
    sectionTitle: string;
    title: string;
    subtitle: string;
    followMe: string;
    email: string;
    location: string;
    whatsApp: string;
  };
}

const ContactSection = ({ translations }: ContactSectionProps) => {

  return (
    <section className="py-16" id="contact">
      <div className="max-w-[80%] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
            {translations.sectionTitle}
          </p>
          <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
            {translations.title}
          </h2>
          <p className="text-[#495057] dark:text-[#868E96] max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white dark:bg-[#121214] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-[#1a1a1d] text-center">
              <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-4 rounded-full w-fit mx-auto mb-4">
                <FaEnvelope className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#212529] dark:text-[#F8F9FA] mb-2">{translations.email}</h3>
              <a href="mailto:lgmarchioreh@gmail.com" className="text-[#5C63ED] dark:text-[#623CEA] hover:underline break-all">
                lgmarchioreh@gmail.com
              </a>
            </div>

            <div className="bg-white dark:bg-[#121214] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-[#1a1a1d] text-center">
              <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-4 rounded-full w-fit mx-auto mb-4">
                <FaWhatsapp className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#212529] dark:text-[#F8F9FA] mb-2">{translations.whatsApp}</h3>
              <a href="https://api.whatsapp.com/send/?phone=5541995117543&text&type=phone_number&app_absent=0" 
                 className="text-[#5C63ED] dark:text-[#623CEA] hover:underline">
                +55 (41) 99511-7543
              </a>
            </div>

            <div className="bg-white dark:bg-[#121214] p-6 rounded-xl shadow-lg border border-gray-100 dark:border-[#1a1a1d] text-center md:col-span-2 lg:col-span-1">
              <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-4 rounded-full w-fit mx-auto mb-4">
                <FaMapMarkerAlt className="text-white" size={24} />
              </div>
              <h3 className="font-semibold text-[#212529] dark:text-[#F8F9FA] mb-2">{translations.location}</h3>
              <p className="text-[#495057] dark:text-[#868E96]">Curitiba, Paraná, Brazil</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-[#212529] dark:text-[#F8F9FA] mb-6">{translations.followMe}</h3>
            <div className="flex justify-center gap-6">
              <a 
                href="https://linkedin.com/in/luis-gustavo-hedel-marchiore"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0077B5] p-4 rounded-full text-white hover:bg-[#005885] transition-colors hover:scale-110 transform"
              >
                <FaLinkedin size={24} />
              </a>
              <a 
                href="https://github.com/LuisGHM"
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#333] p-4 rounded-full text-white hover:bg-[#555] transition-colors hover:scale-110 transform"
              >
                <FaGithub size={24} />
              </a>
              <a 
                href="mailto:lgmarchioreh@gmail.com"
                className="bg-[#EA4335] p-4 rounded-full text-white hover:bg-[#D33B2C] transition-colors hover:scale-110 transform"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;