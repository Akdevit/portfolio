import React, { useEffect, useRef } from 'react';
import { HiArrowLeft } from 'react-icons/hi2';
import { gsap } from 'gsap';

const Marquee = () => {
    const marqueeInnerRef = useRef(null);

    useEffect(() => {
        const marqueeInner = marqueeInnerRef.current;

        // Duplicate the content to ensure smooth looping
        // const width = marqueeInner.offsetWidth;
        const clone = marqueeInner.cloneNode(true);
        marqueeInner.parentElement.appendChild(clone);

        // GSAP animation for infinite horizontal scrolling
        gsap.to([marqueeInner, clone], {
            xPercent: -100,   // Move content fully out of view
            duration: 30,     // Control the speed of the scrolling
            ease: 'linear',   // Smooth linear scrolling effect
            repeat: -1,       // Infinite loop
        });
    }, []);

    return (
        <div className="w-full h-[10vh] bg-black flex items-center overflow-hidden">
            {/* Marquee content */}
            <div className="flex items-center gap-8 whitespace-nowrap" ref={marqueeInnerRef}>
                {[...Array(10)].map((_, index) => (
                    <div
                        className="flex items-center gap-6"
                        key={index}
                    >
                        <h1 className="font-bold text-white text-lg md:text-2xl font-mono">
                            Front End Web Developer
                        </h1>
                        <HiArrowLeft className="text-white text-xl md:text-3xl" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Marquee;
