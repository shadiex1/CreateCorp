import React from "react";
import styles from "./whyChooseUs.module.scss";
import BtnRed from "../../components/btn-red/btnRed";
import ScrollAnimation from "react-animate-on-scroll"

const WhyChooseUs = props=>(
    <div className={styles.whyUs}>
        <ScrollAnimation  animateOnce animateIn="slideInLeft">
        <img style={{width:"100%",height:"100%"}} alt="" src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"/>
        </ScrollAnimation>
        <ScrollAnimation animateOnce animateIn="slideInRight">

            <h3 className={styles.header}>Why Choose Us</h3>
            <p className={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            <br/>
            <br/>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <BtnRed style={{}}inner="VIEW MORE"/>
        </ScrollAnimation>
    </div>
)


export default WhyChooseUs

// 437.6px;

// 672.8px