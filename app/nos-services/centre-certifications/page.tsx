"use client";
import React, { useState } from 'react';
import Joinus from '@/app/components/Joinus';
import Image from 'next/image'; // Importation de next/image

const CertificationPage: React.FC = () => {
  interface FAQItem {
    question: string;
    answer: string;
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      "question": "Qu&#39;est-ce que l&#39;expertise numérique certifiée ?",
      "answer": "L&#39;expertise numérique certifiée est un programme de formation qui permet d&#39;acquérir des compétences numériques reconnues par les professionnels et les entreprises."
    },
    {
      "question": "Pourquoi devrais-je rejoindre votre centre pour cette formation ?",
      "answer": "Notre centre offre des formations de haute qualité, animées par des experts du secteur, et vous permet d&#39;obtenir des certifications qui valoriseront votre CV et feront avancer votre carrière."
    },
    {
      "question": "Quels types de compétences puis-je acquérir ?",
      "answer": "Vous pouvez acquérir des compétences en développement web, en data science, en cybersécurité, en marketing numérique, et bien plus encore."
    },
    {
      "question": "Comment puis-je m&#39;inscrire à un programme d&#39;expertise numérique certifiée ?",
      "answer": "Vous pouvez vous inscrire en ligne sur notre site web ou contacter notre équipe pour obtenir des informations sur les prochaines sessions de formation."
    },
    {
      "question": "Y a-t-il des frais pour les formations ?",
      "answer": "Oui, il y a des frais d&#39;inscription pour les programmes de certification. Les tarifs varient selon le type de formation choisie. Consultez notre site pour plus de détails."
    },
    {
      "question": "Les certifications sont-elles reconnues par les employeurs ?",
      "answer": "Oui, nos certifications sont reconnues par de nombreux employeurs et peuvent améliorer votre employabilité sur le marché du travail."
    },
    {
      "question": "Puis-je suivre des formations à distance ?",
      "answer": "Oui, nous proposons des options de formation en ligne pour vous permettre d&#39;apprendre à votre rythme, où que vous soyez."
    },
    {
      "question": "Quels sont les prérequis pour suivre ces formations ?",
      "answer": "Les prérequis varient selon la formation. Certaines formations sont accessibles à tous, tandis que d&#39;autres peuvent nécessiter des connaissances préalables en informatique."
    },
    {
      "question": "Quels sont les débouchés après avoir obtenu une certification ?",
      "answer": "Après avoir obtenu une certification, vous pouvez travailler dans divers domaines, comme le développement logiciel, l&#39;analyse de données, la gestion de projets numériques, et plus encore."
    },
    {
      "question": "Comment puis-je rester informé des nouvelles formations et événements ?",
      "answer": "Inscrivez-vous à notre newsletter ou suivez-nous sur nos réseaux sociaux pour recevoir des mises à jour sur les nouvelles formations et événements."
    }
  ]
  ;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="">
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
        <div className='mx-auto max-w-7xl mt-16 pb-16 md:p-4 p-6'>
          <h1 className="md:text-6xl text-4xl font-bold pt-4">Expertise Numérique Certifiée</h1>
          <p className="mx-auto max-w-7xl mt-6">Rejoignez notre centre pour acquérir des compétences numériques reconnues et faire avancer votre carrière.</p>
        </div>
      </section>

      {/* Section de programmes avec image */}
      <section className="py-16 px-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mx-auto max-w-7xl mt-16 pb-16 header-glass p-8">
          <div>
            <h3 className="text-3xl font-semibold mb-6">Découvrez nos programmes de certification pour un avenir numérique sécurisé et compétent.</h3>
            <p className="text-gray-600 mb-6">Nos programmes de certification ont été conçus pour répondre aux besoins du marché numérique. Avec ces solutions, vous apprenez à protéger vos informations sensibles et à acquérir des compétences numériques reconnues dans le monde entier.</p>

            <ul className="list-disc list-inside space-y-4">
              <li><strong>Compétences numériques</strong> : Acquérir des compétences essentielles pour évoluer dans le monde numérique d&#39;aujourd&#39;hui.</li>
              <li><strong>Cybersécurité</strong> : Protéger vos données et celles de votre entreprise grâce aux dernières technologies en matière de sécurité numérique.</li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <Image 
              src="/images/missions/win.jpg" 
              alt="Programme de certification" 
              width={500} 
              height={300} 
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Section Témoignages clients */}
      <section className="mx-auto max-w-7xl md:mt-10 pb-16 p-6">
        <h3 className="text-3xl font-semibold mb-6 text-center">Témoignages</h3>
        <p className="text-center text-gray-600 mb-12">Découvrez les expériences enrichissantes de nos participants.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center header-glass p-6">
            <p className="text-gray-600 mb-4">Formation très enrichissante, j&#39;ai acquis des compétences cruciales.</p>
            <Image 
              src="/images/avatar/avatar1.jpg" 
              alt="Jean Dupont" 
              width={64} 
              height={64} 
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="font-semibold">Armand MBA</p>
            <p className="text-gray-500">Consultant, TechCorp</p>
          </div>
          <div className="text-center header-glass p-6">
            <p className="text-gray-600 mb-4">Un programme bien structuré et à la hauteur de mes attentes.</p>
            <Image 
              src="/images/avatar/avatar2.jpg" 
              alt="Sophie Martin" 
              width={64} 
              height={64} 
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="font-semibold">Philippe Oyono</p>
            <p className="text-gray-500">Manager, Market Research</p>
          </div>
          <div className="text-center header-glass p-6">
            <p className="text-gray-600 mb-4">Je recommande cette formation à tous les professionnels.</p>
            <Image 
              src="/images/avatar/avatar3.jpg" 
              alt="Lucas Bernard" 
              width={64} 
              height={64} 
              className="w-16 h-16 rounded-full mx-auto mb-4 object-cover"
            />
            <p className="font-semibold">Nicolas ELLA MINSTA</p>
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
      <section className="contact-form p-4 md:p-8 flex items-center justify-center mt-8">
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
              className="px-6 py-2 text-black hover:text-gray-900 hover:bg-gray-200 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded transition duration-300"
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

export default CertificationPage;
