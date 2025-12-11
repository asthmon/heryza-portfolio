import HeroImage from "/assets/profile-main.webp";
import SubImage from "/assets/mine-photo-sub.jpeg";

const Image = {
  HeroImage, SubImage
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/figma.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/excel.png";
import Tools12 from "/assets/tools/word.png";
import Tools13 from "/assets/tools/ppt.png";
import Tools14 from "/assets/tools/Python.png";
import Tools15 from "/assets/tools/MySQL.png";
import Tools16 from "/assets/tools/Jupyter.png";
import Tools17 from "/assets/tools/plotly-icon.svg";
import Tools18 from "/assets/tools/Matplotlib.png";
import Tools19 from "/assets/tools/PowerBI.png";
import Tools20 from "/assets/tools/scikit-learn.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "Next JS",
    ket: "Framework",
    dad: "300",
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: "400",
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Bootstrap",
    ket: "Framework",
    dad: "500",
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Javascript",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: "700",
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Github",
    ket: "Repository",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Figma",
    ket: "Design App",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Canva",
    ket: "Design App",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Ms Excel",
    ket: "Data Analysis & Spreadsheets",
    dad: "1100",
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Ms Word",
    ket: "Document Creation & Editing",
    dad: "1200",
  },
  {
    id: 13,
    gambar: Tools13,
    nama: "Ms Powerpoint",
    ket: "Presentations & Visual Storytelling",
    dad: "1300",
  },
  {
    id: 14,
    gambar: Tools14,
    nama: "Python",
    ket: "Language, Data Analysis",
    dad: "1400",
  },
  {
    id: 15,
    gambar: Tools15,
    nama: "MySQL",
    ket: "Database Querying",
    dad: "1500",
  },
  {
    id: 16,
    gambar: Tools16,
    nama: "Jupyter Notebook",
    ket: "Interactive Data Analysis",
    dad: "1600",
  },
  {
    id: 17,
    gambar: Tools17,
    nama: "Dash Plotly",
    ket: "Interactive Web Dashboards",
    dad: "1700",
  },
  {
    id: 18,
    gambar: Tools18,
    nama: "Matplotlib",
    ket: "Data Visualization",
    dad: "1800",
  },
  {
    id: 19,
    gambar: Tools19,
    nama: "Power BI",
    ket: "Dashboard & Analytics",
    dad: "1900",
  },
  {
    id: 20,
    gambar: Tools20,
    nama: "Scikit Learn",
    ket: "Machine Learning Library",
    dad: "2000",
  }
];

import Proyek1 from "/assets/proyek/proyek1.webp";
import Proyek2 from "/assets/proyek/proyek2.webp";
import Proyek3 from "/assets/proyek/proyek3.webp";
import Proyek4 from "/assets/proyek/proyek4.webp";
import Proyek5 from "/assets/proyek/proyek5.webp";
import Proyek6 from "/assets/proyek/proyek6.webp";

export const listProyek = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "Characters Bank",
    desk: "My first project, a simple website with Sign up, Sign in, Make / Delete posts, Upload picture, Based on Colt Steele Yelp Camp Project",
    tools: ["HTML", "JavaScript", "Bootstrap", "Express Js", "Cloudinary", "Mongo DB", "Ejs"],
    dad: "200",
    link: "https://charactersbank.vercel.app/"
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Movie App",
    desk: "A simple movies app, using react vite",
    tools: ["React Js", "Tailwind Css", "Javascript", "Figma", "Appwrite", "Movie Db API"],
    dad: "300",
    link: "https://movies-app-two-lake.vercel.app/"
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Web Pernikahan 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "TailwindCSS", "AOS"],
    dad: "400",
    link: "#"
  },
  {
    id: 4,
    gambar: Proyek4,
    nama: "Website Course",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["Vite", "ReactJS", "Bootstrap", "AOS"],
    dad: "500",
    link: "#"
  },
  {
    id: 5,
    gambar: Proyek5,
    nama: "Web Portfolio",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["HTML", "CSS", "Javascript", "Bootsrap"],
    dad: "600",
    link: "#"
  },
  {
    id: 6,
    gambar: Proyek6,
    nama: "Company Profile 2.0",
    desk: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, laborum!",
    tools: ["NextJS", "TailwindCSS", "Framermotion"],
    dad: "700",
    link: "#"
  },
];
