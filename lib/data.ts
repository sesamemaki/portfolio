import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
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
        title: "Graduated bootcamp",
        location: "Miami, FL",
        description:
            "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
        icon: React.createElement(LuGraduationCap),
        date: "2019",
    },
    {
        title: "Front-End Developer",
        location: "Orlando, FL",
        description:
            "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
        icon: React.createElement(CgWorkAlt),
        date: "2019 - 2021",
    },
    {
        title: "Full-Stack Developer",
        location: "Houston, TX",
        description:
            "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
        icon: React.createElement(FaReact),
        date: "2021 - present",
    },
] as const;

export const projectsData = [
    {
        title: "Givingly",
        description:
            "Developed a crowdfunding platform with Next.js and related technologies as a Re:Coded graduation project. It has features showcasing goals and progress, browsing by category, user authentication, providing multiple language.",
        tags: ["React", "Next.js", "Tailwind", "Firebase", "i18next"],
        imageUrl: givingly,
    },
    {
        title: "Nominator",
        description:
            "Created a movie nomination app by fetching OMDB API. It has features implemented search movies by name.",
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: nominator,
    },
    {
        title: "Movie DB",
        description:
            "Created a movie database app by fetching TMDB API. It has features implemented search and filtering movies and cast by genres",
        tags: ["Javascript", "Bootstrap"],
        imageUrl: movie,
    },
    {
        title: "Hangman",
        description:
            "Created a hangman game by fetching Random Word API. The random word is search through to find if it contains the clicked letter, if the clicked letter is part of the random word's letters then it gets shown up instead of the space, if not, then the lives counter is decreased by one. If the lives counter reaches 0 then the game is over and the hangman should be HANGED.",
        tags: ["Javascript", "Tailwind"],
        imageUrl: hangman,
    },
    {
        title: "3D Cube",
        description:
            " Created an animated cube that continuously rotates and pops up when clicking.",
        tags: ["React", "Bootstrap", "CSS"],
        imageUrl: cube,
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Redux",
    "GraphQL",
    "Apollo",
    "Express",
    "PostgreSQL",
    "Python",
    "Django",
    "Framer Motion",
] as const;