import React, { useEffect, useRef } from 'react';
import { FaReact, FaEye, FaCode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoSettings } from "react-icons/io5";
import { SiRedux, SiNextdotjs, SiGooglegemini } from "react-icons/si";
import { FaNodeJs } from 'react-icons/fa6';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import example images
import SafeSky from '../../images/projects/safesk.png';
import Taskmaster from '../../images/projects/akdevit.png';
import CaptionNest from '../../images/projects/captionnest.png';
import Chartify from '../../images/projects/chartify.png';
import ContentCrafter from '../../images/projects/contentcrafterai.png';
import Creovate from '../../images/projects/creovate.png';
import Crypto from '../../images/projects/crypto.png';
import FreelanceFoodReduction from "../../images/projects/food.png";
import Highliter from "../../images/higliter.png";

// Register ScrollTrigger plugin for GSAP
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
    const cardRefs = useRef([]);

    useEffect(() => {
        // Animate cards on scroll using GSAP ScrollTrigger
        cardRefs.current.forEach((card, index) => {
            gsap.fromTo(
                card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    ease: 'power4.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 80%',
                        toggleActions: 'play none none reverse',
                        scrub: 1
                    },
                }
            );
        });
    }, []);

    const projects = [
        {
            id: "1",
            name: " Food Reduction",
            description: "A successful freelance project focused on reducing food waste by connecting donors, groceries, and seekers.",
            image: FreelanceFoodReduction,
            link: "https://example.com/freelance-food-reduction",
            techstack: [<FaReact />, <SiRedux />, <RiTailwindCssFill />],
            type: "freelance",
        },
        {
            id: "2",
            name: "SafeSky",
            description: "A project focused on providing real-time air quality and weather data to ensure safe living conditions.",
            image: SafeSky,
            link: "https://example.com/safesky",
            techstack: [<FaReact />, <SiRedux />, <RiTailwindCssFill />, <IoSettings />],
            type: "project",
        },
        {
            id: "3",
            name: "Taskmaster",
            description: "A task management application designed to help users organize their daily activities and tasks efficiently.",
            image: Taskmaster,
            link: "https://example.com/taskmaster",
            techstack: [<SiNextdotjs />, <SiRedux />, <RiTailwindCssFill />],
            type: "project",
        },
        {
            id: "4",
            name: "CaptionNest",
            description: "A platform for generating and managing captions for social media and other content.",
            image: CaptionNest,
            link: "https://example.com/captionnest",
            techstack: [<FaReact />, <RiTailwindCssFill />, <IoSettings />, <SiGooglegemini />],
            type: "project",
        },
        {
            id: "5",
            name: "Chartify",
            description: "An application that helps visualize data with interactive charts and graphs.",
            image: Chartify,
            link: "https://example.com/chartify",
            techstack: [<FaReact />, <RiTailwindCssFill />, <IoSettings />, <SiGooglegemini />],
            type: "project",
        },
        {
            id: "6",
            name: "ContentCrafter",
            description: "An AI-powered content generation tool designed to craft engaging and relevant content for various platforms.",
            image: ContentCrafter,
            link: "https://example.com/contentcrafter",
            techstack: [<FaReact />, <SiRedux />, <RiTailwindCssFill />, <IoSettings />, <SiGooglegemini />],
            type: "project",
        },
        {
            id: "7",
            name: "Creovate",
            description: "A platform for collaborative innovation and project management.",
            image: Creovate,
            link: "https://example.com/creovate",
            techstack: [<FaReact />, <RiTailwindCssFill />, <IoSettings />, <FaNodeJs />],
            type: "project",
        },
        {
            id: "8",
            name: "Crypto",
            description: "A comprehensive tool for tracking and analyzing cryptocurrency market trends.",
            image: Crypto,
            link: "https://example.com/crypto",
            techstack: [<FaReact />, <RiTailwindCssFill />, <IoSettings />],
            type: "project",
        }
    ];

    return (
        <div className="w-full h-auto  p-8">
            <div className='w-full h-auto  flex justify-between'>

                <div className="w-[14rem] h-[50px] ">
                    <h1 className="text-4xl font-bold stroke relative z-10">My Projects</h1>
                    <img className="w-full h-[15px] -mt-2" src={Highliter} alt="highlighter" />
                </div>
                <div className='py-1 px-4 border border-black rounded-lg flex items-center cursor-pointer hover:bg-black hover:text-white duration-100'>Explore more</div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        ref={(el) => (cardRefs.current[index] = el)}
                        className="relative bg-white border border-black rounded-lg  p-4 transform transition-transform duration-300 hover:scale-105 hover:shadow-xl "
                    >
                        <img src={project.image} alt={project.name} className="w-full h-40 object-cover rounded-t-md" />
                        <h2 className="text-2xl font-semibold mt-4">{project.name}</h2>
                        <p className="text-gray-600 mt-2">{project.description}</p>
                        <div className="flex mt-4 gap-2">
                            {project.techstack.map((tech, index) => (
                                <span key={index} className="text-xl">{tech}</span>
                            ))}
                            <div className="py-0 px-4 border border-black rounded-lg flex justify-center items-center">
                                <p>{project.type}</p>
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-black cursor-pointer">
                                <FaEye className="text-white" />
                            </a>
                            <div className="p-2 rounded-full bg-black cursor-pointer">
                                <FaCode className="text-white" />
                            </div>
                        </div>
                        {/* number */}
                        <h1 className='h1text absolute top-1 right-2 text-gray-200'>{project.id}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
