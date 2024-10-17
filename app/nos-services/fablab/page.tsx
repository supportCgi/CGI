"use client";
import React, { useState } from "react";
import Image from 'next/image';
import { FaCube, FaCut, FaMicrochip, FaChalkboardTeacher, FaUsersCog, FaRocket, FaHandsHelping } from 'react-icons/fa';
import Joinus from "@/app/components/Joinus";

interface OpportunityItem {
  text: string;
  icon: JSX.Element;
}

interface Opportunity {
  title: string;
  image: string;
  items: OpportunityItem[];
}

const opportunities: Opportunity[] = [
  {
    title: 'Accès aux outils et technologies',
    image: '/images/grid/lab.jpg',
    items: [
      { text: 'Impression 3D', icon: <FaCube /> },
      { text: 'Découpe laser', icon: <FaCut /> },
      { text: 'Électronique', icon: <FaMicrochip /> },
    ],
  },
  {
    title: 'Formations et ateliers',
    image: '/images/grid/lab.jpg',
    items: [
      { text: 'Ateliers sur la conception numérique', icon: <FaChalkboardTeacher /> },
      { text: 'Cours sur la cybersécurité', icon: <FaChalkboardTeacher /> },
    ],
  },
  {
    title: 'Projets collaboratifs',
    image: '/images/grid/lab.jpg',
    items: [
      { text: 'Travailler avec d\'autres membres', icon: <FaUsersCog /> },
      { text: 'Échanges d’idées et de compétences', icon: <FaUsersCog /> },
    ],
  },
  {
    title: 'Support pour entrepreneurs',
    image: '/images/grid/lab.jpg',
    items: [
      { text: 'Aide à la création de prototypes', icon: <FaRocket /> },
      { text: 'Accès à un réseau d\'experts', icon: <FaHandsHelping /> },
    ],
  },
  {
    title: 'Événements et hackathons',
    image: '/images/grid/lab.jpg',
    items: [
      { text: 'Participer à des compétitions', icon: <FaRocket /> },
      { text: 'Présentation de projets', icon: <FaHandsHelping /> },
    ],
  },
  {
    title: 'Communauté dynamique',
    image: '/images/grid/lab.jpg',
    items: [
      { text: 'Rencontrer des passionnés', icon: <FaUsersCog /> },
      { text: 'Créer des liens et collaborations', icon: <FaUsersCog /> },
    ],
  },
];

