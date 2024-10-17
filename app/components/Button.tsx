import React from 'react';

interface ButtonProps {
  name: string; // Nom du bouton
  isBeam?: boolean; // Propriété optionnelle pour le style du bouton
  containerClass?: string; // Classe de conteneur optionnelle
}

const Button: React.FC<ButtonProps> = ({ name, isBeam = false, containerClass = '' }) => {
  return (
    <button className={`btn ${containerClass}`}>
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

export default Button;
