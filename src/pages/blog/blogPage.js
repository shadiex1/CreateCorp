import React from "react";
import Navbar from "../../components/nav bar/navBar";
import BtnRed from "../../components/btn-red/btnRed";
import styles from "./blogPage.module.scss";
import Footer from "../../components/footer/footer"



const blogPage=props=>(
    <div>
        <Navbar/>
        <div className={styles.banner}>
            <h2>Blog</h2>
        </div>
        <div className={styles.blog}>
            <div className={styles.post}>
                <img src="https://images.unsplash.com/photo-1542382257-80dedb725088?ixlib=rb-1.2.1&auto=format&fit=crop&w=1100&q=80" alt="blog post"/>
                <div className={styles.blogText}>
                    <h2 className={styles.header}>
                    How to start building your own computer
                    </h2>
                    <p className={styles.desc}>
                    By <span className={styles.red}>John Doe </span> In <span className={styles.red}>Technology</span> Jan 10, 2017 | 10 Comments
                    </p>
                    <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries,

                    </p>

                    <BtnRed inner="READ MORE"/>
                </div>
            </div>
            <div className={styles.post}>
                <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog post"/>
                <div className={styles.blogText}>
                    <h2 className={styles.header}>
                    How Close Is The Singularity
                    </h2>
                    <p className={styles.desc}>
                    By <span className={styles.red}>John Doe </span> In <span className={styles.red}>Technology</span> Jan 10, 2017 | 10 Comments
                    </p>
                    <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries,

                    </p>

                    <BtnRed inner="READ MORE"/>
                </div>
            </div>
            <div className={styles.post}>
                <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="blog post"/>
                <div className={styles.blogText}>
                    <h2 className={styles.header}>
                    Software giants merging for the future
                    </h2>
                    <p className={styles.desc}>
                    By <span className={styles.red}>John Doe </span> In <span className={styles.red}>Technology</span> Jan 10, 2017 | 10 Comments
                    </p>
                    <p className={styles.text}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, It has survived not only five centuries,

                    </p>

                    <BtnRed inner="READ MORE"/>
                </div>
            </div>

                <div className={styles.btns}> 
                <a href="/blog"> &lt; prev </a>
                <a href="/blog">next &gt;</a>
                   
                </div>
            
        </div>
        <hr className={styles.line}/>
        <Footer/>
    </div>

    
)

export default blogPage;