import React from 'react';
import ProjectCard from './ProjectCard';
import { projectsData } from '@/data/projects';

const ProjectGrid = () => {
    return (
        // ID එක අනිවාර්යයෙන්ම මෙතන තියෙන්න ඕනේ
        <section className="bg-[#0a0118] py-20 px-6" id="projects">
            <div className="max-w-6xl mx-auto">

                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic">Featured Projects</h2>
                    <div className="w-20 h-1.5 bg-[#7c3aed] rounded-full"></div>
                    <p className="mt-4 text-slate-400">
                        A showcase of my work in Web, Mobile, and AI integration.
                    </p>
                </div>

                {/* Projects Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectGrid;