"use client";
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import Image from 'next/image'; // Importation du composant Image

const About = () => {

  

  // Options pour l'effet Tilt
  const tiltOptions = {
    max: 10, // Angle de tilt maximal
    scale: 1, // Mise à l'échelle lorsque l'élément est incliné
    speed: 100, // Vitesse de l'animation en ms
    perspective: 1000 // Perspective pour l'effet 3D
  };

  // Variants pour les animations
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: index * 0.2 } // Délai croissant pour chaque élément
    }),
  };

  return (
    <section className="c-space mt-4 flex justify-center items-center min-h-screen" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 h-full max-w-7xl w-full">
        
        {/* Section 1 - Initiatives */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants} 
          custom={0}
          className="lg:col-span-2 header-glass shadow-md rounded-md"
        >
          <Tilt options={tiltOptions}>
            <Image src="/images/grid/future.jpg" alt="Initiatives" className="w-full h-80 object-cover mb-4 rounded-t-lg" width={800} height={300} />
            <div className='p-6'>
              <h2 className="text-2xl font-bold mb-4">Nos initiatives pour un avenir meilleur</h2>
              <p className="mb-4">Découvrez nos programmes innovants pour améliorer l&#39;accès à la technologie et à l&#39;éducation.</p>
              <div className="flex space-x-4">
                <div className='mt-4'>
                  <a href="#" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">En savoir plus</a>
                </div>
                <div className='mt-4'>
                  <a href="#" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">Contact ➔</a>
                </div>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Section 2 - Partenaires */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants} 
          custom={1}
          className="lg:row-span-1 header-glass shadow-md rounded-md"
        >
          <Tilt options={tiltOptions}>
            <Image src="/images/grid/partner.png" alt="Image représentant nos partenaires et collaborations" className="w-full h-80 object-cover mb-4 rounded-t-lg" width={800} height={300} />
            <div className='p-6'>
              <h2 className="text-xl font-bold mb-4">Nos partenaires et collaborations</h2>
              <p>Ensemble, nous construirons un écosystème numérique solide.</p>
              <div className='mt-4'>
                <a href="/partenaires" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">Partenaires</a>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Section 3 - Education */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants} 
          custom={2}
          className="header-glass shadow-md rounded-md"
        >
          <Tilt options={tiltOptions}>
            <Image src="/images/grid/vrrr.jpg" alt="Education" className="w-full h-64 object-cover mb-4 rounded-t-lg" width={800} height={300} />
            <div className='p-6'>
              <h2 className="text-xl font-bold mb-4">Engagement pour l&#39;éducation numérique</h2>
              <p>Nous croyons en une éducation accessible et innovante pour tous les Gabonais.</p>
              <div className='mt-4'>
                <a href="#" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">Rejoignez-nous</a>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Section 4 - Mouvement */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants} 
          custom={3}
          className="lg:col-span-2 header-glass shadow-md rounded-md"
        >
          <Tilt options={tiltOptions}>
            <Image src="/images/grid/studio2.jpg" alt="Mouvement" className="w-full h-80 object-cover mb-4 rounded-t-lg" width={800} height={300} />
            <div className='p-6'>
              <h2 className="text-xl font-bold mb-4">Participez à notre mouvement</h2>
              <p>Rejoignez-nous pour façonner l&#39;avenir numérique du Gabon.</p>
              <div className='mt-4'>
                <a href="#" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">Inscrivez-vous</a>
              </div>
            </div>
          </Tilt>
        </motion.div>

        {/* Section 5 - Services */}
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants} 
          custom={4}
          className="header-glass shadow-md rounded-md"
        >
          <Tilt options={tiltOptions}>
            <Image src="/images/grid/grid2.jpg" alt="Services" className="w-full h-72 object-cover mb-4 rounded-t-lg" width={800} height={300} />
            <div className='p-6'>
              <h2 className="text-2xl font-bold mb-4">Explorez nos services uniques</h2>
              <p>Des solutions adaptées à vos besoins numériques.</p>
              <div className='mt-4'>
                <a href="#" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">Découvrir</a>
              </div>
            </div>
          </Tilt>
        </motion.div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants} 
          custom={4}
          className="header-glass shadow-md rounded-md"
        >
          <Tilt options={tiltOptions}>
            <Image src="/images/grid/grid2.jpg" alt="Services" className="w-full h-72 object-cover mb-4 rounded-t-lg" width={800} height={300} />
            <div className='p-6'>
              <h2 className="text-2xl font-bold mb-4">Explorez nos services uniques</h2>
              <p>Des solutions adaptées à vos besoins numériques.</p>
              <div className='mt-4'>
                <a href="#" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">Découvrir</a>
              </div>
            </div>
          </Tilt>
        </motion.div>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          variants={itemVariants} 
          custom={4}
          className="header-glass shadow-md rounded-md"
        >
          <Tilt options={tiltOptions}>
            <Image src="/images/grid/grid2.jpg" alt="Services" className="w-full h-72 object-cover mb-4 rounded-t-lg" width={800} height={300} />
            <div className='p-6'>
              <h2 className="text-2xl font-bold mb-4">Explorez nos services uniques</h2>
              <p>Des solutions adaptées à vos besoins numériques.</p>
              <div className='mt-4'>
                <a href="#" className="text-black mb-16px-6 py-2 text-gray-900 hover:bg-gray-100 block py-2 rounded-lg shadow-lg neumorphism-btn p-4 shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded hover:bg-blue-700 transition duration-300">Découvrir</a>
              </div>
            </div>
          </Tilt>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
