import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const partners = [
  '/images/partenaires/smart.png',
  '/images/partenaires/itu.png',
  '/images/partenaires/ace.png',
  '/images/partenaires/aninf.png',
  '/images/partenaires/men.png',
  '/images/partenaires/rg.png',
  '/images/partenaires/cisco.png',
];

const PartnerSlider: React.FC = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const scrollWidth = scroller.scrollWidth / 2; // Divisé par 2 pour faire défiler plus de partenaires
    let scrollAmount = 0;

    const scroll = () => {
      scrollAmount += 1; // Ajustez la vitesse ici
      if (scrollAmount >= scrollWidth) {
        scrollAmount = 0; // Réinitialiser le défilement
      }
      scroller.scrollLeft = scrollAmount;
    };

    const intervalId = setInterval(scroll, 20); // Ajustez la fréquence ici

    return () => clearInterval(intervalId); // Nettoyage de l'intervalle
  }, []);

  return (
    <div
      ref={scrollerRef}
      style={{
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {partners.map((partner, index) => (
        <div key={index} style={{ display: 'inline-block', padding: '0 40px' }}>
          <Image 
            src={partner} 
            alt={`Partner ${index + 1}`} 
            width={100} 
            height={50} 
            priority 
            style={{ objectFit: 'contain' }} 
          />
        </div>
      ))}
      {/* Répéter la liste pour un effet de boucle infini */}
      {partners.map((partner, index) => (
        <div key={index + partners.length} style={{ display: 'inline-block', padding: '0 40px' }}>
          <Image 
            src={partner} 
            alt={`Partner ${index + 1}`} 
            width={100} 
            height={50} 
            priority 
            style={{ objectFit: 'contain' }} 
          />
        </div>
      ))}
      {/* Répéter la liste pour un effet de boucle infini */}
      {partners.map((partner, index) => (
        <div key={index + partners.length} style={{ display: 'inline-block', padding: '0 40px' }}>
          <Image 
            src={partner} 
            alt={`Partner ${index + 1}`} 
            width={100} 
            height={50} 
            priority 
            style={{ objectFit: 'contain' }} 
          />
        </div>
      ))}
    </div>
  );
};

export default PartnerSlider;
