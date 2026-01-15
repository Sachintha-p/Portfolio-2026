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
        title: "Agile and Scrum Methodology",
        issuer: "Udemy",
        date: "2026",
        link: "/certificates/Agile_and_Scrum.pdf"
    },
    {
        id: 2,
        title: "Java & PHP Crash Course",
        issuer: "Udemy",
        date: "2025",
        link: "/certificates/crash_course_java,php.pdf"
    },
    {
        id: 3,
        title: "Java OOP (Advanced) Programming",
        issuer: "Udemy",
        date: "2025",
        link: "/certificates/java_oop_(advanced).pdf"
    },
    {
        id: 4,
        title: "Oracle Certified Associate",
        issuer: "Oracle",
        date: "2025",
        link: "/certificates/oracale_associate.pdf"
    },
    {
        id: 5,
        title: "Python for Beginners",
        issuer: "University of Moratuwa",
        date: "2025",
        link: "/certificates/Python_for_Beginners.pdf"
    },
    {
        id: 6,
        title: "Advanced Python Programming",
        issuer: "University of Moratuwa",
        date: "2025",
        link: "/certificates/Python_Programming.pdf"
    },
    {
        id: 7,
        title: "Technical Troubleshooting",
        issuer: "Udemy",
        date: "2025",
        link: "/certificates/troubleshooting.pdf"
    }
];