"use client"; // Ajoute cette ligne en haut

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Joinus from '../components/Joinus';
import Image from 'next/image';

const ServicesPage: React.FC = () => {
  return (
    <div className="">
      {/* Animation de la section avec le header */}
      <AnimatedSection>
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
        <motion.div 
          className='mx-auto max-w-7xl mt-16 pb-16 md:p-4 p-6'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <h1 className="md:text-6xl text-4xl font-bold pt-4">Découvrez nos services innovants au CGI</h1>
          <p className="text-xl mt-4">
            Au Centre d&#39;innovation, nous développons des services spécialisés pour transformer la pratique numérique de l&#39;Acculturation Digitale, le MediaLab, et bien plus encore.
          </p>
        </motion.div>
      </AnimatedSection>

      {/* Section Services */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-auto max-w-7xl mt-16 px-4">
        {services.map((service, index) => (
          <AnimatedSection key={index}>
            <motion.div
              className="header-glass p-6 shadow-lg rounded-lg text-center"
              whileHover={{ scale: 1.1 }} // Zoom et rotation pour un effet "wow"
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: index * 0.3 }} // Délai ajusté pour un effet progressif
            >
              <Image
                src={service.logo}
                alt={service.title}
                width={128} // Ajuster selon les besoins
                height={128} // Ajuster selon les besoins
                className="h-32 w-32 mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold mb-2">{service.title}</h2>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Image
                src={service.image}
                alt={service.title}
                width={500} // Ajuster selon les besoins
                height={320} // Ajuster selon les besoins
                className="w-full h-80 object-cover rounded-md mb-4"
              />
              <motion.button
                className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism"
                whileHover={{ scale: 1.2, backgroundColor: "#f0f0f0" }} // Zoom pour un effet engageant
                transition={{ duration: 0.3 }}
              >
                En savoir plus
              </motion.button>
            </motion.div>
          </AnimatedSection>
        ))}
      </section>

      {/* Sections supplémentaires */}
      {extraSections.map((section, index) => (
        <AnimatedSection key={index}>
          <motion.section
            className="header-glass mt-16 p-10 mb-16 mx-auto max-w-7xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: index * 0.3 }} // Progresser à travers les sections
          >
            <h3 className="text-2xl font-bold mb-4">{section.title}</h3>
            <p className="text-gray-600 mb-6">{section.description}</p>
            <Image
              src={section.image}
              alt={section.title}
              width={500} // Ajuster selon les besoins
              height={320} // Ajuster selon les besoins
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <motion.button
              className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism"
              whileHover={{ scale: 1.2, backgroundColor: "#f0f0f0" }} // Zoom interactif
              transition={{ duration: 0.3 }}
            >
              {section.buttonText}
            </motion.button>
          </motion.section>
        </AnimatedSection>
      ))}

      {/* Section Contact */}
      <AnimatedSection>
        <motion.section
          className="contact-info p-4 md:p-8 text-gray-800 max-w-7xl mx-auto header-glass mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl font-semibold mb-4 md:mb-6">Contactez-nous</h2>
          <div className="info space-y-2 md:space-y-4 text-lg">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center">
                <span className={`mr-2 text-2xl text-${info.iconColor}`}>{info.icon}</span>
                <p>
                  {info.label}: <a href={info.link} className={`text-${info.textColor} hover:text-${info.hoverColor}`}>{info.text}</a>
                </p>
              </div>
            ))}
          </div>
        </motion.section>
      </AnimatedSection>
      <Joinus />
    </div>
  );
};

// Composant personnalisé pour gérer l'animation au scroll
const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Active l'animation une seule fois
    threshold: 0.2,    // La section s'anime quand 20% est visible
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

// Liste des services
const services = [
  {
    title: 'Certifications',
    description: 'Améliorez-vous grâce à des certifications reconnues.',
    logo: '/images/logo/certif.png',
    image: '/images/missions/entrep.jpg'
  },
  {
    title: 'Acculturation Digitale',
    description: 'Initiez-vous aux outils numériques avec CGI.',
    logo: '/images/logo/acultu.png',
    image: '/images/missions/womanwork.jpg'
  },
  {
    title: 'FabLab',
    description: 'Découvrez notre FabLab d\'innovation technologique.',
    logo: '/images/logo/fablab.png',
    image: '/images/missions/formation.jpg'
  },
  {
    title: 'MediaLab',
    description: 'Découvrez notre MediaLab innovant au CGI.',
    logo: '/images/logo/medialab.png',
    image: '/images/missions/win.jpg'
  }
];

// Sections supplémentaires
const extraSections = [
  {
    title: 'Certification Numérique',
    description: 'Améliorez vos compétences avec des certifications reconnues.',
    image: '/images/missions/entrep.jpg',
    buttonText: 'En savoir plus'
  },
  {
    title: 'Acculturation Digitale',
    description: 'Initiez-vous aux outils numériques avec CGI.',
    image: '/images/missions/womanwork.jpg',
    buttonText: 'Consulter nos services'
  },
  {
    title: 'FabLab',
    description: 'La créativité au service de la technologie. Notre FabLab est un espace de création et d\'expérimentation.',
    image: '/images/missions/formation.jpg',
    buttonText: 'Explorer'
  },
  {
    title: 'MediaLab',
    description: 'Le MediaLab est un espace dédié à la création et au contenu numérique.',
    image: '/images/missions/win.jpg',
    buttonText: 'Rejoignez-nous'
  }
];

// Informations de contact
const contactInfo = [
  { icon: '📞', label: 'Téléphone', text: '+241 123 456 789', link: 'tel:+241123456789', iconColor: 'green-500', textColor: 'green-500', hoverColor: 'green-700' },
  { icon: '✉️', label: 'Email', text: 'contact@cgi.com', link: 'mailto:contact@cgi.com', iconColor: 'blue-500', textColor: 'blue-500', hoverColor: 'blue-700' }
];

export default ServicesPage;
