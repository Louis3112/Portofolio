import React from 'react';
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";
import Button from './Button';

interface ExperienceItemProps {
  data: {
    id: string;
    role: string;
    company: string;
    logo: string;
    period: string;
    description: React.ReactNode[];
    link?: string;
    bgColor?: string;
    color?: string;
  };
  isEven: boolean;
}

const getHoverShadow = (color?: string) => {
  switch (color) {
    case 'blue': return 'hover:drop-shadow-[12px_12px_0px_#2563EB]'; 
    case 'light-blue': return 'hover:drop-shadow-[12px_12px_0px_#4F85FF]';
    case 'dark-blue': return 'hover:drop-shadow-[12px_12px_0px_#1E3A8A]';
    case 'green': return 'hover:drop-shadow-[12px_12px_0px_#199E2C]'; 
    case 'yellow': return 'hover:drop-shadow-[12px_12px_0px_#F0B22E]'; 
    case 'orange': return 'hover:drop-shadow-[12px_12px_0px_#F97316]'; 
    case 'purple': return 'hover:drop-shadow-[12px_12px_0px_#9333EA]'; 
    case 'red': return 'hover:drop-shadow-[12px_12px_0px_#EF4444]';
    case 'teal': return 'hover:drop-shadow-[12px_12px_0px_#048C7F]';
    default: return 'hover:drop-shadow-[12px_12px_0px_#D30000]';
  }
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ data, isEven }) => {
  return (
    <div className={`relative flex w-full items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
      
      {/* Center Dot */}
      <div className="absolute left-4 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-neo-black shadow-md md:left-1/2"></div>

      <div className={`relative ml-12 w-full md:ml-0 md:w-[45%] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>        
        <div 
          style={{ '--dynamic-hover': data.color || '#14532d' } as React.CSSProperties}
          className= {`group relative flex flex-col gap-4 
          border-2 border-neo-black bg-white p-6 shadow-brutal 
          transition-all duration-300 hover:-translate-y-1 ${getHoverShadow(data.color)} 
        `}>
          
          {/* Floating Badge */}
          <div className={`
            absolute -right-2 -top-4 rotate-2 
            border-2 border-neo-black px-3 py-1 
            font-mono text-xs font-bold text-white shadow-sm 
            transition-transform group-hover:rotate-0
            ${data.bgColor || 'bg-neo-black'}
          `}>
            {data.period}
          </div>

          {/* Card Header */}
          <div className={`flex items-start gap-4 border-b-2 border-dashed pb-4`}>
            
            {/* Logo  */}
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-neo-black bg-gray-50 p-1">
              <img 
                src={data.logo} 
                alt={data.company} 
                className="h-full w-full object-contain" 
              />
            </div>
            
            {/* Title & Location */}
            <div>
              <h3 className="font-display text-xl font-bold leading-tight md:text-2xl">
                {data.role}
              </h3>
              <div className="mt-1 flex items-center gap-2 font-mono text-xs font-bold text-gray-500 md:text-sm">
                <FaLocationDot />
                <span>{data.company}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <ul className="list-inside space-y-2 font-sans text-sm leading-relaxed text-gray-700 md:text-base">
            {data.description.map((point, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-neo-black"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Footer */}
          {data.link && (
            <div className="mt-4 flex justify-end">
              <Button
                href={data.link}
                isExternal
                variant="black"
                icon={<FaLinkedin className="text-lg" />}
                className="font-mono text-sm px-4 py-2"
              >
                VIEW ACTIVITY
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default ExperienceItem;