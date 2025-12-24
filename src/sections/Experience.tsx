import { EXPERIENCE_DATA } from '../constants/experienceData.tsx';
import { FaLocationDot, FaLinkedin } from "react-icons/fa6";

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-neo-white scroll-mt-28">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12">
            <h2 className="font-display font-black text-left text-4xl uppercase md:text-5xl">
                EXPERIENCE
            </h2>
            <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 mr-auto"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
            {/* Line */}
            <div className="absolute left-4 top-0 h-full w-1 -translate-x-1/2 bg-neo-black md:left-1/2"></div>
            <div className="flex flex-col gap-8"> 
                {EXPERIENCE_DATA.map((exp, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <div key={exp.id} className={`relative flex w-full items-start ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
                            <div className="absolute left-4 z-10 h-6 w-6 -translate-x-1/2 rounded-full border-4 border-white bg-neo-black shadow-md md:left-1/2"></div>

                            {/* Card */}
                            <div className={`relative ml-12 w-full md:ml-0 md:w-[45%] ${isEven ? 'md:pr-8' : 'md:pl-8'}`}>  
                              <div className={`group relative flex flex-col gap-4 border-2 border-neo-black bg-white p-6 shadow-brutal transition-all duration-300 hover:-translate-y-1 hover:shadow-brutal-lg`}>                              
                                <div className={`absolute -right-2 -top-4 rotate-2 border-2 border-neo-black  ${exp.color || 'bg-white'} px-3 py-1 font-mono text-xs font-bold text-white shadow-sm transition-transform group-hover:rotate-0`}>
                                  {exp.period}
                                </div>
                                    <div className="flex items-start gap-4 border-b-2 border-dashed border-gray-300 pb-4">
                                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border-2 border-neo-black bg-gray-50 p-1">
                                            <img src={exp.logo} alt={exp.company} className="h-full w-full object-contain" />
                                        </div>
                                        <div>
                                            <h3 className="font-display text-xl font-bold leading-tight md:text-2xl">
                                                {exp.role}
                                            </h3>
                                            <div className="mt-1 flex items-center gap-2 font-mono text-xs font-bold text-gray-500 md:text-sm">
                                                <FaLocationDot />
                                                <span>{exp.company}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <ul className="list-inside space-y-2 font-sans text-sm leading-relaxed text-gray-700 md:text-base">
                                        {exp.description.map((point, i) => (
                                            <li key={i} className="flex gap-2">
                                                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-neo-black"></span>
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {exp.link && (
                                    <div className="mt-4 flex justify-end">
                                        <a 
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={`relative inline-flex items-center gap-2 
                                                        border-2 border-neo-black bg-neo-black
                                                        px-4 py-2 font-mono text-sm font-bold text-neo-white 
                                                        shadow-brutal transition-all duration-200 hover:translate-x-[2px] 
                                                        hover:translate-y-[2px] hover:shadow-none hover:bg-neo-white hover:text-neo-black`}
                                        >
                                            <FaLinkedin className="text-lg" />
                                            <span>VIEW ACTIVITY</span>
                                        </a>
                                    </div>
                                )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;