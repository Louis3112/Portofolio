import { useState } from 'react';
import TECH_STACK_DATA from '../constants/techData';
import TechItem from '../components/TechItem'; 
import { GlitchSlide } from '../animate/GlitchSide';
import { Reveal } from "../animate/Reveal";

const TechStack = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    setActiveItem(prev => prev === itemName ? null : itemName);
  };

  return (
    <section className="overflow-hidden pb-24">
       <div className="max-w-7xl mx-auto px-4">
          {/* Header */}
          <div className="mb-12">
            <GlitchSlide direction="right">
              <h2 className="font-display font-black text-right text-4xl uppercase md:text-5xl">
                  TECH STACK
              </h2>
              <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 ml-auto"></div>
            </GlitchSlide>
          </div>

          {/* Mapping Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECH_STACK_DATA.map((group, idx) => (
              <Reveal key={idx} 
                width="100%" 
                delay={idx * 0.2}
                className="h-full"
              >
                <div key={idx} className="flex flex-col border-2 border-neo-black h-full p-6 bg-white shadow-brutal">
                  <h3 className="font-mono font-bold text-xl mb-6 border-b-2 border-neo-black pb-2">
                    {group.category}
                  </h3>
                
                  <div className="grid grid-cols-4 gap-4 flex-grow content-start">
                    {group.items.map((item, i) => (
                      <TechItem 
                          key={i}
                          name={item.name}
                          src={item.src}
                          isImage={item.isImage}
                          isActive={activeItem === item.name}
                          onClick={() => handleItemClick(item.name)}
                      />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
       </div>
    </section>
  );
};

export default TechStack;