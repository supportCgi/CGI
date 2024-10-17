"use client";
import React, { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Tilt } from 'react-tilt';
import Image from 'next/image';

export default function VisionSection() {
  const [digitalSkillsPercentage, setDigitalSkillsPercentage] = useState(0);
  const [techStartupsPercentage, setTechStartupsPercentage] = useState(0);

  useEffect(() => {
    const increment = (setter: React.Dispatch<React.SetStateAction<number>>, target: number) => {
      let count = 0;
      const interval = setInterval(() => {
        if (count < target) {
          count += 1;
          setter(count);
        } else {
          clearInterval(interval);
        }
      }, 5);
    };

    increment(setDigitalSkillsPercentage, 65);
    increment(setTechStartupsPercentage, 80);
  }, []);

  return (
    <div className="mx-auto w-full ">
      <section className="text-black text-center">
        <div className="w-full h-full mb-16 z-0 relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/fablab.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-950 bg-opacity-20 z-10" />
            <Image 
              src="/images/logo/logoF.png" 
              alt="Logo" 
              layout="fill" 
              objectFit="cover"
              className="opacity-70 z-0" 
            />
          </div>
        </div>
        <h1 className="md:text-6xl text-4xl font-bold pt-4">Notre Vision</h1>
        <p className="text-xl mt-4">CGI aspire à transformer le Gabon en un leader de l&#39;innovation numérique en Afrique.</p>
      </section>

      <div className="mx-auto max-w-7xl mt-16">
        <AnimatedSection>
          <section className="flex flex-col lg:flex-row items-center py-16 px-4">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold">Notre vision : Transformer le Gabon en un leader de l&#39;innovation numérique en Afrique.</h2>
              <p className="mt-4 text-lg">Au CGI, nous croyons fermement que l&#39;innovation numérique est la clé du développement durable.</p>
            </div>
            <div className="lg:w-1/2 ">
              <Image 
                src="/images/grid/grid3.jpg" 
                alt="Innovation Numérique" 
                width={500} 
                height={400} 
                className="w-full h-64 object-cover rounded-lg" 
              />
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="flex flex-col lg:flex-row items-center py-16 px-4 header-glass">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h2 className="text-3xl font-bold">Impact futur de nos initiatives d&#39;innovation numérique au Gabon</h2>
              <p className="mt-4 text-lg">Nos initiatives visent à transformer le paysage numérique.</p>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 text-start">
              <div>
                <p className="text-5xl font-bold">{digitalSkillsPercentage}%</p>
                <p className="text-lg">Croissance des compétences numériques</p>
              </div>
              <div>
                <p className="text-5xl font-bold">{techStartupsPercentage}%</p>
                <p className="text-lg">Augmentation des startups technologiques</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection>
          <section className="py-8 px-4 text-start">
            <h2 className="text-3xl font-bold py-16">
              Notre approche pour transformer le Gabon en un hub d&#39;innovation numérique
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* New Cards */}
              {[
                {
                  imgSrc: "/images/vision/rocket.png",
                  title: "Partenariats stratégiques pour un avenir numérique durable et inclusif",
                  description: "Nous croyons fermement que l&#39;innovation numérique est la clé du développement économique.",
                  linkText: "En savoir plus",
                },
                {
                  imgSrc: "/images/vision/vr.png",
                  title: "Programmes éducatifs et formations pour renforcer les compétences numériques au Gabon",
                  description: "Nos initiatives visent à former une nouvelle génération d&#39;experts en technologie.",
                  linkText: "Rejoindre",
                },
                {
                  imgSrc: "/images/vision/talent.png",
                  title: "Collaboration avec des institutions locales pour stimuler l&#39;innovation et la créativité",
                  description: "En unissant nos forces, nous pouvons transformer le paysage numérique du Gabon.",
                  linkText: "Participer",
                },
              ].map((card, index) => (
                <Tilt className="header-glass shadow-lg" options={{ max: 25 }} key={index}>
                  <Image 
                    src={card.imgSrc} 
                    alt={card.title} 
                    width={500} // Ajuste la largeur selon tes besoins
                    height={400} // Ajuste la hauteur selon tes besoins
                    className="w-full h-60 object-cover mb-4 rounded-t-lg" 
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                    <p className="text-lg mb-4">{card.description}</p>
                    <a href="#" className="text-black text-gray-900 hover:bg-gray-100 block rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded transition duration-300">{card.linkText}</a>
                  </div>
                </Tilt>
              ))}
            </div>
          </section>
        </AnimatedSection>

      </div>
    </div>
  );
}

// Composant personnalisé pour gérer l'animation au scroll
const AnimatedSection: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
    >
      {children}
    </motion.section>
  );
};
