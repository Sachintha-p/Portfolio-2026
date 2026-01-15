import React from 'react';
import { User, Code, GraduationCap, Lightbulb } from 'lucide-react';

const About = () => {
    return (
        <section className="bg-[#0a0118] py-20 px-6 border-y border-white/5">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic text-center md:text-left">About Me</h2>
                    <div className="w-20 h-1.5 bg-[#7c3aed] rounded-full mx-auto md:mx-0"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start text-slate-300">
                    {/* Detailed Bio Section */}
                    <div className="space-y-6 text-lg leading-relaxed">
                        <p>
                            I am a dedicated <span className="text-white font-medium">BSc (Hons) IT Undergraduate</span> at <span className="text-white font-medium">SLIIT</span>, deeply passionate about building scalable and user-centric digital solutions.
                            My technical expertise is centered around <span className="text-[#7c3aed] font-semibold">Full-stack Web Development</span> and <span className="text-[#7c3aed] font-semibold">Mobile App Development</span> using modern frameworks.
                        </p>
                        <p>
                            Throughout my academic journey, I have successfully delivered projects like <span className="text-white">MeetMind</span> (an AI-driven platform) and a <span className="text-white">Habit Tracker App</span>.
                            I also possess a strong foundation in <span className="text-white">Data Analytics</span> using <span className="text-[#7c3aed]">Power BI</span> and <span className="text-[#7c3aed]">Python</span> for advanced data visualization and web scraping.
                        </p>
                        <p>
                            I thrive in collaborative environments and I am constantly exploring new technologies to solve real-world problems. Currently, I am seeking an <span className="text-white font-semibold">Internship for 2026</span> where I can apply my skills and contribute to impactful projects.
                        </p>
                    </div>

                    {/* Key Highlights Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl hover:border-[#7c3aed]/30 transition-all">
                            <GraduationCap className="text-[#7c3aed] mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Education</h4>
                            <p className="text-sm">IT Undergraduate at SLIIT</p>
                        </div>
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl hover:border-[#7c3aed]/30 transition-all">
                            <Code className="text-[#7c3aed] mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Top Skills</h4>
                            <p className="text-sm">React, Next.js, Power BI</p>
                        </div>
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl hover:border-[#7c3aed]/30 transition-all">
                            <Lightbulb className="text-[#7c3aed] mb-3" size={28} />
                            <h4 className="text-white font-bold mb-1">Interest</h4>
                            <p className="text-sm">AI, Python & Project Management</p>
                        </div>
                        <div className="p-5 bg-[#110524] border border-white/5 rounded-2xl hover:border-[#7c3aed]/30 transition-all text-center flex flex-col items-center justify-center">
                            <div className="text-[#7c3aed] font-black text-3xl mb-1 tracking-tighter">2026</div>
                            <h4 className="text-white font-bold">Internship Ready</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;