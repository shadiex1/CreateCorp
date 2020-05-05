import React from "react";
import styles from "./banner.module.scss";

const banner = props=>(
  
    <div className={styles.banner}>
        <p>
        You think we're cool? let's work together
        </p>
        <a href={process.env.PUBLIC_URL + '/contact'} className={styles.btn}>CONTACT US</a>
    </div>
)

export  default banner