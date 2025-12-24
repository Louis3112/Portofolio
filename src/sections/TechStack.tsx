import { useState } from 'react';
import TECH_STACK_DATA from '../constants/techData';

const TechStack = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const handleItemClick = (itemName: string) => {
    if (activeItem === itemName) {
      setActiveItem(null); 
    } else {
      setActiveItem(itemName); 
    }
  };

  return (
    <section id="skills" className="py-24 bg-neo-white scroll-mt-28" >
       <div className="max-w-6xl mx-auto px-4">
          
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-display font-black text-right text-4xl uppercase md:text-5xl">
                TECH STACK
            </h2>
            <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 ml-auto"></div>
          </div>

          {/* Mapping */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TECH_STACK_DATA.map((group, idx) => (
              <div key={idx} className="border-2 border-neo-black p-6 bg-white shadow-brutal">
                <h3 className="font-mono font-bold text-xl mb-6 border-b-2 border-neo-black pb-2">
                  {group.category}
                </h3>
              
                <div className="grid grid-cols-4 gap-4">
                  {group.items.map((item, i) => {
                    const isActive = activeItem === item.name;
                    return (
                      <div 
                        key={i} 
                        onClick={() => handleItemClick(item.name)} 
                        className="group flex flex-col items-center gap-2 cursor-pointer"
                      >
                        {/* Icon Wrapper */}
                        <div className={`h-16 w-16 flex items-center justify-center transition-transform duration-300 ${isActive ? '-translate-y-1' : 'group-hover:-translate-y-1'}`}>
                          {item.isImage ? (
                            <img 
                              src={item.src} 
                              alt={item.name}
                              className={`w-full h-full object-contain filter transition-all duration-300
                                ${isActive 
                                  ? "grayscale-0 opacity-100" 
                                  : "grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100"
                                }
                              `}
                            />
                          ) : (
                            <div className="text-gray-400">?</div> 
                          )}
                        </div>

                        {/* Text Label */}
                        <span className={`font-mono text-xs font-bold text-center transition-all duration-300 md:text-sm
                            ${isActive 
                              ? "opacity-100 text-neo-red" 
                              : "opacity-0 text-gray-400 group-hover:text-neo-black group-hover:opacity-100"
                            }
                        `}>
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
       </div>
    </section>
  );
};

export default TechStack;