import React from 'react';
import { User, Code, GraduationCap } from 'lucide-react';

const About = () => {
    return (
        <section className="bg-[#0a0118] py-20 px-6 border-y border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic text-center md:text-left">About Me</h2>
                    <div className="w-20 h-1.5 bg-[#7c3aed] rounded-full mx-auto md:mx-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-slate-300">
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            I am an <span className="text-white font-medium">Information Technology Undergraduate</span> at <span className="text-white">SLIIT</span>, specialized in developing modern digital solutions.
                            My journey in tech is driven by a strong passion for <span className="text-[#7c3aed] font-semibold">Web & Mobile Application Development</span>.
                        </p>
                        <p>
                            I have hands-on experience in building functional applications such as <span className="text-white">PETSYNC+</span>, a pet care management platform, and <span className="text-white">Weather Tracking</span> tools.
                            Beyond coding, I have a keen interest in <span className="text-[#7c3aed]">Data Analytics</span> and <span className="text-[#7c3aed]">Project Management</span>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl">
                            <GraduationCap className="text-[#7c3aed] mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Education</h4>
                            <p className="text-sm">IT Undergraduate at SLIIT</p>
                        </div>
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl">
                            <Code className="text-[#7c3aed] mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Stack</h4>
                            <p className="text-sm">React, Next.js, Android Studio</p>
                        </div>
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl">
                            <User className="text-[#7c3aed] mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Interest</h4>
                            <p className="text-sm">AI, Web Scraping & Data Analytics</p>
                        </div>
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl">
                            <div className="text-[#7c3aed] font-bold text-2xl mb-2">2026</div>
                            <h4 className="text-white font-bold mb-1">Availability</h4>
                            <p className="text-sm">Open for Internships</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;