import { EXPERIENCE_DATA } from '../constants/experienceData.tsx';
import ExperienceItem from '../components/ExperienceItem.tsx'; 
import { GlitchSlide } from '../animate/GlitchSide.tsx';
import { Reveal } from '../animate/Reveal.tsx';
const Experiences = () => {
  return (
    <section id="experience" className="overflow-hidden pb-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-12">
          <GlitchSlide direction="left">
            <h2 className="font-display font-black text-left text-4xl uppercase md:text-5xl">
                EXPERIENCES
            </h2>
            <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 mr-auto"></div>
          </GlitchSlide>
        </div>

        <div className="relative">
            {/* Center Line */}
            <div className="absolute left-4 top-0 h-full w-1 -translate-x-1/2 bg-neo-black md:left-1/2"></div>
            
            {/* List Item */}
            <div className="flex flex-col gap-8"> 
                {EXPERIENCE_DATA.map((exp, index) => (
                  <Reveal 
                    key={exp.id} 
                        width="100%" 
                        overflow="visible"
                  >
                    <ExperienceItem 
                        key={exp.id} 
                        data={exp} 
                        isEven={index % 2 === 0}
                    />
                  </Reveal>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;