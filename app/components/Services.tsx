"use client";

import Image from 'next/image';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ServicesInnovants = () => {
  // Options for the Tilt effect
  const tiltOptions = {
    max: 10,
    scale: 1,
    speed: 100,
    perspective: 1000,
  };

  // Custom animated section component
  const AnimatedSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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

  return (
    <section className="p-8 justify-center text-center items-center mx-auto max-w-7xl">
      {/* Section Header */}
      <AnimatedSection>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold">
            Découvrez nos services innovants pour transformer votre expérience numérique au Gabon
          </h2>
        </div>
      </AnimatedSection>

      {/* Services Grid */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {[
            { title: 'Centre d\'acculturation', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'En savoir plus', image: '/images/logo/acultu.png' },
            { title: 'Centre de certifications', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'Rejoignez-nous', image: '/images/logo/certif.png' },
            { title: 'Fablab', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'Explorer', image: '/images/logo/fablab.png' },
            { title: 'Medialab', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', link: 'Bâtir', image: '/images/logo/medialab.png' },
          ].map((service, index) => (
            <Tilt key={index} className="header-glass text-black rounded-lg shadow-md" options={tiltOptions}>
              <Image
                src={service.image}
                alt={service.title}
                width={500} // Largeur de l'image
                height={300} // Hauteur de l'image
                className="w-full h-80 object-cover mb-4"
              />
              <div className='p-6'>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="mb-4">{service.description}</p>
                <motion.a
                  href="#"
                  className="text-black mb-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {service.link} &rarr;
                </motion.a>
              </div>
            </Tilt>
          ))}
        </div>
      </AnimatedSection>

      {/* Rejoignez Section */}
      <AnimatedSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-16">
          <div className="header-glass p-8 rounded-lg shadow-md flex flex-col justify-center">
            <h2 className="md:text-6xl text-[48px] font-bold mb-4">Rejoignez l&#39;innovation au Gabon</h2>
            <p className="mb-4 md:text-4xl text-center">
              Participez à notre mission pour transformer le paysage technologique et éducatif du Gabon.
            </p>
            <div className="flex space-x-4 flex justify-center mt-4">
              <motion.button
                className="text-black mb-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Rejoignez-nous
              </motion.button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src="/videos/joinus.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </AnimatedSection>

      {/* Blog Section */}
      <AnimatedSection>
        <div className="text-center mb-16">
          <h2 className="text-3xl font-semibold">Actualités et réussites</h2>
          <p className="text-gray-600">Restez à jour avec nos dernières nouvelles.</p>
        </div>
      </AnimatedSection>

      {/* Blog Grid */}
      <AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'L\'importance de la certification numérique', date: '12 janv. 2024', category: 'Innover', readTime: '5 min read', image: '/images/grid/certif.jpg' },
            { title: 'Acculturation numérique pour tous', date: '18 févr. 2024', category: 'Éduquer', readTime: '7 min read', image: '/images/grid/acccc.jpg' },
            { title: 'Le Fablab : un espace d\'innovation', date: '31 mars 2024', category: 'Tech', readTime: '4 min read', image: '/images/grid/fabbb.jpg' },
          ].map((post, index) => (
            <div key={index} className="header-glass rounded-lg shadow-lg">
              <Image
                src={post.image}
                alt={post.title}
                width={500}
                height={300}
                className="w-full h-auto mb-4 rounded-t-lg"
              />
              <div className='p-6'>
                <div className="mb-2">
                  <span className="text-sm text-gray-500">{post.category}</span> • <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-500 text-sm">{post.readTime}</p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Voir Tout Button */}
      <AnimatedSection>
        <div className="text-center mt-8">
          <motion.button
            className="text-black mb-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          >
            Voir tout
          </motion.button>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default ServicesInnovants;
