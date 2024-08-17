import React from 'react'
import styles from '../Footer/Footer.module.css'
import { Button,Row,Col } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';


function Footer() {
  const router = useRouter();

  const handleContactClick = () => {
    router.push('/contact');
};
  return (
    <div className={styles.main}>
      <Row>
        <Col xs={24} sm={24} md={24} lg={8} xl={12}>
        <div className={styles.text}>
            <h2 className={styles.heading}>Ready to talk?</h2>
            <Button className={styles.Button} onClick={handleContactClick}>Contact Us</Button>
        </div>
        </Col>
        <Col xs={24} sm={24} md={24} lg={8} xl={12}>
        <p className={styles.paragraph1}>We Are A Growth Marketing<br /> Agency Based In Brooklyn, NY.</p>
        </Col>
      </Row>
      <Row>
        <p className={styles.paragraph2}>Techneed, established in 2019, is a software house offering expert services in WordPress development, graphic design, UI/UX design, and MERN stack applications. We deliver innovative solutions tailored to meet diverse client needs.</p>
        <h1 className={styles.logo}>
        <Image
        src="https://i.ibb.co/Br9rzFt/tech-removebg-preview.png" // Path to your image file
        alt="techneed logo"
        width={300} // Desired width of the image
        height={100} // Desired height of the image
        className={styles.Image_logo}
      />
        </h1>
      </Row>
    </div>
  )
}

export default Footer;