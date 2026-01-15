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
        techStack: ["Next.js", "OpenAI API", "Tailwind CSS"],
        link: "https://github.com/Sachintha-p/meetMind-AI-Project.git",
        category: "AI Web App"
    },
    {
        id: 2,
        title: "Habit Tracker App",
        description: "A productivity-focused mobile application built with Kotlin to help users track daily habits and maintain consistent routines.",
        techStack: ["Android Studio", "Kotlin", "Firebase"],
        link: "https://github.com/Sachintha-p/habit-tracker-kotlin.git",
        category: "Mobile App"
    },
    {
        id: 3,
        title: "Sales Insights Dashboard",
        description: "A dynamic Power BI dashboard created to visualize complex data sets, identifying key sales trends and performance metrics for data-driven decisions.",
        techStack: ["Power BI", "DAX", "Data Modeling", "Excel"],
        link: "https://github.com/Sachintha-p/Superstore-Sales-Analysis-PowerBI.git",
        category: "Data Analytics"
    },
    {
        id: 4,
        title: "Weather Tracking App",
        description: "A real-time weather application that fetches data from APIs to provide accurate local forecasts.",
        techStack: ["React", "Next.js", "OpenWeather API"],
        link: "https://github.com/Sachintha-p/weather--app.git",
        category: "Web App"
    },
    {
        id: 5,
        title: "Python Calculator & Utility",
        description: "A functional calculator project developed in Python with advanced feature sets for daily calculations.",
        techStack: ["Python", "Logic Building"],
        link: "#",
        category: "Python Tool"
    }
];