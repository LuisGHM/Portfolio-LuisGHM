"use client"
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaWhatsapp, FaMapMarkerAlt, FaPaperPlane } from "react-icons/fa";

interface ContactSectionProps {
  translations: {
    title: string;
    subtitle: string;
    getInTouch: string;
    followMe: string;
    name: string;
    email: string;
    message: string;
    sendMessage: string;
    sending: string;
    successMessage: string;
    errorMessage: string;
    location: string;
    whatsApp: string;
  };
}

const ContactSection = ({ translations }: ContactSectionProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handler)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-16" id="contact">
      <div className="max-w-[80%] mx-auto px-5">
        <div className="text-center mb-12">
          <p className="font-semibold text-base text-[#495057] dark:text-[#F8F9FA] mb-2">
            CONTACT
          </p>
          <h2 className="text-3xl font-bold text-[#2D2E4D] dark:text-[#623CEA] mb-4">
            {translations.title}
          </h2>
          <p className="text-[#495057] dark:text-[#868E96] max-w-2xl mx-auto">
            {translations.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#212529] dark:text-[#F8F9FA] mb-6">
                {translations.getInTouch}
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-3 rounded-full">
                    <FaEnvelope className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-[#212529] dark:text-[#F8F9FA]">{translations.email}</p>
                    <a href="mailto:lgmarchioreh@gmail.com" className="text-[#5C63ED] dark:text-[#623CEA] hover:underline">
                      lgmarchioreh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-3 rounded-full">
                    <FaMapMarkerAlt className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-[#212529] dark:text-[#F8F9FA]">{translations.location}</p>
                    <p className="text-[#495057] dark:text-[#868E96]">Curitiba, Paraná, Brazil</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-[#5C63ED] dark:bg-[#623CEA] p-3 rounded-full">
                    <FaWhatsapp className="text-white" size={18} />
                  </div>
                  <div>
                    <p className="font-medium text-[#212529] dark:text-[#F8F9FA]">{translations.whatsApp}</p>
                    <a href="https://api.whatsapp.com/send/?phone=5541995117543&text&type=phone_number&app_absent=0" className="text-[#5C63ED] dark:text-[#623CEA] hover:underline">
                      +55 (41) 99511-7543
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-[#212529] dark:text-[#F8F9FA] mb-4">{translations.followMe}</h4>
              <div className="flex gap-4">
                <a 
                  href="https://linkedin.com/in/luis-gustavo-hedel-marchiore"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#0077B5] p-3 rounded-full text-white hover:bg-[#005885] transition-colors"
                >
                  <FaLinkedin size={20} />
                </a>
                <a 
                  href="https://github.com/LuisGHM"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#333] p-3 rounded-full text-white hover:bg-[#555] transition-colors"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white dark:bg-[#121214] p-8 rounded-xl shadow-lg border border-gray-100 dark:border-[#1a1a1d]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#212529] dark:text-[#F8F9FA] mb-2">
                  {translations.name} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-[#1a1a1d] rounded-lg focus:ring-2 focus:ring-[#5C63ED] focus:border-transparent dark:bg-[#0A0A0B] dark:text-[#F8F9FA] transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#212529] dark:text-[#F8F9FA] mb-2">
                  {translations.email} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-[#1a1a1d] rounded-lg focus:ring-2 focus:ring-[#5C63ED] focus:border-transparent dark:bg-[#0A0A0B] dark:text-[#F8F9FA] transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#212529] dark:text-[#F8F9FA] mb-2">
                  {translations.message} *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-[#1a1a1d] rounded-lg focus:ring-2 focus:ring-[#5C63ED] focus:border-transparent dark:bg-[#0A0A0B] dark:text-[#F8F9FA] transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#5C63ED] dark:bg-[#623CEA] text-white py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-3 hover:bg-[#4C51BF] dark:hover:bg-[#311E75] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    {translations.sending}
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    {translations.sendMessage}
                  </>
                )}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 dark:text-green-400 text-center">
                  {translations.successMessage}
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 dark:text-red-400 text-center">
                  {translations.errorMessage}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;