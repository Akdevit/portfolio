import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaGithub } from "react-icons/fa";
import { LuTwitter } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
// import { FaPhoneAlt } from "react-icons/fa";
// import { FaFileDownload } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
const Hero = () => {
    const textRef = useRef(null);
    const charRefs = useRef([]);
    const servicesRef = useRef(null);
    const specialize = useRef(null);
    const cursorRef = useRef(null);
    const heroRef = useRef(null); // New ref for the Hero section
    const iconref = useRef(null);
    const iconrefTwitter = useRef(null); // New ref for the
    const buttonhire = useRef(null)
    const iconreflinkedin = useRef(null)
    const iconrefInstagram = useRef(null)

    useEffect(() => {
        // Initialize GSAP animation
        const text = textRef.current;
        const chars = charRefs.current;
        const replaceChar = chars.filter(char => char.getAttribute('data-char') !== '.');

        let tl = gsap.timeline();

        tl.set(chars, {
            yPercent: -110
        });
        tl.set(text, {
            autoAlpha: 1
        });
        tl.to(chars, {
            duration: 1,
            yPercent: 0,
            stagger: 0.05,
            ease: 'expo.inOut'
        }).to(replaceChar, {
            duration: 1,
            yPercent: 110,
            ease: 'expo.inOut',
            repeat: -1,
            yoyo: true,
            stagger: 0.1
        });

        // Initialize GSAP animation for services section
        gsap.fromTo(servicesRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1, delay: 1, ease: 'expo.out' }
        );


        /* button hire */

        gsap.fromTo(buttonhire.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, delay: 2, ease: 'expo.out' }
        )
        /* whatsapp */
        gsap.fromTo(iconref.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, delay: 1, ease: 'expo.out' }
        )
        /* iconrefTwitter */
        gsap.fromTo(iconrefTwitter.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: 'expo.out' }
        )
        /* iconreflinkedin */
        gsap.fromTo(iconreflinkedin.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, delay: 1.5, ease: 'expo.out' }
        )
        /* iconrefInstagram */
        gsap.fromTo(iconrefInstagram.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.5, delay: 1, ease: 'expo.out' }
        )

    }, []);

    const handleHover = (ref, enter) => {
        gsap.to(ref, {
            scale: enter ? 1.2 : 1,
            duration: 0.3,
            ease: "power3.out",
        });

        // Update cursor class based on hover state
        if (enter) {
            cursorRef.current.classList.add('cursorGrow');
        } else {
            cursorRef.current.classList.remove('cursorGrow');
        }
    };

    // Custom cursor movement
    useEffect(() => {
        const updateCursorPosition = (event) => {
            if (heroRef.current && heroRef.current.contains(event.target)) {
                const { clientX: mouseX, clientY: mouseY } = event;
                gsap.to(cursorRef.current, {
                    x: mouseX - 5,  // offset by half of cursor size (30px)
                    y: mouseY - 5,
                    ease: "power3.out",
                    duration: 0.1,
                });
                cursorRef.current.style.display = 'block';  // Show cursor when inside hero section
            } else {
                cursorRef.current.style.display = 'none';  // Hide cursor when outside hero section
            }
        };

        document.addEventListener("mousemove", updateCursorPosition);




        // Cleanup the event listener on component unmount
        return () => {
            document.removeEventListener("mousemove", updateCursorPosition);
        };


    }, []);


    return (
        <>
            <div ref={cursorRef} className='w-[20px] h-[20px] rounded-full border bg-black  border-black fixed z-50 pointer-events-none' style={{ display: 'none' }} />

            <div ref={heroRef} className='w-full h-auto flex  items-end cursor-none'>
                <div className='w-full h-auto flex flex-col items-center p-4'>
                    {/* text animation */}
                    <section className='flex flex-col justify-center items-center  gap-8 '>
                        {/* availablle */}
                        <div className='w-full flex gap-4 justify-start items-end flex-wrap '>
                            <h1 className='xl:text-4xl lg:text-4xl md:text-4xl sm:text-3xl text-3xl font-bold mt-4'>Hi <span >&#128075;</span> There I'm,</h1>
                            <div className='py-1 px-2 border border-black rounded-xl flex items-center gap-2'>
                                <span className='w-3 h-3 bg-green-800 rounded-full'></span>
                                <p>Available 24/7</p>
                            </div>
                        </div>
                        <h1 ref={textRef} className='text-center portfolioh1 text-[15vw] xl:text-[220px] lg:text-[180px] md:text-[130px] sm:text-[120px] xs:text-[130px] font-bold'>
                            <span
                                ref={el => charRefs.current[0] = el}
                                className='block relative span'
                                data-char="A"
                            >
                                A
                            </span>
                            <span
                                ref={el => charRefs.current[1] = el}
                                className='block relative span'
                                data-char="."
                            >
                                B
                            </span>
                            <span
                                ref={el => charRefs.current[2] = el}
                                className='block relative span'
                                data-char="H"
                            >
                                H
                            </span>
                            <span
                                ref={el => charRefs.current[3] = el}
                                className='block relative span'
                                data-char="."
                            >
                                I
                            </span>
                            <span
                                ref={el => charRefs.current[4] = el}
                                className='block relative span'
                                data-char="S"
                            >
                                S
                            </span>
                            <span
                                ref={el => charRefs.current[5] = el}
                                className='block relative span'
                                data-char="."
                            >
                                H
                            </span>
                            <span
                                ref={el => charRefs.current[6] = el}
                                className='block relative span'
                                data-char="E"
                            >
                                E
                            </span>
                            <span
                                ref={el => charRefs.current[7] = el}
                                className='block relative span'
                                data-char="."
                            >
                                K
                            </span>
                        </h1>
                    </section>
                    {/*  */}
                    <h1 className='text-center mt-2 text-xl xl:text-3xl'
                        onMouseEnter={() => handleHover(specialize.current, true)}
                        onMouseLeave={() => handleHover(specialize.current, false)}
                    >#Front End Web Developer</h1>
                    {/* change services */}

                    {/* Services Section */}
                    <div ref={servicesRef} className='w-full h-auto flex flex-col gap-4 justify-center items-center mt-4'>
                        <div className='flex flex-col items-center  '>
                            {/* <h2 className='text-2xl font-semibold'>Our Services</h2> */}
                            <div className='flex flex-wrap items-center justify-center gap-4 '>
                                <div className='p-4 bg-white border border-black rounded-lg w-full h-auto  xl:w-64 xl:h-40 lg:w-64 lg:h-40 md:w-64 md:h-40 sm:w-64 sm:h-40 flex flex-col justify-around'>
                                    <h3 className='text-xl font-medium'
                                        onMouseEnter={() => handleHover(specialize.current, true)}
                                        onMouseLeave={() => handleHover(specialize.current, false)}
                                    >UI/UX Design Integration</h3>
                                    <p
                                        onMouseEnter={() => handleHover(specialize.current, true)}
                                        onMouseLeave={() => handleHover(specialize.current, false)}
                                    >Convert Figma or Adobe XD designs into pixel-perfect, responsive websites.</p>
                                </div>
                                <div className='p-4 bg-white border border-black rounded-lg w-full h-auto  xl:w-64 xl:h-40 lg:w-64 lg:h-40 md:w-64 md:h-40 sm:w-64 sm:h-40 flex flex-col justify-around'>
                                    <h3 className='text-xl font-medium'
                                        onMouseEnter={() => handleHover(specialize.current, true)}
                                        onMouseLeave={() => handleHover(specialize.current, false)}
                                    >Web Development</h3>
                                    <p
                                        onMouseEnter={() => handleHover(specialize.current, true)}
                                        onMouseLeave={() => handleHover(specialize.current, false)}
                                    >Create responsive, scalable websites with modern technologies for seamless user experiences.</p>
                                </div>
                                <div className='p-4 bg-white border border-black rounded-lg w-full h-auto  xl:w-64 xl:h-40 lg:w-64 lg:h-40 md:w-64 md:h-40 sm:w-64 sm:h-40 flex flex-col justify-around'>
                                    <h3 className='text-xl font-medium'
                                        onMouseEnter={() => handleHover(specialize.current, true)}
                                        onMouseLeave={() => handleHover(specialize.current, false)}
                                    >SEO Services</h3>
                                    <p
                                        onMouseEnter={() => handleHover(specialize.current, true)}
                                        onMouseLeave={() => handleHover(specialize.current, false)}
                                    >
                                        Enhance website visibility and rankings through effective SEO optimization and best practices.</p>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-4'>
                            <a href='https://github.com/Akdevit?tab=repositories' target='_blanck' rel="noopener noreferrer">
                                <div ref={iconref} className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                    <FaGithub className='text-white text-xl' />
                                </div>
                            </a>
                            <a href='https://x.com/abhishek419242?t=BxV_Z1dJ3_ud75xSzhvGDg&s=08' target='_blanck' rel="noopener noreferrer" >
                                <div ref={iconrefTwitter} className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                    <LuTwitter className='text-white text-xl' />
                                </div>
                            </a>
                            <a href="https://wa.me/+918757049790?text=Hello! I found your portfolio and would like to discuss a project with you." target='_blanck' rel="noopener noreferrer" >
                                <button ref={buttonhire} className='py-2 px-4 bg-black text-white rounded-md'>Hire me</button>
                            </a>

                            <a href='https://www.linkedin.com/in/abhishek-kumar-123a492a3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' target='_blanck' rel="noopener noreferrer" >
                                <div ref={iconreflinkedin} className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                    <FaLinkedinIn className='text-white text-xl' />
                                </div>
                            </a>
                            <a href='https://www.instagram.com/abhishek_65651?igsh=NDhsODBzd3Jzb204' target='_blanck' rel="noopener noreferrer" >
                                <div ref={iconrefInstagram} className='w-[40px] h-[40px] rounded-full bg-black flex justify-center items-center cursor-pointer'>
                                    <FaInstagram className='text-white text-xl' />
                                </div>
                            </a>
                        </div>
                    </div>


                    {/* our team */}
                    <p
                        onMouseEnter={() => handleHover(specialize.current, true)}
                        onMouseLeave={() => handleHover(specialize.current, false)}
                        className='text-center w-[100%] xl:w-[80%] lg:w-[95%] mt-2'>
                        I am a skilled Front-End Web Developer with expertise in HTML, CSS, JavaScript, Bootstrap, Tailwind CSS, React.js, and Next.js. Currently at Insri Tech Solutions, I deliver innovative, user-focused web solutions. With a strong design sense and a passion for continuous learning, I aim to create impactful digital experiences that align with client goals.
                        </p>
                </div>
            </div>
        </>
    );
};

export default Hero;
