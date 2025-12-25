import { CERTIFICATION_DATA } from '../constants/certificationData';
import { FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Certifications = () => {
  const featuredCerts = CERTIFICATION_DATA.slice(0, 6);

  return (
    <section id="certifications" className="pb-24 bg-neo-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-end">
          <h2 className="font-display font-black text-right text-4xl uppercase md:text-5xl">
            LATEST CERTIFICATIONS
          </h2>
          <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2"></div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
          {featuredCerts.map((cert) => (
            <div 
              key={cert.id} 
              className="relative flex flex-col justify-between border-4 border-neo-black bg-white p-6 pt-12 transition-transform duration-300 hover:shadow-neo-red"
            >
              {/* Floating Badge */}
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 flex items-center justify-center border-neo-black bg-white border-4 shadow-md">
                <img 
                  src={cert.logo} 
                  alt={cert.issuer} 
                  className="h-14 w-14 object-contain" 
                />
              </div>

              {/* Content */}
              <div className="text-center flex-grow">
                <h3 className="font-display text-lg font-bold leading-tight min-h-[3.5rem] flex items-center justify-center">
                  {cert.title}
                </h3>
                <p className="text-sm font-bold text-gray-600">{cert.issuer}</p>

                <div className="my-4 border-t-2 border-dashed border-neo-red"></div>
                
                <div className="space-y-1 text-xs font-mono text-gray-800">
                  <p>ID: <span className="text-neo-black select-all">{cert.credentialId}</span></p>
                  <p>Issued: {cert.date}</p>
                </div>
              </div>

              {/* Button */}
              <a 
                href={cert.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-2 flex items-center justify-center gap-2 w-full border-2 border-neo-black bg-neo-black px-4 py-2 font-mono text-sm font-bold text-neo-white shadow-brutal transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none hover:bg-neo-white hover:text-neo-black hover:border-neo-black"
              >
                SHOW CREDENTIAL <FaExternalLinkAlt className="text-xs"/>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Link 
            to="/all-certifications"
            className="group relative inline-flex items-center gap-3 border-2 border-neo-black bg-neo-black px-8 py-3 font-mono text-lg font-bold text-white shadow-neo-white transition-all hover:translate-x-[2px] hover:translate-y-[2px]"
          >
            VIEW ALL CERTIFICATIONS
            <FaArrowRight className="transition-transform group-hover:translate-x-1"/>
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Certifications;