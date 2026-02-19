import { GlitchSlide } from '../animate/GlitchSide';
import { BrutalPop } from '../animate/BrutalPop';
const polaroidPhoto = "/images/about/polaroid-photo.webp"; 
const unesaLogo = "/images/about/logo-unesa.webp";        
const signature = "/images/about/signature.webp";       

const AboutMe = () => {
  return (
    <section id="about" className="h-auto overflow-hidden pb-24 scroll-mt-28 ">
      <div className="mx-auto max-w-7xl px-4">   
        
        {/* Header */}
        <div className="relative mb-8 md:mb-12">
          <GlitchSlide direction='left'>
            <h2 className={`
              relative z-10 w-full 
              font-display text-4xl font-black uppercase leading-tight 
              md:w-3/4 md:text-5xl
            `}>
              LET’S GET TO KNOW ME BETTER
            </h2>
            <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 mr-auto"></div>
          </GlitchSlide>

        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">    
          
          {/* Polaroid */}
          <div className="flex justify-center lg:col-span-4 lg:justify-start">
            <BrutalPop>
              <button 
                type="button"
                className={`
                  relative w-full max-w-sm -rotate-2 transform cursor-pointer 
                  border-2 border-neo-black bg-white p-4 pb-16 shadow-brutal 
                  transition-transform duration-300 
                  hover:rotate-0 focus:rotate-0 focus:outline-none active:rotate-0
                `}
                >
                  {/* UNESA Logo */}
                  <img 
                    src={unesaLogo} 
                    alt="UNESA Logo" 
                    className={`
                      absolute -right-6 -top-6 z-20 h-auto w-24 
                      drop-shadow-md transition-transform hover:scale-110
                    `}
                  />

                  {/* Photo */}
                  <div className="overflow-hidden border-2 border-neo-black transition-all duration-500">
                    <img 
                      src={polaroidPhoto} 
                      alt="Formal Profile" 
                      className="h-auto w-full object-cover"
                    />
                  </div>

                  {/* Signature */}
                  <div className="absolute bottom-2 left-0 flex w-full justify-center">
                    <img 
                      src={signature} 
                      alt="Signature" 
                      className="h-20 w-auto transform opacity-90 transition-transform hover:scale-105"
                      />
                  </div>
              </button>
            </BrutalPop>
          </div>
          
          {/* Paragraph */}
          <div className={`
            space-y-6 font-sans text-lg text-justify indent-10 leading-relaxed text-neo-black 
            lg:col-span-8 md:text-xl
          `}>
            <GlitchSlide direction='left'>
              <p>
                I am an IT undergraduate from Surabaya State University (UNESA) with a <span className="font-bold">strong curiosity </span> 
                and specializing in <span className="font-bold text-neo-red">full-stack development</span> with proven skills in 
                <span className="font-bold text-neo-red">React.js, Node.js, PHP (Laravel), andREST API integration</span>

                <span className="font-bold"> Experienced</span> in building responsive and <span className="font-bold">user-friendly web applications </span> 
                through academic projects, <span className="font-bold">freelance work</span>, and prior <span className="font-bold">internships</span>.
              </p>
            </GlitchSlide>

            <GlitchSlide direction='right'>
                <p>
                Moreover, my comprehensive understanding of <span className="font-bold text-neo-red">both front-end and back-end architecture</span> allows me to be an effective 
                <span className="font-bold"> collaborator</span> on a team. I am a dedicated and <span className="font-bold">quick learner</span>, 
                eager to <span className="font-bold">contribute</span> to a fast-paced team, apply my technical knowledge, 
                and deepen my skills in a <span className="font-bold">professional environment</span>.
              </p>
            </GlitchSlide>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMe;