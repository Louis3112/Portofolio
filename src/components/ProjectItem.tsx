import React from 'react';
import { TECH_ICONS } from '../constants/techIcons'; 
import { FaGithub, FaSearch, FaLock } from "react-icons/fa";
import Button from './Button';

interface ProjectItemProps {
  data: {
    id: string;
    title: string;
    image: string;
    description: string[];
    techStack: string[];
    status: string;
    color?: string;
    webLink?: string;
    githubLink?: string;
    start?: string;
    role?: string;
    teamSize?: number | string;
    duration?: string;
  };
}

const getTechIcon = (techName: string) => {
  const iconSrc = TECH_ICONS[techName];
  if (iconSrc) {
    return (
      <img 
        src={iconSrc} 
        alt={techName} 
        className={`
            h-6 w-6 object-contain md:h-8 md:w-8 
            grayscale hover:grayscale-0 hover:scale-110 
            transition-all duration-200
        `} 
        title={techName}
      />
    );
  }
};

const getHoverShadow = (color?: string) => {
  switch (color) {
    case 'blue': return 'hover:drop-shadow-[12px_12px_0px_#2563EB]'; 
    case 'light-blue': return 'hover:drop-shadow-[12px_12px_0px_#38BDF8]';
    case 'dark-blue': return 'hover:drop-shadow-[12px_12px_0px_#1E3A8A]';
    case 'green': return 'hover:drop-shadow-[12px_12px_0px_#27C93F]'; 
    case 'yellow': return 'hover:drop-shadow-[12px_12px_0px_#FFBD2E]'; 
    case 'orange': return 'hover:drop-shadow-[12px_12px_0px_#F97316]'; 
    case 'purple': return 'hover:drop-shadow-[12px_12px_0px_#9333EA]'; 
    case 'red': return 'hover:drop-shadow-[12px_12px_0px_#EF4444]';
    default: return 'hover:drop-shadow-[12px_12px_0px_#D30000]';
  }
};

