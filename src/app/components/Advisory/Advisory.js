import React from 'react'
import styles from '../Advisory/Advisory.module.css'
function Advisory() {
  return (
    <div className={styles.main}>
      <div className={styles.sub_heading}>
      <h1 className={styles.heading1}>Startup Advisory</h1>
      <p className={styles.paragraph1}>Our firm also excels in providing strategic advisory services to startups. One of our clients, a burgeoning startup, benefited immensely from our insights and strategic planning.</p>
      </div>
      <div>
        <p className={styles.paragraph2}><span className={styles.heading2}>Business Development Models:</span><br />Within minutes of our first phone call, Asad was teaching different models for business development, setting a comprehensive strategy for the startup.</p>
      </div>
      <div>
        <p className={styles.paragraph2}><span className={styles.heading2}>Ongoing Support:</span><br />Since our initial engagement, we have continued to support the client's growth, contributing to their impressive trajectory.</p>
      </div>
    </div>
  )
}

export default Advisory;