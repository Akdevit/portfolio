import React, { useEffect, useRef } from 'react';
import Highliter from "../../images/higliter.png";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    const experiences = [
        {
            id: "1",
            role: "Front-end Web Developer",
            company: "Webreate",
            duration: "March 2023 - Present",
            description: "Developed responsive websites using React.js, Tailwind CSS, and managed state using Redux for live client projects.",
            techstack: ["React.js", "Redux", "Tailwind CSS", "Next.js"],
        },
        {
            id: "2",
            role: "Freelance Developer",
            company: "Self-employed",
            duration: "Jan 2022 - Feb 2023",
            description: "Completed several freelance projects including creating custom websites for small businesses using modern web technologies.",
            techstack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
        },
        {
            id: "3",
            role: "Junior Web Developer",
            company: "Tech Startup",
            duration: "May 2021 - Dec 2021",
            description: "Assisted in developing web applications with a focus on frontend development and UX design.",
            techstack: ["HTML", "CSS", "JavaScript", "jQuery"],
        },
    ];

    useEffect(() => {
        cardsRef.current.forEach((card, index) => {
            gsap.fromTo(card,
                { opacity: 0, x: 100 },
                {
                    opacity: 1, x: 0, duration: 1, delay: index * 0.3, ease: "power3.out", scrollTrigger: {
                        trigger: card,
                        start: "top 90%", // Trigger animation when each card is 90% into view
                        end: "bottom 10%",
                        scrub: 1
                    }
                }
            );
        });
    }, []);

    return (
        <div ref={sectionRef} className="w-full h-auto p-8">
            <div className='w-[11rem] h-[50px]'>
                <h1 className='text-4xl font-bold stroke relative z-10'>Experience</h1>
                <img className='w-full h-[15px] -mt-2' src={Highliter} alt='highlighter' />
            </div>

            <div className="flex items-start justify-start ">
                <div className='w-auto flex relative '>
                    {/* Vertical Line */}
                    <div className="w-1 h-full bg-gray-800 absolute left-8 transform -translate-x-1/2" />

                    {/* Cards Container */}
                    <div className="w-3/4 ml-8 flex flex-col gap-6 relative">
                        {experiences.map((experience, index) => (
                            <div
                                key={experience.id}
                                ref={(el) => (cardsRef.current[index] = el)} // Attach each card to the refs array
                                className="w-full bg-transparent pl-10 rounded-lg p-4 relative"
                            >
                                {/* Dot */}
                                <div className='absolute left-[-5px] top-8 transform -translate-y-1/2 w-3 h-3 bg-gray-800 rounded-full'></div>

                                <h2 className="text-2xl font-semibold">{experience.role}</h2>
                                <h3 className="text-xl text-gray-600">{experience.company}</h3>
                                <p className="text-gray-500 mt-1">{experience.duration}</p>
                                <p className="text-gray-700 mt-4">{experience.description}</p>
                                <div className="mt-4">
                                    <h4 className="text-lg font-semibold">Tech Stack:</h4>
                                    <ul className="list-disc list-inside text-gray-600">
                                        {experience.techstack.map((tech, index) => (
                                            <li key={index}>{tech}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;