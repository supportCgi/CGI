"use client";
import { useState } from 'react';
import Image from 'next/image';

const Medialab: React.FC = () => {
  interface FAQItem {
    question: string;
    answer: string;
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Qu&#39;est-ce que le Medialab ?",
      answer: "Le Medialab est un lieu innovant dédié à la création et à la collaboration autour des médias numériques et des technologies."
    },
    {
      question: "Quels services proposez-vous ?",
      answer: "Nous offrons des ateliers, des espaces de coworking, et des équipements pour faciliter la création de projets numériques."
    },
    {
      question: "Comment puis-je rejoindre le Medialab ?",
      answer: "Vous pouvez vous inscrire en ligne ou visiter nos locaux pour en savoir plus sur nos programmes et adhésions."
    },
    {
      question: "Organisez-vous des événements ?",
      answer: "Oui, nous organisons régulièrement des événements, des conférences et des ateliers sur divers sujets liés aux médias numériques."
    },
    {
      question: "Comment puis-je réserver un espace au Medialab ?",
      answer: "Vous pouvez réserver un espace en utilisant notre plateforme en ligne, où vous trouverez les disponibilités."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const equipments = [
    {
      name: "Imprimante 3D",
      description: "Créez des prototypes et des objets en trois dimensions avec précision.",
      image: "/images/grid/3d.jpg",
    },
    {
      name: "Découpeuse Laser",
      description: "Réalisez des découpes précises sur divers matériaux comme le bois et l'acrylique.",
      image: "/images/grid/decoupe.jpg",
    },
    {
      name: "Studio d'Enregistrement",
      description: "Enregistrez des podcasts et des musiques avec un son de haute qualité.",
      image: "/images/grid/studio.jpg",
    },
    {
      name: "Caméra Professionnelle",
      description: "Capturez des vidéos et des images de haute qualité pour vos projets.",
      image: "/images/grid/camera.jpg",
    },
    {
      name: "Poste de Montage Vidéo",
      description: "Montez vos vidéos avec des logiciels professionnels et un matériel performant.",
      image: "/images/grid/studio2.jpg",
    },
    {
      name: "Équipements de Réalité Virtuelle",
      description: "Explorez des expériences immersives avec notre matériel VR.",
      image: "/images/grid/vrrr.jpg",
    },
  ];

  const workshops = [
    {
      title: "Introduction à la Photographie",
      description: "Apprenez les bases de la photographie, y compris la composition, l'éclairage et l'édition.",
      image: "/images/grid/initphoto.jpg",
    },
    {
      title: "Création de Contenus Vidéo",
      description: "Maîtrisez les techniques de tournage et de montage pour créer des vidéos engageantes.",
      image: "/images/grid/videooo.jpg",
    },
    {
      title: "Design Graphique",
      description: "Découvrez les principes du design et apprenez à utiliser des outils comme Photoshop et Illustrator.",
      image: "/images/grid/graphiqueD.jpg",
    },
    {
      title: "Développement Web",
      description: "Initiez-vous au développement web avec HTML, CSS et JavaScript.",
      image: "/images/grid/grid2.jpg",
    },
    {
      title: "Marketing Digital",
      description: "Comprenez les stratégies de marketing en ligne et comment utiliser les réseaux sociaux efficacement.",
      image: "/images/grid/market.jpg",
    },
    {
      title: "Réalité Virtuelle",
      description: "Explorez les technologies de réalité virtuelle et apprenez à créer des expériences immersives.",
      image: "/images/grid/grid3.jpg",
    },
  ];

  return (
    <div className="">
      {/* Section d'accueil */}
      
      <section className="text-black text-center header-glass">
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
        <div className='mx-auto max-w-7xl mt-16 pb-16'>
          <h1 className="md:text-6xl text-4xl font-bold pt-4">Bienvenue au Medialab</h1>
          <p className="mx-auto max-w-7xl mt-6">Le lieu innovant pour créer, collaborer autour des médias numériques et des technologies.</p>
        </div>
      </section>

      {/* Équipements de pointe */}
      <section className="py-16 px-5 mx-auto max-w-7xl text-center">
        <h2 className="text-4xl font-bold mb-6">Équipements de Pointe</h2>
        <p className="text-lg text-gray-700">Découvrez notre gamme d&#39;équipements avancés pour donner vie à vos projets.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 header-glass p-6">
          {equipments.map((equipment, index) => (
            <div key={index} className="header-glass rounded-lg shadow-lg p-6">
              <Image 
                src={equipment.image} 
                alt={equipment.name} 
                width={400} 
                height={250} 
                className="w-full h-40 object-cover rounded"
              />
              <h3 className="text-xl font-semibold mt-4">{equipment.name}</h3>
              <p className="text-gray-600">{equipment.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ateliers et Formations */}
      <section className="py-16 px-5 mx-auto max-w-7xl text-center header-glass rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Ateliers et Formations</h2>
        <p className="text-lg text-gray-700 mb-12">Développez vos compétences en médias numériques avec nous.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {workshops.map((workshop, index) => (
            <div key={index} className="header-glass p-6 rounded-lg shadow-lg">
              <Image 
                src={workshop.image} 
                alt={workshop.title} 
                width={400} 
                height={250} 
                className="w-full h-40 object-cover rounded mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{workshop.title}</h3>
              <p className="text-gray-600">{workshop.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <a 
            href="/inscription" 
            className="text-black text-gray-900 hover:bg-gray-100 block rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded transition duration-300"
          >
            Inscrivez-vous
          </a>
        </div>
      </section>

      {/* Projets Collaboratifs */}
      <section className="collaborative-projects p-8 mx-auto max-w-7xl text-center header-glass rounded-lg shadow-lg mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-black text-start">
            <h2 className="md:text-6xl text-4xl font-bold mb-4">Participez à des projets innovants ensemble</h2>
            <p className="mb-4 md:text-4xl text-lg">Au Medialab, nous encourageons la créativité collective. Rejoignez-nous pour développer des projets qui changent le monde.</p>
            <div className="space-y-4">
              <button className="text-black py-2 rounded-lg shadow-lg neumorphism-btn transition-all hover:scale-105">
                Explorer
              </button>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg shadow-md">
            <video className="w-full h-full object-cover" autoPlay loop muted>
              <source src="/videos/vrvideo.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture vidéo.
            </video>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 mx-auto max-w-7xl mt-10 pb-16">
        <h3 className="text-3xl font-semibold mb-6 text-center">Témoignages</h3>
        <p className="text-center text-gray-600 mb-12">Découvrez les expériences enrichissantes de nos participants.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              text: "Le Fablab est un véritable tremplin pour les idées.",
              name: "Armand MBA",
              role: "Consultant, TechCorp",
              img: "/images/avatar/avatar1.jpg"
            },
            {
              text: "Le Fablab m'a permis de concrétiser mes idées innovantes.",
              name: "Philippe Oyono",
              role: "Manager, Market Research",
              img: "/images/avatar/avatar2.jpg"
            },
            {
              text: "Une expérience enrichissante qui a boosté ma créativité.",
              name: "Nicolas ELLA MINSTA",
              role: "Développeur, StartUp",
              img: "/images/avatar/avatar3.jpg"
            }
          ].map((testimonial, index) => (
            <div key={index} className="text-center header-glass p-6">
              <p className="text-gray-600 mb-4">{testimonial.text}</p>
              <Image 
                src={testimonial.img} 
                alt={testimonial.name} 
                width={64} 
                height={64} 
                className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
              />
              <p className="font-semibold">{testimonial.name}</p>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="faq-section header-glass p-8">
        <h2 className='md:text-4xl text-3xl font-bold pb-8'>FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 
              onClick={() => toggleFAQ(index)} 
              className="faq-question cursor-pointer text-l&#39; mb-2"
            >
              {faq.question}
            </h3>
            <div className={`faq-answer ${openIndex === index ? 'open' : 'hidden'}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </section>

      {/* Formulaire de Contact */}
      <section className="contact-form p-4 md:p-8 flex items-center justify-center mt-8 ">
        <div className="header-glass p-6 md:p-8 rounded-lg shadow-xl max-w-lg w-full">
          <h2 className="text-3xl mb-4 md:mb-6 text-black">Nous Contacter</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Nom" className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism" required />
            <input type="email" placeholder="Email" className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism" required />
            <textarea placeholder="Écrivez votre message..." className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism" required></textarea>
            <label className="block text-black">
              <input type="checkbox" className="mr-2" /> J&#39;accepte les Conditions
            </label>
            <button type="submit" className="px-6 py-2 text-black rounded-lg shadow-lg neumorphism-btn transition-all hover:scale-105">
              Envoyer
            </button>
          </form>
        </div>
      </section>    

      {/* Appel à l'action */}
      <section className="cta text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <h2 className="text-3xl mb-6">Rejoignez notre Medialab innovant</h2>
        <p className="mb-8">Participez à des projets créatifs et développez vos compétences au sein de notre Medialab.</p>
        <div className="space-x-4 flex mx-auto justify-center">
          <button className="text-black py-2 rounded-lg shadow-lg neumorphism-btn transition-all hover:scale-105">
            Rejoindre
          </button>
          <button className="text-black py-2 rounded-lg shadow-lg neumorphism-btn transition-all hover:scale-105">
            Créer
          </button>
        </div>
      </section>
    </div>
  );
};

export default Medialab;
