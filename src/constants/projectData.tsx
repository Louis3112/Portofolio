import CitilearnImg from "../assets/projects/citilearn.webp";
import DitanyainImg from "../assets/projects/ditanyain.webp";
import HMTPImg from "../assets/projects/hmtp.webp";
import LumbahImg from "../assets/projects/lumba.webp"
import gAImanacImg from "../assets/projects/gAImanac.webp";
import DepotAccordImg from "../assets/projects/depotAccord.webp"
import JemberImg from "../assets/projects/jember.webp";

export const PROJECT_DATA = [
  {
    id: "proj-07",
    title: "Citilearn",
    image: CitilearnImg,
    status: "LIVE: ONLINE",
    color: "green",
    description: [
      "It is a  enterprise-level Learning Management System (LMS) designed to optimize training workflows at PT Citilink Indonesia.",
      "As a backend developer, I architected the core logic using PHP (Laravel) and managed data integrity within a PostgreSQL database.",
      "The system architecture uses the repository-service pattern to ensure code maintainability and utilizes secure RESTful APIs for seamless integration with frontend interfaces"
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Shadcn.ui", "Laravel", "PostgreSQL", "Postman", "DBeaver", "GitLab", "VSCode"],
    webLink: "",
    githubLink: "",
    start: "February 2026",
    role: "Back-End Dev",
    teamSize: 3,
    duration: "6 Months"
  },
  {
    id: "proj-06",
    title: "Ditanyain",
    image: DitanyainImg,
    status: "LIVE: ONLINE",
    color: "blue",
    description: [
      "It is a formative assessments based on AI by managing questions and measuring student understanding.",
      "Built as a collaborative team effort, this project serves as our final assignment for the Project Asah program led by Dicoding.",
      "The project has won 12% 'Best Capstone Project' for use case DC-02 LearnCheck! Formative Assessment Powered with AI and reached highest judging score in Best Capstone Judging Session"
    ],
    techStack: ["TypeScript", "React", "Tailwind CSS", "Vite", "Shadcn.ui", "Express.js", "Node.js", "PostgreSQL", "Postman", "Swagger", "GitHub", "VSCode"],
    webLink: "https://lms.ditanyain.web.id/",
    githubLink: "https://github.com/Ditanyain",
    start: "September 2025",
    role: "Front-End Dev",
    teamSize: 4,
    duration: "3 Months"
  },
  {
    id: "proj-05",
    title: "HMTP PPNS Company Profile",
    image: HMTPImg,
    status: "LIVE: ONLINE",
    color: "orange",
    description: [
      "'Himpunan Mahasiswa Teknik Perpipaan' (HMTP) is one of association that exist in 'Politeknik Perkapalan Negeri Surabaya (PPNS)'",
      "This company profile consists of explanation of their major and their association, news and alumni from Pipeline Engineering major",
    ],
    techStack: ["Tailwind CSS", "React", "Laravel", "MySQL", "GitHub", "VSCode"],
    webLink: "https://hmtppns.my.id/",
    githubLink: "",
    start: "June 2025",
    role: "Front-End Dev",
    teamSize: 2,
    duration: "1 Month"
  },
  {
    id: "proj-04",
    title: "Lumbah Umbah",
    image: LumbahImg,
    status: "LIVE: ONLINE",
    color: "light-blue",
    description: [
      "Lumba Umbah is a laundry service website that offers laundry by weight. The name Lumba Umbah is derived from the Javanese phrase 'umbah-umbah', which means washing clothes.",
      "This project was created as my Final-Semester Project for Platform Oriented Programming course.",
    ],
    techStack: ["HTML", "Tailwind CSS", "React", "JavaScript", "GoLang", "Docker", "PostgreSQL", "GitHub", "VSCode"],
    webLink: "https://lumba-umbah.vercel.app/",
    githubLink: "https://github.com/Louis3112/lumbaUmbah",
    start: "May 2025",
    role: "Front-End Dev",
    teamSize: 3,
    duration: "1 Month"
  },
  {
    id: "proj-03",
    title: "gAImanac",
    image: gAImanacImg,
    status: "OFFLINE",
    color: "dark-blue",
    description: [
      "gAImanac is an AI Agent designed to assist users in the gaming industry ecosystem or a gaming chatbot AI.",
      "Derived from the words 'Gaming' and 'Almanac', gAImanac aims to be a reliable source information about gaming news, gaming tips, and other gaming-related content."
    ],
    techStack: ["HTML", "Tailwind CSS", "React", "GoLang", "Ollama", "GitHub", "VSCode"],
    webLink: "",
    githubLink: "https://github.com/Louis3112/gAImanac",
    start: "May 2025",
    role: "Front-End Dev",
    teamSize: 4,
    duration: "1 Month"
  },
  {
    id: "proj-02",
    title: "Depot Accord",
    image: DepotAccordImg,
    status: "LIVE: ONLINE",
    color: "red",
    description: [
      "Depot Accord is a simple restaurant website inspired by my parents small Chinese street-side eatery.",
      "The website was created as my Mid-Semester Project to implement HTML, CSS (TypeScript), and JavaScript."
    ],
    techStack: ["HTML", "CSS", "JavaScript", "GitHub", "VSCode"],
    webLink: "https://depot-accord.vercel.app/",
    githubLink: "https://github.com/Louis3112/restaurant_web",
    start: "March 2025",
    role: "Front-End Dev",
    teamSize: 1,
    duration: "2 Weeks"
  },
  {
    id: "proj-01", 
    title: "Jember Tourist Web",
    image: JemberImg,
    status: "LIVE: ONLINE",
    color: "purple",
    description: [
      "Jember Tourist Web is my first web development project built using basic HTML and CSS.",
      "This website provides an overview of tourist attractions in Jember and was created as part of my submission for the 'Belajar Dasar Pemrograman Web' certification by Dicoding."
    ],
    techStack: ["HTML", "CSS", "GitHub", "VSCode"], 
    webLink: "https://jember-tourist-web.vercel.app/",
    githubLink: "https://github.com/Louis3112/jember_tourist_web",
    start: "December 2023",
    role: "Front-End Dev",
    teamSize: 1,
    duration: "2 Weeks"
  },
];