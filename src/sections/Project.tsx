import { PROJECT_DATA } from '../constants/projectData.tsx';
import { TECH_ICONS } from '../constants/techIcons.tsx'; 
import { FaGithub, FaSearch, FaLock } from "react-icons/fa";

const getTechIcon = (techName: string) => {
  const iconSrc = TECH_ICONS[techName];

  if (iconSrc) {
    return (
      <img 
        src={iconSrc} 
        alt={techName} 
        className="h-6 w-6 object-contain md:h-8 md:w-8 grayscale hover:grayscale-0 hover:scale-110 transition-all duration-200" 
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

const Projects = () => {
  return (
    <section id="projects" className="pb-24 bg-neo-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
            <h2 className="font-display font-black text-left text-5xl uppercase md:text-6xl">
                PROJECTS
            </h2>
            <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 mr-auto"></div>
        </div>

        <div className="flex flex-col gap-20">
            {PROJECT_DATA.map((project) => (
                <div key={project.id} className={`w-full filter drop-shadow-[8px_8px_0px_rgba(0,0,0,1)] ${getHoverShadow(project.color)} transition-all duration-300`}>
                    {/* Content */}
                     <div className="border-4 border-neo-black bg-white">
                        {/* Header */}
                        <div className="flex h-14 items-center justify-between border-b-4 border-neo-black bg-neo-black px-4">
                            <div className="flex gap-2">
                                <div className="h-4 w-4 rounded-full border-2 border-neo-black bg-[#FF5F56]"></div>
                                <div className="h-4 w-4 rounded-full border-2 border-neo-black bg-[#FFBD2E]"></div>
                                <div className="h-4 w-4 rounded-full border-2 border-neo-black bg-[#27C93F]"></div>
                            </div>
                            <div className="font-display text-lg font-bold text-center text-white">
                                {project.title}
                            </div>
                            <div className="w-16"></div> 
                        </div>

                        {/* Body */}
                        <div className="flex flex-col lg:flex-row">
                            <div className="relative border-b-4 border-neo-black  p-6 lg:w-1/2 lg:border-b-0 lg:border-r-4">
                                <div className="overflow-hidden border-2 border-neo-black shadow-sm transition-transform hover:scale-[1.02]">
                                    <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                                </div>
                            </div>

                            <div className="flex flex-col p-6 lg:w-1/2">
                                <div className="mb-2 flex items-center justify-between">
                                    <div className="font-mono text-lg font-bold text-neo-black">
                                        # project_name: <span className="text-neo-black">{project.title.toLowerCase()}</span>
                                    </div>
                                    <div className={`font-mono text-sm font-bold ${
                                        project.status.includes("LIVE") 
                                        ? "text-neo-red animate-pulse"  
                                        : "text-gray-500"                
                                    }`}>
                                        [{project.status}]
                                    </div>
                                </div>
                                <div className="mb-8 space-y-4  font-sans text-base leading-relaxed text-gray-700">
                                    {project.description.map((desc, i) => <p key={i}>{desc}</p>)}
                                </div>
                                
                                <div className="mb-8">
                                    <div className="mb-3 font-mono text-lg font-bold text-neo-black"># tech_stack:</div>
                                    <div className="flex flex-wrap gap-4 items-center">
                                        {project.techStack.map((tech, i) => (
                                            <div key={i} title={tech}>
                                                {getTechIcon(tech)}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="mt-auto flex flex-col gap-4 sm:flex-row">
                                    {project.webLink ? (
                                        <a href={project.webLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 border-2 border-neo-black bg-neo-red px-6 py-3 font-mono text-sm font-bold text-white shadow-[4px_4px_0px_0px_#000] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none">
                                            <FaSearch className="text-sm" /> OPEN LIVE SITE
                                        </a>
                                    ) : (
                                        <div className="group relative flex flex-1 cursor-not-allowed items-center justify-center border-2 border-neo-black bg-gray-200 px-6 py-3 font-mono text-sm font-bold text-gray-500 shadow-[4px_4px_0px_0px_#888]">
                                            <span className="flex items-center gap-2 group-hover:hidden group-active:hidden"><FaSearch className="text-sm"/>OPEN LIVE SITE</span>
                                            <span className="hidden items-center gap-2 text-gray-500 group-hover:flex group-active:scale-105"><FaLock className="text-sm"/>PROJECT IS OFFLINE</span>
                                        </div>
                                    )}
                                    
                                    {project.githubLink ? (
                                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex flex-1 items-center justify-center gap-2 border-2 border-neo-black bg-neo-black px-6 py-3 font-mono text-sm font-bold text-white shadow-[4px_4px_0px_0px_#888] transition-transform hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-gray-800">
                                            <FaGithub className="text-lg" /> ACCESS GITHUB
                                        </a>
                                    ) : (
                                        <div className="group relative flex flex-1 cursor-not-allowed items-center justify-center border-2 border-neo-black bg-gray-200 px-6 py-3 font-mono text-sm font-bold text-gray-500 shadow-[4px_4px_0px_0px_#888]">
                                            <span className="flex items-center gap-2 group-hover:hidden group-active:hidden"><FaGithub className="text-lg" /> ACCESS GITHUB</span>
                                            <span className="hidden items-center gap-2 text-gray-500 group-hover:flex group-active:flex group-active:scale-105"><FaLock className="text-sm" /> REPO IS PRIVATE</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                         {/* Footer */}
                        <div className="flex flex-wrap items-center justify-between border-t-4 border-neo-black bg-[#E5E7EB] px-6 py-3 font-mono text-xs font-bold text-neo-black md:text-sm">
                            {project.start && (
                                <><div className="flex items-center gap-2"><span className="text-gray-500">start:</span><span>{project.start}</span></div><div className="hidden h-4 w-0.5 bg-neo-black md:block"></div></>
                            )}
                            <div className="flex items-center gap-2"><span className="text-gray-500">role:</span><span>{project.role}</span></div>
                            <div className="hidden h-4 w-0.5 bg-neo-black md:block"></div>
                            <div className="flex items-center gap-2"><span className="text-gray-500">team_size:</span><span>{project.teamSize}</span></div>
                            <div className="hidden h-4 w-0.5 bg-neo-black md:block"></div>
                            <div className="flex items-center gap-2"><span className="text-gray-500">duration:</span><span>{project.duration}</span></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;