const polaroidPhoto = "/src/assets/about/polaroid-photo.webp"; 
const unesaLogo = "/src/assets/about/logo-unesa.webp";        
const signature = "/src/assets/about/signature.webp";       

const About = () => {
  return (
    <section id="about" className="min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        
        <div className="mb-12 md:mb-16 relative">
          {/* Title */}
          <h2 className="font-display font-black text-4xl md:text-5xl uppercase leading-tight relative z-10 w-full md:w-3/4">
            LET’S GET TO KNOW ME BETTER
          </h2>
          <div className="absolute bottom-0 left-0 w-32 md:w-64 h-1 md:h-3 bg-neo-red -z-0 transform translate-y-2"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Polaroid */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
                <div className="relative bg-white p-4 pb-16 border-2 border-neo-black shadow-brutal transform -rotate-2 hover:rotate-0 transition-transform duration-300 w-full max-w-sm">
                    <img 
                        src={unesaLogo} 
                        alt="UNESA Logo" 
                        className="absolute -top-6 -right-6 w-24 h-auto z-20 drop-shadow-md hover:scale-110 transition-transform"
                    />
                    <div className="border-2 border-neo-black overflow-hidden transition-all duration-500">
                        <img 
                            src={polaroidPhoto} 
                            alt="Formal Profile" 
                            className="w-full h-auto object-cover"
                        />
                    </div>
                    <div className="absolute bottom-2 left-0 w-full flex justify-center ">
                        <img 
                            src={signature} 
                            alt="Signature" 
                            className="h-20 w-auto opacity-90 transform transition-transform hover:scale-105"
                        />
                    </div>
                </div>
            </div>

            <div className="lg:col-span-8 font-sans text-lg md:text-xl leading-relaxed text-neo-black space-y-6">
                <p>
                    I am an undergraduate IT from Surabaya State University (UNESA) with a <span className="font-bold">strong curiosity </span> 
                    and specializing in <span className="font-bold text-neo-red">front-end development</span> with proven skills in 
                    <span className="font-bold"> HTML, CSS, <span className="text-neo-red">JavaScript</span> (frameworks), 
                    <span className="text-neo-red">TypeScript</span></span>, and <span className="font-bold text-neo-red">REST API integration</span>.
                </p>
                <p>
                    <span className="font-bold">Experienced</span> in building responsive and <span className="font-bold">user-friendly web applications </span> 
                    through academic projects, <span className="font-bold">freelance work</span>, and prior <span className="font-bold">internships</span>.
                </p>
                <p>
                    Moreover, my foundational knowledge of <span className="font-bold text-neo-red">back-end</span> allows me to be an effective 
                    <span className="font-bold"> collaborator</span> on a team. I am a dedicated and <span className="font-bold">quick learner</span>, 
                    eager to <span className="font-bold">contribute</span> to a fast-paced team, apply my technical knowledge, 
                    and deepen my skills in a <span className="font-bold">professional environment</span>.
                </p>

            </div>

        </div>
      </div>
    </section>
  )
}

export default About;