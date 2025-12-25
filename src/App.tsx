import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Certification from './sections/Certification'; 
import AllCertifications from './sections/AllCertifications';
import Projects from './sections/Project';

function App() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [hash]); 

  return (
    <div className="min-h-screen bg-neo-white text-neo-black selection:bg-neo-red selection:text-white">
      <Navbar />
      <Routes>=
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <TechStack />
            <Experience />
            <Certification /> 
            <Projects />
          </main>
        } />
        <Route path="/all-certifications" element={
            <main>
                <AllCertifications />
            </main>
        } />
      </Routes>

    </div>
  );
}

export default App;