/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
    isSplash: true, // Change this to true if you want to use the splash screen.
    useCustomCursor: true, // Change this to false if you want the good'ol cursor
};

//Home Page
const greeting = {
    title: "Hi",
    title2: " I'm Zeeshan Ahmad",
    logo_name: "Zeeshan Ahmad",
    full_name: "Zeeshan Ahmad",
    subTitle1: "Software Developer.",
    subTitle2: "Full Stack Developer.",
    subTitle: "Full Stack Developer, Life Long Learner.",
    // resumeLink:
    //   "https://drive.google.com/file/d/1-SSCPhVG80IDtpx7_TPpsLfJyEA7NEtv/view?usp=drive_link",
    mail: "mailto:shanahmad.dev@gmail.com@gmail.com",
};

const socialMediaLinks = {
    github: "https://github.com/ShnAhmad",
    linkedin: "https://www.linkedin.com/in/zeeshan-ahmad2/",
    gmail: "shanahmad.dev@gmail.com",
    twitter: "",
};

const skills = {
    data: [
        {
            _id: "354c54b7-ffd8-40f1-972f-1d006733df25",
            title: "Full Stack Development",
            fileName: "FullStackImg",
            skills: [
                "⚡ Develop highly interactive user interfaces and seamless backend integration for high-performance web applications.",
                "⚡ Built responsive and accessible frontends using modern frameworks like React.js and Next.js",
                "⚡ Developed robust and scalable backends using Django, Node.js, Express, Snowflake, SQL, and MongoDB.",
                "⚡ Integration of AWS services such as AWS Lambda, S3, serverless functions and secrets manager.",
            ],
            softwareSkills: [
                {
                    skillName: "React.js",
                    fontAwesomeClassname: "simple-icons:react",
                    style: {
                        color: "#61DAFB",
                    },
                },
                {
                    skillName: "Next.js",
                    fontAwesomeClassname: "logos:nextjs-icon",
                    style: {
                        color: "#000000",
                    },
                },
                {
                    skillName: "Redux",
                    fontAwesomeClassname: "simple-icons:redux",
                    style: {
                        color: "#593D88",
                    },
                },
                {
                    skillName: "Python",
                    fontAwesomeClassname: "logos:python",
                    style: {
                        color: "#3776AB",
                    },
                },
                {
                    skillName: "Django",
                    fontAwesomeClassname: "simple-icons:django",
                    style: {
                        color: "#0e3b2c",
                    },
                },
                {
                    skillName: "Snowflake",
                    fontAwesomeClassname: "logos:snowflake-icon",
                    style: {
                        color: "#439743",
                    },
                },
                {
                    skillName: "AWS",
                    fontAwesomeClassname: "logos:aws",
                    style: {
                        color: "#f4f2ed",
                    },
                },
                {
                    skillName: "JavaScript",
                    fontAwesomeClassname: "logos:javascript",
                    style: {
                        backgroundColor: "#FFFFFF",
                        color: "#F7DF1E",
                    },
                },
                {
                    skillName: "jQuery",
                    fontAwesomeClassname: "simple-icons:jquery",
                    style: {
                        color: "#0769ad",
                    },
                },
                {
                    skillName: "NodeJS",
                    fontAwesomeClassname: "logos:nodejs-icon",
                    style: {
                        color: "#339933",
                    },
                },
                {
                    skillName: "Express",
                    fontAwesomeClassname: "simple-icons:express",
                    style: {
                        color: "gray",
                    },
                },
                {
                    skillName: "MySQL",
                    fontAwesomeClassname: "simple-icons:mysql",
                    style: {
                        color: "#4479A1",
                    },
                },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "simple-icons:postgresql",
                    style: {
                        color: "#4479A1",
                    },
                },
                {
                    skillName: "MongoDB",
                    fontAwesomeClassname: "simple-icons:mongodb",
                    style: {
                        color: "#439743",
                    },
                },
                {
                    skillName: "HTML5",
                    fontAwesomeClassname: "simple-icons:html5",
                    style: {
                        color: "#E34F26",
                    },
                },
                {
                    skillName: "CSS3",
                    fontAwesomeClassname: "fa-css3",
                    style: {
                        color: "#1572B6",
                    },
                },
                {
                    skillName: "Material UI",
                    fontAwesomeClassname: "simple-icons:uikit",
                    style: {
                        color: "#007FFF",
                    },
                },
                {
                    skillName: "Tailwind CSS",
                    fontAwesomeClassname: "logos:tailwindcss-icon",
                    style: {
                        color: "#635BFF",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Framer Motion",
                    fontAwesomeClassname: "logos:framer",
                    style: {
                        color: "#635BFF",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Styled Components",
                    fontAwesomeClassname: "vscode-icons:file-type-styled",
                    style: {
                        color: "#635BFF",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Bootstrap",
                    fontAwesomeClassname: "simple-icons:bootstrap",
                    style: {
                        color: "#563d7c",
                    },
                },
                {
                    skillName: "Postman",
                    fontAwesomeClassname: "simple-icons:postman",
                    style: {
                        color: "#FF6C37",
                    },
                },
                {
                    skillName: "NPM",
                    fontAwesomeClassname: "simple-icons:npm",
                    style: {
                        color: "#CB3837",
                    },
                },
                {
                    skillName: "Cloudinary",
                    fontAwesomeClassname: "logos:cloudinary-icon",
                    style: {
                        color: "#635BFF",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Stripe",
                    fontAwesomeClassname: "logos:stripe",
                    style: {
                        color: "#635BFF",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Git",
                    fontAwesomeClassname: "simple-icons:git",
                    style: {
                        color: "#E94E32",
                    },
                }
            ],
        },
        {
            _id: "c026fe64-1542-42b0-84ab-9311840c169f",
            title: "Infra-Architecture",
            fileName: "CloudInfraImg",
            skills: [
                "⚡ Experience in deploying and managing applications across multiple cloud platforms, including AWS, Firebase and Vercel.",
                "⚡ Experience implementing Continuous Integration (CI) pipelines for streamlined development.",
            ],
            softwareSkills: [
                {
                    skillName: "AWS",
                    fontAwesomeClassname: "logos:aws",
                    style: {
                        color: "#f4f2ed",
                    },
                },
                {
                    skillName: "Snowflake",
                    fontAwesomeClassname: "logos:snowflake-icon",
                    style: {
                        color: "#439743",
                    },
                },
                {
                    skillName: "PostgreSQL",
                    fontAwesomeClassname: "simple-icons:postgresql",
                    style: {
                        color: "#336791",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "MongoDB Atlas",
                    fontAwesomeClassname: "simple-icons:mongodb",
                    style: {
                        color: "#47A248",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Docker",
                    fontAwesomeClassname: "simple-icons:docker",
                    style: {
                        color: "#1488C6",
                    },
                },
                {
                    skillName: "GitHub Actions",
                    fontAwesomeClassname: "simple-icons:githubactions",
                    style: {
                        color: "#5b77ef",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Vercel",
                    fontAwesomeClassname: "skill-icons:vercel-light",
                    style: {
                        color: "gray",
                        fill: "gray",
                        // backgroundColor: "white",
                        width: "1em",
                        height: "1em",
                    },
                },
                {
                    skillName: "Firebase",
                    fontAwesomeClassname: "simple-icons:firebase",
                    style: {
                        color: "#FFCA28",
                        width: "1em",
                        height: "1em",
                    },
                },
            ],
        },
    ],
};

const degrees = {
    degrees: [
        {
            title: "Amrita Vishwa Vidyapeetham, Coimbatore",
            subtitle: "Masters in Computer Applications (MCA)",
            logo_path: "amrita_logo.png",
            alt_name: "Amrita University",
            duration: "2021 - 2023",
            descriptions: [
                "⚡ I have taken varity of courses related to Artificial Intelligence, Machine Learning, Computer Vision etc.",
                "⚡ Apart from this, I have done courses on Cloud Computing and Full Stack Development.",
            ],
            website_link: "https://www.amrita.edu/",
        },
        {
            title: "Guru Gobind Singh Indraprastha University, New Delhi",
            subtitle: "Bachelors in Computer Applications (BCA)",
            logo_path: "ggsipu_logo.png",
            alt_name: "GGSIPU",
            duration: "2018 - 2021",
            descriptions: [
                "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
                // "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development."
            ],
            website_link: "http://www.ipu.ac.in/",
        },
    ],
};

const certifications = {
    certifications: [
        {
            title: "IBM Full Stack Software Developer",
            subtitle: "",
            logo_path: "ibm_logo.jpg",
            certificate_link:
                "https://coursera.org/share/cbcd30865e98e2e45161a6ace19d3558",
            alt_name: "IBM",
            color_code: "#096ce1",
        },
        {
            title: "Application Development using Microservices and Serverless",
            subtitle: "",
            logo_path: "ibm_logo.jpg",
            certificate_link:
                "https://coursera.org/share/4fa1b8d2f654495a0b692b65d9964ad5",
            alt_name: "IBM",
            color_code: "#096ce1",
        },
        {
            title: "Introduction to Cloud Computing",
            subtitle: "",
            logo_path: "ibm_logo.jpg",
            certificate_link:
                "https://coursera.org/share/438a8e16af4786782c8a739aef79e999",
            alt_name: "IBM",
            color_code: "#096ce1",
        },
        {
            title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
            subtitle: "",
            logo_path: "ibm_logo.jpg",
            certificate_link:
                "https://coursera.org/share/cfa7b88b913e4a8446b9dc706c0802b0",
            alt_name: "IBM",
            color_code: "#096ce1",
        },
        {
            title: "Django Application Development with SQL and Databases",
            subtitle: "",
            logo_path: "ibm_logo.jpg",
            certificate_link:
                "https://coursera.org/share/47d8c39642888094ad458b5e44a3c9f3",
            alt_name: "IBM",
            color_code: "#096ce1",
        },
        {
            title: "Developing AI Applications with Python and Flask",
            subtitle: "",
            logo_path: "ibm_logo.jpg",
            certificate_link:
                "https://coursera.org/share/f4ce59c0d68e4569056faaf2fdb4c256",
            alt_name: "IBM",
            color_code: "#096ce1",
        },
        {
            title: "Frontend Developer Capstone",
            subtitle: "",
            logo_path: "meta_logo.png",
            certificate_link:
                "https://coursera.org/share/f80912b58e3afcfa49e6116210a2c9da",
            alt_name: "Meta",
            color_code: "#096ce1",
        },
        {
            title: "Advanced React",
            subtitle: "",
            logo_path: "meta_logo.png",
            certificate_link:
                "https://coursera.org/share/877acd7eaf9dd532a2cb5b103576967e",
            alt_name: "Meta",
            color_code: "#096ce1",
        },
        {
            title: "Java Programming: Build a Recommendation System",
            subtitle: "",
            logo_path: "duke-logo.jpg",
            certificate_link:
                "https://coursera.org/share/6af001cafc4b683bb38abdb9e81d0d79",
            alt_name: "Duke University",
            color_code: "#001a57",
        },
        {
            title: "React Basics",
            subtitle: "",
            logo_path: "meta_logo.png",
            certificate_link:
                "https://coursera.org/share/29c75a387fcaf2f1e2403f73473092b2",
            alt_name: "Meta",
            color_code: "#096ce1",
        },
        {
            title: "Programming with JavaScript",
            subtitle: "",
            logo_path: "meta_logo.png",
            certificate_link:
                "https://coursera.org/share/cb44f1ee2db3f50b83a56cbae15fcc74",
            alt_name: "Meta",
            color_code: "#096ce1",
        },
        {
            title: "HTML and CSS in depth",
            subtitle: "",
            logo_path: "meta_logo.png",
            certificate_link:
                "https://coursera.org/share/667de02731a480b76b5300c6612d174d",
            alt_name: "Meta",
            color_code: "#096ce1",
        },
        {
            title: "Java Programming: Principles of Software Design",
            subtitle: "",
            logo_path: "duke-logo.jpg",
            certificate_link:
                "https://coursera.org/share/f4e9af47fbb24381e04031f3cc8cfd9f",
            alt_name: "Duke University",
            color_code: "#001a57",
        },
        {
            title: "Java Programming: Solving Problems with Software",
            subtitle: "",
            logo_path: "duke-logo.jpg",
            certificate_link:
                "https://coursera.org/share/36411fcea7ea4fbb5c613ef4911f4668",
            alt_name: "Duke University",
            color_code: "#001a57",
        },
        {
            title: "Programming Foundations with JavaScript, HTML and CSS",
            subtitle: "",
            logo_path: "duke-logo.jpg",
            certificate_link:
                "https://coursera.org/share/0269c76c33997304d1842d4eef16815b",
            alt_name: "Duke University",
            color_code: "#001a57",
        },
        {
            title: "Android Application Development - II",
            subtitle: "- Dr. Adam Porter",
            logo_path: "maryland_logo.svg",
            certificate_link:
                "https://www.coursera.org/account/accomplishments/verify/GN48B7W9TU59",
            alt_name: "Stanford University",
            color_code: "#e11a2b",
        },
        {
            title: "Android Application Development - I",
            subtitle: "- Dr. Adam Porter",
            logo_path: "maryland_logo.svg",
            certificate_link:
                "https://www.coursera.org/account/accomplishments/verify/2H59Z22DDSU8",
            alt_name: "Stanford University",
            color_code: "#e11a2b",
        },
        {
            title: "Fullstack Development",
            subtitle: "- Christian Hur",
            logo_path: "coursera_logo.png",
            certificate_link:
                "https://www.coursera.org/account/accomplishments/verify/97WF8EZ4Y2YD",
            alt_name: "Coursera",
            color_code: "#0056d2",
        },
        {
            title: "ML and AI in GCP",
            subtitle: "- GCP Training",
            logo_path: "gcp_logo.png",
            certificate_link:
                "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2862832",
            alt_name: "GCP",
            color_code: "#2fa9508a",
        },
        {
            title: "Foundational Infrastructure in GCP",
            subtitle: "- GCP Training",
            logo_path: "gcp_logo.png",
            certificate_link:
                "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2653409",
            alt_name: "GCP",
            color_code: "#4087f08a",
        },
        {
            title: "Networking & Security in GCP",
            subtitle: "- GCP Training",
            logo_path: "gcp_logo.png",
            certificate_link:
                "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2510430",
            alt_name: "GCP",
            color_code: "#eb40308a",
        },
        {
            title: "Cloud Computing Fundamentals in GCP",
            subtitle: "- GCP Training",
            logo_path: "gcp_logo.png",
            certificate_link:
                "https://www.cloudskillsboost.google/public_profiles/345a17d9-689f-4154-a3d3-c0396c98b3bc/badges/2469792",
            alt_name: "GCP",
            color_code: "#fabd008a",
        },
    ],
};

// Experience Page
const experience = {
    title: "Experience",
    subtitle: "Career Highlights",
    description:
        "Software Engineer with experience building scalable applications across web, mobile, and desktop platforms. I have contributed to high-performance POS and management systems at Arkhitech and developed scalable web and mobile apps at Next Generation Circle, working on both frontend and backend with a strong focus on clean architecture, performance, and responsive design.",
    experiences: [
        {
            title: "Software Engineer - RaectJS/Flutter",
            company: "Akhitech",
            company_url: "https://www.arkhitech.com/",
            duration: "(Oct, 2024 - Present)",
            location: "Islamabad, Pakistan",
            description: "<li> Currently working as a Software Engineer at Arkhitech, contributing to the development of cross-platform POS and management systems using React.js, React Native, Electron.js, Node.js, SQLite, and MUI.</li><br><li>Responsible for full-cycle development, including architecture planning, performance optimization, database handling, API integration, and ensuring code quality across mobile and desktop platforms.</li><br><li>Collaborating in a fast-paced agile environment, translating business requirements into scalable solutions while maintaining a strong focus on functionality, reliability, and maintainability.</li>",
            color: "#ffffff",
        },
        {
            title: "Front End Developer",
            company: "Next Generation Circle",
            company_url: "https://www.nextgcircle.com/",
            duration: "(Nov, 2023 - March, 2024)",
            location: "Peshawar, Pakistan (Remote)",
            description: "<li> Worked remotely as a Front-End Developer at Next Generation Circle, developing cross-platform applications using React.js (web) and Flutter (mobile) with a strong focus on performance and scalability.</li><br><li>Implemented MVVM architecture and Provider in Flutter, and built modular React components using Hooks, Context API, Redux, and Tailwind CSS for clean and maintainable code.</li><br><li>Integrated RESTful APIs, handled complex UIs, and collaborated in agile sprints using Git, Jira, and Slack, ensuring responsive design and smooth user experiences across all platforms.</li>",
            color: "#000000",
        },
    ],
};

// Projects Page
const projectsHeader = {
    title: "Projects",
    description:
        "I specialize in developing cross-platform applications using modern frameworks like React Native, Flutter, React, Electron, Next.js, and Node.js. My projects focus on building robust, scalable, and user-friendly solutions across mobile, web, and desktop platforms. I emphasize clean architecture, seamless API integration, and performance optimization throughout the development lifecycle.",
};

const projects = {
    data: [
        {
            id: "Portfolio",
            name: "Portfolio",
            repoUrl: "https://github.com/ShnAhmad/my-portfolio",
            description: "You are watching it right now 😉.",
            languages: [
                {
                    name: "JavaScript",
                    iconifyClass: "material-icon-theme:javascript-map",
                },
                {
                    name: "React",
                    iconifyClass: "logos-react",
                },
                {
                    name: "HTML5",
                    iconifyClass: "vscode-icons:file-type-html",
                },
                {
                    name: "CSS3",
                    iconifyClass: "vscode-icons:file-type-css",
                },
                {
                    name: "React Reveal",
                    iconifyClass: "simple-icons:scrollreveal",
                },
                {
                    name: "Styled Components",
                    iconifyClass: "vscode-icons:file-type-styled",
                },
            ],
        },
        {
            id: "Howmuch",
            name: "Howmuch POS",
            url: "https://www.howmuchpos.com/",
            description:
                "Howmuch is the provider of cloud-based Point of Sale software that gives users a consistent experience by integrating their whole business operations with its AI capabilities. Howmuch encompass affordability with the latest and modern service methods. We guaranteed a high rate of satisfaction, personalized services, competitive pricing, modern equipment, and facilities that promote business practices.",
            languages: [
                {
                    name: "Electron",
                    iconifyClass: "simple-icons:electron",
                },
                {
                    name: "React",
                    iconifyClass: "logos:react",
                },
                {
                    name: "MySQL",
                    iconifyClass: "logos:mysql",
                },

                {
                    name: "Nodejs",
                    iconifyClass: "logos:nodejs",
                },
                {
                    name: "React Native",
                    iconifyClass: "devicon:reactnative-wordmark",
                },
                {
                    name: "MUI",
                    iconifyClass: "logos:material-ui",
                },
                {
                    name: "Tailwind",
                    iconifyClass: "vscode-icons:file-type-tailwind",
                },
                {
                    name: "Ruby On Rails",
                    iconifyClass: "mdi:language-ruby-on-rails",
                },
                {
                    name: "Redux",
                    iconifyClass: "devicon:redux",
                },
            ],
        },
        {
            id: "Foodnerd",
            name: "Foodnerd POS",
            url: "https://www.foodnerdpos.com/",
            description:
                "Foodnerd goes beyond POS, offering a complete restaurant management solution to simplify operations, engage customers, and drive growth. From effortless order handling to real-time inventory updates, we help you focus on what matters most - delivering unforgettable dining experiences.",
            languages: [
                {
                    name: "Electron",
                    iconifyClass: "simple-icons:electron",
                },
                {
                    name: "React",
                    iconifyClass: "logos:react",
                },
                {
                    name: "MySQL",
                    iconifyClass: "logos:mysql",
                },

                {
                    name: "Nodejs",
                    iconifyClass: "logos:nodejs",
                },
                {
                    name: "React Native",
                    iconifyClass: "devicon:reactnative-wordmark",
                },
                {
                    name: "MUI",
                    iconifyClass: "logos:material-ui",
                },
                {
                    name: "Tailwind",
                    iconifyClass: "vscode-icons:file-type-tailwind",
                },
                {
                    name: "Ruby On Rails",
                    iconifyClass: "mdi:language-ruby-on-rails",
                },
                {
                    name: "Redux",
                    iconifyClass: "devicon:redux",
                },
            ],
        },
        {
            id: "Quizet",
            name: "Quizet",
            repoUrl: "https://github.com/ShnAhmad/React-Native-quiz-App",
            description:
                "Quizet is a free and open-source quiz application that helps users test their knowledge and skills in different subjects. Users can choose their preferred course and difficulty level to customize their learning experience. The app offers a wide variety of questions and quizzes to make learning engaging and enjoyable.",
            languages: [
                {
                    name: "React Native",
                    iconifyClass: "devicon:reactnative-wordmark",
                },
                {
                    name: "JavasScript",
                    iconifyClass: "material-icon-theme:javascript-map",
                },
                {
                    name: "Firebase",
                    iconifyClass: "logos:firebase",
                },
                {
                    name: "Trivia Database",
                    iconifyClass: "fluent:database-24-regular",
                },
            ],
        },
        {
            id: "ExpenseTracker",
            name: "Expense Tracker",
            repoUrl: "https://github.com/ShnAhmad/Expense_Tracker",
            description:
                "This Expense Tracker app allows users to log, categorize, and visualize their daily expenses. With an intuitive interface and smooth animations, it provides a seamless experience for keeping track of your spending habits.",
            languages: [
                {
                    name: "Flutter",
                    iconifyClass: "logos:flutter",
                },
                {
                    name: "Dart",
                    iconifyClass: "logos:dart",
                },
            ],
        },
        {
            id: "DeepDreamer",
            name: "Deep Dreamer",
            repoUrl: "https://github.com/ShnAhmad/Deep_Dreamer",
            description:
                "A Flutter app that allows users to search for AI-generated images based on text prompts. It uses the Lexica API to fetch and display images in a grid layout.",
            languages: [
                {
                    name: "Flutter",
                    iconifyClass: "logos:flutter",
                },
                {
                    name: "Dart",
                    iconifyClass: "logos:dart",
                },
                {
                    name: "Laxica",
                    iconifyClass: "arcticons:lexica",
                },
            ],
        },
    ],
};

// Contact Page
const contactPageData = {
    contactSection: {
        title: "Contact Me",
        description:
            "Feel free to reach out through any of the channels listed below — I’ll get back to you as promptly as possible.",
    },
};

export {
    settings,
    greeting,
    socialMediaLinks,
    skills,
    degrees,
    certifications,
    experience,
    projectsHeader,
    contactPageData,
    projects,
};
