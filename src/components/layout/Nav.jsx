import React, { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";

const Nav = () => {
    const logoRef = useRef(null);
    const homeLinkRef = useRef(null);
    const aboutMeLinkRef = useRef(null);
    const skillsLinkRef = useRef(null);
    const projectsLinkRef = useRef(null);
    const experienceLinkRef = useRef(null);
    const servicesLinkRef = useRef(null);
    const contactMeLinkRef = useRef(null);
    const cursorRef = useRef(null);
    const navRef = useRef(null);
    const [isSticky, setSticky] = useState(false);

    // Sticky behavior
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        };
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    // GSAP animation for the logo and links
    useEffect(() => {
        gsap.fromTo(logoRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" });

        gsap.fromTo(
            [homeLinkRef.current, aboutMeLinkRef.current, skillsLinkRef.current, projectsLinkRef.current, experienceLinkRef.current, servicesLinkRef.current, contactMeLinkRef.current],
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power3.out" }
        );
    }, []);

    // Hover effect for individual links
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
            if (navRef.current && navRef.current.contains(event.target)) {
                const { clientX: mouseX, clientY: mouseY } = event;
                gsap.to(cursorRef.current, {
                    y: mouseY - 5,
                    x: mouseX - 5,
                    ease: "power3.out",
                    duration: 0.1,
                });
                cursorRef.current.style.display = 'block'; // Show cursor when inside nav
            } else {
                cursorRef.current.style.display = 'none'; // Hide cursor when outside nav
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
            {/* Custom Cursor */}
            <div ref={cursorRef} className='w-[20px] h-[20px] rounded-full border bg-black border-black fixed z-50 pointer-events-none' style={{ display: 'none' }} />

            <div ref={navRef} className={`w-full h-auto flex justify-center items-center fixed top-0 left-0 z-30 cursor-none transition-all duration-300 ease-in-out ${isSticky ? 'bg-transparent  py-2' : 'bg-transparent py-4'}`}>
                <div className='w-[90%] h-[70px] rounded-md flex justify-between items-center px-4 transition-all duration-300 bg-[#F3F4F6] ease-in-out'>

                    {/* Logo */}
                    <h1 ref={logoRef} className={`${isSticky ? 'text-gray-800' : 'text-gray-600'} transition-colors duration-300 ease-in-out`}>Abhishek (logo)</h1>

                    {/* Links */}
                    <div className='w-auto h-auto'>
                        <ul className='flex gap-4'>
                            <li ref={homeLinkRef}
                                onMouseEnter={() => handleHover(homeLinkRef.current, true)}
                                onMouseLeave={() => handleHover(homeLinkRef.current, false)}>
                                <a href='/' className=''>Home</a>
                            </li>
                            <li ref={aboutMeLinkRef}
                                onMouseEnter={() => handleHover(aboutMeLinkRef.current, true)}
                                onMouseLeave={() => handleHover(aboutMeLinkRef.current, false)}>
                                <a href='/' className=''>About Me</a>
                            </li>
                            <li ref={servicesLinkRef}
                                onMouseEnter={() => handleHover(servicesLinkRef.current, true)}
                                onMouseLeave={() => handleHover(servicesLinkRef.current, false)}>
                                <a href='/' className=''>Our Services</a>
                            </li>
                            <li ref={skillsLinkRef}
                                onMouseEnter={() => handleHover(skillsLinkRef.current, true)}
                                onMouseLeave={() => handleHover(skillsLinkRef.current, false)}>
                                <a href='/' className=''>Skills</a>
                            </li>
                            <li ref={projectsLinkRef}
                                onMouseEnter={() => handleHover(projectsLinkRef.current, true)}
                                onMouseLeave={() => handleHover(projectsLinkRef.current, false)}>
                                <a href='/' className=''>Projects</a>
                            </li>
                            <li ref={experienceLinkRef}
                                onMouseEnter={() => handleHover(experienceLinkRef.current, true)}
                                onMouseLeave={() => handleHover(experienceLinkRef.current, false)}>
                                <a href='/' className=''>Experience</a>
                            </li>
                            <li ref={contactMeLinkRef}
                                onMouseEnter={() => handleHover(contactMeLinkRef.current, true)}
                                onMouseLeave={() => handleHover(contactMeLinkRef.current, false)}>
                                <a href='/' className=''>Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
