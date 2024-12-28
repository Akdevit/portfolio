import React, { useEffect, useRef } from 'react';
import Man from "../../images/man.png";
import Highliter from "../../images/higliter.png";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';
import { FaWhatsapp, FaLinkedinIn, FaFileDownload } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";
import PDFResume from "../../images/pdf/resume-Abhishek kumar.pdf"
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


    /* downloade PDF */
    const downloadFile = () => {
        const link = document.createElement('a');
        link.href = PDFResume;  // Specify the path to your PDF
        link.download = 'Resume.pdf';  // File name to save as
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };


    return (
        <div className='w-full h-auto bg-gray-50 flex justify-center items-center p-4 sm:p-6 lg:p-8 '>
            <div className='w-full h-full bg-white rounded-md border border-black flex flex-col-reverse lg:flex-row overflow-hidden'>
                {/* About yourself */}
                <div className='w-full lg:w-1/2 p-4 lg:p-6 flex flex-col gap-4'>
                    {/* Text heading */}

                    <div className="w-[11rem] h-[50px] ">
                        <h1 className="text-4xl font-bold stroke relative z-10">About Me</h1>
                        <img className="w-full h-[15px] -mt-2" src={Highliter} alt="highlighter" />
                    </div>

                    <p
                        ref={textRef}
                        className='text-base sm:text-lg lg:text-xl'
                    >
                        I am an accomplished Front-End Web Developer with expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, and Next.js. My proficiency spans both web development and design, enabling me to create visually stunning and highly functional user interfaces.
                        Currently, I am contributing to Insri Tech Solutions, where I am actively involved in live projects, delivering innovative and impactful solutions that align with client needs and business goals.
                        With a strong track record of success and a dedication to continuous learning, I am passionate about mastering the art of web development. I am eager to leverage my skills, creativity, and commitment to excellence to drive value and success for your team.
                    </p>

                    {/* Social media icons */}
                    <div className='flex gap-4'>
                        <a href="https://wa.me/+918757049790?text=Hello! I found your portfolio and would like to discuss a project with you." target='_blanck' rel="noopener noreferrer" >
                            <div className='w-10 h-10 rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <FaWhatsapp className='text-white text-xl' />
                            </div>
                        </a>
                        <a href='https://x.com/abhishek419242?t=BxV_Z1dJ3_ud75xSzhvGDg&s=08' target='_blanck' rel="noopener noreferrer" >
                            <div className='w-10 h-10 rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <LuTwitter className='text-white text-xl' />
                            </div>
                        </a>
                        <a href='https://www.linkedin.com/in/abhishek-kumar-123a492a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blanck' rel="noopener noreferrer" >
                            <div className='w-10 h-10 rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <FaLinkedinIn className='text-white text-xl' />
                            </div>
                        </a>
                        <a href='https://www.instagram.com/abhishek_65651?igsh=NDhsODBzd3Jzb204' target='_blanck' rel="noopener noreferrer" >
                            <div className='w-10 h-10 rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                <FaInstagram className='text-white text-xl' />
                            </div>
                        </a>
                    </div>

                    {/* CV download */}
                    <div onClick={downloadFile} className='w-full sm:w-60 h-12 bg-black text-white rounded-md flex justify-center items-center cursor-pointer gap-2 mt-4'>
                        Download Resume
                        <FaFileDownload className='text-white' />
                    </div>
                </div>

                {/* Image */}
                <div className='w-full lg:w-1/2 flex justify-center lg:justify-end items-center p-4 lg:p-6'>
                    <img className='w-full max-w-lg h-auto' src={Man} alt='man' />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
