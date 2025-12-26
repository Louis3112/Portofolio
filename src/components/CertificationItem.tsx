import React from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";
import Button from './Button';

interface CertificationItemProps {
  data: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    credentialId: string;
    link: string;
    logo: string;
  };
}

const CertificationItem: React.FC<CertificationItemProps> = ({ data }) => {
  return (
    <div className="relative flex flex-col justify-between border-4 border-neo-black bg-white p-6 pt-12 transition-transform duration-300 hover:shadow-neo-red">
      
      {/* Floating Badge */}
      <div className="absolute -top-8 left-1/2 -translate-x-1/2 h-16 w-16 flex items-center justify-center border-neo-black bg-white border-4 shadow-md">
        <img 
          src={data.logo} 
          alt={data.issuer} 
          className="h-14 w-14 object-contain" 
        />
      </div>

      {/* Content */}
      <div className="text-center flex-grow">
        <h3 className="font-display text-lg font-bold leading-tight min-h-[3.5rem] flex items-center justify-center">
          {data.title}
        </h3>
        <p className="text-sm font-bold text-gray-600">{data.issuer}</p>

        <div className="my-4 border-t-2 border-dashed border-neo-red"></div>
        
        <div className="space-y-1 text-xs font-mono text-gray-800">
          <p>ID: <span className="text-neo-black select-all">{data.credentialId}</span></p>
          <p>Issued: {data.date}</p>
        </div>
      </div>

      {/* Button */}
      <Button 
        href={data.link}
        isExternal
        variant="black" 
        className="mt-6 w-full"
        icon={<FaExternalLinkAlt className="text-xs"/>}
      >
        SHOW CREDENTIAL
      </Button>
    </div>
  );
};

export default CertificationItem;