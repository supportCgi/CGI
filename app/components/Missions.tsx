"use client";
import React, { useState } from 'react';
import { LazyMotion, domAnimation, m } from 'framer-motion';
import Mission from './Mission';
import Joinus from './Joinus';
import Image from 'next/image';

interface MissionType {
  title: string;
  description: string;
  points?: string[];
  imageUrl: string;
  buttonText?: string;
}


const Missions: React.FC = () => {
  const [currentMission, setCurrentMission] = useState<number>(0);

  const activity = [
    {
      title: "Centre d&#39;acculturation",
      description: "Nous croyons fermement que l&#39;innovation numérique est la clé du développement économique.",
      imageUrl: "/images/vision/rocket.png",
      linkText: "En savoir plus",
      linkUrl: "#"
    },
    {
      title: "Centre de certifications",
      description: "Nos initiatives visent à former une nouvelle génération d&#39;experts en technologie.",
      imageUrl: "/images/vision/vr.png",
      linkText: "Rejoindre",
      linkUrl: "#"
    },
    {
      title: "Fablab",
      description: "En unissant nos forces, nous pouvons transformer le paysage numérique du Gabon.",
      imageUrl: "/images/blog/fabl.png",
      linkText: "Participer",
      linkUrl: "#"
    },
    {
      title: "Medialab",
      description: "Description de cette initiative.",
      imageUrl: "/images/grid/grid3.jpg",
      linkText: "Découvrir",
      linkUrl: "#"
    },
  ];

  const missions: MissionType[] = [
    {
      title: 'Un Pont Vers un Avenir Numérique Inclusif',
      description: 'Notre mission est de rendre la culture numérique accessible à tous les Gabonais...',
      points: ['Éducation Digitale', 'Ateliers Pratiques'],
      imageUrl: '/images/missions/womanwork.jpg',
    },
    {
      title: "Soutien à l&#39;entrepreneuriat au Gabon",
      description: "Nous accompagnons les entrepreneurs dans leurs projets technologiques...",
      points: ['Startup', 'Soutien Entrepreneurial'],
      imageUrl: '/images/missions/entrep.jpg',
      buttonText: 'En savoir plus',
    },
    {
      title: 'Formation Continue : Restez à jour avec les innovations technologiques.',
      description: 'Nos programmes de formation continue sont conçus pour aider les professionnels...',
      points: ['Startup', 'Fablab', 'Medialab'],
      imageUrl: '/images/missions/formation.jpg',
    },
    {
      title: "Missions du Centre Gabonais d'Innovation",
      description: "Le CGI s&#39;engage à transformer le paysage numérique du Gabon.",
      points: ['Innovation Technologique', 'Soutien Entrepreneurial'],
      imageUrl: '/images/missions/win.jpg',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const cardsPerPage = 3;

  // Détermine les cartes à afficher en fonction de l'index actuel
  const currentCards = activity.slice(currentIndex, currentIndex + cardsPerPage);

  // Fonction pour naviguer vers les cartes précédentes
  const goToPrevious = () => {
    setCurrentIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  // Fonction pour naviguer vers les cartes suivantes
  const goToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + cardsPerPage, activity.length - cardsPerPage));
  };

  // Définition des variants pour l'animation
  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div className="mx-auto w-full ">
      {/* Section 1: Vision Header */}
      <div className="mx-auto w-full ">
        <section className="text-black text-center">
          <div className="w-full h-full mb-16 z-0 relative">
            <video className="w-full h-full object-cover " autoPlay loop muted>
              <source src="/videos/certif.mp4" type="video/mp4" />
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
          <h1 className="md:text-6xl text-4xl font-bold pt-4">Nos missions</h1>
          <p className="text-xl mt-4">Découvrez comment le CGI façonne un avenir numérique prometteur pour le Gabon et ses citoyens.</p>
        </section>

        <div className="mx-auto max-w-7xl">
          <section className="flex flex-col lg:flex-row items-center px-4 lg:px-16">
            <div className="relative flex flex-col lg:flex-row items-center mt-16 pb-16 max-w-7xl mx-auto">
              <LazyMotion features={domAnimation}>
                <m.div
                  key={currentMission}
                  className="flex flex-col md:flex-row gap-8 w-full"
                >
                  <m.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={textVariants}
                    className="md:w-1/2 px-4 lg:px-8 text-left header-glass p-6 flex flex-col justify-between"
                  >
                    <Mission
                      title={missions[currentMission].title}
                      description={missions[currentMission].description}
                      points={missions[currentMission].points || []}
                    />
                  </m.div>

                  <m.div
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={imageVariants}
                    className="md:w-[600px] h-80 rounded-lg shadow-lg overflow-hidden"
                  >
                    <Image
                      src={missions[currentMission].imageUrl}
                      alt={missions[currentMission].title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </m.div>
                </m.div>
              </LazyMotion>

              <div className="flex md:flex-col justify-center items-center gap-2 md:ml-8 md:space-y-4">
                {missions.map((mission, index) => (
                  <button
                    key={`${mission.title}-${index}`}
                    onClick={() => setCurrentMission(index)}
                    className={`w-10 h-10 rounded-full transition duration-300 ${currentMission === index ? 'header-glass' : 'blue-glass text-gray-600'} flex items-center justify-center`}
                    aria-label={`Afficher la mission ${mission.title}`} // Accessibility
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-6 px-4 text-center">
            <h2 className="text-3xl font-bold mb-16 py-16">
              Notre approche pour transformer le Gabon en un hub d&#39;innovation numérique
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {currentCards.map((activity, index) => (
                <div key={`${activity.title}-${index}`} className="header-glass shadow-lg flex flex-col h-full">
                  <Image 
                    src={activity.imageUrl} 
                    alt={activity.title} 
                    width={500} // Ajuste la largeur selon tes besoins
                    height={400} // Ajuste la hauteur selon tes besoins
                    className="w-full h-60 object-cover mb-4 rounded-t-lg" 
                  />
                  <div className="flex-grow p-6 text-start">
                    <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
                    <p className="text-lg mb-4">{activity.description}</p>
                    <a href={activity.linkUrl} className="text-black text-gray-900 hover:bg-gray-100 block rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all text-center rounded hover:bg-blue-700 transition duration-300 p-2">
                      {activity.linkText} &gt;
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-6">
              <button 
                onClick={goToPrevious} 
                disabled={currentIndex === 0} 
                className={`text-black text-gray-900 hover:bg-gray-100 block rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all text-center rounded hover:bg-blue-700 transition duration-300 ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Précédent"
              >
                <span className="material-icons">chevron_left</span>
              </button>
              <button 
                onClick={goToNext} 
                disabled={currentIndex + cardsPerPage >= activity.length} 
                className={`text-black text-gray-900 hover:bg-gray-100 block rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all text-center rounded hover:bg-blue-700 transition duration-300 ${currentIndex + cardsPerPage >= activity.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                aria-label="Suivant"
              >
                <span className="material-icons">chevron_right</span>
              </button>
            </div>
          </section>
        </div>
        <Joinus />
      </div>
    </div>
  );
};

export default Missions;
