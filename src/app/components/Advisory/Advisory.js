"use client";
import React from 'react';
import { Row, Col, Card, Tag } from 'antd'; // Import Tag from Ant Design
import styles from '../Advisory/Advisory.module.css';

// Array for the big card
const bigCardData = [
  {
    title: 'Floan',
    imageUrl: 'https://cdn.prod.website-files.com/6253f6e60f27498e7d4a1e46/627abab0baed6035bacf1756_How-to-build-the-perfect-full-stack-web-dev-portfolio-1.jpeg',
    description: 'Discover the secrets of building a perfect website for businesses.',
    tags: ['Web Development', '2023', 'UI/UX Design'],
  },
];

// Array for smaller cards
const cardData = [
  {
    title: 'BrandX',
    imageUrl: 'https://cdn.prod.website-files.com/6253f6e60f27498e7d4a1e46/627abab0baed6035bacf1756_How-to-build-the-perfect-full-stack-web-dev-portfolio-1.jpeg',
    description: 'Elevating digital presence with a modern and interactive design approach.',
    tags: ['Branding', '2022', 'Marketing'],
  },
  {
    title: 'TechFlow',
    imageUrl: 'https://cdn.prod.website-files.com/6253f6e60f27498e7d4a1e46/627abab0baed6035bacf1756_How-to-build-the-perfect-full-stack-web-dev-portfolio-1.jpeg',
    description: 'Innovative solutions to streamline technology integration and efficiency.',
    tags: ['Technology', '2024', 'Development'],
  },
];

function Advisory() {
  return (
    <div className={styles.main}>
      <div>
        <Row gutter={24}>
          {/* Left Column */}
          <Col className={styles.leftSection} xs={24} sm={24} md={12} lg={12}>
            <h1>
              <span className={styles.our}>OUR</span>
              <span className={styles.work}>WORK</span>
            </h1>
          </Col>

          {/* Right Column */}
          <Col className={styles.rightSection} xs={24} sm={24} md={12} lg={12}>
            <h2 className={styles.hd1}>Making brands a damn site better.</h2>
            <p className={styles.para}>
              Let’s face it, first impressions matter. Your website’s an opportunity to wow your audience, so why choose bad design? Brands win over fans when they’re brave enough to go beyond their creative comfort zone.
            </p>
          </Col>
        </Row>
      </div>
{/* big cards */}
      <div className={styles.portfolioSection}>
        <Row gutter={24}>
          {bigCardData.map((card, index) => (
            <Col key={index} xs={24} sm={24} md={24} lg={24}>
              <Card className={styles.card}>
                <h5 className={styles.cardTitle}>
                  <span className={styles.titleLeft}>{card.title}</span>
                </h5>
                <div className={styles.cardImageContainer}>
                  <img
                    alt={card.title}
                    src={card.imageUrl}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardDescription}>
                    <p>{card.description}</p>
                    <div className={styles.tagContainer}>
                      {card.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex} color="magenta">{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
{/* small cards  */}
        <Row gutter={24}>
          {cardData.map((card, index) => (
            <Col key={index} xs={24} sm={12} md={12} lg={12}>
              <Card className={styles.card}>
                <h5 className={styles.cardTitle}>
                  <span className={styles.titleLeft}>{card.title}</span>
                </h5>
                <div className={styles.cardImageContainer}>
                  <img
                    alt={card.title}
                    src={card.imageUrl}
                    className={styles.cardImage}
                  />
                  <div className={styles.cardDescription}>
                    <p>{card.description}</p>
                    <div className={styles.tagContainer}>
                      {card.tags.map((tag, tagIndex) => (
                        <Tag key={tagIndex} color="volcano">{tag}</Tag>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Advisory;
