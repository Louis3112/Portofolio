import { CONTACT_DATA } from '../constants/contactData';
import ContactRow from '../components/ContactItem'; 
import { GlitchSlide } from '../animate/GlitchSide';
import { Reveal } from '../animate/Reveal';
const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden pb-24 pt-12 scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <GlitchSlide direction="left">
              <h2 className="font-display text-5xl font-black uppercase text-neo-black md:text-7xl">
                Ready to <br></br>
                <span className="text-neo-red"> Collaborate?</span>
              </h2>
              <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 mr-auto"></div>
            </GlitchSlide>
          </div>
            
          <div className="text-left md:text-right">
            <GlitchSlide direction="right">
              <p className="font-mono text-sm font-bold text-gray-600">
                BASED IN SURABAYA, ID<br/>
              </p>
            </GlitchSlide>
          </div>
        </div>

        {/* Contact List */}
        <div className="">
          <Reveal 
            width="100%" 
            overflow="visible"
          >
            {CONTACT_DATA.map((contact) => (
              <ContactRow 
                key={contact.id} 
                data={contact}
              />
            ))}
          </Reveal>

        </div>
        
      </div>
    </section>
  );
};

export default Contact;