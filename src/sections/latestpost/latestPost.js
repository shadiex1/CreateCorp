import React, { Component } from "react";
import styles from "./latestPost.module.scss";
import ScrollAnimation from 'react-animate-on-scroll';



class latestPost extends Component {
    state={
        posts : [
                {img:"https://images.unsplash.com/photo-1421757295538-9c80958e75b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80",title:"How latest technologies changing people's life",date:"March 24, 2019",durration:1},
                {img:"https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"5 Thing to know before you start new blog",date:"April 4, 2019",duration:2},
                {img:"https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",title:"2017 is the year of startups are you for it",date:"April 12, 2019",duration:3}
        ]
    }
    render(){
        return(
            <div className={styles.latestPost}>
        <h2>Latest Post</h2>
        <p className={styles.param}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim veniam.</p>
        <div className={styles.postsCollection}>
         {this.state.posts.map(post=>(
                         <ScrollAnimation initiallyVisible offset="20" className={styles.post} animateOnce animateIn="fadeInUp" duration={post.duration}>

             <div > 
                <img className={styles.img} alt="" src={post.img}/>
         <h3 className={styles.title}>{post.title}</h3>
         <span className={styles.date}>{post.date}</span>
         <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisc ing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

         </p>
        <a className={styles.link} href="index.html">Read More</a>
            </div>
            </ScrollAnimation>
         ))}
        </div>
    </div>
        )}
    }

        
export default latestPost 