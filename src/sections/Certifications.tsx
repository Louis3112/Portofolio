import React, { useEffect } from 'react';
import { CERTIFICATION_DATA } from '../constants/certificationData';
import { FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa";
import { Link } from 'react-router-dom';

const AllCertifications = () => {
  // Agar saat pindah halaman, scroll otomatis naik ke paling atas
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-neo-white py-32">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header & Back Button */}
        <div className="mb-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
                <Link to="/" className="flex items-center gap-2 font-mono text-sm font-bold text-gray-500 hover:text-neo-red mb-2 transition-colors">
                    <FaArrowLeft /> BACK TO HOME
                </Link>
                <h1 className="font-display font-black text-4xl uppercase md:text-5xl">
                    ALL CERTIFICATIONS
                </h1>
                <div className="w-24 h-3 bg-neo-red mt-2"></div>
            </div>
        </div>

        {/* GRID SEMUA KARTU (Tanpa .slice) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-12">
            {CERTIFICATION_DATA.map((cert) => (
                <div 
                    key={cert.id} 
                    className="relative flex flex-col justify-between border-4 border-neo-red bg-white p-6 pt-12 shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(211,0,0,0.2)]"
                >
                    {/* Floating Logo Badge */}
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 flex items-center justify-center bg-neo-black border-4 border-white shadow-md">
                        <img 
                            src={cert.logo} 
                            alt={cert.issuer} 
                            className="h-10 w-10 object-contain" 
                        />
                    </div>

                    {/* Content */}
                    <div className="text-center mt-2 flex-grow">
                         <h3 className="font-display text-lg font-bold leading-tight min-h-[3.5rem] flex items-center justify-center">
                            {cert.title}
                         </h3>
                         <p className="text-sm font-bold text-gray-500 mt-2">{cert.issuer}</p>

                         <div className="my-4 border-t-2 border-dashed border-gray-200"></div>
                         
                         <div className="space-y-1 text-xs font-mono text-gray-400">
                             <p>ID: <span className="text-neo-black select-all">{cert.credentialId}</span></p>
                             <p>Issued: {cert.date}</p>
                         </div>
                    </div>

                    {/* Button */}
                    <a 
                        href={cert.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="mt-6 flex items-center justify-center gap-2 w-full bg-neo-red py-3 font-mono text-sm font-bold text-white transition-all hover:bg-red-700 hover:gap-3"
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