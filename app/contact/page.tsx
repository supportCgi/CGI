import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="contact-page text-gray-800 ">
      {/* Header */}
      <section className="contact-header bg-gray-900 text-black text-center header-glass py-16 ">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 md:mb-4">Nous contacter maintenant</h1>
        <p className="mb-4 md:mb-6">
          Contactez le Centre Gabonais d&#39;Innovation (CGI) pour toute question ou information supplémentaire.
        </p>
      </section>

      {/* Formulaire de Contact */}
      <section className="contact-form text-black p-4 md:p-8 flex items-center justify-center mt-8 ">
        <div className="header-glass p-6 md:p-8 rounded-lg shadow-xl max-w-lg w-full">
          <h2 className="text-3xl mb-4 md:mb-6 text-black">Nous Contacter</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nom"
              className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism text-black"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border-none rounded-lg glassmorphism-input neumorphism text-black"
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

      {/* Google Maps */}
      <section className="map-section p-4 md:p-8 header-glass ">
        <h2 className="text-4xl mb-4 md:mb-6 font-bold text-center p-6">Nos Emplacements</h2>
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 max-w-7xl mx-auto ">
          <div className="w-full md:w-full">
            <h3 className="text-2xl mb-2">Libreville</h3>
            <iframe
              className="w-full h-96 rounded-md shadow-md"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.9072627886497!2d9.447150514205486!3d0.3893178640924114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMCszMyc1Ni44Ik4gOSs0MSc0NS41IkU!5e0!3m2!1sfr!2sgb!4v1600106734605!5m2!1sfr!2sgb"
              allowFullScreen={false}
              loading="lazy"
              title="Carte Libreville"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Informations de contact */}
      {/* Section Contact Information */}
<section className="contact-info p-4 md:p-8 text-gray-800 max-w-7xl mx-auto">
  <h2 className="text-3xl font-semibold mb-4 md:mb-6">Contactez-nous</h2>
  <div className="info space-y-2 md:space-y-4 text-lg">
    <div className="flex items-center">
      <span className="mr-2 text-2xl text-blue-600">📧</span>
      <p>Email: <a href="mailto:contact@cgi.gabon" className="text-black hover:text-blue-800">contact@cgi.gabon</a></p>
    </div>
    <div className="flex items-center">
      <span className="mr-2 text-2xl text-green-600">📱</span>
      <p>Téléphone: <a href="tel:+241012345" className="text-black hover:text-green-800">+24160453099</a></p>
    </div>
    <div className="flex items-center">
      <span className="mr-2 text-2xl text-gray-700">🏢</span>
      <p>Bureau: 456 Avenue de l&#39;Innovation, Libreville, Gabon</p>
    </div>
    <a href="#" className="text-blue-500 hover:underline flex items-center">
      <span className="mr-2">🗺️</span> Obtenir Itinéraire
    </a>
  </div>
</section>

{/* Section Newsletter */}
<section className="newsletter text-center py-6 md:py-10 bg-gradient-to-r from-blue-600 to-green-500 text-white">
  <h2 className="text-3xl font-semibold mb-4 md:mb-6">Abonnez-vous à notre newsletter</h2>
  <form className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
    <input
      type="email"
      placeholder="Votre email"
      className="p-3 w-2/3 md:w-1/3 border-none rounded-lg shadow-md text-gray-700"
      required
    />
    <button
      type="submit"
      className="px-6 py-2 text-white hover:text-gray-900 hover:bg-gray-200 rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center rounded transition duration-300"
    >
      S&#39;inscrire
    </button>
  </form>
</section>

    </div>
  );
};

export default Contact;
