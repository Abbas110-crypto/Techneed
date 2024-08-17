"use client";
import React,{useEffect} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { Button } from 'antd';
import { initAOS } from '../../AOS/Interceptor'; // Import the AOS initialization function


const Navbar = () => {
  useEffect(() => {
    initAOS(); // Call the AOS initialization function when the component mounts
  }, []);
  return (
    <div>
    <div className={styles.navbarcontainer}>
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Image
        src="https://i.ibb.co/Br9rzFt/tech-removebg-preview.png" // Path to your image file
        alt="techneed logo"
        width={100} // Desired width of the image
        height={25} // Desired height of the image
        className={styles.Image_logo}
      />
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/case-studies">Case Studies</Link>
        </li>
      </ul>
      
      <button className={styles.callButton}>
      <Link href="/contact" className={styles.btn}>
        Contact Us
        </Link> 
        </button>
      
    </nav>
    </div>
    </div>
  );
};

export default Navbar;


