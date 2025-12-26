import { useEffect } from 'react';
import { CERTIFICATION_DATA } from '../constants/certificationData';
import { FaArrowLeft, FaCertificate } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CertificationItem from '../components/CertificationItem';

const AllCertifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const totalCerts = CERTIFICATION_DATA.length;

  return (
    <section className="min-h-screen overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            
            {/* Title */}
            <div>
                <Link 
                  to="/#certifications" 
                  className={`
                    group flex items-center gap-2 
                    font-mono text-sm font-bold text-gray-500 
                    hover:text-neo-red mb-2 transition-colors cursor-pointer
                  `}
                >
                    <FaArrowLeft className="transition-transform group-hover:-translate-x-1" /> 
                    BACK TO HOME
                </Link>
                
                <h1 className="font-display font-black text-4xl uppercase md:text-5xl">
                    ALL CERTIFICATIONS
                </h1>
                <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2"></div>
            </div>

            {/* Total Count */}
            <div className={`
                flex items-center gap-3 
                border-2 border-neo-black bg-white px-5 py-3 shadow-brutal 
                transform transition-transform hover:-translate-y-1
            `}>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neo-black text-white">
                    <FaCertificate className="text-lg" />
                </div>
                
                <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-gray-500 uppercase">
                        Total Credentials
                    </span>
                    <span className="font-display text-3xl font-black leading-none text-neo-red">
                        {totalCerts}
                    </span>
                </div>
            </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {CERTIFICATION_DATA.map((cert) => (
                <CertificationItem 
                    key={cert.id} 
                    data={cert} 
                />
            ))}
        </div>

      </div>
    </section>
  );
};

export default AllCertifications;