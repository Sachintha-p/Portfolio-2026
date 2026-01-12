import Navbar from "@/components/Navbar";
import Hero from "@/components/hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Skills from "@/components/Skills";
import Certificates from "@/components/Certificates";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="bg-[#0a0118]">
            <Navbar />
            <Hero />
            <About />
            <ProjectGrid />
            <Skills />
            <Certificates />
            <Footer />
        </main>
    );
}