"use client";
import About from "./components/About";
import Services from "./components/Services";
import { motion } from 'framer-motion'; // Importer Framer Motion
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import Joinus from "./components/Joinus";
import Image from 'next/image'; // Importation du composant Image

config.autoAddCss = false;

export default function HomePage() {
  return (
    <div className="mx-auto">
      {/* Main Section */}
      <motion.section 
        className="flex flex-col items-center justify-center text-center"
        initial={{ opacity: 0, y: 50 }} // État initial
        animate={{ opacity: 1, y: 0 }} // État d'animation
        transition={{ duration: 0.5 }} // Durée de l'animation
      >
        {/* Video Player with Loop */}
        <div className="w-full h-full mb-16 z-0 relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/video-1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>

          {/* Voile avec Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-blue-950 bg-opacity-20 z-10" /> {/* Voile sombre */}
            <Image 
              src="/images/logo/logoF.png" 
              alt="Logo" 
              className="w-full h-full object-cover opacity-60 z-0" 
              width={800}  // Remplace par la largeur de ton image
              height={600} // Remplace par la hauteur de ton image
            /> {/* Image avec opacité réduite */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-center justify-between max-w-7xl mb-8 md:p-0 pl-6">
          {/* Left Side Text */}
          <div className="md:w-1/3 mb-8 md:mb-0">
            <motion.h1 
              className="text-start text-4xl md:text-[60px] font-bold leading-tight"
              initial={{ opacity: 0, x: -50 }} // État initial
              animate={{ opacity: 1, x: 0 }} // État d'animation
              transition={{ duration: 3 }} // Durée de l'animation
            >
              <div>Transformons</div>
              <div>le Gabon par</div>
              <div>linnovation</div>
              <div>numérique</div>
            </motion.h1>
          </div>
          {/* Right Side Text */}
          <div className="md:w-1/2 text-left">
            <motion.p 
              className="mb-4"
              initial={{ opacity: 0, y: 20 }} // État initial
              animate={{ opacity: 1, y: 0 }} // État d'animation
              transition={{ duration: 0.5 }} // Durée de l'animation
            >
              Le Centre Gabonais dInnovation (CGI) est un acteur essentiel de la transformation numérique au Gabon. Ensemble, construisons un avenir numérique prometteur.
            </motion.p>
            <div className="flex space-x-4">
              <a href="/contact" className="bg-black text-white px-4 py-2 rounded-lg">Contactez-nous</a>
              <a href="/join" className="bg-white border border-black px-4 py-2 rounded-lg">Rejoignez-nous</a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Second Section */}
      <motion.section 
        className="text-center my-16"
        initial={{ opacity: 0, y: 50 }} // État initial
        animate={{ opacity: 1, y: 0 }} // État d'animation
        transition={{ duration: 0.5 }} // Durée de l'animation
      >
        <h2 className="text-3xl font-bold p-4">Révolution numérique au Gabon</h2>
        <p className="text-lg">
          Transformons ensemble léducation et la technologie au Gabon.
        </p>
      </motion.section>

      <motion.div 
        className="mt-16"
        initial={{ opacity: 0 }} // État initial
        animate={{ opacity: 1 }} // État d'animation
        transition={{ duration: 0.5 }} // Durée de l'animation
      >
        <About />
      </motion.div>
      <motion.div 
        className="mt-16"
        initial={{ opacity: 0 }} // État initial
        animate={{ opacity: 1 }} // État d'animation
        transition={{ duration: 0.5 }} // Durée de l'animation
      >
        <Services />
      </motion.div>
      <Joinus />
    </div>
  );
}