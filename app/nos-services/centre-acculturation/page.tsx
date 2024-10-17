"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // Importation de next/image

const AcculturationPage: React.FC = () => {
  interface FAQItem {
    question: string;
    answer: string;
  }

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      "question": "Qu&#39;est-ce que l&#39;acculturation numérique ?",
      "answer": "L&#39;acculturation numérique est le processus par lequel les individus et les organisations acquièrent les compétences nécessaires pour naviguer et tirer parti des technologies numériques."
    },
    {
      "question": "Pourquoi l&#39;acculturation numérique est-elle importante pour le Gabon ?",
      "answer": "Elle est essentielle pour préparer le Gabon à l&#39;innovation et à la transformation digitale, en permettant aux citoyens et aux entreprises d&#39;adopter de nouvelles technologies et d&#39;améliorer leur compétitivité."
    },
    {
      "question": "Qui peut bénéficier de l&#39;acculturation numérique ?",
      "answer": "Tout le monde peut bénéficier de l&#39;acculturation numérique, des étudiants aux professionnels, en passant par les entrepreneurs et les administrations publiques."
    },
    {
      "question": "Quels types de formations sont proposées dans le cadre de l&#39;acculturation numérique ?",
      "answer": "Nous proposons des ateliers, des cours en ligne et des séminaires sur divers sujets, tels que la cybersécurité, le développement web, les médias sociaux et la gestion des données."
    },
    {
      "question": "Comment puis-je m&#39;inscrire à un programme d&#39;acculturation numérique ?",
      "answer": "Vous pouvez vous inscrire en ligne via notre site web ou en vous rendant à nos bureaux pour obtenir plus d&#39;informations sur les programmes disponibles."
    },
    {
      "question": "Y a-t-il des coûts associés aux formations ?",
      "answer": "Certaines formations sont gratuites, tandis que d&#39;autres peuvent avoir des frais d&#39;inscription. Consultez notre site pour plus de détails sur les tarifs."
    },
    {
      "question": "Comment l&#39;acculturation numérique impacte-t-elle l&#39;économie gabonaise ?",
      "answer": "Elle contribue à améliorer les compétences numériques de la main-d&#39;œuvre, favorise l&#39;innovation et stimule la création d&#39;entreprises, ce qui peut entraîner une croissance économique significative."
    },
    {
      "question": "Proposez-vous des événements ou des conférences sur l&#39;acculturation numérique ?",
      "answer": "Oui, nous organisons régulièrement des événements pour sensibiliser et informer le public sur l&#39;importance de l&#39;acculturation numérique."
    },
    {
      "question": "Comment puis-je contribuer à l&#39;acculturation numérique au Gabon ?",
      "answer": "Vous pouvez devenir bénévole, partager vos compétences ou participer à nos événements pour aider à promouvoir l&#39;acculturation numérique dans votre communauté."
    },
    {
      "question": "Quelles sont les ressources disponibles pour approfondir mes connaissances en numérique ?",
      "answer": "Nous fournissons des ressources en ligne, des livres, et des liens vers des cours en ligne pour vous aider à développer vos compétences numériques."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    // Liste des étapes
    {
      title: "Étape 1 : Prise de conscience",
      description: "Les individus commencent à réaliser l&#39;importance des technologies numériques dans divers aspects de la vie.",
    },
    {
      title: "Étape 2 : Prise de conscience",
      description: "Les individus commencent à réaliser l&#39;importance des technologies numériques dans divers aspects de la vie.",
    },
    {
      title: "Étape 3 : Prise de conscience",
      description: "Les individus commencent à réaliser l&#39;importance des technologies numériques dans divers aspects de la vie.",
    },
    {
      title: "Étape 4 : Prise de conscience",
      description: "Les individus commencent à réaliser l&#39;importance des technologies numériques dans divers aspects de la vie.",
    },
    {
      title: "Étape 5 : Prise de conscience",
      description: "Les individus commencent à réaliser l&#39;importance des technologies numériques dans divers aspects de la vie.",
    },
    // ... autres étapes
  ];

  const nextStep = () => {
    if (currentStep < steps.length - 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const previousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const benefits = [
    // Liste des avantages
    {
      title: "Compétences améliorées",
      description: "Développez des compétences essentielles en informatique et communication, renforçant ainsi votre employabilité.",
      icon: "💻"
    },
    {
      title: "Compétences améliorées",
      description: "Développez des compétences essentielles en informatique et communication, renforçant ainsi votre employabilité.",
      icon: "💻"
    },
    {
      title: "Compétences améliorées",
      description: "Développez des compétences essentielles en informatique et communication, renforçant ainsi votre employabilité.",
      icon: "💻"
    },
    {
      title: "Compétences améliorées",
      description: "Développez des compétences essentielles en informatique et communication, renforçant ainsi votre employabilité.",
      icon: "💻"
    },
    {
      title: "Compétences améliorées",
      description: "Développez des compétences essentielles en informatique et communication, renforçant ainsi votre employabilité.",
      icon: "💻"
    },
    {
      title: "Compétences améliorées",
      description: "Développez des compétences essentielles en informatique et communication, renforçant ainsi votre employabilité.",
      icon: "💻"
    },
    // ... autres avantages
  ];

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
        <div className='mx-auto max-w-7xl mt-16 pb-16'>
          <h1 className="md:text-6xl text-4xl font-bold pt-4">Acculturation Numérique</h1>
          <p className="mx-auto max-w-7xl mt-6">L&#39;acculturation numérique est essentielle pour préparer le Gabon à l&#39;innovation et à la transformation digitale.</p>
        </div>
      </section>

      {/* Section de contenu principal */}
      <section className="py-16 px-5 mx-auto max-w-7xl mt-16 text-center header-glass p-6">
        <h3 className="text-3xl font-semibold mb-4">Comprendre l&#39;acculturation numérique en 5 étapes</h3>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-12 py-12">
          {steps.slice(currentStep, currentStep + 3).map((step, index) => (
            <div key={index} className="text-center header-glass p-6 flex-1 min-w-[200px]">
              <div className="text-3xl mb-4">🛠️</div>
              <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-4 space-x-4">
          {currentStep > 0 && (
            <span 
              onClick={previousStep} 
              className="cursor-pointer text-gray-700 hover:text-gray-900 header-glass p-2"
            >
              <i className="material-icons">arrow_back</i>
            </span>
          )}
          {currentStep < steps.length - 3 && (
            <span 
              onClick={nextStep} 
              className="cursor-pointer text-gray-700 hover:text-gray-900 header-glass p-2"
            >
              <i className="material-icons">arrow_forward</i>
            </span>
          )}
        </div>
      </section>

      {/* Section des avantages avec image */}
      <section className="px-5 mx-auto max-w-7xl text-center header-glass p-6 mt-16">
        <h2 className="text-3xl font-bold mb-8">Les avantages de l&#39;acculturation numérique</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="header-glass p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{benefit.title}</h4>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section Témoignages */}
      <section className="py-16 px-5 mx-auto max-w-7xl header-glass mt-16">
        <h3 className="text-3xl font-semibold mb-6 text-center">Témoignages clients</h3>
        <p className="text-center text-gray-600 mb-12">Découvrez les expériences enrichissantes de nos participants.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <p className="text-gray-600 mb-4">Ce programme m&#39;a permis de m&#39;adapter rapidement.</p>
            <Image 
              src="/images/avatar/avatar3.jpg" 
              alt="Jean Bonnet" 
              width={64} 
              height={64} 
              className="object-cover rounded-full mx-auto mb-4"
            />
            <p className="font-semibold">KOUMBA Armel</p>
            <p className="text-gray-500">BICIG</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <p className="text-gray-600 mb-4">Une expérience enrichissante !</p>
            <Image 
              src="/images/avatar/avatar2.jpg" 
              alt="Marie Karas" 
              width={64} 
              height={64} 
              className="object-cover rounded-full mx-auto mb-4"
            />
            <p className="font-semibold">Anguilet Martin</p>
            <p className="text-gray-500">Lycée NELSON MANDELA</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-lg text-center">
            <p className="text-gray-600 mb-4">J&#39;ai acquis de nouvelles compétences.</p>
            <Image 
              src="/images/avatar/avatar1.jpg" 
              alt="Participant 3" 
              width={64} 
              height={64} 
              className="object-cover rounded-full mx-auto mb-4"
            />
            <p className="font-semibold">AMBOUROUET ANDY</p>
            <p className="text-gray-500">UOB</p>
          </div>
        </div>
      </section>

      {/* Section d'appel à l'action */}
      <section className="py-16 px-5 text-center mx-auto max-w-7xl">
        <h3 className="text-3xl font-semibold mb-4">Participez à nos ateliers numériques</h3>
        <p className="text-gray-600 mb-6">Inscrivez-vous dès maintenant pour découvrir nos ateliers.</p>
        <div className="space-x-4 items-center flex justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">S&#39;inscrire</button>
          <button className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded">En savoir plus</button>
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

      {/* Section de contact */}
      <footer className="mt-16 py-16 px-5 text-center py-6 md:py-10 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <h3 className="text-3xl font-bold mb-6">Vous avez des questions ?</h3>
        <p className="text-gray-600 mb-6">N&#39;hésitez pas à nous contacter.</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded mx-auto">Contact</button>
      </footer>
    </div>
  );
};

export default AcculturationPage;
