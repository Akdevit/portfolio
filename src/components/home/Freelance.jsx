import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Office from "../../images/freelance/office.png"
import Trophy from "../../images/freelance/trophy.png"
import undefined from "../../images/freelance/undefined.png"
import Award from "../../images/freelance/award.png"
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
                }
            });
        });

        return () => ctx.revert(); // Cleanup on unmount
    }, []);

    return (
        <>
            <div ref={bodyContainer} id="page" className="w-full h-auto   p-4 overflow-hidden flex">
                {/* Horizontally scrolling text */}
                <div ref={freelanceText} className="freelance whitespace-nowrap flex gap-12">
                    <div className="p-2 rounded-md  text-black relative">
                        <h1>Hire </h1>
                        <img src={Office} alt="noted" className="w-40 h-auto absolute right-10 top-0" />

                    </div>
                    <h1>me</h1>
                    <div className="p-2 rounded-md  text-black relative">
                        <h1>as </h1>
                        <img src={Trophy} alt="noted" className="w-40 h-auto absolute right-10 top-0" />

                    </div>
                    <h1> a</h1>

                    <div className="p-2 rounded-md  text-black spantextfreelance relative">
                        <h1>Freelancer</h1>
                        <img src={undefined} alt="undefined" className="w-40 h-auto absolute right-9 top-4" />
                        <img src={Award} alt="Award" className="w-40 h-auto absolute left-40 top-2" />
                    </div>
                </div>
            </div>

        </>
    );
};

export default Freelance;
