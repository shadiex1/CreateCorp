import React from "react";
import styles from "./pricePlan.module.scss";
import BtnRed from "../../components/btn-red/btnRed";

const pricePlan = props =>(
    <div className={styles.pricePlan}>
        <h2 className={styles.header}>Pricing Table</h2>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim veniam.</p>
        <div className={styles.priceList}>
            <div className={styles.card}>
                <h3 className={styles.cardHeader}>Small Business</h3>
                <p className={styles.cardText}>Lorem ipsum</p>
                <p className={styles.price}>$99/<span className={styles.year}>Year</span></p>
                <ul className={styles.list}>
                    <li>1 Hosting</li>
                    <li>Upto 10 users</li>
                    <li>3 databases</li>
                    <li>Website builder</li>
                    <li>Email Support</li>
                 </ul>
                <BtnRed inner="BUY NOW"/>
            </div>
            <div className={styles.card}>
                <h4 className={styles.cardHeader}>Corporate</h4>
                <p className={styles.cardText}>Lorem ipsum</p>
                <p className={styles.redPrice}>$199/<span className={styles.year}>Year</span></p>
                <ul className={styles.list}>
                    <li>1 Hosting</li>
                    <li>Upto 10 users</li>
                    <li>3 databases</li>
                    <li>Website builder</li>
                    <li>Email Support</li>
                 </ul>
                <BtnRed inner="BUY NOW"/>
            </div>
            <div className={styles.card}>
                <h3 className={styles.cardHeader}>Enterprices</h3>
                <p className={styles.cardText}>Lorem ipsum</p>
                <p className={styles.price}>$299/<span className={styles.year}>Year</span></p>
                <ul className={styles.list}>
                    <li>1 Hosting</li>
                    <li>Upto 10 users</li>
                    <li>3 databases</li>
                    <li>Website builder</li>
                    <li>Email Support</li>
                 </ul>
                <BtnRed inner="BUY NOW"/>
            </div>
        </div>
    </div>
)

export default pricePlan;