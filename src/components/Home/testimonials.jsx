import React from 'react';
import styles from './testimonials.module.css';
import img1 from '../../assets/testimonials/user1.jpeg';
import img2 from '../../assets/testimonials/user2.jpeg';
import img3 from '../../assets/testimonials/user3.jpeg';
import img6 from '../../assets/testimonials/testi.jpeg';

function Testimonials() {
    return (
        <div className={styles.testimonials}>
            <div className="container">
                <div className={styles['section-head']}>
                    <h6>TESTIMONIALS</h6>
                    <h2>
                        The Trust <span>From Clients</span>
                    </h2>
                </div>

                <div className={styles.content}>
                    <div className="row">
                        <div className={styles.row1}>
                            <div className={styles['vid-img']}>
                                <img src={img6} alt="" />
                                <a href=""></a>
                                <div className={styles['img-info']}></div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.row2}>
                        <div className={styles['info-client']}>
                            <div className={`${styles['client-card']} ${styles['client-1']}`}>
                                <div className={styles['user-img']}>
                                    <img src={img1} alt="" />
                                </div>
                                <div className={styles['inf-content']}>
                                    <div className={styles['rate-star']}></div>
                                    <h6>
                                        “Iteck provide perfect IT solutions, fast process and affordable price. We’re really satisfied!”
                                    </h6>
                                    <p>
                                        IBRAHIMA K. <span>/ CEO at ThemesCamp</span>
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles['client-card']} ${styles['client-2']}`}>
                                <div className={styles['user-img']}>
                                    <img src={img2} alt="" />
                                </div>
                                <div className={styles['inf-content']}>
                                    <div className={styles['rate-star']}></div>
                                    <h6>
                                        “Iteck provide perfect IT solutions, fast process and affordable price. We’re really satisfied!”
                                    </h6>
                                    <p>
                                        IBRAHIMA K. <span>/ CEO at ThemesCamp</span>
                                    </p>
                                </div>
                            </div>
                            <div className={`${styles['client-card']} ${styles['client-3']}`}>
                                <div className={styles['user-img']}>
                                    <img src={img3} alt="" />
                                </div>
                                <div className={styles['inf-content']}>
                                    <div className={styles['rate-star']}></div>
                                    <h6>
                                        “Iteck provide perfect IT solutions, fast process and affordable price. We’re really satisfied!”
                                    </h6>
                                    <p>
                                        IBRAHIMA K. <span>/ CEO at ThemesCamp</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Testimonials;
