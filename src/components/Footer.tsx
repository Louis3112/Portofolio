const Footer = () => {
  return (
    <footer className={`
        w-full border-t-2 border-neo-black bg-neo-white py-6
    `}>
      <div className="mx-auto max-w-7xl px-4 text-center">
        <p className={`
            font-mono text-xs font-bold uppercase text-neo-black 
            md:text-sm tracking-widest
        `}>
          &copy; 2026 CORNELIUS L.N | ALL RIGHTS RESERVED
        </p>

      </div>
    </footer>
  );
};

export default Footer;