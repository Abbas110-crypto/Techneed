// components/HeroSection.js
"use client"
import { useEffect, useState } from 'react'; // Import useEffect and useState
import styles from './Hero.module.css';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false); // State to manage visibility

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(true); // Set to true after a delay to trigger animation
        }, 100); // Adjust delay as needed

        return () => clearTimeout(timer); 
    }, []);

    return (
        <section className={`${styles.hero} ${isVisible ? styles.visible : ''}`}>
            <div className={styles.wavyBackground}></div>
            <div className={styles.heroText}>
                <h1>
                    <span className={styles.rebel}>rebel</span>
                    <span className={styles.against}>against</span>
                    <span className={styles.boring}>boring</span>
                </h1>
            </div>
            <div className={styles.descriptionContainer}>
                <p className={styles.description}>
                    We’re a creative web design and branding agency based in London that crafts beautiful work for brands who refuse to blend in.
                </p>
            </div>
        </section>
    );
};

export default Hero;
