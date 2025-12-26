import React from 'react';
import { BsArrowRight } from "react-icons/bs";

interface ContactRowProps {
  data: {
    id: string;
    platform: string;
    username: string;
    link: string;
    action: string;
    icon: React.ReactNode;
  };
}

const ContactRow: React.FC<ContactRowProps> = ({ data }) => {
  return (
    <a 
      href={data.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block w-full border-b-4 border-neo-black bg-white transition-all duration-300 hover:bg-neo-black hover:pl-4"
    >
      <div className="flex items-center justify-between px-4 py-6 md:px-8">
        
        {/* Icon & Platform */}
        <div className="flex items-center gap-6">
            <div className="text-3xl text-neo-black transition-colors group-hover:text-neo-red md:text-4xl">
                {data.icon}
            </div>
            
            <div className="flex flex-col">
                <span className="font-display text-2xl font-black uppercase text-neo-black transition-colors group-hover:text-white md:text-4xl">
                    {data.platform}
                </span>
                <span className="font-mono text-xs font-bold text-gray-500 transition-colors group-hover:text-gray-400 md:text-sm">
                    {data.username}
                </span>
            </div>
        </div>

        {/* Action & Arrow */}
        <div className="hidden items-center gap-4 md:flex">
             <span className="font-mono text-sm font-bold uppercase text-neo-black opacity-0 transition-all duration-300 group-hover:text-white group-hover:opacity-100">
                {data.action}
            </span>
            <div className="flex h-12 w-12 items-center justify-center border-2 border-neo-black bg-neo-white text-neo-black transition-transform duration-300 group-hover:-rotate-45 group-hover:bg-neo-red group-hover:text-white group-hover:border-white">
                <BsArrowRight className="text-xl" />
            </div>
        </div>

        <div className="md:hidden text-neo-black group-hover:text-white">
             <BsArrowRight className="text-2xl" />
        </div>

      </div>
    </a>
  );
};

export default ContactRow;