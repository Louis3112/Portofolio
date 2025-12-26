import { CERTIFICATION_DATA } from '../constants/certificationData';
import { FaArrowRight } from "react-icons/fa";
import Button from '../components/Button';
import CertificationItem from '../components/CertificationItem';
import { GlitchSlide } from '../animate/GlitchSide';
import { Reveal } from '../animate/Reveal';
import { BrutalPop } from '../animate/BrutalPop';

const Certifications = () => {
  const featuredCerts = CERTIFICATION_DATA.slice(0, 6);

  return (
    <section id="certifications" className="overflow-hidden pb-24 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-20 flex flex-col items-end">
          <GlitchSlide direction="right">
            <h2 className="font-display font-black text-right text-4xl uppercase md:text-5xl">
              LATEST CERTIFICATIONS 
            </h2>
            <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 ml-auto"></div>
          </GlitchSlide>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {featuredCerts.map((cert) => (
              <Reveal 
                key={cert.id}  
                width="100%" 
                overflow="visible"
              >
                <CertificationItem data={cert} />
              </Reveal>
            ))}
        </div>

        {/* View All Button */}
        <div className="mt-16 flex justify-center">
          <BrutalPop>
            <Button 
              href="/all-certifications"
              variant="black"
              className="px-8 py-3 text-lg whitespace-nowrap"
              >
              <span className="flex items-center gap-3">
                VIEW ALL CERTIFICATIONS  <FaArrowRight className="ml-2"/>
              </span>
            </Button>
          </BrutalPop>

        </div>
      </div>
    </section>
  );
};

export default Certifications;