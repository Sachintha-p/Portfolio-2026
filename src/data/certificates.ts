export interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    link: string;
}

export const certificatesData: Certificate[] = [
    {
        id: 1,
        title: "Google Data Analytics Professional Certificate",
        issuer: "Google / Coursera",
        date: "2025",
        link: "#" // Oyage certificate link eka methanata danna
    },
    {
        id: 2,
        title: "RStudio Data Science Training",
        issuer: "SLIIT / Internal Lab",
        date: "2025",
        link: "#"
    },
    {
        id: 3,
        title: "Web Development Bootcamp",
        issuer: "Udemy / Self-paced",
        date: "2024",
        link: "#"
    }
];
