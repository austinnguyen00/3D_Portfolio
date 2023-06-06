import {
  backend,
  carrent,
  css,
  docker,
  figma,
  git,
  hackthebox,
  html,
  javascript,
  jobit,
  kaggle,
  mobile,
  mongodb,
  nodejs,
  react,
  reactjs,
  redux,
  tailwind,
  threejs,
  tripguide,
  typescript,
  uwa,
  web,
  wordfixerbot,
} from "../assets";
import { IExperience, IProject, IService, ITestimonial } from "../types";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: IService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Part-time Chess Player",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences: IExperience[] = [
  {
    title: "Founder & Developer",
    company_name: "WordfixerBot",
    icon: wordfixerbot,
    iconBg: "#fbfdfd",
    date: "Nov 2022 - Present",
    points: [
      "Launched WordfixerBot, a commercial AI-powered writing assistant tool leveraging GPT-3 technology",
      "Developed and maintained the application using React, NextJS, and OpenAI GPT-3",
      "Took charge of marketing and promotion efforts to increase application visibility and user acquisition",
      "Achievement: Reached $200 MRR (Monthly Recurring Revenue) and acquired 200 sign-up customers within the first 5 weeks",
    ],
  },
  {
    title: "Web Developer",
    company_name: "",
    icon: react,
    iconBg: "#222222",
    date: "Sep 2022 - Nov 2022",
    points: [
      "Embarked on a self-study journey to acquire skills in web development technologies",
      "Explored modern frameworks to build responsive and interactive web applications",
      "Completed personal projects demonstrating proficiency in front-end and back-end development",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "",
    icon: kaggle,
    iconBg: "#fbfdfd",
    date: "Jul 2022 - Sep 2022",
    points: [
      "Engaged in comprehensive self-study to acquire skills in data analytics and machine learning",
      "Utilized tools such as Tableau and Python to manipulate and analyze datasets",
      "Implemented machine learning algorithms to extract insights and make data-driven predictions",
      "Continuously expanded knowledge through self-paced online courses and resources",
    ],
  },

  {
    title: "Jnr Penetration Tester",
    company_name: "",
    icon: hackthebox,
    iconBg: "#383E56",
    date: "Nov 2021 - Jun 2022",
    points: [
      "Engaged in extensive self-study on pentesting methodologies, tools, and vulnerabilities",
      "Participated in online platforms - HackTheBox & TryHackMe - to apply acquired knowledge and test skills in a competitive environment",
      "Explored various web platforms to practice ethical hacking techniques and identify vulnerabilities",
      "Earned certificates or completed training programs to validate achievements",
    ],
  },
  {
    title: "Graduate Student",
    company_name: "UWA",
    icon: uwa,
    iconBg: "#fbfdfd",
    date: "Feb 2020 - Dec 2021",
    points: [
      "Bachelor Degree in Computer Science",
      "Committee member at UWA Information Security Society",
    ],
  },
];

const testimonials: ITestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: IProject[] = [
  {
    name: "WordfixerBot",
    description:
      "An AI language processing tool that can paraphrase, grammar check, summarize, and compare text.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "A web application finding music tracks matching user's tastes with Spotify API by fetching data from Spotify API using Django on the backend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "AusDask",
    description:
      "An analysis of commonly required skills for data occupations - Data Analyst, Data Engineer, and Data Scientist - at different seniority levels in Australia in 2022.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
  {
    name: "Chopen",
    description:
      "An exploratory data analysis (EDA) of different chess openings at different levels in rapid time format, find the highest win rate openings, and see their associated popularity.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
