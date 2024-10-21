import React from 'react';
import styles from './experts.module.css';
import img1 from '../../assets/experts/1.jpeg';
import img2 from '../../assets/experts/2.jpeg';
import img3 from '../../assets/experts/3.jpeg';
import img4 from '../../assets/experts/4.jpeg';
import img5 from '../../assets/experts/5.jpeg';

function Experts() {
  return (
    <div className={styles['team-section']}>
      <div className={styles['team-container']}>
        <div className={styles['team-section-head']}>
          <h6>meet our expert</h6>
          <h2>
            Client Satisfaction, <span>Our Reputation</span>
          </h2>
        </div>
        <div className={styles['team-content']}>
          <div className={styles['team-box']}>
            <div className={styles.avatar}>
              <img src={img3} alt="" />
            </div>
            <div className={styles.info}>
              <h6>
                <a href="#">Michael Edwards</a>
              </h6>
              <small>CEO Founder</small>
            </div>
          </div>

          <div className={styles['team-box']}>
            <div className={styles.avatar}>
              <img src={img2} alt="" />
            </div>
            <div className={styles.info}>
              <h6>
                <a href="#">Bobby Kane</a>
              </h6>
              <small>CTO</small>
            </div>
          </div>

          <div className={styles['team-box']}>
            <div className={styles.avatar}>
              <img src={img1} alt="" />
            </div>
            <div className={styles.info}>
              <h6>
                <a href="#">Robert Downey Jr</a>
              </h6>
              <small>Project Manager</small>
            </div>
          </div>

          <div className={styles['team-box']}>
            <div className={styles.avatar}>
              <img src={img4} alt="" />
            </div>
            <div className={styles.info}>
              <h6>
                <a href="#">Andrew Robertson</a>
              </h6>
              <small>Marketing Leader</small>
            </div>
          </div>

          <div className={styles['team-box']}>
            <div className={styles.avatar}>
              <img src={img5} alt="" />
            </div>
            <div className={styles.info}>
              <h6>
                <a href="#">Alexander Avery</a>
              </h6>
              <small>Creative Director</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experts;
