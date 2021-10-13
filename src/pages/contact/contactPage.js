import React from "react";
import Navbar from "../../components/nav bar/navBar";
import styles from "./contactPage.module.scss";
import ScrollAnimation from "react-animate-on-scroll";
import Footer from "../../components/footer/footer"


const contactPage=props=>(
    <div>
        <Navbar/>
        <iframe
  width="100%"
  height="450"
  frameborder="0" style={{border:"50px"}}
  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyAxYDIfHj6HgB2PcL2Ng4Bu6WrKtnupHl4&q=Persiaran+Bestari,+Cyber 11,+63000+Cyberjaya,+Selangor,+Malaysia" title="location" allowfullscreen>
</iframe>
        <div className={styles.blackBox}>
            <div className={styles.boxSection}>
                <h4 className={styles.header}>Address: </h4>
                <p className={styles.text}>
                    24,Panam Street <br/>
                    Cyberjaya,Malaysia
                </p>
            </div>
            <div className={styles.boxSection}>
                <h4 className={styles.header}>Cell Phone:</h4>
                <p className={styles.text}>
                +44 321 421 531 <br/>
                +44 456 789 321
                </p>
            </div>
            <div className={styles.boxSection}>
                <h4 className={styles.header}>Email:</h4>
                <p className={styles.text}>
                help@Createcorp.com <br/>
                info@Createcorp.com
                </p>
            </div>
        </div>
        <div className={styles.formApplication}>
        <h1 className={styles.contactHeader}>
        Contact Form
        </h1>

        <form className={styles.form}>
            <input className={styles.name1} type="text" placeholder="Name" required/>
            <input className={styles.name2} type="email" placeholder="Email" required/>
            <textarea className={styles.message} placeholder="Message" />
             </form>
             <a href="/contact" className={styles.btn}>SEND</a>
             </div>

            <div className={styles.links}>
                <h1 className={styles.contactHeader}>
                    Get Connected
                </h1>
                <div className={styles.linksList}>
                    <ScrollAnimation animateIn="fadeInUp" animateOnce>
                    <a href="https://www.facebook.com/" className={styles.btnLink}><i class="fab fa-facebook-f"></i></a>
                    </ScrollAnimation>
                    <ScrollAnimation delay="300" animateIn="fadeInUp" animateOnce>
                    <a href="https://www.linkedin.com/" className={styles.btnLink}><i class="fab fa-linkedin-in"></i></a>
                    </ScrollAnimation>
                    <ScrollAnimation delay="600" animateIn="fadeInUp" animateOnce>
                    <a href="https://twitter.com/home" className={styles.btnLink}><i class="fab fa-twitter"></i></a>
                    </ScrollAnimation> 
                    <ScrollAnimation delay="900" animateIn="fadeInUp" animateOnce>
                    <a href="https://www.instagram.com/" className={styles.btnLink}><i class="fab fa-instagram"></i></a>
                   </ScrollAnimation>
                   <ScrollAnimation delay="1200" animateIn="fadeInUp" animateOnce>
                    <a href="https://www.pinterest.com/" className={styles.btnLink}><i class="fab fa-pinterest-p"></i></a>
                    </ScrollAnimation>

                </div>
            </div>
            <div className={styles.footer}>
                 <Footer/>
            </div>
           
    </div>
)

export default contactPage