const ProjectItem: React.FC<ProjectItemProps> = ({ data }) => {
  return (
    <div 
        className={`
            w-full filter drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] 
            ${getHoverShadow(data.color)} 
            transition-all duration-300
        `}
    >
        {/* WINDOW CONTAINER */}
        <div className="border-4 border-neo-black bg-white">
            
            {/* 1. WINDOW HEADER */}
            <div className={`
                flex h-14 items-center justify-between 
                border-b-4 border-neo-black bg-neo-black px-4
            `}>
                <div className="flex gap-2">
                    <div className="h-4 w-4 rounded-full border-2 border-neo-black bg-[#FF5F56]"></div>
                    <div className="h-4 w-4 rounded-full border-2 border-neo-black bg-[#FFBD2E]"></div>
                    <div className="h-4 w-4 rounded-full border-2 border-neo-black bg-[#27C93F]"></div>
                </div>
                <div className="font-display text-lg font-bold text-center text-white">
                    {data.title}
                </div>
                <div className="w-16"></div> 
            </div>

            {/* 2. WINDOW BODY */}
            <div className="flex flex-col lg:flex-row">
                
                {/* Left: Image */}
                <div className="relative border-b-4 border-neo-black p-6 lg:w-1/2 lg:border-b-0 lg:border-r-4">
                    <div className="overflow-hidden border-2 border-neo-black shadow-sm transition-transform hover:scale-[1.02]">
                        <img 
                            src={data.image} 
                            alt={data.title} 
                            className="h-full w-full object-cover" 
                        />
                    </div>
                </div>

                {/* Right: Details */}
                <div className="flex flex-col p-6 lg:w-1/2">
                    
                    {/* Status Info */}
                    <div className="mb-2 flex items-center justify-between">
                        <div className="font-mono text-lg font-bold text-neo-black">
                            # project_name: <span className="text-neo-black">{data.title.toLowerCase()}</span>
                        </div>
                        <div className={`
                            font-mono text-sm font-bold 
                            ${data.status.includes("LIVE") 
                                ? "text-neo-red animate-pulse" 
                                : "text-gray-500"
                            }
                        `}>
                            [{data.status}]
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-8 space-y-4 font-sans text-base leading-relaxed text-gray-700">
                        {data.description.map((desc, i) => (
                            <p key={i}>{desc}</p>
                        ))}
                    </div>
                    
                    {/* Tech Stack */}
                    <div className="mb-8">
                        <div className="mb-3 font-mono text-lg font-bold text-neo-black">
                            # tech_stack:
                        </div>
                        <div className="flex flex-wrap gap-4 items-center">
                            {data.techStack.map((tech, i) => (
                                <div key={i} title={tech}>
                                    {getTechIcon(tech)}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-col gap-4 sm:flex-row">
                        
                        {/* Live Site */}
                        {data.webLink ? (
                            <Button 
                                href={data.webLink} 
                                isExternal 
                                variant="primary" 
                                icon={<FaSearch className="text-sm" />}
                                className="flex-1"
                            >
                                OPEN LIVE SITE
                            </Button>
                        ) : (
                            <div className="group flex-1">
                              <div className="relative h-full w-full">
                                <Button disabled 
                                  className="w-full group-hover:hidden" 
                                  icon={<FaSearch className="text-sm mt-1" />}>
                                    OPEN LIVE SITE
                                 </Button>
                                <div className={`
                                  hidden group-hover:flex h-full w-full 
                                  items-center justify-center gap-2 
                                  border-2 bg-gray-200 text-gray-400 border-neo-black px-6 py-2 
                                  font-mono font-bold text-md uppercase tracking-wider 
                                `}>
                                  <FaLock className="text-sm" /> NOT DEPLOYED YET
                                </div>
                                </div>
                            </div>
                        )}
                        
                        {/* Github */}
                        {data.githubLink ? (
                            <Button 
                                href={data.githubLink} 
                                isExternal 
                                variant="black" 
                                icon={<FaGithub />}
                                className="flex-1"
                            >
                                ACCESS GITHUB
                            </Button>
                        ) : (
                            // Private Repo Logic
                            <div className="group flex-1">
                                <div className="relative h-full w-full">
                                    <Button disabled className="w-full group-hover:hidden" icon={<FaGithub />}>
                                        ACCESS GITHUB
                                    </Button>
                                    <div className={`
                                        hidden group-hover:flex h-full w-full 
                                        items-center justify-center gap-2 
                                        border-2 border-neo-black bg-gray-200 px-6 py-2 
                                        font-mono font-bold text-md uppercase tracking-wider 
                                        text-gray-400 cursor-not-allowed
                                    `}>
                                        <FaLock className="text-sm" /> REPO IS PRIVATE
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* 3. WINDOW FOOTER */}
            <div className={`
                flex flex-wrap items-center justify-between 
                border-t-4 border-neo-black bg-[#E5E7EB] 
                px-6 py-3 font-mono text-xs font-bold text-neo-black md:text-sm
            `}>
                {data.start && (
                    <>
                        <div className="flex items-center gap-2">
                            <span className="text-gray-500">start:</span>
                            <span>{data.start}</span>
                        </div>
                        <div className="hidden h-4 w-0.5 bg-neo-black md:block"></div>
                    </>
                )}
                
                <div className="flex items-center gap-2">
                    <span className="text-gray-500">role:</span>
                    <span>{data.role}</span>
                </div>
                <div className="hidden h-4 w-0.5 bg-neo-black md:block"></div>
                
                <div className="flex items-center gap-2">
                    <span className="text-gray-500">team_size:</span>
                    <span>{data.teamSize}</span>
                </div>
                <div className="hidden h-4 w-0.5 bg-neo-black md:block"></div>
                
                <div className="flex items-center gap-2">
                    <span className="text-gray-500">duration:</span>
                    <span>{data.duration}</span>
                </div>
            </div>

        </div>
    </div>
  );
};

export default ProjectItem;