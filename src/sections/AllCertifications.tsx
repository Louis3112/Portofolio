import React, { useEffect } from 'react';
import { CERTIFICATION_DATA } from '../constants/certificationData';
import { FaExternalLinkAlt, FaArrowLeft, FaCertificate } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllCertifications = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const totalCerts = CERTIFICATION_DATA.length;

  return (
    <section className="min-h-screen bg-neo-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header */}
        <div className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
            <div>
                <Link 
                  to="/#certifications" 
                  className="flex items-center gap-2 font-mono text-sm font-bold text-gray-500 hover:text-neo-red mb-2 transition-colors cursor-pointer"
                >
                    <FaArrowLeft /> BACK TO HOME
                </Link>
                <h1 className="font-display font-black text-4xl uppercase md:text-5xl">
                    ALL CERTIFICATIONS
                </h1>
                <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2"></div>
            </div>

            <div className="flex items-center gap-3 border-2 border-neo-black bg-white px-5 py-3 shadow-brutal transform transition-transform hover:-translate-y-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neo-black text-white">
                    <FaCertificate className="text-lg" />
                </div>
                <div className="flex flex-col">
                    <span className="font-mono text-xs font-bold text-gray-500 uppercase">Total Credentials</span>
                    <span className="font-display text-3xl font-black leading-none text-neo-red">
                        {totalCerts}
                    </span>
                </div>
            </div>
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {CERTIFICATION_DATA.map((cert) => (
                <div 
                    key={cert.id}
                    className="relative flex flex-col justify-between border-4 border-neo-black bg-white p-6 pt-12 transition-transform duration-300 hover:shadow-neo-red"
                >
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 flex items-center justify-center border-neo-black bg-white border-4 shadow-md">
                        <img 
                            src={cert.logo} 
                            alt={cert.issuer} 
                            className="h-14 w-14 object-contain" 
                        />
                    </div>

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

                    <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 w-full
                                   border-2 border-neo-black bg-neo-black
                                   px-4 py-2 font-mono text-sm font-bold text-neo-white 
                                   shadow-brutal transition-all duration-200 hover:translate-x-[2px] 
                                   hover:translate-y-[2px] hover:shadow-none hover:bg-neo-white hover:text-neo-black 
                                   hover:border-neo-black"
                    >
                        SHOW CREDENTIAL <FaExternalLinkAlt className="text-xs"/>
                    </a>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default AllCertifications; 