import React from 'react';
import { ExternalLink, Folder } from 'lucide-react';
import { Project } from '@/data/projects';

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className="group p-6 bg-[#110524] border border-white/5 rounded-2xl hover:border-[#7c3aed]/50 transition-all duration-300 shadow-xl">
            <div className="flex justify-between items-start mb-4">
                <Folder className="text-[#7c3aed]" size={32} />
                <a href={project.link} className="text-slate-400 hover:text-white transition-colors">
                    <ExternalLink size={20} />
                </a>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#7c3aed] transition-colors">
                {project.title}
            </h3>

            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                {project.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, index) => (
                    <span key={index} className="px-3 py-1 text-[10px] font-mono text-purple-300 bg-purple-900/30 rounded-full border border-purple-500/20">
            {tech}
          </span>
                ))}
            </div>
        </div>
    );
};

export default ProjectCard;