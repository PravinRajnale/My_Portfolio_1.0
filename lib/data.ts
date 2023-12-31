'use client';
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Pursuing B.E.",
    location: "Mumbai, IN",
    description:
      "I will graduate after 2 years of studying. I immediately found an internship as a consultant in 3rd year.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2025",
  },
  {
    title: "Trainee-Deloitte",
    location: "Thane, IN",
    description:
      "I work as an intern at Deloitte Touche Tomatsu in Risk Advisory firm. I am up-scaling myself in Python. ",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2024",
  },
  {
    title: "Full-Stack Developer",
    location: "Mumbai, IN",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
]as const;

export const projectsData = [
  {
    title: "Financiallift",
    description:
      "I worked as a full-stack developer on this  project for a Hackathon. Users can ask questions in public community.",
    tags: ["Express.js", "Next.js", "MongoDB", "Node.js", "RestFulAPI"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Seeds of Hope",
    description:
      "Collaborated in a Hackathon. I was the front-end developer. It has features like Routing and Payment Gateway.",
    tags: ["Javascript", "HTML", "Next.js", "CSS", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Crowdfunding",
    description:
      "A public web3 app for investing in stocks using ethereum. It gives a wide view of the companies present.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Solidity"],
    imageUrl: wordanalyticsImg,
  },
]as const;

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
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Framer Motion",
  "Solidity",
  "RestFulAPI",
  "C",
  "MySQL",
  "DataMining",
  "DataWareHousing",
  "DSA",
  "System Design",
] as const;