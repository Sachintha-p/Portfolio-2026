"use client";

import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificatesData } from '@/data/certificates';

const Certificates = () => {
    return (
        <section className="bg-[#0a0118] py-20 px-6 border-t border-white/5">
            <div className="max-w-6xl mx-auto">

                {/* Section Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 italic text-center md:text-left">
                        Professional Certifications
                    </h2>
                    <div className="w-20 h-1.5 bg-[#7c3aed] rounded-full mx-auto md:mx-0"></div>
                    <p className="mt-4 text-slate-400 text-center md:text-left">
                        A collection of my academic and professional achievements as an IT Undergraduate.
                    </p>
                </div>

                {/* Certificates Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {certificatesData.map((cert) => (
                        <a
                            key={cert.id}
                            href={cert.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between p-6 bg-[#110524] border border-white/5 rounded-2xl hover:border-[#7c3aed]/50 hover:bg-[#1a0b35] transition-all group cursor-pointer shadow-lg"
                        >
                            <div className="flex items-center gap-5">
                                {/* Icon Container */}
                                <div className="p-4 bg-[#7c3aed]/10 rounded-xl text-[#7c3aed] group-hover:bg-[#7c3aed] group-hover:text-white transition-all shadow-inner">
                                    <Award size={28} />
                                </div>

                                {/* Details */}
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-[#7c3aed] transition-colors leading-tight">
                                        {cert.title}
                                    </h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        {cert.issuer} • <span className="text-slate-500">{cert.date}</span>
                                    </p>
                                </div>
                            </div>

                            {/* External Link Icon */}
                            <div className="text-slate-600 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all">
                                <ExternalLink size={22} />
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;