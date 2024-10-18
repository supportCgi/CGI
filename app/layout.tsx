"use client";
import { FC, ReactNode, useState } from 'react';
import Image from 'next/image';
import './globals.css';
import Footer from "./components/Footer";
import Head from 'next/head';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubMenuOpen, setMobileSubMenuOpen] = useState(false);

  return (
    <html lang="fr">
      <Head>
        <title>CGI - Centre Gabonais de l&#39;Innovation</title>
        <meta name="description" content="Ceci est la description de ma page." />
      </Head>
      <body className='littleFont'>
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"/>

        {/* Header / Navigation */}
        <header className="sticky top-0 shadow-md z-50 header-glass">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4">
            <div className="flex justify-between h-20">
              <div className="flex -mt-12 -ml-4 p-2">
                <a href="/">
                  <Image
                    src="/images/logo.png"
                    alt="Logo"
                    className="h-40 w-auto"
                    width={160}  // Remplace 160 par la largeur de ton image
                    height={40}  // Remplace 40 par la hauteur de ton image
                  />
                </a>
              </div>
              <div className="hidden md:flex space-x-8 items-center">
                <a href="/notre-vision" className="text-gray-900 hover:bg-green-100 px-4 py-2">Notre vision</a>
                <a href="/nos-missions" className="text-gray-900 hover:bg-green-100 px-4 py-2">Nos missions</a>
                <div className="relative group">
                  <a href="/nos-services" className="text-gray-900 hover:bg-green-100 px-4 py-2">Nos Services</a>
                  <div className="absolute left-0 hidden mt-2 w-48 bg-white shadow-lg rounded-lg group-hover:block">
                    <a href="/nos-services/centre-certifications" className="block px-4 py-2 text-gray-900 hover:bg-green-100">Centre de certifications</a>
                    <a href="/nos-services/centre-acculturation" className="block px-4 py-2 text-gray-900 hover:bg-green-100">Acculturation Numérique</a>
                    <a href="/nos-services/fablab" className="block px-4 py-2 text-gray-900 hover:bg-green-100">Fablab</a>
                    <a href="/nos-services/medialab" className="block px-4 py-2 text-gray-900 hover:bg-green-100">Medialab</a>
                  </div>
                </div>
                
                <a href="/success-stories" className="text-gray-900 hover:bg-green-100 px-4 py-2">Success stories</a>
                <a href="/iut" className="text-gray-900 hover:bg-green-100 px-4 py-2">UIT</a>
              </div>
              <div className="hidden md:block mt-6">
                <a href="/contact" className="text-black hover:bg-gray-100 block rounded-lg shadow-lg neumorphism-btn shadow-neumorphism transform hover:scale-105 transition-all py-2 px-4 text-center duration-300">Contact</a>
              </div>
              <div className="md:hidden flex items-center">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="text-gray-900 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
                >
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
          {mobileMenuOpen && (
            <div className="md:hidden shadow-md transition ease-in-out duration-300">
              <div className="flex flex-col space-y-1 px-4 py-2">
                <a href="/notre-vision" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Notre vision</a>
                <a href="/nos-missions" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Nos missions</a>
                <div className="flex flex-col">
                  <button
                    onClick={() => setMobileSubMenuOpen(!mobileSubMenuOpen)}
                    className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn flex justify-between items-center"
                  >
                    Nos Services
                    <svg
                      className={`h-5 w-5 transform transition-transform ${mobileSubMenuOpen ? 'rotate-180' : ''}`}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileSubMenuOpen && (
                    <div className="pl-4 flex flex-col space-y-1">
                      <a href="/nos-services/centre-acculturation" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Acculturation Numérique</a>
                      <a href="/nos-services/centre-certifications" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Centre de certifications</a>
                      <a href="/nos-services/fablab" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Fablab</a>
                      <a href="/nos-services/medialab" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Medialab</a>
                    </div>
                  )}
                </div>
                <a href="/success-stories" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Success stories</a>
                <a href="/iut" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">À propos de l&#39;IUT</a>

                <a href="/contact" className="text-gray-900 text-black rounded-lg shadow-lg p-2 neumorphism-btn">Contact</a>
              </div>
            </div>
          )}
        </header>

        {/* Main content area where the page-specific content will be rendered */}
        <main>
          {children} {/* Utilisez des animations ici si nécessaire */}
        </main>
        
        {/* Footer */}
        <div className='top-0'>
          <Footer />
        </div>
        
      </body>
    </html>
  );
};

export default Layout;
