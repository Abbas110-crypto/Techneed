"use client";
import React from 'react';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Image
        src="https://i.ibb.co/Br9rzFt/tech-removebg-preview.png" 
        alt="techneed logo"
        width={110}
        height={25}
        className={styles.logo}
      />
    </div>
  );
};

export default Navbar;
