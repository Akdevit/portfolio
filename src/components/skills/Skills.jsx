import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
/* icon */
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BsBootstrapFill } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaFigma } from "react-icons/fa";
import { SiAdobexd } from "react-icons/si";
import { SiThreedotjs } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { IoSettings } from "react-icons/io5";
import { MdDevices } from "react-icons/md";

/* Highlighter Image */
import Highliter from "../../images/higliter.png";

const Skills = () => {
    const skillsRef = useRef([]);


    const skills = [
        { skill: "HTML", icon: <FaHtml5 size={50} />, color: "green" },
        { skill: "CSS", icon: <FaCss3Alt size={50} />, color: "green" },
        { skill: "Bootstrap", icon: <BsBootstrapFill size={50} />, color: "#FFEB3C" },
        { skill: "Tailwind CSS", icon: <RiTailwindCssFill size={50} />, color: "green" },
        { skill: "JavaScript", icon: <IoLogoJavascript size={50} />, color: "green" },
        { skill: "React.js", icon: <FaReact size={50} />, color: "green" },
        { skill: "Redux", icon: <SiRedux size={50} />, color: "green" },
        { skill: "REST API", icon: <IoSettings size={50} />, color: "green" },
        { skill: "Next.js", icon: <SiNextdotjs size={50} />, color: "green" },
        { skill: "TypeScript", icon: <SiTypescript size={50} />, color: "#FFEB3C" },
        { skill: "Figma", icon: <FaFigma size={50} />, color: "green" },
        { skill: "Adobe XD", icon: <SiAdobexd size={50} />, color: "#FFEB3C" },
        { skill: "Responsive Design", icon: <MdDevices size={50} />, color: "green" },
        { skill: "GSAP", icon: <h1 className='text-3xl font-bold' >GSAP</h1>, color: "#FFEB3C" },
        { skill: "Three.js", icon: <SiThreedotjs size={50} />, color: "#FFEB3C" }
    ];

    useEffect(() => {
        // GSAP wave animation
        gsap.to(skillsRef.current, {
            y: -20,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut",
            duration: 0.8,
            stagger: {
                each: 0.2,
            },
        });

        // GSAP hover effect
        skillsRef.current.forEach((el) => {
            el.addEventListener("mouseenter", () => {
                gsap.to(el, {
                    scale: 1.1,
                    rotate: 5,
                    boxShadow: "0px 15px 30px rgba(0, 0, 0, 0.2)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            });

            el.addEventListener("mouseleave", () => {
                gsap.to(el, {
                    scale: 1,
                    rotate: 0,
                    boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                    duration: 0.4,
                    ease: "power2.out",
                });
            });
        });
    }, []);

    return (
        <div className="w-full h-auto py-10">
            <div className='w-[14rem] h-[50px] pl-12'>
                <h1 className='text-4xl font-bold stroke relative z-10'>My Skills</h1>
                <img className='w-full h-[15px] -mt-2' src={Highliter} alt='highlighter' />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-10 mt-8">
                {skills.map((skill, index) => (
                    <div
                        ref={(el) => (skillsRef.current[index] = el)}
                        key={index}
                        className="bg-white border border-black cursor-pointer p-6 rounded-lg transition-all duration-300 relative"
                    >
                        <span className='absolute right-4 top-4 w-2 h-2 rounded-full' style={{ backgroundColor: skill.color }}></span>
                        <div className="w-16 h-16 mx-auto mb-4 text-center">
                            {skill.icon}
                        </div>
                        <h2 className="text-xl font-semibold text-center">{skill.skill}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Skills;
