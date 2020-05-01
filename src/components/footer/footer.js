import React from 'react';
import styles from "./footer.module.scss";

const footer = props=>(
    <React.Fragment>
    <div className={styles.footer}>
        <div className={styles.section1}>
        <div className={styles.logo}>
            <p>Create<span className={styles.logoSpan}>Corp</span></p>
        </div>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, ut labore et dolore magna aliqua. Ut enim ad minim veniam. quis nostrud exercitation ullamco laboris commodo conse.

        </p>
        <a href="index.html" className={styles.btn}> <i class="fas fa-chevron-circle-right"></i> Read More</a>
        </div>
        <div className={styles.section}>
            <h4 className={styles.header}>
            Helpful Links
            </h4>
            <div className={styles.lists}>
                <ul className={styles.list}>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">About</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">Portfolio</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">Team</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">Pricing</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">Privacy Policy</a></li>
                </ul>                
                <ul className={styles.list}>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">FAQ</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">Blog</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">How It Works</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">Benefuts</a></li>
                    <li> <i class="fas fa-chevron-right"></i> <a href="index.html">Contact</a></li>
                </ul>
            </div>
           
        </div>
        <div className={styles.section}>
            <h4 className={styles.header}>Contact Us</h4>
            <p className={styles.text_contactSection}>24,Panam Street Cyberjaya,Malaysia</p>
            <p className={styles.text_contactSection}>Phone: 012-12345678</p>
            <p className={styles.text_contactSection}>Email: <a href="index.html">info@elitecorp.com</a></p>
        </div>
        
    </div>
    <div className={styles.copyrights}>
        <p className={styles.copyrightsText}>COPYRIGHT 2019 CREATECORP BY SHADY AHMED | ALL RIGHTS RESERVED</p>
        <div className={styles.links}>
        <i class="fab fa-facebook-f"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-linkedin-in"></i>
        <i class="fab fa-pinterest-p"></i>
        </div>
    </div>
    </React.Fragment>
)

export default footer