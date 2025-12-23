import { TypeAnimation } from 'react-type-animation';

const underlineScribble = "/src/assets/hero/underline-scribble.webp";
const heroPhoto = "/src/assets/hero/hero-photo.webp"; 
const barcode = "/src/assets/hero/barcode.webp";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen py-24 overflow-hidden bg-neo-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center relative">

          {/* Landing Section */}
          <div className="col-span-1 lg:col-span-12 lg:row-start-1 relative z-20">
            <span className="font-mono text-xl md:text-2xl pl-1 block leading-none -mb-1 md:-mb-2 text-neo-black">It&apos;s</span>

            {/* Header */}   
            <h1 className="font-display font-black text-4xl md:text-7xl leading-none tracking-tighter flex flex-wrap items-end gap-x-3 md:gap-x-5 -mt-1 md:-mt-3">
              <div className="relative inline-block">
                <span className="relative z-10">CORNELIUS</span>
                <img 
                  src={underlineScribble} 
                  alt="underline-scribble" 
                  className="hidden sm:block absolute -bottom-2 md:-bottom-4 left-0 w-full lg:w-[110%] h-auto object-contain opacity-90 pointer-events-none z-0" 
                />
              </div>
              <div className="relative inline-block">
                 <span className="text-neo-red relative z-10">LOUIS</span>
              </div>
              <span className="text-neo-black relative mt-2 lg:mt-0 z-10">NATHAN</span>
            </h1>
          </div>

          <div className="lg:col-span-4 lg:col-start-5 relative z-10 mt-4 md:-mt-4">
              <div className="relative w-64 md:w-80 max-w-sm mx-auto">
                {/* Pict */} 
                <div className="absolute top-10 -right-10 w-full h-full bg-neo-red/30 border-2-z-10"></div>
                  <div className="relative overflow-hidden">
                      <img 
                          src={heroPhoto} 
                          alt="Cornelius Louis" 
                          className="w-full h-auto grayscale object-cover"
                      />
                  </div>

                  {/* Text Animation */} 
                  <div className="absolute -bottom-9 -left-4 px-4 py-3 w-full font-mono text-xs md:text-sm flex items-start gap-2 bg-neo-white border-2 border-neo-black shadow-brutal z-30 min-h-0">
                    <span className="font-bold shrink-0 mt-[2px] text-neo-black">let info =</span>
                    
                    <div className="break-words w-full">
                      <span className="inline after:content-[';'] after:text-neo-black">
                        <TypeAnimation
                          sequence={[
                          '"ex ASAH Cohort React & Back-End 2025"', 
                          3000,          
                          '"ex Study First Remote Intern"',  
                          3000,        
                          '"ex Google Student Ambassador 2025"',  
                          3000,      
                          '"ex Practicum Co-Assistant 2024-2025"',  
                          3000,            
                          '"Web Developer"',    
                          3000,
                          '"UI/UX Enthusiast"',   
                          3000,
                          '"Informatics Student"',   
                          3000,
                          '"Surabaya State University"',   
                          3000,
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
            </div>
          </div>
          
          {/* Text Animation */} 
          <div className="relative mt-16 lg:mt-0 md:absolute md:bottom-18 md:left-36 z-30 flex justify-center md:block">
            <div className="border-2 border-neo-black shadow-brutal inline-block bg-neo-white transform transition-transform hover:-translate-y-1 hover:shadow-brutal-lg cursor-help">
                <div className="bg-neo-gray px-6 md:px-12 py-1 font-mono text-xs font-bold border-b-2 border-neo-black flex justify-center items-center gap-2">
                    FIG 01. // INFO
                </div>
                <div className="bg-neo-red/30 px-4 py-2 md:py-4"> 
                    <p className="font-display font-bold text-sm lg:text-lg leading-tight text-neo-black">
                        COLOR HEX:<br/>
                        <span className="underline decoration-2 decoration-neo-black">#D30000</span>
                    </p>
                </div>
            </div>
        </div>

        {/* Text Animation */} 
        <div className="w-full mt-8 md:mt-36 lg:mt-24 flex justify-end">
          <img 
              src={barcode} 
              alt="Barcode Divider" 
              className="w-1/2 md:w-2/5 h-12 md:h-16 object-cover opacity-80 mix-blend-multiply" 
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;