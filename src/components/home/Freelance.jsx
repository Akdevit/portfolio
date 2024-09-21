import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Trophy from "../../images/freelance/trophy.png";

gsap.registerPlugin(ScrollTrigger);

const Freelance = () => {
    const sectionRef = useRef(null);
    const titleRef = useRef(null);
    const subTitleRef = useRef(null);
    const trophyRef = useRef(null);
    const buttonRef = useRef(null);

    useLayoutEffect(() => {
        // Timeline for animations
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top center",
                toggleActions: "play none none reverse",
            },
        });

        // Animation for title with scaling effect
        tl.fromTo(
            titleRef.current, 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.5, ease: "elastic.out(1, 0.5)" }
        )
        // SubTitle animation with rotate effect
        .fromTo(
            subTitleRef.current,
            { rotateX: 90, opacity: 0 },
            { rotateX: 0, opacity: 1, duration: 1.2, ease: "power2.out" },
            "-=1" // Overlap animation by 1 second
        )
        // Trophy animation with spin and fade-in
        .fromTo(
            trophyRef.current,
            { rotateY: 360, opacity: 0 },
            { rotateY: 0, opacity: 1, duration: 1, ease: "power3.out" },
            "-=0.5"
        )
        // Button animation with slight bounce effect
        .fromTo(
            buttonRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "bounce.out" },
            "-=0.5"
        );
    }, []);

    return (
        <div className="w-full h-auto flex flex-col gap-4 justify-center items-center mt-6 py-4 overflow-hidden" ref={sectionRef}>
            <div className="w-auto h-auto relative ">
                <h1 
                    ref={titleRef} 
                    className="footerh1 text-center px-4 text-[70px] sm:text-[100px] lg:text-[200px] xl:text-[250px]"
                >
                    Freelancer
                </h1>
                <img
                    ref={trophyRef}
                    src={Trophy}
                    alt="Trophy"
                    className="absolute w-14 sm:w-16 lg:w-32 xl:w-40 h-auto -top-8 sm:-top-8 lg:-top-12 xl:-top-16 z-10 xl:right-8 right-4 sm:right-12 transform -translate-y-1/2"
                />
            </div>
            <h1 
                ref={subTitleRef} 
                className="h1textcontact text-center px-4 text-[30px] sm:text-[40px] lg:text-[60px] xl:text-[100px]"
            >
                Available for Freelance Work: Front-End Development and Design
            </h1>
            <a
                href="https://api.whatsapp.com/send?phone=+918757049790&text=Hello!%20I%20am%20interested%20in%20hiring%20you%20as%20a%20freelancer."
                target="_blank"
                rel="noopener noreferrer"
            >
                <div 
                    ref={buttonRef} 
                    className="p-2 px-4 rounded-md bg-black text-white cursor-pointer mt-4 sm:text-[14px] lg:text-[18px] xl:text-[20px]"
                >
                    Hire me as a Freelancer
                </div>
            </a>
        </div>
    );
};

export default Freelance;
