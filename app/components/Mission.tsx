// Mission.tsx
import React from 'react';

interface MissionProps {
  title: string;
  description: string;
  points: string[];
}

const Mission: React.FC<MissionProps> = ({ title, description, points }) => {
  return (
    <div className="text-start">
      <h2 className="text-2xl font-bold">{title}</h2>
      <p className="mt-4">{description}</p>
      {points && points.length > 0 && (
        <ul className="mt-8 ">
          {points.map((point, index) => (
            <li key={`${title}-${index}`} className='pb-4 text-green-500'>
              <span className='header-glass p-2 rounded-lg text-[10px] font-bold' key={index}>{point}</span>
            </li>
            
          ))}
        </ul>
      )}
    </div>
  );
};

export default Mission;
