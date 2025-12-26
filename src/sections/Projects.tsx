import { PROJECT_DATA } from '../constants/projectData';
import ProjectItem from '../components/ProjectItem';
import { GlitchSlide } from '../animate/GlitchSide';
import { Reveal } from '../animate/Reveal';

const Projects = () => {
  return (
    <section id="projects" className="overflow-hidden pb-24 bg-neo-white scroll-mt-28">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Header Section */}
        <div className="mb-12">
          <GlitchSlide direction="left">
            <h2 className="font-display font-black text-left text-5xl uppercase md:text-6xl">
                PROJECTS
            </h2>
            <div className="w-2/5 md:w-1/4 h-3 bg-neo-red mt-2 mr-auto"></div>
          </GlitchSlide>

        </div>

        {/* Project List */}
        <div className="flex flex-col gap-20">
            {PROJECT_DATA.map((project) => (
              <Reveal 
                key={project.id}  
                width="100%" 
                overflow="visible"
              >
               <ProjectItem 
                    key={project.id} 
                    data={project} 
                />
              </Reveal>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;