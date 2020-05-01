import React, { Component } from "react";
import styles from "./showcase.module.scss";
import Carousel from 'nuka-carousel';


class Showcase extends Component {
    
    render(){
        return (
       

        <Carousel className={styles.Carousel} 
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
        <div className={styles.showcase}>
             <img className={styles.showcaseImg} src="http://designcrazzy.com/demo/elitecorp/images/banner.jpg" alt=""/>
             <p className={styles.showcasetext}>We're an independent design & <span className={styles.red}>development</span> agency.</p>
        </div>
        <div className={styles.showcase}>
             <img className={styles.showcaseImg} src="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1046&q=80" alt=""/>
             <p className={styles.showcasetext}>We design and develop experiences that make people's live   <span className={styles.red}>simple</span></p>
        </div>
        <div className={styles.showcase}>
             <img className={styles.showcaseImg} src="https://images.unsplash.com/photo-1493421419110-74f4e85ba126?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1049&q=80" alt=""/>
             <p className={styles.showcasetext}>We start every development <span className={styles.red}>cycle</span> from scratch</p>
        </div>
        
        
      </Carousel>
          
    )
    }
    
}

export default Showcase;


            