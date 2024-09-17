import React, { useEffect, useRef } from 'react';
import Man from "../../images/man.png";
import Highliter from "../../images/higliter.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { FaWhatsapp } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
import { FaFileDownload } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
    const textRef = useRef(null);

    useEffect(() => {
        // Split the text into characters
        const splitText = new SplitType(textRef.current, { types: 'chars' });

        // GSAP animation for the text
        gsap.from(
            splitText.chars,
            {
                scrollTrigger: {
                    trigger: textRef.current,
                    start: 'top 80%',
                    end: 'top 20%',
                    scrub: true,
                    markers: false,
                },
                opacity: 0.2,
                stagger: 0.1,
                pin: true,
            }
        );
    }, []);

    return (
        <>
            <div className='w-full h-auto bg-gray-50 flex justify-center items-center p-8'>
                <div className='w-full h-full bg-white rounded-md flex border border-black'>
                    {/* About yourself */}
                    <div className='w-[50%] h-auto flex flex-col gap-4 p-6 justify-between'>
                        {/* Text heading */}
                        <div className='w-[11rem] h-[50px]'>
                            <h1 className='text-4xl font-bold stroke relative z-10'>About Me</h1>
                            <img className='w-full h-[15px] -mt-2' src={Highliter} alt='highlighter' />
                        </div>

                        <p
                            ref={textRef}
                            className='xl:text-2xl lg:text-xl '
                        >
                            I'm a passionate front-end web developer with 3 months of hands-on
                            experience in crafting responsive websites and web applications. My
                            expertise lies in utilizing modern technologies like HTML, CSS,
                            JavaScript, and React to deliver user-friendly and efficient solutions.
                            I take pride in writing clean, optimized code while collaborating
                            closely with design teams to bring seamless user experiences to life.
                            <br />
                            I’m also skilled in leveraging frameworks like Bootstrap and Tailwind CSS
                            for intuitive and visually appealing UI designs. Additionally, I work
                            with React and Next.js to build dynamic, high-performance applications
                            that align with modern web standards. My focus is on delivering fast,
                            responsive, and accessible web projects that meet the needs of users and
                            businesses alike.
                        </p>

                        {/* Social media icons */}
                        <div className='w-full h-auto flex gap-4'>
                            <div className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <FaWhatsapp className='text-white text-xl' />
                            </div>
                            <div className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <LuTwitter className='text-white text-xl' />
                            </div>
                            <div className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <FaLinkedinIn className='text-white text-xl' />
                            </div>
                            <div className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <FaInstagram className='text-white text-xl' />
                            </div>
                        </div>

                        {/* CV download */}
                        <div className='w-[11rem] h-[2.5rem] bg-black text-white rounded-md flex justify-center items-center cursor-pointer gap-2'>
                            Download Resume
                            <FaFileDownload className='text-white' />
                        </div>
                    </div>

                    {/* Image */}
                    <div className='w-[50%] h-auto flex justify-end items-center'>
                        <img className='w-[650px] h-auto' src={Man} alt='man' />

                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
