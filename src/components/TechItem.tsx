import React from 'react';

interface TechItemProps {
  name: string;
  src: string;
  isImage: boolean;
  isActive: boolean;
  onClick: () => void;
}

const TechItem: React.FC<TechItemProps> = ({ name, src, isImage, isActive, onClick }) => {
  return (
    <div 
      onClick={onClick} 
      className="group flex flex-col items-center gap-2 cursor-pointer"
    >
      {/* Icon Wrapper */}
      <div className={`h-16 w-16 flex items-center justify-center transition-transform duration-300 
        ${isActive ? '-translate-y-1' : 'group-hover:-translate-y-1'}`}>
        
        {isImage ? (
          <img 
            src={src} 
            alt={name}
            className={`w-full h-full object-contain filter transition-all duration-300
              ${isActive 
                ? "grayscale-0 opacity-100" 
                : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
              }
            `}
          />
        ) : (
          <div className="text-gray-400 font-mono font-bold text-2xl">?</div> 
        )}
      </div>

      {/* Text Label */}
      <span className={`font-mono text-xs font-bold text-center transition-all duration-300 md:text-sm
          ${isActive 
            ? "opacity-100 text-neo-red" 
            : "opacity-0 text-gray-400 group-hover:text-neo-black group-hover:opacity-100"
          }
      `}>
        {name}
      </span>
    </div>
  );
};

export default TechItem;