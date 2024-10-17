"use client";
import React from 'react';
import { Row, Col, Card, Tag } from 'antd'; // Import Tag from Ant Design
import styles from '../Advisory/Advisory.module.css';

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

      <div className={styles.portfolioSection}>
        <Row gutter={24}>
          <Col xs={24} sm={24} md={24} lg={24}>
            <Card className={styles.card}>
              <h5 className={styles.cardTitle}>
                <span className={styles.titleLeft}>Floan</span>
              </h5>
              <div className={styles.cardImageContainer}>
                <img
                  alt="Web Development Portfolio"
                  src="https://cdn.prod.website-files.com/6253f6e60f27498e7d4a1e46/627abab0baed6035bacf1756_How-to-build-the-perfect-full-stack-web-dev-portfolio-1.jpeg"
                  className={styles.cardImage}
                />
                <div className={styles.cardDescription}>
                  <p>Discover the secrets of building a perfect website for businesses.</p>
                  <div className={styles.tagContainer}>
                    <Tag color="magenta">Web Development</Tag>
                    <Tag color="gold">2023</Tag>
                    <Tag color="blue">UI/UX Design</Tag>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row gutter={24}>
          <Col span={12}></Col>
          <Col span={12}></Col>
        </Row>
      </div>
    </div>
  );
}

export default Advisory;
