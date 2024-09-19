import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Office from "../../images/freelance/office.png";
import Trophy from "../../images/freelance/trophy.png";
import UndefinedImage from "../../images/freelance/undefined.png"; // Changed variable name to avoid conflicts
import Award from "../../images/freelance/award.png";
gsap.registerPlugin(ScrollTrigger);

const Freelance = () => {
    const bodyContainer = useRef(null);
    const freelanceText = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.to(freelanceText.current, {
                xPercent: -100, // Move text fully to the left
                ease: "none", // Linear scrolling effect
                scrollTrigger: {
                    trigger: bodyContainer.current, // Scroll effect starts on this container
                    start: "top 20%", // Start when container reaches the top of viewport
                    end: () => "+=" + bodyContainer.current.offsetWidth, // End after scrolling through the container
                    scrub: 1, // Smooth scrolling
                    pin: true, // Pin the section so the text scrolls horizontally
                    // markers: true, // Markers for debugging
                },
            });
        });

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <>
            <div
                ref={bodyContainer}
                id="page"
                className="w-full h-auto p-4 overflow-hidden flex"
            >
                {/* Horizontally scrolling text */}
                <div
                    ref={freelanceText}
                    className="freelance xl:text-[350px] lg:text-[300px] md:text-[250px] sm:text-[200px] text-[150px] whitespace-nowrap flex gap-12"
                >
                    <div className="p-2 rounded-md text-black relative">
                        <h1>Hire</h1>
                        <img
                            src={Office}
                            alt="office"
                            className="xl:w-40 w-32 h-auto absolute right-10 -top-6"
                        />
                    </div>
                    <h1>me</h1>
                    <div className="p-2 rounded-md text-black relative">
                        <h1>as</h1>
                        <img
                            src={Trophy}
                            alt="trophy"
                            className="xl:w-40 w-32 h-auto absolute right-10 -top-6"
                        />
                    </div>
                    <h1>a</h1>

                    <div className="p-2 rounded-md text-black relative">
                        <h1>Freelancer</h1>
                        <img
                            src={UndefinedImage}
                            alt="undefined"
                            className="xl:w-40 w-32 h-auto absolute right-9 top-4"
                        />
                        <img
                            src={Award}
                            alt="Award"
                            className="xl:w-40 w-32 h-auto absolute left-40 -top-6"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Freelance;
