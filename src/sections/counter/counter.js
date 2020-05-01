import React, { Component } from "react";
import styles from "./counter.module.scss";


class Counter extends Component {
    render(){
        return(
            <div className={styles.counter}>
                <div className={styles.card}>
                <i className="fas fa-briefcase"/>
                      {/* number */} <p className={styles.number}>231</p>
                    <p className={styles.text}>Projects</p>
                </div>
                <div className={styles.card}>
                <i className="fas fa-user"/>
                      {/* number */} <p className={styles.number}>548</p>
                    <p className={styles.text}>CUSTOMERS</p>
                </div>
                <div className={styles.card}>
                    <i className="fas fa-coffee"/>
                      {/* number */} <p className={styles.number}>4322</p>
                    <p className={styles.text}>COFFEE</p>
                </div>
                
                 <div className={styles.card}>
                <i className="fas fa-download"/>
                      {/* number */} <p className={styles.number}>400,244</p>
                    <p className={styles.text}>APP DOWNLOADS</p>
                </div>
            </div>
        )
    }
}

export default Counter;