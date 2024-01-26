import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    sparks,
    dream,
    zerohunger,
    yt,
    agri,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
    {
      id: "resume",
      title: "Resume",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "DevOps Enthusiast",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Problem Solving",
      icon: creator,
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
  
  const experiences = [
    {
      title: "Web Developer & Backend Intern",
      company_name: "The Sparks Foundatoin",
      icon: sparks,
      iconBg: "#383E56",
      date: "March 2022 - April 2022",
      points: [
        "Developed a dynamic fundraising and donation platform dedicated to addressing the issue of ZeroHunger.",
        "Integrated a secure and seamless payment gateway utilising RazorPay, ensuring a user-friendly and reliable donation process.",
        "Leveraged a modern techstack, including HTML and CSS for frontend development, while implementing robust backend functionalities with Node.js and Express.js",
      ],
    },
  ];
  
  const testimonials = [
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
  
  const projects = [
    {
      name: "DreamEstate",
      description:
        "A real-estate marketplace that allows users to search and view property listings from various providers. Users can also create and upload their own listings.",
      tags: [
        {
          name: "mern",
          color: "blue-text-gradient",
        },
        {
          name: "redux",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
        {
          name: "firebase",
          color: "blue-text-gradient",
        }
      ],
      image: dream,
      source_code_link: "https://github.com/Kshitijgupta23/mern_estate",
      url: "https://dreamestate-od8m.onrender.com/",
    },
    {
      name: "ZeroHunger",
      description:
        "A fundraising/donation platform to rase funds for ZeroHunger. Users can donate through RazorPay payment portal.",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "green-text-gradient",
        },
        {
          name: "nodejs",
          color: "pink-text-gradient",
        },
      ],
      image: zerohunger,
      source_code_link: "https://zero-hunger-sparks.vercel.app/",
      url: "https://kshitijgupta23.github.io/ZeroHunger_Sparks/",
    },
    {
      name: "YouThoob",
      description:
        "Replicated the core features of YouTube with video sections, personalised categories, and dedicated channel pages. ",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "materialui",
          color: "green-text-gradient",
        },
        {
          name: "rapidapi",
          color: "pink-text-gradient",
        },
      ],
      image: yt,
      source_code_link: "https://github.com/Kshitijgupta23/YouTube_Clone",
      url: "https://youtube-clone-delta-virid.vercel.app/",
    },
    {
      name: "AgriVision",
      description:
        "A website aimed at revolutionising agriculture through integrating machine learning tools. Implemented machine learning algorithms capable of identifying over 20 distinct crop types.",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "jwt",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: agri,
      source_code_link: "https://github.com/Kshitijgupta23/Agrivision",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };