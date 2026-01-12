export interface Project {
    id: number;
    title: string;
    description: string;
    techStack: string[];
    link: string;
    category: string;
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "MeetMind",
        description: "An AI-powered meeting assistant platform designed to streamline collaboration and note-taking during professional sessions.",
        techStack: ["Next.js", "OpenAI API", "Tailwind CSS", "PostgreSQL"],
        link: "#",
        category: "AI Web App"
    },
    {
        id: 2,
        title: "PETSYNC+",
        description: "A comprehensive pet care management system developed as a mobile application. Focused on UI design and functional report generation.",
        techStack: ["Android Studio", "Java", "Firebase"],
        link: "#",
        category: "Mobile App"
    },
    {
        id: 3,
        title: "Weather Tracking App",
        description: "A real-time weather application that fetches data from APIs to provide accurate local forecasts.",
        techStack: ["React", "Next.js", "OpenWeather API"],
        link: "#",
        category: "Web App"
    },
    {
        id: 4,
        title: "Python Calculator & Utility",
        description: "A functional calculator project developed in Python with advanced feature sets for daily calculations.",
        techStack: ["Python", "Logic Building"],
        link: "#",
        category: "Python Tool"
    }
];