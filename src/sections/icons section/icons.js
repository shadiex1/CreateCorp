import React from "react"
import styles from "./icons.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';


const icons = props =>(
    <div className={styles.iconsContainer}>  
            <ScrollAnimation animatePreScroll={false} className={styles.card} animateOnce animateIn="fadeInUp" duration="1">
            <div>
            <i className="far fa-lightbulb"></i>
            <h4>Great Ideas</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
        </div></ScrollAnimation>
        <ScrollAnimation className={styles.card} animatePreScroll={false} animateOnce animateIn="fadeInUp" duration="2">
        <div >
            <i className="fas fa-wrench"></i>
            <h4>Quick Settings</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
        </div></ScrollAnimation>
        <ScrollAnimation className={styles.card} animatePreScroll={false} animateOnce animateIn="fadeInUp" duration="3">
        <div className={styles.card}>
            <i className="fas fa-cloud"></i>
            <h4>Cloud Services</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
        </div></ScrollAnimation>
        <ScrollAnimation className={styles.card} animatePreScroll={false} animateOnce animateIn="fadeInUp" duration="4">

        <div className={styles.card}>
            <i className="fas fa-laptop-code"></i>
            <h4>Cross Development</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt.</p>
        </div></ScrollAnimation>
        
    </div>
)

export default icons