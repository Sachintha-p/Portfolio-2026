import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#0a0118] py-10 border-t border-white/5 text-center">
            <div className="max-w-6xl mx-auto px-6">
                <p className="text-slate-500 text-sm">
                    © {new Date().getFullYear()} <span className="text-white font-medium">Sachintha Praneeth</span>.
                    All rights reserved.
                </p>
                <p className="text-slate-600 text-xs mt-2 italic">
                    Built with Next.js, Tailwind CSS & Passion.
                </p>
            </div>
        </footer>
    );
};

export default Footer;