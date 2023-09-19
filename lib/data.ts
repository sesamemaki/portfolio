import React from "react";
// import { CgWorkAlt } from "react-icons/cg";
// import { FaReact } from "react-icons/fa";
import { LuGraduationCap, LuFileEdit } from "react-icons/lu";
import givingly from "@/public/givingly.png"
import nominator from "@/public/nominator.png"
import movie from "@/public/movie.png"
import hangman from "@/public/hangman.png"
import cube from "@/public/cube.png"

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "Akbank React Bootcamp – Patika.dev",
        location: "Online",
        description: "Completed a 7-week compelling React bootcamp with a low acceptance rate opened only for women by Akbank. Worked with styled-components and various industry standards in JavaScript,Typescript, and React.",
        icon: React.createElement(LuGraduationCap),
        date: "August 2022 – October 2022",
    },
    {
        title: "Computer Programming - Anadolu University Open Education Faculty",
        location: "Online",
        description:
            "Introductory training in Java, Python, Ruby, C#, .NET, Ruby on Rails, and PHP languages as part of the Second University program.",
        icon: React.createElement(LuGraduationCap),
        date: "October 2022 - present",
    },
    {
        title: "Frontend Web Development Bootcamp - Re:Coded",
        location: "Online",
        description: "Completed a 4.5-month immersive web development bootcamp, with 300+ hours of curricula and project-based learning Worked with various development teams to create products across industries with HTML, CSS, JavaScript, React, Next.js technologies.",
        icon: React.createElement(LuGraduationCap),
        date: "March 2023 – September 2023",
    },
    {
        title: "MDN Web Docs",
        location: "Open-source Contribution",
        description: "Contributed to the content behind MDN Web Docs. Macro order has been rearranged for a better user experience.",
        icon: React.createElement(LuFileEdit),
        date: "September 2023 – Present ",
    },

] as const;

export const projectsData = [
    {
        title: "Givingly",
        description:
            "Developed a crowdfunding platform with Next.js and related technologies as a Re:Coded graduation project. It has features showcasing goals and progress, browsing by category, user authentication, providing multiple language.",
        tags: ["React", "Next.js", "Tailwind", "Firebase", "i18next"],
        imageUrl: givingly,
        projectUrl: "https://cut.lu/ifrwj1"
    },
    {
        title: "Nominator",
        description:
            "Created a movie nomination app by fetching OMDB API. It has features implemented search movies by name.",
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: nominator,
        projectUrl: "http://cut.lu/ua8ora"
    },
    {
        title: "Movie DB",
        description:
            "Created a movie database app by fetching TMDB API. It has features implemented search and filtering movies and cast by genres",
        tags: ["Javascript", "Bootstrap"],
        imageUrl: movie,
        projectUrl: "http://cut.lu/yvtcqw"
    },
    {
        title: "Hangman",
        description:
            "Created a hangman game by fetching Random Word API. The random word is search through to find if it contains the clicked letter, if the clicked letter is part of the random word's letters then it gets shown up instead of the space, if not, then the lives counter is decreased by one.",
        tags: ["Javascript", "Tailwind"],
        imageUrl: hangman,
        projectUrl: "https://cut.lu/uvmm0p"
    },
    {
        title: "3D Cube",
        description:
            "Created an animated cube that continuously rotates and pops up when clicking.",
        tags: ["React", "Bootstrap", "CSS"],
        imageUrl: cube,
        projectUrl: "https://cut.lu/1lfl7g"
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind",
    "Bootstrap",
    "Redux",
    "Firebase",
    "Docker",
    "Framer Motion",
    "WordPress",
    "i18next Internationalization"
] as const;