import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    cpp,
    flutter,
    python,
    java,
    r
} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Python",
        type: "Frontend",
    },
    {
        imageUrl: cpp,
        name: "C++",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
]

export const experiences = [
    {
        title: "Market Inventory System",
        company_name: "Python",
        icon: python,
        iconBg: "#accbe1",
        date: "",
        points:  [
            "Designed and implemented key features for managing inventory data, including adding, updating, and removing product details.",
            "Conducted testing and debugging to identify and resolve issues, improving overall system stability and performance."
        ],
    },
    {
        title: "3D-Portfolio(this website)",
        company_name: "three.JS,HTML,CSS and Mainly JS React",
        icon: react,
        iconBg: "#FFFFFF",
        date: "",
        points: [
            "Designed and developed an interactive 3D portfolio website using React.js, Three.js, HTML, and CSS to showcase projects and skills.",
            "Leveraged Three.js to create and render dynamic 3D models and animations, enhancing the visual appeal and user experience of the site.",
            "Implemented responsive design techniques to ensure consistent user experience across various devices and screen sizes.",
            "Optimized the website for performance and accessibility, improving page load times and ensuring a smooth browsing experience.",
        ],
    },
    {
        title: "Printing Service System",
        company_name: "JAVA",
        icon: java,
        iconBg: "#F0FFFF",
        date: "",
        points: [
            "Developed a Java-based desktop application to streamline the management of printing services, including order processing, payment tracking, and service scheduling.",
            "Implemented object-oriented design principles to create a scalable and maintainable codebase, enhancing application performance and modularity.",
            "Integrated a database using SQL to store and retrieve user information, order details, and transaction records securely.",
            "Tested and debugged the application to ensure reliable functionality and user-friendly interfaces.",
        ],
    },
    {
        title: "Credit Score Analysis on Credit History Age",
        company_name: "R",
        icon: r,
        iconBg: "#a2d2ff",
        date: "",
        points: [
            "Conducted data analysis using R to explore the relationship between credit score and credit history age, leveraging statistical models and visualizations.",
            "Cleaned, transformed, and processed large datasets to prepare them for in-depth analysis, ensuring data integrity and consistency.",
            "Utilized regression techniques to identify trends, correlations, and patterns, providing insights on the impact of credit history age on credit scores.",
            "Presented findings through comprehensive reports and visualizations using ggplot2, facilitating informed decision-making for stakeholders.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
      iconUrl: pricewise, // Placeholder for actual icon URL
      theme: 'btn-back-red',
      name: 'Market Inventory System',
      description: 'Developed using Python with a SQL backend as the database for managing and sorting inventory efficiently.',
      link: 'https://github.com/Ka1Jian/Python-Inventory-System', // Add a relevant link if available
    },
    {
      iconUrl: threads, // Placeholder for actual icon URL
      theme: 'btn-back-green',
      name: 'Printing Services Management System',
      description: 'Built using C#, with a SQL backend as the database for managing and sorting inventory efficiently..',
      link: 'https://github.com/Ka1Jian/School-Printing-Service', // Add a relevant link if available
    },
    {
      iconUrl: car, // Placeholder for actual icon URL
      theme: 'btn-back-blue',
      name: '3D Website',
      description: 'Created a 3D interactive website using Node.js and Three.js to showcase modern web design concepts.',
      link: '#', // Add a relevant link if available
    },
    {
      iconUrl: snapgram, // Placeholder for actual icon URL
      theme: 'btn-back-pink',
      name: 'Student Management System',
      description: 'Developed a student management system using Java, enabling comprehensive student record management.',
      link: 'https://github.com/Lemon300m/OODJ', // Add a relevant link if available
    },
    {
      iconUrl: summiz, // Placeholder for actual icon URL
      theme: 'btn-back-yellow',
      name: 'Research Projects',
      description: 'Conducted research on credit score analysis and developed machine learning models for stock market prediction using chaos theory and fractal analysis.',
      link: 'https://github.com/Ka1Jian/Credit-History-Age-analysis', // Add a relevant link if available
    }
  ];