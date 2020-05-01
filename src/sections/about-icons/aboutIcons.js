import React from "react";
import styles from "./aboutIcons.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';


const aboutIcons= props=>(
    <div className={styles.aboutIcons}>
        <ScrollAnimation className={styles.card} animateOnce animateIn="fadeInUp">
        
            <div className={styles.iconBox}>
            <i class="fas fa-mobile-alt"></i>
            <h3 className={styles.header}>FULLY RESPONSIVE</h3>
            </div>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        
        </ScrollAnimation>
        <ScrollAnimation className={styles.card} delay="300" animateOnce animateIn="fadeInUp">
        
            <div className={styles.iconBox}>
            <i class="fas fa-file-alt"></i>
            <h3 className={styles.header}>UNLIMITED LAYOUTS</h3>
            </div>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        
        </ScrollAnimation>
        <ScrollAnimation className={styles.card} delay="600" animateOnce animateIn="fadeInUp">
        
            <div className={styles.iconBox}>
            <i class="fab fa-wordpress-simple"></i>
            <h3 className={styles.header}>WORDPRESS</h3>
            </div>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        </ScrollAnimation>
        <ScrollAnimation className={styles.card} delay="900" animateOnce animateIn="fadeInUp">
        
            <div className={styles.iconBox}>
            <i class="fas fa-shopping-cart"></i>
            <h3 className={styles.header}>E-COMMERCE</h3>
            </div>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
       </ScrollAnimation>
        <ScrollAnimation className={styles.card} delay="1200" animateOnce animateIn="fadeInUp">
        
            <div className={styles.iconBox}>
            <i class="far fa-calendar-check"></i>
            <h3 className={styles.header}>ONTIME DELIVERY</h3>
            </div>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        </ScrollAnimation>
        <ScrollAnimation className={styles.card} animateOnce delay="1500" animateIn="fadeInUp">
        
            <div className={styles.iconBox}>
            <i class="fas fa-life-ring"></i>
            <h3 className={styles.header}>LIFETIME SUPPORT</h3>
            </div>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adip iscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
            </p>
        </ScrollAnimation>
    </div>
)

export default aboutIcons