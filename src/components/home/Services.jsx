import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Highliter from "../../images/higliter.png";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
    const services = [
        {
            id: 1,
            name: 'Website Design and Development',
            description: `We provide end-to-end website design and development services using the latest technologies such as HTML5, CSS3, JavaScript, and frameworks like React.js or Next.js. Our goal is to create visually appealing, fast, and responsive websites that reflect your brand and meet business objectives. Whether you're starting from scratch or upgrading an existing site, we ensure smooth functionality and seamless user experiences.`
        },
        { id: 2, name: 'UI/UX Design Implementation', description: 'Converting UI/UX design prototypes into fully functional websites.' },
        { id: 3, name: 'Single Page Application (SPA) Development', description: 'Building fast, dynamic SPAs using React.js or similar frameworks.' },
        {
            id: 4,
            name: 'Responsive Web Design',
            description: `Our responsive web design service ensures your website looks great and functions perfectly on all devices, from desktops to mobile phones. Using flexible layouts and media queries, we design sites that adapt to various screen sizes, improving user experience and helping boost your SEO ranking.`
        },
        { id: 5, name: 'Performance Optimization', description: 'Enhancing website speed and performance through code optimization, lazy loading, and image compression.' },
        { id: 6, name: 'Cross-Browser Compatibility', description: 'Ensuring websites work seamlessly across all browsers.' },
        {
            id: 7,
            name: 'Landing Page Development',
            description: `We design effective landing pages optimized for conversions. Whether for marketing campaigns, lead generation, or product launches, our landing pages are fast, responsive, and visually compelling, ensuring your message gets across clearly while driving user actions.`
        },
        { id: 8, name: 'E-commerce Front-End Development', description: 'Creating custom e-commerce store fronts with smooth UI/UX.' },
        { id: 9, name: 'Custom Animations and Interactions', description: 'Adding animations, transitions, and interactive elements to improve user engagement.' },
        {
            id: 10,
            name: 'Maintenance and Updates',
            description: `Our maintenance services include regular updates to keep your website secure and performing at its best. We provide ongoing support, content updates, software patches, and performance optimization to ensure your site stays up-to-date and trouble-free.`
        },
        { id: 11, name: 'Website Redesign', description: 'Revamping outdated websites with modern design and technology.' },
        { id: 12, name: 'Integration with APIs', description: 'Integrating front-end code with third-party APIs such as weather, social media, or payment gateways.' },
    ];

    // Refs for GSAP ScrollTrigger animations
    const serviceRefs = useRef([]);

    useEffect(() => {
        serviceRefs.current.forEach((el, index) => {
            gsap.fromTo(
                el,
                { opacity: 0, y: 100, scale: 0.8, rotate: 5 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    rotate: 0,
                    duration: 1.5,
                    ease: 'elastic.out(1, 0.5)',
                    scrollTrigger: {
                        trigger: el,
                        start: 'top 80%',
                        toggleActions: 'play none none none',
                        once: true,
                       
                    },
                    stagger: 0.1 * index,
                }
            );
        });
    }, []);

    return (
        <>
            <div className="w-full min-h-screen py-10 p-8 ">
                {/* Header Section */}
                <div className="w-[15rem] h-[50px] mb-10">
                    <h1 className="text-4xl font-bold stroke relative z-10">Our Services</h1>
                    <img className="w-full h-[15px] -mt-2" src={Highliter} alt="highlighter" />
                </div>

                {/* Bento Grid Layout */}
                <div className="mx-auto  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => (serviceRefs.current[index] = el)}
                            className={`${index % 3 === 0 ? 'lg:col-span-2 lg:row-span-2' : 'lg:col-span-1'
                                } bg-white border border-black p-6 rounded-lg  transform hover:scale-105 transition duration-500 ease-in-out`}
                        >
                            <h2 className="text-xl font-semibold mb-4">{service.name}</h2>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Services;
