import React from 'react';
import { Award, ExternalLink } from 'lucide-react';
import { certificatesData } from '@/data/certificates';

const Certificates = () => {
    return (
        <section className="bg-[#0a0118] py-20 px-6">
            <div className="max-w-6xl mx-auto">
                <div className="mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Certifications</h2>
                    <div className="w-20 h-1.5 bg-[#7c3aed] rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certificatesData.map((cert) => (
                        <div key={cert.id} className="flex items-center justify-between p-6 bg-[#110524] border border-white/5 rounded-xl hover:border-[#7c3aed]/30 transition-all group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-[#7c3aed]/10 rounded-full text-[#7c3aed]">
                                    <Award size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-[#7c3aed] transition-colors">{cert.title}</h3>
                                    <p className="text-sm text-slate-400">{cert.issuer} • {cert.date}</p>
                                </div>
                            </div>
                            <a href={cert.link} target="_blank" className="text-slate-500 hover:text-white transition-colors">
                                <ExternalLink size={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;