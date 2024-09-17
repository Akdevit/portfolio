import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Startup from "../../images/startup.png";

gsap.registerPlugin(ScrollTrigger);

const ContactMe = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    // Refs for GSAP animations
    const imageRef = useRef(null);
    const formRef = useRef(null);

    useEffect(() => {
        // GSAP animation for the image section
        gsap.fromTo(imageRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1, x: 0, duration: 1, ease: 'power2.out',
                scrollTrigger: {
                    trigger: imageRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            }
        );

        // GSAP animation for the form section
        gsap.fromTo(formRef.current,
            { opacity: 0, y: 100 },
            {
                opacity: 1, y: 0, duration: 1.2, delay: 0.5, ease: 'power2.out',
                scrollTrigger: {
                    trigger: formRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 1
                }
            }
        );
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, subject, message } = formData;

        // Format the WhatsApp message content
        const whatsappMessage = `Name: ${name}%0AEmail: ${email}%0ASubject: ${subject}%0AMessage: ${message}`;

        // Replace YOUR_PHONE_NUMBER with your actual WhatsApp number
        const whatsappURL = `https://api.whatsapp.com/send?phone=+918757049790&text=${whatsappMessage}`;

        // Redirect the user to WhatsApp
        window.open(whatsappURL, '_blank');
    };

    return (
        <div className="w-full h-auto flex flex-col lg:flex-row items-center justify-center py-16 lg:py-24">
            {/* Image Section */}
            <div ref={imageRef} className="w-full lg:w-[50%] h-full p-8 flex justify-center items-center">
                <img src={Startup} alt="background" className="w-full h-auto max-h-[600px] object-contain" />
            </div>

            {/* Form Section */}
            <div ref={formRef} className="w-full lg:w-[50%] h-auto flex flex-col gap-4 items-center justify-center p-8">
                <h1 className="text-3xl lg:text-5xl h1textcontact  text-center">Contact Me</h1>
                <p className="text-base lg:text-lg text-center">Feel free to get in touch for any project inquiries, collaborations, or questions.</p>

                <div className="w-full lg:w-[70%] mt-8 rounded-lg">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="name" className="text-md">Full Name</label>
                        <input
                            className="w-full h-12 p-2 rounded-md border border-black bg-transparent outline-0"
                            type="text"
                            id="name"
                            placeholder="Enter your Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Email */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="email" className="text-md">Email</label>
                        <input
                            className="w-full h-12 p-2 rounded-md border border-black bg-transparent outline-0"
                            type="email"
                            id="email"
                            placeholder="Enter your Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Subject */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="subject" className="text-md">Subject</label>
                        <input
                            className="w-full h-12 p-2 rounded-md border border-black bg-transparent outline-0"
                            type="text"
                            id="subject"
                            placeholder="Enter your Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    {/* Message */}
                    <div className="flex flex-col gap-2 mb-4">
                        <label htmlFor="message" className="text-md">Message</label>
                        <textarea
                            id="message"
                            rows="4"
                            placeholder="Enter your message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 rounded-md border border-black bg-transparent outline-0"
                            required
                        />
                    </div>
                    {/* Submit Button */}
                    <div className="w-full flex justify-center items-center mt-4">
                        <button
                            className="bg-black text-white px-8 py-2 rounded-md hover:bg-gray-800 transition"
                            onClick={handleSubmit}
                        >
                            Submit
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
