import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  href?: string;          
  onClick?: () => void;    
  variant?: 'primary' | 'black' | 'outline' | 'disabled'; 
  className?: string;     
  icon?: React.ReactNode; 
  isExternal?: boolean;    
  disabled?: boolean; 
  download?: string;
  type?: "button" | "submit" | "reset"; 
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'primary',
  className = '',
  icon,
  isExternal = false,
  disabled = false,
  download,
  type = "button",
  ...props
}) => {

  const baseStyles = `
      inline-flex items-center justify-center gap-2 
      border-2 border-neo-black 
      px-6 py-2 
      font-mono font-bold text-lg uppercase tracking-wider 
      transition-all duration-200
    `;

  const variants = {
    primary: `
      bg-neo-red text-neo-white shadow-brutal 
      hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover 
      active:bg-red-800 active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    `,

    black: `
      bg-neo-black text-white shadow-brutal 
      hover:bg-white hover:text-neo-black hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover 
      active:bg-white active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    `,

    outline: `
      bg-transparent text-neo-black shadow-brutal 
      hover:bg-neo-black hover:text-neo-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-brutal-hover 
      active:bg-gray-800 active:text-white active:shadow-none active:translate-x-[4px] active:translate-y-[4px]
    `,

    disabled: `
      bg-gray-200 text-gray-500 border-gray-400 
      shadow-none cursor-not-allowed opacity-70
    `,
  };

  const variantStyles = disabled ? variants.disabled : variants[variant];
  
  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`;
  const content = (
    <>
      {icon && <span className="text-xl -mt-1">{icon}</span>}
      <span>{children}</span>
    </>
  );

  if (disabled) {
    return (
      <button disabled className={combinedClasses} type={type} {...props}>
        {content}
      </button>
    );
  }

  if (href && (isExternal || download)) {
    return (
      <a 
        href={href} 
        target={isExternal ? "_blank" : undefined}
        rel="noopener noreferrer" 
        download={download}
        className={combinedClasses}
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {content}
      </a>
    );
  }

  if (href && !isExternal) {
    return (
      <Link to={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={combinedClasses} type={type} {...props}>
      {content}
    </button>
  );
};

export default Button;