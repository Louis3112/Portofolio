import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  children: React.ReactNode;
}
const Button : React.FC<ButtonProps> = ({variant = 'primary', children, className = '', ...props}) => {
  const baseStyles ="px-6 py-2 font-bold text-lg transition-all duration-200 border-2 border-neo-black font-display uppercase tracking-wider";
  
  const variants = {
    primary: "bg-neo-red text-neo-white shadow-brutal hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover",
    outline: "bg-transparent text-neo-black shadow-brutal hover:bg-neo-black hover:text-neo-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}; 

export default Button;
