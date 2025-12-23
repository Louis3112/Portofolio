import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';

function App() {
  return (
    <div className="min-h-screen bg-neo-white text-neo-black selection:bg-neo-red selection:text-white">
      <Navbar />
      
      {/* Main Content Sections */}
      <main>
        <Hero />
        <About/>
        
        {/* Placeholder untuk bagian selanjutnya (nanti kita isi) */}
        {/* <Experience /> */}
        {/* <Projects /> */}
        {/* <Contact /> */}
      </main>
      
    </div>
  );
}

export default App;