import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
export const HeroSection = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative h-screen w-full bg-cover bg-center flex items-center" style={{
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('https://scontent.fcmb1-2.fna.fbcdn.net/v/t39.30808-6/476106816_634874472365541_2585790954317978016_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=OnZKZ-vOZ80Q7kNvwFu30eY&_nc_oc=AdktyYZUAn0KojIKBdvrvN0A52mmDhjFk2bEM-DfXdDjMa5sY5D23nphNdyUltNmw4s&_nc_zt=23&_nc_ht=scontent.fcmb1-2.fna&_nc_gid=CPT7viVZHeZZp004JaZoGw&oh=00_Afhsip6g073jQIk9WIXJXuIHNjI6tDT_cKdxeR7LHGM2Dg&oe=691B1A10')`
  }}>
      <div className="container mx-auto px-4 md:px-6 text-center md:text-left">
        <div className="max-w-3xl md:ml-16">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
            <span className="text-red-600">RYANS</span> Restaurant
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">
            Experience the authentic flavors of Sri Lanka in every bite
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button onClick={scrollToContact} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2">
              Reserve a Table
              <ArrowRightIcon size={20} />
            </button>
            <button className="bg-transparent hover:bg-white/10 text-white border border-white px-8 py-3 rounded-lg font-medium transition-colors duration-300">
              View Menu
            </button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <div className="animate-bounce bg-white/20 p-2 w-10 h-10 ring-1 ring-white/20 rounded-full flex items-center justify-center">
          <svg className="w-6 h-6 text-white" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>;
};