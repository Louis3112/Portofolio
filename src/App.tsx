import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experiences from './sections/Experiences';
import Certifications from './sections/Certifications'; 
import AllCertifications from './sections/AllCertifications';
import Projects from './sections/Projects';
import ContactMe from './sections/ContactMe';
import Footer from './components/Footer';

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
            <Hero/>
            <About/>
            <TechStack/>
            <Experiences/>
            <Certifications/> 
            <Projects/>
            <ContactMe/>
          </main>
        } />
        <Route path="/all-certifications" element={
            <main>
                <AllCertifications/>
            </main>
        } />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;