import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                midnight: "#0a0118", // Deep Dark Purple Background
                silver: "#cbd5e1",   // Professional Silver Text
                vibrant: "#7c3aed",  // Highlight Purple
            },
        },
    },
    plugins: [],
};
export default config;