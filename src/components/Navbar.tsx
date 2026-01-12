"use client";

import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full z-50 bg-[#0a0118]/80 backdrop-blur-md border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                {/* Left Side - Simple Logo or Name */}
                <div className="text-xl font-bold text-white tracking-tighter">
                    SP<span className="text-[#7c3aed]">.</span>
                </div>

                {/* Right Side - Contact Info */}
                <div className="flex flex-col md:flex-row items-end md:items-center gap-2 md:gap-8 text-sm">

                    {/* Name */}
                    <div className="flex items-center gap-2 text-white font-medium">
                        <User size={16} className="text-[#7c3aed]" />
                        <span className="hidden sm:inline">Sachintha Praneeth</span>
                    </div>

                    {/* Phone */}
                    <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <Phone size={16} className="text-[#7c3aed]" />
                        <a href="tel:+94703597211">+94 70 359 7211</a> {/* Oyage number eka methanata danna */}
                    </div>

                    {/* Email */}
                    <div className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                        <Mail size={16} className="text-[#7c3aed]" />
                        <a href="mailto:sachinthapraneeth18@gmail.com">sachinthapraneeth18@gmail.com</a> {/* Oyage email eka danna */}
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;