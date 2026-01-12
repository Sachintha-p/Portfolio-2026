import { Code2, Globe, Smartphone, Database, Terminal, BarChart3 } from 'lucide-react';

export interface SkillCategory {
    title: string;
    icon: any;
    skills: string[];
}

export const skillCategories: SkillCategory[] = [
    {
        title: "Languages",
        icon: Code2,
        skills: ["Java", "Python", "JavaScript", "TypeScript"]
    },
    {
        title: "Web Development",
        icon: Globe,
        skills: ["React", "Next.js", "Tailwind CSS", "Node.js"]
    },
    {
        title: "Mobile Development",
        icon: Smartphone,
        skills: ["Android Studio", "Java (Android Development)", "Mobile UI/UX Design"]
    },
    {
        title: "Backend & DB",
        icon: Database,
        skills: ["Firebase", "PostgreSQL", "SQL", "OpenAI API Integration"]
    },
    {
        title: "Data & Analytics",
        icon: BarChart3,
        skills: ["Power BI", "Data Visualization", "Excel Analytics", "Python for Data Science"]
    },
    {
        title: "Tools & Others",
        icon: Terminal,
        skills: ["Git / GitHub", "Web Scraping", "Project Management Tools", "IoT Concepts"]
    }
];