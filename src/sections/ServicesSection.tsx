import React from 'react';
import FadeIn from '../components/FadeIn';

const services = [
  {
    num: "01",
    title: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations."
  },
  {
    num: "02",
    title: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life."
  },
  {
    num: "03",
    title: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences."
  },
  {
    num: "04",
    title: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence."
  },
  {
    num: "05",
    title: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience."
  }
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2 className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28" style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}>
        Services
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {services.map((service, i) => (
          <FadeIn key={service.num} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row border-b border-[rgba(12,12,12,0.15)] py-8 sm:py-10 md:py-12 items-start md:items-center gap-6 md:gap-12 last:border-b-0">
              <span className="font-black text-[#0C0C0C] shrink-0" style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}>
                {service.num}
              </span>
              <div className="flex flex-col">
                <h3 className="font-medium uppercase text-[#0C0C0C] mb-2 md:mb-4" style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}>
                  {service.title}
                </h3>
                <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C] opacity-60" style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}>
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
