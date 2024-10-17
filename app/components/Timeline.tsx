import React from 'react';
import Image from 'next/image';

interface TimelineItem {
  year: string;
  title: string;
  description: string;
  imageUrl: string;
  actionText?: string;
  actionLink?: string;
  logoUrl?: string; // Ajout pour le logo dans le cercle
}

const timelineData: TimelineItem[] = [
  {
    year: '2025',
    title: 'Lancement du programme',
    description:
      "Début de notre initiative pour former des experts en numérique. Ce programme vise à renforcer les compétences locales.",
    imageUrl: '/images/vision/program.png',
    logoUrl: '/images/logo/logo.png', // Logo inséré ici
  },
  {
    year: '2027',
    title: 'Expansion des services',
    description:
      "Nous élargissons notre gamme de services pour inclure des formations avancées. Cela permettra d'attirer plus de talents.",
    imageUrl: '/images/vision/talent.png',
    logoUrl: '/images/logo/logo.png',
  },
  {
    year: '2030',
    title: 'Objectif atteint',
    description:
      "Nous visons à faire du Gabon un leader en innovation numérique. Notre impact sera ressenti à tous les niveaux.",
    imageUrl: '/images/vision/objective.png',
    logoUrl: '/images/logo/logo.png',
  },
  {
    year: '2032',
    title: 'Partenariats stratégiques',
    description:
      "Établissement de partenariats avec des entreprises et institutions clés. Cela renforcera notre réseau et nos ressources.",
    imageUrl: '/images/vision/partner.png',
    logoUrl: '/images/logo/logo.png',
  },
];

const Timeline: React.FC = () => {
  return (
    <div className="timeline-container pt-16">
      <h2 className="text-3xl font-bold pb-6">Notre chemin vers l&#39;innovation numérique</h2>
      <p>
        Nous avons tracé une feuille de route ambitieuse jusqu&#39;en 2030. Chaque étape nous rapproche de notre objectif d&#39;innovation.
      </p>
      <div className="timeline header-glass pb-16">
        {timelineData.map((item, index) => (
          <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
            {/* Le cercle orange avec logo */}
            <div className="timeline-circle">
            <Image
                src={item.logoUrl || '/images/default.jpg'}
                alt="Logo"
                width={100} // Ajuste la largeur selon tes besoins
                height={100} // Ajuste la hauteur selon tes besoins
                className="logo-in-circle"
              />
            </div>
            <div className="timeline-year">
              <h3>{item.year}</h3>
            </div>
            <div className="timeline-content header-glass">
            <Image
                src={item.imageUrl}
                alt={item.title}
                width={500} // Ajuste la largeur selon tes besoins
                height={400} // Ajuste la hauteur selon tes besoins
                className="h-64 w-full object-cover"
              />
              <div className="text-start">
                <h4 className='font-bold text-2xl pb-8'>{item.title}</h4>
                <p>{item.description}</p>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
