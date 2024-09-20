import gsap from 'gsap';
import React, { useEffect, useRef, useState } from 'react';

const Lodding = ({ onComplete }) => {
    const boxRefs = useRef([]);
    const [count, setCount] = useState(0);
    const counterRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({
            onComplete: onComplete, // Call when animation finishes
        });

        // Counter animation from 0 to 100
        tl.to({}, {
            duration: 3,
            ease: "power4.inOut",
            onUpdate: function () {
                const progress = Math.round(this.progress() * 100);
                setCount(progress);
            }
        });

        // Box animation (staggered for smoothness)
        tl.to(boxRefs.current, {
            delay: 0.5,  // Smooth start after counter begins
            duration: 1.5,
            height: 0,
            stagger: {
                each: 0.2,  // Stagger time for smoothness
            },
            ease: 'power4.inOut'
        });
    }, [onComplete]);

    return (
        <>
            <div className='w-[100vw] h-[100vh] fixed bg-transparent top-0 z-50 flex justify-center items-center'>
                <div className='absolute h1textlodder text-[100px]' ref={counterRef}>
                    {count}%
                </div>
                <div className='w-[100vw] h-[100vh] flex'>
                    {[...Array(10)].map((_, i) => (
                        <div
                            key={i}
                            ref={(el) => (boxRefs.current[i] = el)}
                            className='w-[10vw] h-[105vh] bg-black'
                        ></div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Lodding;
