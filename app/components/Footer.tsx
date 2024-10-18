import Link from 'next/link';
import Image from 'next/image'; // Importation du composant Image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faXTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 py-8 header-glass ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="flex">
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Logo"
                className="md:h-40 h-44 w-auto"
                width={160} // Ajuste la largeur selon la taille de ton logo
                height={40} // Ajuste la hauteur selon la taille de ton logo
              />
            </Link>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mt-4 md:mt-0 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 text-sm p-4">
          <Link href="/nos-services/centre-certification">Centre de Certification</Link>
          <Link href="/nos-services/centre-acculturation">Acculturation Numérique</Link>
          <Link href="/nos-services/fablab">FabLab</Link>
          <Link href="/nos-services/medialab">MediaLab</Link>
        </div>

        {/* Social Media Icons */}
        <div className="md:mt-0 mt-16 flex space-x-4">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebookF} className="text-xl" />
          </a>
      
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FontAwesomeIcon icon={faXTwitter} className="text-xl" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} className="text-xl" />
          </a>

        </div>
      </div>

      <div className="container mx-auto text-center text-sm text-gray-500">
        <p className='text-sm text-[12px]'>© 2024 CGI. Tous droits réservés.</p>
        <div className="mt-2 space-x-4">
          <Link href="/politique-confidentialite">Politique de confidentialité</Link>
          <Link href="/conditions-utilisation">Conditions d&#39;utilisation</Link>
          <Link href="/parametres-cookies">Paramètres des cookies</Link>
        </div>
        <p className='text-sm mt-4'>
          Une conception de <a href="https://www.miscoch-it.ga/" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-green-400 to-blue-400 text-transparent bg-clip-text hover:underline">Miscoch-IT</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
