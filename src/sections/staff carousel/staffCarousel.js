import React from "react";
import styles from "./staffCarousel.module.scss";
import Carousel from 'nuka-carousel';


const staffCarosel = props =>(
    <div className={styles.staffCarousel}>
         <Carousel
            autoplay
            wrapAround
            defaultControlsConfig={{
            nextButtonText: '>',
            prevButtonText: '<',
            pagingDotsStyle: {
              fill: 'white',
              margin:".7rem"
            }
          }}>
                <div className={styles.slide}>
                    <img className={styles.img} alt="staff"src="https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" />
                    <h2 className={styles.name}>james johnathan</h2>
                    <span className={styles.description}>company ceo</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br/>
                     ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className={styles.slide}>
                    <img className={styles.img} alt="staff"src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    <h2 className={styles.name}>james johnathan</h2>
                    <span className={styles.description}>company ceo</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
                <div className={styles.slide}>
                    <img className={styles.img} alt="staff"src="https://images.unsplash.com/photo-1520341280432-4749d4d7bcf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" />
                    <h2 className={styles.name}>james johnathan</h2>
                    <span className={styles.description}>company ceo</span>
                    <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt <br/> ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                </div>
        </Carousel>
    </div>
)

export default staffCarosel;