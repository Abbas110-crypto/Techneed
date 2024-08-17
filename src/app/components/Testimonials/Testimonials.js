import React from 'react'
import styles from './Testimonials.module.css'
import { Row } from 'antd';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';


function Testimonials() {
    return (
        <div>
            <h3 className={styles.heading}>Testimonials</h3>
            <Row gutter={16} className={styles.CustomRow}>
                <div className={styles.slider}>
                    <Marquee direction='left'>
                        <Image
                            src="https://i.ibb.co/8sZ40Y6/4-3.png" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/ZM5GzBn/3-2.png" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/m453SnV/2-3.png" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/YkhfCFD/1-2.png" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/m453SnV/2-3.png"
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/ZM5GzBn/3-2.png"// Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                        <Image
                            src="https://i.ibb.co/8sZ40Y6/4-3.png" // Path to your image inside the public directory
                            alt="Socialmedia"
                            width='300'
                            height='450'
                            className={styles.ImageSlider}
                        />
                    </Marquee>
                </div>
            </Row>
        </div>
    )
}

export default Testimonials;