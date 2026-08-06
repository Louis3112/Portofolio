import { TypeAnimation } from 'react-type-animation';
import { FaMousePointer } from 'react-icons/fa';
import { Reveal } from "../animate/Reveal";
import { BrutalPop } from '../animate/BrutalPop';

const underlineScribble = "/images/hero/underline-scribble.webp";
const heroPhoto = "/images/hero/hero-photo.webp"; 
const barcode = "/images/hero/barcode.webp";

const Hero = () => {
  return (
    <section id="hero" className="relative h-auto overflow-hidden py-24 ">
      <div className="relative max-w-7xl mx-auto px-4">
        
        <div className="relative grid grid-cols-1 items-center lg:grid-cols-12">

          {/* Header */}
          <div className="relative z-20 col-span-1 lg:col-span-12 lg:row-start-1">
            
            <Reveal width="100%" overflow="visible">
              <span className={`
                block -mb-1 pl-1 
                font-mono text-xl leading-none text-neo-black 
                md:-mb-2 md:text-2xl
              `}>
                It&apos;s
              </span>
            </Reveal>


            {/* Header */}
            <h1 className={`
              -mt-1 flex flex-wrap items-end gap-x-3 
              font-display text-4xl font-black leading-none tracking-tighter 
              md:-mt-3 md:gap-x-5 md:text-7xl
            `}>
              <Reveal delay={0.1}>
                <div className="relative inline-block">
                  <span className="relative z-10">CORNELIUS</span>
                  <img 
                    src={underlineScribble} 
                    alt="underline-scribble" 
                    className={`
                      absolute -bottom-2 left-0 z-0 hidden h-auto w-full 
                      object-contain opacity-90 pointer-events-none 
                      sm:block md:-bottom-4 lg:w-[110%]
                    `} 
                  />
                </div>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="relative inline-block">
                  <span className="relative z-10 text-neo-red">LOUIS</span>
                </div>
              </Reveal>

              <Reveal delay={0.3}>
                <span className="relative z-10 mt-2 text-neo-black lg:mt-0">
                  NATHAN
                </span>
              </Reveal>
            </h1>
          </div>

          {/* Photo */}
          <div className="relative z-10 mt-4 lg:col-span-4 lg:col-start-5 md:-mt-4">
              <Reveal delay={0.3} width="100%" overflow="visible">
                <div className="relative mx-auto w-64 max-w-sm md:w-80">
                <div className="absolute -right-10 top-10 -z-10 h-full w-full border-2 bg-neo-red/30"></div>

                  {/* Image */}
                  <div className="relative overflow-hidden">
                      <img 
                          src={heroPhoto} 
                          alt="Cornelius Louis" 
                          className="h-auto w-full object-cover grayscale"
                      />
                  </div>

                  {/* Animation Info */} 
                  <div className={`
                      absolute -bottom-9 -left-4 z-30 flex min-h-0 w-full items-start gap-2 
                      border-2 border-neo-black bg-white px-4 py-3 shadow-brutal 
                      font-mono text-xs md:text-sm
                  `}>
                    <span className="mt-[2px] shrink-0 font-bold text-neo-black">
                        let info =
                    </span>
                    
                    <div className="w-full break-words">
                      <span className="inline after:text-neo-black after:content-[';']">
                        <TypeAnimation
                          sequence={[
                            '"ex HCIS Developer Back-end I  ntern Citilink"', 5000,
                            '"Alumni ASAH Cohort React & Back-End 2025"', 3000,          
                            '"ex Study First Remote Intern"', 3000,        
                            '"Alumni Google Student Ambassador 2025"', 3000,      
                            '"ex Practicum Co-Assistant 2024-2025"', 3000,            
                            '"Web Developer"', 3000,
                            '"Informatics Student"', 3000,
                            '"Surabaya State University"', 3000,
                          ]}
                          wrapper="span"
                          speed={10}
                          style={{ 
                              display: 'inline',
                              color: '#D30000',
                              wordBreak: 'break-word'
                          }} 
                          repeat={Infinity}
                      />
                      </span>
                    </div>
                </div>
              </div>
              </Reveal>
            </div>
          </div>
          

          {/* Floating Button */}
          <div className={`
            relative z-30 mt-16 flex flex-col gap-2 items-start
            md:absolute md:bottom-12 md:left-24 lg:left-36 lg:bottom-16 md:block
          `}>
              <BrutalPop delay={0.8}>
                  <div className={`
                      mb-4 inline-block w-auto transform border-2 border-neo-black bg-neo-white shadow-brutal 
                      transition-all duration-200 
                      hover:-translate-y-1 hover:shadow-brutal-lg
                  `}>
                      {/* Header */}
                      <div className={`
                          flex justify-center gap-2 border-b-2 border-neo-black bg-neo-gray px-6 py-1 
                          text-left font-mono text-xs font-bold md:px-8
                      `}>
                          FIG 01. // INFO
                      </div>
                      
                      {/* Content */}
                      <div className="bg-neo-red/30 px-6 py-3"> 
                          <p className="font-display text-sm font-bold leading-tight text-neo-black lg:text-lg">
                              COLOR HEX:<br/>
                              <span className="underline decoration-2 decoration-neo-black">#D30000</span>
                          </p>
                      </div>
                  </div> 
              </BrutalPop>

              {/* Interactive Hint */}
              <BrutalPop delay={1.0}>
                  <div className={`
                      group relative flex flex-row items-center gap-3 
                      border-2 border-neo-black bg-neo-white px-4 py-2 
                      shadow-brutal transition-all duration-200
                      hover:-translate-y-1 hover:shadow-brutal-lg cursor-help
                  `}>
                      <div className="animate-bounce">
                          <FaMousePointer className="text-neo-black text-lg" />
                      </div>

                      <div className="flex flex-col">
                          <span className="font-mono text-[10px] font-bold uppercase leading-none text-neo-black/70">
                              SYSTEM_HINT:
                          </span>
                          <span className="font-mono text-xs font-bold uppercase text-neo-black md:text-sm">
                              Interactive Elements
                          </span>
                      </div>

                      <div className={`
                          absolute top-full left-3/4 -translate-x-1/2 mt-3 w-max
                          pointer-events-none opacity-0 transition-all duration-300 ease-out
                          group-hover:opacity-100 group-hover:translate-y-0
                          -translate-y-2 z-50
                      `}>
                          {/* Hover Box */}
                          <div className="relative border-2 border-neo-black bg-white px-3 py-2 shadow-brutal">
                              
                              <div className="absolute -top-2 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 border-t-2 border-l-2 border-neo-black bg-white"></div>
                              
                              <p className="font-mono text-xs font-bold text-neo-black whitespace-nowrap">
                                  Try to hover or click some elements!
                              </p>
                          </div>
                      </div>

                  </div>
              </BrutalPop>
          </div>

        {/* Barcode */} 
        <div className="mt-8 flex w-full justify-end md:mt-36 lg:mt-24">
            <div className="group flex w-1/2 flex-col items-center cursor-pointer md:w-2/5">
              <img 
                src={barcode} 
                alt="Barcode Divider" 
                className={`
                    h-12 w-full object-cover opacity-80 mix-blend-multiply 
                    transition-opacity duration-300 group-hover:opacity-100 md:h-16
                `} 
              />
              <span className={`
                  mt-1 text-center font-sans text-xs font-bold uppercase tracking-[0.3em] text-neo-black 
                  opacity-0 transition-opacity duration-300 group-hover:opacity-100 
                  md:text-sm md:tracking-[0.5em]
              `}>
                Cornelius Louis Nathan
              </span>
            </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;