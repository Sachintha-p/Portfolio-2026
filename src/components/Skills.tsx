import React from 'react';
import { skillCategories } from '@/data/skills';

const Skills = () => {
    return (
        <section className="bg-[#0a0118] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Technical Skills</h2>
                    <div className="w-20 h-1.5 bg-[#7c3aed] rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category, index) => (
                        <div key={index} className="p-6 bg-[#110524] border border-white/5 rounded-2xl hover:bg-[#1a0b35] transition-all group">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="p-3 bg-[#7c3aed]/10 rounded-lg text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-all">
                                    <category.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, sIndex) => (
                                    <span key={sIndex} className="px-3 py-1.5 text-xs font-medium text-silver bg-white/5 rounded-md border border-white/10">
                    {skill}
                  </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;