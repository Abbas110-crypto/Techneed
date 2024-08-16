"use client";
import React,{useEffect} from 'react'
import styles from './Container.module.css';
import {Row,Col} from 'antd';
import { initAOS } from '../../AOS/Interceptor'; 
import Image from 'next/image';

function Container() {
    useEffect(() => {
        initAOS();
      }, []);
  return (
    <div>
    <Row>
        <div className={styles.main} data-aos="fade-right">
           <h3 className={styles.heading}>Our Secret Sauce</h3>
           <p className={styles.paragraph1}>The days of ad agencies simply pushing buttons in an ad platform are over.<br /> Success in performance marketing now relies on 3 focus areas working together interdependently:</p>
           <h6 className={styles.subheading}>Paid Media Expertise, Creative Strategy,</h6>
           <h6 className={styles.subheading}>Landing Page Optimization</h6>    
        </div>
    </Row>
    <div className={styles.container}>
    <Row justify={'center'}>
    
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div className={styles.container1}>
        <div data-aos="fade-right">
        <h1 className={styles.h1}>E-commerce</h1>
        <p className={styles.paragraph2}>In the E-commerce sector, our firm has a proven track record of helping businesses scale and manage their finances efficiently. One of our clients, a fast-growing E-commerce company, experienced significant improvements in their financial operations and strategic planning with our support.</p>
        </div>
    </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div data-aos="fade-left">
        <Image
        src="https://framerusercontent.com/images/tJX5H2EhPGbqVdlAcxmfyjtbJW0.webp?scale-down-to=1024"
        alt="cont1"
        width="500"
        height="480"
        className={styles.img}
        />
        </div>
    </Col>       
    </Row>
    </div>
    <div className={styles.container}>
    <Row justify={'center'}>
    
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 10 }}>
    <div className={styles.container1}>
    <div data-aos="fade-right">
        <h1 className={styles.h1}>Financial Task Execution</h1>
        <p className={styles.paragraph2}>We rapidly executed various financial tasks, including migrating old accounting software to QuickBooks and reviewing past years’ financial standings. This comprehensive review helped the client understand their financial trajectory and make informed projections and funding recommendations.</p>
    </div>
    </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 14 }}
    >
        <div data-aos="fade-left">
        <Image
        src="https://framerusercontent.com/images/Z1xWYU2XITG6USIFJRqqCwbNU.webp?scale-down-to=1024"
        alt="cont1"
        width="630"
        height="490"
        className={styles.img}
        />
        </div>
    </Col>       
    </Row>
    </div>
    <div className={styles.container}>
    <Row justify={'center'}>
    
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div className={styles.container1}>
    <div data-aos="fade-right">
        <h1 className={styles.h1}>Strategic Recommendation</h1>
        <p className={styles.paragraph2}>The valuable professional recommendations provided for new hires, systems, and standard operating procedures (SOPs), further enhancing the client’s operational efficiency.
        </p>
    </div>
    </div>
    </Col>
    <Col xs={24} sm={24} md={12} lg={{ span: 12 }} xl={{ span: 12 }}>
    <div data-aos="fade-left">
        <Image
        src="https://framerusercontent.com/images/tJX5H2EhPGbqVdlAcxmfyjtbJW0.webp?scale-down-to=1024"
        alt="cont1"
        width="500"
        height="480"
        className={styles.img}
        />
    </div>
    </Col>       
    </Row>
    </div>
    </div>
  )
}

export default Container;