import React, { useEffect, useRef } from 'react';
import { gsap } from "gsap";

const Nav = () => {
    const logoRef = useRef(null);
    const homeLinkRef = useRef(null);
    const aboutMeLinkRef = useRef(null);  // Renamed for consistency
    const skillsLinkRef = useRef(null);   // Renamed for consistency
    const projectsLinkRef = useRef(null);
    const experienceLinkRef = useRef(null); // Renamed for consistency
    const servicesLinkRef = useRef(null);  // Renamed to "servicesLinkRef" for "Our Services"
    const contactMeLinkRef = useRef(null); // Renamed for consistency
    const cursorRef = useRef(null);
    const navRef = useRef(null);

    useEffect(() => {
        // GSAP animation for the logo
        gsap.fromTo(logoRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, ease: "power3.out" });

        // GSAP animation for the individual links
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
                    x: mouseX - 5,  // offset by half of cursor size (30px)
                    ease: "power3.out",
                    duration: 0.1,
                });
                cursorRef.current.style.display = 'block';  // Show cursor when inside nav
            } else {
                cursorRef.current.style.display = 'none';  // Hide cursor when outside nav
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

            <div ref={navRef} className='w-full h-auto flex justify-center items-center absolute top-0 left-0 cursor-none'>
                <div className='w-[90%] h-[70px] bg-[#F3F4F6] rounded-md mt-4 flex justify-between items-center px-4'>
                    {/* Logo */}
                    <h1 ref={logoRef}>Abhishek (logo)</h1>

                    {/* Links */}
                    <div className='w-auto h-auto'>
                        <ul className='flex gap-4'>
                            <li
                                ref={homeLinkRef}
                                onMouseEnter={() => handleHover(homeLinkRef.current, true)}
                                onMouseLeave={() => handleHover(homeLinkRef.current, false)}
                            >
                                <a href='/'>Home</a>
                            </li>
                            <li
                                ref={aboutMeLinkRef}
                                onMouseEnter={() => handleHover(aboutMeLinkRef.current, true)}
                                onMouseLeave={() => handleHover(aboutMeLinkRef.current, false)}
                            >
                                <a href='/'>About Me</a>
                            </li>
                            <li
                                ref={skillsLinkRef}
                                onMouseEnter={() => handleHover(skillsLinkRef.current, true)}
                                onMouseLeave={() => handleHover(skillsLinkRef.current, false)}
                            >
                                <a href='/'>Skills</a>
                            </li>
                            <li
                                ref={projectsLinkRef}
                                onMouseEnter={() => handleHover(projectsLinkRef.current, true)}
                                onMouseLeave={() => handleHover(projectsLinkRef.current, false)}
                            >
                                <a href='/'>Projects</a>
                            </li>
                            <li
                                ref={experienceLinkRef}
                                onMouseEnter={() => handleHover(experienceLinkRef.current, true)}
                                onMouseLeave={() => handleHover(experienceLinkRef.current, false)}
                            >
                                <a href='/'>Experience</a>
                            </li>
                            <li
                                ref={servicesLinkRef}
                                onMouseEnter={() => handleHover(servicesLinkRef.current, true)}
                                onMouseLeave={() => handleHover(servicesLinkRef.current, false)}
                            >
                                <a href='/'>Our Services</a>
                            </li>
                            <li
                                ref={contactMeLinkRef}
                                onMouseEnter={() => handleHover(contactMeLinkRef.current, true)}
                                onMouseLeave={() => handleHover(contactMeLinkRef.current, false)}
                            >
                                <a href='/'>Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Nav;
