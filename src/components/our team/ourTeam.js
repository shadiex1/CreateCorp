import React from "react";
import styles from "./ourTeam.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';


const ourTeam = props=>(
    <div className={styles.ourTeam}>
        <h2 className={styles.header}> Our Team</h2>
        <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam

        </p>

    <div className={styles.teamGallery}>
        <ScrollAnimation animateIn="fadeInDown" animateOnce>
        <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt="team"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay="300" animateOnce>
        <img src="https://images.unsplash.com/photo-1541647376583-8934aaf3448a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="team"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay="600" animateOnce>
        <img src="https://cdn.pixabay.com/photo/2019/10/04/13/19/woman-4525646_960_720.jpg" alt="team"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay="900" animateOnce>
        <img src="https://cdn.pixabay.com/photo/2018/01/19/03/33/people-3091674_1280.jpg" alt="team"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay="1200" animateOnce>
        <img src="https://cdn.pixabay.com/photo/2019/02/13/18/46/model-3994985_1280.jpg" alt="team"/>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInDown" delay="1400" animateOnce>
        <img src="https://cdn.pixabay.com/photo/2019/12/09/08/14/celebrity-4682972_960_720.jpg" alt="team"/>
        </ScrollAnimation>
    </div>
    </div>
)

export default ourTeam;