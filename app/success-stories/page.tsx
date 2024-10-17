"use client";
import Image from 'next/image';

const SuccessStories: React.FC = () => {
  const testimonials = [
    {
      quote: "Grâce au CGI, j'ai trouvé ma voie dans le numérique!",
      name: "NDONG ELLA Michael",
      title: "Étudiant, FabLab",
      imageUrl: "/images/avatar/avatar1.jpg",
    },
    {
      quote: "Les formations m'ont ouvert des portes que je n'imaginais pas.",
      name: "MBOUMBA AISSI Jean",
      title: "Consultant, TechCorp",
      imageUrl: "/images/avatar/avatar2.jpg",
    },
    {
      quote: "Une expérience enrichissante qui a changé ma carrière.",
      name: "Stéphane ANTCHOUET",
      title: "Entrepreneur, Startup",
      imageUrl: "/images/avatar/avatar3.jpg",
    },
  ];

  const galleryImages = [
    "/images/missions/entrep.jpg",
    "/images/missions/formation.jpg",
    "/images/missions/win.jpg",
    "/images/missions/womanwork.jpg",
    "/images/missions/win.jpg",
    "/images/missions/formation.jpg",
    "/images/missions/entrep.jpg",
    "/images/blog/accul.png",
    "/images/blog/certif.jpeg",
    "/images/blog/fabl.png",
    "/images/blog/accul.png",
    "/images/blog/fabl.png",
    // Add more image URLs as needed
  ];

  const infoItems = [
    {
      title: "Des parcours transformés grâce à l'innovation et à la formation numérique",
      description: "Nos programmes ont permis à de nombreux participants de se réinventer professionnellement.",
      iconUrl: "/images/icons/formation.png",
    },
    {
      title: "Des certifications qui ouvrent des portes vers de nouvelles opportunités",
      description: "Les certifications du CGI sont reconnues et valorisées sur le marché du travail.",
      iconUrl: "/images/icons/certif.png",
    },
    {
      title: "Des initiatives innovantes qui changent la donne pour le Gabon numérique",
      description: "Participez à nos projets novateurs pour façonner l'avenir numérique du Gabon.",
      iconUrl: "/images/icons/innov.png",
    },
  ];

  return (
    <div className="success-stories-page text-gray-800">
      {/* Section Header */}
      <section className="text-black text-center">
        <div className="relative w-full h-full mb-16">
          <video className="w-full h-full object-cover" autoPlay loop muted>
            <source src="/videos/success.mp4" type="video/mp4" />
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
        <h1 className="md:text-6xl text-4xl font-bold pt-4">Success stories</h1>
        <p className="text-xl mt-4">Découvrez comment le CGI transforme des vies grâce à ses programmes de formation et certification.</p>
      </section>

      {/* Témoignages clients */}
      <section className="testimonials p-8 text-center mx-auto max-w-7xl mt-16">
        <h2 className="text-3xl mb-6 font-bold">Témoignages clients</h2>
        <p className="mb-8">Découvrez comment nos programmes transforment des vies.</p>
        <div className="testimonial-list grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="testimonial header-glass p-6 rounded-lg shadow-neumorphism transition-transform transform hover:scale-105"
            >
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.name}
                width={80}
                height={80}
                className="w-20 h-20 rounded-full mx-auto mb-4 shadow-neumorphism object-cover shadow-lg"
              />
              <div className="stars mb-4 text-yellow-500">★★★★★</div>
              <p className="mb-4">{testimonial.quote}</p>
              <p className="font-bold">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Galerie d'images */}
      <section className="image-gallery text-center p-8 mx-auto max-w-7xl mt-16 header-glass">
        <h2 className="text-3xl mb-6 font-bold">Galerie</h2>
        <p className="mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <div className="gallery grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {galleryImages.map((imageUrl, index) => (
            <div
              key={index}
              className="image-container bg-gray-100 rounded-lg shadow-neumorphism overflow-hidden transition-transform transform hover:scale-105 relative"
            >
              <Image
                src={imageUrl}
                alt={`Gallery image ${index + 1}`}
                layout="responsive"
                width={400}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        <div className="controls flex justify-center mt-6 space-x-4">
          <button className="text-black hover:bg-gray-100 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism py-2 px-4">
            ←
          </button>
          <button className="text-black hover:bg-gray-100 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism py-2 px-4">
            →
          </button>
        </div>
      </section>

      {/* Informations supplémentaires */}
      <section className="extra-info p-8 mx-auto max-w-7xl mt-16">
        <h2 className="text-3xl mb-6 font-bold">Découvrez les réussites inspirantes de nos étudiants et professionnels au CGI</h2>
        <div className="info-list grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {infoItems.map((info, index) => (
            <div
              key={index}
              className="info-item bg-gray-100 p-6 rounded-lg header-glass text-center transform hover:scale-105 transition-all"
            >
              <Image
                src={info.iconUrl}
                alt={`Icon ${index + 1}`}
                width={64}
                height={64}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl mb-2 font-semibold">{info.title}</h3>
              <p>{info.description}</p>
              <a href="#" className="text-black text-gray-900 hover:bg-gray-100 block rounded-lg shadow-lg neumorphism-btn shadow-neumorphism mt-4 py-2 px-4 text-center">
                En savoir plus
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Appel à l'action */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white">
        <h2 className="text-3xl mb-6 font-bold">Devenez une success story</h2>
        <p className="mb-8">Envie de faire partie de nos success stories ? Rejoignez nos programmes dès aujourd&#39;hui !</p>
        <div className="buttons space-x-4 flex flex-col md:flex-row justify-center items-center gap-6">
          <button className="px-6 py-2 text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism">
            Inscrivez-vous
          </button>
          <button className="px-6 py-2 text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism">
            Contactez-nous
          </button>
        </div>
      </section>
    </div>
  );
};

export default SuccessStories;
