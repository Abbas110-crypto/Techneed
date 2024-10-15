"use client";
import React, { useState } from 'react';
import { Row, Col } from 'antd';
import styles from './BespokeSection.module.css'; // Correct import for CSS Module

const BespokeSection = () => {
    const items = [
        {
            title: "Beauty",
            description: "Developing stunning one-of-a-kind digital design that catches people’s eyes and brings your brand to life online.",
            imageUrl: "https://cdn.flames.design/project-media/d325afd6-7b26-4331-aa5c-3ab6fbacc706/original-bee63502-370f-4148-90fd-7e92dc07a0c0.jpg?aspect_ratio=4:3&width=900&height=600&quality=60",
        },
        {
            title: "Thought",
            description: "As a web design agency, we love to deliver meaningful and intuitive user experiences that build trust with your target audience.",
            imageUrl: "https://cdn.flames.design/project-media/d325afd6-7b26-4331-aa5c-3ab6fbacc706/original-bee63502-370f-4148-90fd-7e92dc07a0c0.jpg?aspect_ratio=4:3&width=900&height=600&quality=60",
        },
        {
            title: "Impact",
            description: "Designing tailor-made solutions that resonate with your customers and drive them to act.",
            imageUrl: "https://cdn.flames.design/project-media/d325afd6-7b26-4331-aa5c-3ab6fbacc706/original-bee63502-370f-4148-90fd-7e92dc07a0c0.jpg?aspect_ratio=4:3&width=900&height=600&quality=60",
        },
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 }); // Added state for image position

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = 800;
        const offsetY= 350;
        setMousePosition({
            x: e.clientX - rect.left - offsetX,
            y: e.clientY - rect.top - offsetY,
        });
        setImagePosition({ x: e.clientX - rect.left - offsetX, y: e.clientY - rect.top }); // Update image position
    };

    return (
        <div className={styles.bespokeSection}>
            <div className={styles.bespokeHeading}>
                <h2>We develop bespoke</h2>
                <h2>websites with <span className={styles.underline}>three</span></h2>
                <h2>
                    <span className={styles.underline}>things in mind</span>
                </h2>
            </div>

            {items.map((item, index) => (
                <Row justify="center" gutter={[16, 24]} key={index}>
                    <Col span={24}>
                        <div
                            className={styles.item}
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => {
                                setHoveredIndex(null);
                                setMousePosition({ x: 0, y: 0 }); // Reset mouse position
                                setImagePosition({ x: 0, y: 0 }); // Reset image position
                            }}
                            onMouseMove={handleMouseMove}
                        >
                            <div className={styles.itemContent}>
                                <div className={styles.itemTitleContainer}>
                                    <h3 className={styles.itemTitle}>{`0${index + 1}/`}</h3>
                                    <h4 className={styles.itemHeading}>{item.title}</h4>
                                </div>
                                <div className={styles.descriptionContainer}>
                                    <p className={styles.itemDescription}>{item.description}</p>
                                    {hoveredIndex === index && (
                                        <img
                                            src={item.imageUrl}
                                            alt={item.title}
                                            className={styles.hoverImage}
                                            style={{
                                                left: `${imagePosition.x}px`, 
                                                top: `${imagePosition.y}px`,
                                                position: 'absolute', 
                                            }}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            ))}
        </div>
    );
};

export default BespokeSection;
