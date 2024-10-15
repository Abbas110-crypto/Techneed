"use client";
import React, { useEffect, useRef } from 'react';
import styles from './Container.module.css';
import { Row, Col, Tag } from 'antd';
import { initAOS } from '../../AOS/Interceptor'; 
import Image from 'next/image';

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
        tags: ["Marketing support", "Motion graphics", "Creative campaigns"]
    },
    {
        title: "Branding",
        description: "It all starts with your brand. We use sound strategic thinking to create or elevate your brand identity, from your visuals to your voice.",
        imageUrl: "https://framerusercontent.com/images/tJX5H2EhPGbqVdlAcxmfyjtbJW0.webp?scale-down-to=1024",
        altText: "Strategic Recommendation Image",
        tags: ["Brand Strategy", "Tone of voice", "Visual identity"]
    }
];

function Container() {
    const containerRefs = useRef([]);

    useEffect(() => {
        initAOS();
    }, []);

    return (
        <div>
            <Row>
                <div className={styles.main} data-aos="zoom-out" data-aos-duration="2000">
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
                    data-aos="zoom-out"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-duration="2000" 
                >
                    <Row justify={'center'}>
                        <Col xs={24} sm={24} md={14} lg={14} xl={14}>
                            <div className={styles.container1}>
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
                        </Col>
                        <Col xs={24} sm={24} md={10} lg={10} xl={10}>
                            <Image
                                src={service.imageUrl}
                                alt={service.altText}
                                width="500"
                                height="480"
                                className={styles.img}
                            />
                        </Col>
                    </Row>
                </div>
            ))}
        </div>
    );
}

export default Container;
