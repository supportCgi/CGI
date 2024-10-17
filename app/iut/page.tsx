import React from 'react';
import Image from 'next/image';

const IUTPage: React.FC = () => {
  return (
    <div className="">
      <section className="text-black text-center ">
        <div className="w-full h-full mb-16 z-0 relative">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/video-1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>

          {/* Voile avec Image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-white bg-opacity-30 z-10" /> {/* Voile sombre */}
            <Image 
              src="/images/logo/newLogoBlack.png" 
              alt="Logo" 
              layout="fill" 
              objectFit="cover"
              className="opacity-60 z-0" 
            /> {/* Image avec opacité réduite */}
          </div>
        </div>
        <h1 className="md:text-6xl text-4xl font-bold pt-4">Alliance pour l&#39;Innovation et l&#39;Entrepreneuriat</h1>
        <p className="text-xl mt-4">En faveur du Développement Numérique</p>
      </section>

      {/* Section d'en-tête */}
      
      {/* Section Introduction */}
      <section className="py-16 px-5 bg-[#2D4BBB] mt-16 text-white ">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold mb-6">Introduction</h3>
          <p className="mb-6">
            L&#39;Alliance pour l&#39;Innovation et l&#39;Entrepreneuriat en faveur du Développement Numérique a été créée pour répondre aux besoins importants non satisfaits des membres de l&#39;UIT dans le domaine de l&#39;innovation, tels qu&#39;exprimés dans le Plan d&#39;Action de Kigali adopté lors de la Conférence mondiale de développement des télécommunications 2022 (CMDT-22) et les résultats de la Conférence de plénipotentiaires de l&#39;UIT 2022 (PP-22).
          </p>
          <blockquote className="italic border-l-4 border-blue-600 pl-4">
            « Ensemble, nous pouvons créer un avenir numérique plus inclusif et équitable pour tous. »
            <br />
            — Dr Cosmas Zavazava, Directeur BDT, UIT
          </blockquote>
          <Image 
            src="/images/blog/fabl.png" 
            alt="Introduction Image" 
            width={500} // Ajuster selon les besoins
            height={300} // Ajuster selon les besoins
            className="mx-auto mt-8 max-w-full h-auto" 
          />
        </div>
      </section>

      {/* Section Vision et Mission */}
      <section className="py-16 px-5 header-glass">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-3xl font-semibold mb-4">Vision</h3>
            <p className="text-gray-700">
              Soutenir les membres de l&#39;UIT-D avec des approches nouvelles, plus résilientes et avant-gardistes pour garantir qu&#39;ils puissent naviguer en toute sécurité dans un monde numérique de plus en plus volatil, incertain, complexe et ambigu (VUCA), tout en atteignant les objectifs du Plan d&#39;Action de Kigali.
            </p>
            <Image 
              src="/images/blog/fabl.png" 
              alt="Vision Image" 
              width={500} // Ajuster selon les besoins
              height={300} // Ajuster selon les besoins
              className="mt-6 max-w-full h-auto" 
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold mb-4">Mission</h3>
            <p className="text-gray-700">
              Réduire la fracture de l&#39;innovation numérique et renforcer les capacités des membres de l&#39;UIT-D pour qu&#39;ils puissent surmonter les défis sur leur chemin vers la transformation numérique. Accélérer l&#39;impact de leurs écosystèmes sur les secteurs transversaux afin de promouvoir une société inclusive et durable.
            </p>
            <Image 
              src="/images/blog/fabl.png" 
              alt="Mission Image" 
              width={500} // Ajuster selon les besoins
              height={300} // Ajuster selon les besoins
              className="mt-6 max-w-full h-auto" 
            />
          </div>
        </div>
      </section>

      {/* Section Opportunités */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto header-glass p-8">
          <h3 className="text-3xl font-semibold mb-6">Opportunités</h3>
          <ul className="list-disc list-inside space-y-4 text-gray-700">
            <li>Développer des capacités locales en matière d&#39;innovation et d&#39;entrepreneuriat.</li>
            <li>Renforcer les compétences organisationnelles et humaines d&#39;excellence.</li>
            <li>Proposer de nouveaux produits et services aux membres de l&#39;UIT.</li>
          </ul>
          <Image 
            src="/images/blog/fabl.png" 
            alt="Opportunities Image" 
            width={500} // Ajuster selon les besoins
            height={300} // Ajuster selon les besoins
            className="mx-auto mt-8 max-w-full h-auto" 
          />
        </div>
      </section>

      {/* Section Résultats */}
      <section className="py-16 px-5">
        <div className="max-w-5xl mx-auto header-glass p-8">
          <h3 className="text-3xl font-semibold mb-6">Résultats</h3>
          <p className="text-gray-700 mb-6">
            Renforcement des capacités des membres de l&#39;UIT pour intégrer l&#39;innovation dans les télécommunications/TIC et la numérisation dans leurs agendas de développement national, ainsi que pour élaborer des stratégies visant à promouvoir des initiatives d&#39;innovation, notamment par le biais de partenariats publics, privés et public-privé.
          </p>
          <p className="text-gray-700 mb-6">
            Renforcement des capacités humaines et institutionnelles des membres de l&#39;UIT dans les télécommunications/TIC afin de favoriser la transformation numérique.
          </p>
          <p className="text-gray-700">
            Les travaux de l&#39;Alliance sont alignés sur les résolutions 90, 89 et 85 de la CMDT (Kigali, 2022), ainsi que sur la Résolution 205 de la Conférence de plénipotentiaires, réaffirmant le rôle du BDT dans l&#39;innovation pour le développement numérique.
          </p>
          <Image 
            src="/images/blog/fabl.png" 
            alt="Results Image" 
            width={500} // Ajuster selon les besoins
            height={300} // Ajuster selon les besoins
            className="mx-auto mt-8 max-w-full h-auto" 
          />
        </div>
      </section>
    </div>
  );
};

export default IUTPage;
