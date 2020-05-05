import React from "react";
import styles from "./navBar.module.scss";
import {NavLink} from "react-router-dom";

const navBar = props=>(
    <div className={styles.navbar}>
        <div className={styles.logo}>
            <p>Create<span className={styles.logoSpan}>Corp</span></p>
        </div>
        <div className={styles.navItems}>
            <ul>
                <li className={styles.navLink}> <NavLink exact to={process.env.PUBLIC_URL + '/'}  activeClassName={styles.active}>Home</NavLink></li>
                <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/about'} activeClassName={styles.active}>About</NavLink></li>
                <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/work'}  activeClassName={styles.active}>Work</NavLink></li>
                <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/blog'}  activeClassName={styles.active}>Blog</NavLink></li>
                <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/contact'} activeClassName={styles.active}>Contact</NavLink></li>
            </ul>
        </div>
    </div>
)


export default navBar