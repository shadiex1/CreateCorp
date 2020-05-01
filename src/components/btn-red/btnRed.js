import React from "react";
import styles from "./btnRed.module.scss";


const btnRed = props=>(
    <div>
        <a href="index.html" className={styles.btn}>{props.inner}</a>
    </div>
)

export default btnRed