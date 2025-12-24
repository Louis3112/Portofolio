import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import TechStack from './sections/TechStack';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications'; 
import AllCertifications from './sections/Certifications';

function App() {
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
            <Certifications /> 
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