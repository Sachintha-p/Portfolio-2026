"use client";

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-[#0a0118] text-white px-6 pt-24 md:pt-0">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

                <div className="relative w-64 h-64 md:w-96 md:h-96 flex-shrink-0">
                    <div className="absolute inset-0 bg-[#7c3aed] rounded-full blur-3xl opacity-20 animate-pulse"></div>
                    <img
                        src="/profile.jpg"
                        alt="Sachintha Praneeth"
                        className="relative w-full h-full rounded-full object-cover border-4 border-[#7c3aed]/30 shadow-2xl"
                    />
                </div>

                <div className="text-center md:text-left">
                    <div className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#7c3aed] bg-[#7c3aed]/10 border border-[#7c3aed]/30 rounded-full">
                        AVAILABLE FOR INTERNSHIPS 2026
                    </div>

                    <h1 className="mb-6 text-5xl font-extrabold md:text-7xl lg:text-8xl text-white leading-tight">
                        Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7c3aed] to-purple-400">Sachintha</span>
                    </h1>

                    <p className="max-w-2xl mx-auto md:mx-0 mb-8 text-lg md:text-xl text-slate-300 leading-relaxed">
                        <span className="text-white font-medium">IT Undergraduate</span> at <span className="text-white">SLIIT</span>.
                        Specializing in <span className="text-white font-semibold">Web & Mobile Development</span>
                        with a passion for creating impactful solutions like <span className="text-[#7c3aed]">PETSYNC+</span>.
                    </p>

                    <div className="flex gap-6 justify-center md:justify-start mb-10 text-slate-400">
                        <a href="#" className="hover:text-[#7c3aed] transition-all hover:scale-110"><Github size={30} /></a>
                        <a href="#" className="hover:text-[#7c3aed] transition-all hover:scale-110"><Linkedin size={30} /></a>
                        <a href="#" className="hover:text-[#7c3aed] transition-all hover:scale-110"><Mail size={30} /></a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <button
                            onClick={scrollToProjects}
                            className="px-10 py-4 font-bold text-white bg-[#7c3aed] rounded-full hover:bg-[#6d28d9] transition-all shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95"
                        >
                            Explore My Projects
                        </button>
                        <a
                            href="/Sachintha_Praneeth_CV.pdf"
                            download="Sachintha_Praneeth_CV.pdf"
                            className="px-10 py-4 font-bold text-slate-300 border border-slate-700 rounded-full hover:bg-white/5 hover:text-white transition-all hover:scale-105 active:scale-95 text-center"
                        >
                            Download CV
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;