const FablabPage: React.FC = () => {
  interface FAQItem {
    question: string;
    answer: string;
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      "question": "Qu&#39;est-ce qu&#39;un Fablab ?",
      "answer": "Un Fablab est un espace de fabrication numérique où les gens peuvent se rencontrer pour concevoir, créer et prototyper des objets. Il est équipé d&#39;outils et de machines comme des imprimantes 3D, des découpeuses laser et des fraiseuses CNC."
    },
    {
      "question": "Qui peut rejoindre le Fablab ?",
      "answer": "Le Fablab est ouvert à tous, que vous soyez étudiant, professionnel ou simplement passionné par la création. Aucune expérience préalable n&#39;est nécessaire, nous offrons des formations pour vous aider à vous familiariser avec les outils."
    },
    {
      "question": "Quels types de projets peut-on réaliser au Fablab ?",
      "answer": "Vous pouvez réaliser une grande variété de projets, allant de l&#39;artisanat et du design aux prototypes technologiques et aux projets éducatifs. Les seules limites sont votre imagination et vos compétences !"
    },
    {
      "question": "Quels équipements sont disponibles au Fablab ?",
      "answer": "Notre Fablab est équipé de plusieurs outils, dont des imprimantes 3D, des découpeuses laser, des machines à coudre, des ordinateurs avec des logiciels de design, et bien plus encore."
    },
    {
      "question": "Comment puis-je m&#39;inscrire ou réserver du temps au Fablab ?",
      "answer": "Vous pouvez vous inscrire en ligne sur notre site web ou visiter nos locaux pour obtenir des informations sur les adhésions et les réservations d&#39;espace."
    },
    {
      "question": "Y a-t-il des frais pour utiliser le Fablab ?",
      "answer": "Oui, il y a des frais d&#39;adhésion pour accéder aux équipements et aux ressources du Fablab. Les tarifs varient selon le type d&#39;adhésion choisie. Consultez notre site pour plus de détails."
    },
    {
      "question": "Proposez-vous des ateliers ou des événements ?",
      "answer": "Oui, nous organisons régulièrement des ateliers, des conférences et des événements pour promouvoir l&#39;apprentissage et l&#39;innovation. Consultez notre calendrier en ligne pour connaître les prochaines activités."
    },
    {
      "question": "Puis-je travailler sur des projets en équipe ?",
      "answer": "Absolument ! Le Fablab est un excellent endroit pour collaborer avec d&#39;autres créateurs et inventeurs. N&#39;hésitez pas à inviter des amis ou des collègues à se joindre à vous."
    },
    {
      "question": "Quelles sont les heures d&#39;ouverture du Fablab ?",
      "answer": "Nos heures d&#39;ouverture varient selon les jours, mais nous sommes généralement ouverts du lundi au samedi. Vérifiez notre site web pour les horaires spécifiques."
    },
    {
      "question": "Comment puis-je contribuer ou soutenir le Fablab ?",
      "answer": "Il existe plusieurs façons de contribuer, que ce soit par le bénévolat, le mentorat, ou en partageant vos compétences. N&#39;hésitez pas à nous contacter pour discuter de vos idées !"
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
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
          <h1 className="md:text-6xl text-4xl font-bold pt-4">Bienvenue au Fablab</h1>
          <p className="mx-auto max-w-7xl mt-6">Explorez, créez et innovez avec nous pour forger les technologies de demain au Gabon.</p>
        </div>
      </section>

      {/* Section des ateliers */}
      <section className="py-10 px-5 mx-auto max-w-7xl mt-16 pb-16 ">
        <div className="workshops-container header-glass p-6">
          <h2 className="text-3xl font-bold text-center">Ateliers de Fabrication Numérique</h2>
          <p className="text-center mt-4">
            Créez et innovez avec nos équipements avancés.
          </p>

          <div className="workshop-images grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            <div className="workshop-image">
              <Image src="/images/grid/grid3.jpg" alt="Atelier de fabrication" width={500} height={300} className="rounded-lg shadow-md"/>
              <p className="mt-2 text-center">Apprenez à utiliser nos équipements de pointe.</p>
            </div>
            <div className="workshop-image">
              <Image src="/images/grid/3d.jpg" alt="Équipements avancés" width={500} height={300} className="rounded-lg shadow-md"/>
              <p className="mt-2 text-center">Explorez la fabrication numérique avec nos outils.</p>
            </div>
            <div className="workshop-image">
              <Image src="/images/grid/lab.jpg" alt="Créativité" width={500} height={300} className="rounded-lg shadow-md"/>
              <p className="mt-2 text-center">Collaborez avec d&#39;autres passionnés de technologie.</p>
            </div>
          </div>

          <div className="text-center mt-8">
            <a href="#inscription" className="px-6 py-2 text-black hover:text-gray-900 hover:bg-gray-200 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all">
              Inscrivez-vous maintenant !
            </a>
          </div>
        </div>
      </section>

      {/* Section des opportunités */}
      <section className="fablabOpportunities mx-auto max-w-7xl">
        <div className="header-glass p-6">
          <h2 className="title">Explorer un Fablab</h2>
          <p>
            Explorer un Fablab, c&#39;est découvrir un espace créatif où l&#39;innovation et la collaboration sont à l&#39;honneur. Voici quelques opportunités qu&#39;un Fablab peut offrir :
          </p>

          <div className="opportunitiesList">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="opportunity">
                <Image src={opportunity.image} alt={opportunity.title} width={300} height={200} layout="responsive" className="opportunityImage" />
                <h3 className="opportunityTitle">{opportunity.title}</h3>
                <ul className="list">
                  {opportunity.items.map((item, i) => (
                    <li key={i} className="listItem">
                      {item.icon} &nbsp; &nbsp;<span>{item.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="conclusion italic">
            En visitant un Fablab, vous pouvez non seulement développer vos compétences techniques, mais aussi donner vie à vos idées et participer à une communauté d&#39;innovation. Si vous avez un projet en tête ou si vous souhaitez en savoir plus, n&#39;hésitez pas à plonger dans l&#39;expérience !
          </p>
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 mx-auto max-w-7xl mt-10 pb-16">
        <h3 className="text-3xl font-semibold mb-6 text-center">Témoignages</h3>
        <p className="text-center text-gray-600 mb-12">Découvrez les expériences enrichissantes de nos participants.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          <div className="text-center header-glass p-6">
            <p className="text-gray-600 mb-4">Le Fablab est un véritable tremplin pour les idées.</p>
            <Image 
              src="/images/avatar/avatar1.jpg" 
              alt="Jean Dupont" 
              width={64}
              height={64}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <p className="font-semibold">Armand MBA</p>
            <p className="text-gray-500">Consultant, TechCorp</p>
          </div>
          <div className="text-center header-glass p-6">
            <p className="text-gray-600 mb-4">Le Fablab m&#39;a permis de concrétiser mes idées innovantes.</p>
            <Image 
              src="/images/avatar/avatar2.jpg" 
              alt="Sophie Martin" 
              width={64}
              height={64}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <p className="font-semibold">Philippe Oyono</p>
            <p className="text-gray-500">Manager, Market Research</p>
          </div>
          <div className="text-center header-glass p-6">
            <p className="text-gray-600 mb-4">Une expérience enrichissante qui a boosté ma créativité.</p>
            <Image 
              src="/images/avatar/avatar3.jpg" 
              alt="Lucas Bernard" 
              width={64}
              height={64}
              className="rounded-full mx-auto mb-4 object-cover"
            />
            <p className="font-semibold">Danny MINSTA</p>
            <p className="text-gray-500">Développeur, StartUp</p>
          </div>
        </div>
      </section>

      {/* Section FAQ */}
      <section className="faq-section header-glass">
        <h2 className='md:text-4xl text-3xl font-bold pb-8'>FAQ</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="faq-item">
            <h3 
              onClick={() => toggleFAQ(index)} 
              className="faq-question"
            >
              {faq.question}
            </h3>
            <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
              {faq.answer}
            </div>
          </div>
        ))}
      </section>

      {/* Section Contact */}
      <section className="contact-form p-4 md:p-8 flex items-center justify-center mt-8 ">
        <div className="header-glass p-6 md:p-8 rounded-lg shadow-xl max-w-lg w-full">
          <h2 className="text-3xl mb-4 md:mb-6 text-black">Nous Contacter</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism"
              required
            />
            <textarea
              placeholder="Écrivez votre message..."
              className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism"
              required
            ></textarea>
            <label className="block text-black">
              <input type="checkbox" className="mr-2 neumorphism" /> J&#39;accepte les Conditions
            </label>
            <button
              type="submit"
              className="px-6 py-2 text-black hover:text-gray-900 hover:bg-gray-200 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all"
            >
              Envoyer
            </button>
          </form>
        </div>
      </section>    

      <Joinus />
    </div>
  );
};

export default FablabPage;
