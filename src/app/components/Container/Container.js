"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Container.module.css';
import { Row, Col, Tag } from 'antd';
import { initAOS } from '../../AOS/Interceptor'; 
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const servicesData = [
    {
        title: "Web design & development",
        description: "Crafting digital experiences where beauty meets ROI, turning heads and unlocking revenue potential with every click",
        imageUrl: "https://framerusercontent.com/images/tJX5H2EhPGbqVdlAcxmfyjtbJW0.webp?scale-down-to=1024",
        altText: "E-commerce Image",
        tags: ["Web", "Development", "Design"]
    },
    {
        title: "Digital Marketing",
        description: "Delivering eye-catching motion graphics and campaigns that earn attention, spark emotion and increase conversions.",
        imageUrl: "https://framerusercontent.com/images/Z1xWYU2XITG6USIFJRqqCwbNU.webp?scale-down-to=1024",
        altText: "Financial Task Execution Image",
        tags: ["Marketing support", "MOtion graphics", "Creative campaigns"]
    },
    {
        title: "Branding",
        description: "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice. ",
        imageUrl: "https://framerusercontent.com/images/tJX5H2EhPGbqVdlAcxmfyjtbJW0.webp?scale-down-to=1024",
        altText: "Strategic Recommendation Image",
        tags: ["Brand Strategy", "Tone of voice", "Visual identity"]
    }
];

function Container() {
    const containerRefs = useRef([]);

    useEffect(() => {
        initAOS();

        containerRefs.current.forEach((container, index) => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: container,
                    start: "top center", // Start when the top of the new container reaches the center of the viewport
                    end: "bottom center", // End when the bottom of the new container leaves the center
                    scrub: 0.5, // Smooth scrubbing
                }
            });

            if (index > 0) {
                // Animate the previous container
                const previousContainer = containerRefs.current[index - 1];

                tl.to(previousContainer, {
                    y: 50, // Move it back down
                    scale: 0.95, // Scale down the previous container
                    opacity: 0, // Fade out the previous container
                    duration: 0.5,
                }, 0); 
            }

            tl.fromTo(container, 
                { y: 20, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 0.5 }, 
                0 
            );
        });
    }, []);

    return (
        <div>
            <Row>
                <div className={styles.main} data-aos="fade-right">
                    <h1 className={styles.heading}>
                        <span className={styles.hd1}> OUR </span>
                        <span className={styles.hd2}> SERVICES</span>
                    </h1>
                </div>
            </Row>
            {servicesData.map((service, index) => (
                <div
                    className={styles.container}
                    key={index}
                    ref={(el) => (containerRefs.current[index] = el)}
                >
                    <Row justify={'center'}>
                        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                            <div className={styles.container1}>
                                <div data-aos="fade-right">
                                    <h1 className={styles.h1}>{service.title}</h1>
                                    <div>
                                        {service.tags.map((tag, tagIndex) => (
                                            <Tag className={styles.tag} key={tagIndex}>{tag}</Tag>
                                        ))}
                                    </div>
                                    <p className={styles.paragraph2}>
                                        {service.description}
                                    </p>
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                            <div data-aos="fade-left">
                                <Image
                                    src={service.imageUrl}
                                    alt={service.altText}
                                    width="500"
                                    height="480"
                                    className={styles.img}
                                />
                            </div>
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
}

export default Container;
