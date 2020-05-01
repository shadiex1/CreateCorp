import React from "react";
import styles from "./aboutpage.module.scss";
import WhyChooseUs from "../../sections/why choose us/whyChooseUs";
import AboutIcons from "../../sections/about-icons/aboutIcons";
import Navbar from "../../components/nav bar/navBar";
import OurTeam from "../../components/our team/ourTeam";
import StaffCarousel from "../../sections/staff carousel/staffCarousel";
import Banner from "../../sections/banner/banner";
import Footer from "../../components/footer/footer";
import ScrollAnimation from 'react-animate-on-scroll';



const aboutPage= props =>(
    <div className={styles.about}>
        <Navbar/>
        <ScrollAnimation animateIn="fadeInUp" animateOnce >
        <div className={styles.aboutIntro}>
            <p className={styles.text}>
            Our Mission dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
            in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <br/>
            <p className={styles.text}>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
            </p>
            <div className={styles.idbox}>
                <img alt="ceo" src="https://images.unsplash.com/photo-1542178243-bc20204b769f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" />
                <div className={styles.id}>
                    <h3>John Doe</h3>
                    <p>CEO and Founder</p>
                </div>
            </div>
        </div>
        </ScrollAnimation>
        <WhyChooseUs/>
        <AboutIcons/>
        <OurTeam/>
        <StaffCarousel/>
        <Banner/>
        <Footer/>
    </div>
)

export default aboutPage