import { FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import Project1 from '../assets/recipe.png';
import Project2 from '../assets/airbnb.png';
import Project3 from '../assets/quiz.png';

export const Skills = [
    {
        id: 0,
        tech: "React JS",
        icon: <FaReact />
    },
        {
        id: 1,
        tech: "Node JS",
        icon: <FaNode />
    },
        {
        id: 2,
        tech: "CSS",
        icon: <FaCss3Alt />
    },
        {
        id: 3,
        tech: "Javascript",
        icon: <SiJavascript />
    }
];

export const projectDetails = [
    {
        id: 0,
        project_name: "Recipe App",
        project_desc: "Just a small project for those like me that like to cock but sometimes need help to find a recipe.",
        tech_stack: ["API", "React JS", "HTML", "CSS"],
        project_img: Project1,
        project_url: "https://js-project-recipe-library.pages.dev/",
        reverse: false,
    },
    {
        id: 1,
        project_name: "AirBnB",
        project_desc: "An AirBnb for me and my girlfriends future dream. The plan is to have a more private Airbnb so thats why we create our own.",
        tech_stack: ["Figma", "JavaScript", "HTML", "CSS"],
        project_img: Project2,
        project_url: "https://precious-phoenix-9a27e1.netlify.app/",
        reverse: true,
    },
    {
        id: 2,
        project_name: "Quiz",
        project_desc: "Me and a Group of colleagues did this Quiz to practice Web Content Accessibility Guidelines and also working in groups.",
        tech_stack: ["Github", "JavaScript", "HTML", "CSS", "WCAG"],
        project_img: Project3,
        project_url: "https://accessibilitymixedgroup.netlify.app/",
        reverse: false,
    }
]

export const navLinks = [
    {
        id: 0,
        name: 'Home',
        href: 'Home'
    },
        {
        id: 1,
        name: 'My Skills',
        href: 'Skills'
    },
        {
        id: 2,
        name: 'My Projects',
        href: 'Projects'
    },
        {
        id: 3,
        name: 'My Contact',
        href: 'Contact'
    },
]