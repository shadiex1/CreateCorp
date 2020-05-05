import React from "react";
import styles from "./btnRed.module.scss";


const btnRed = props=>(
    <div>
        <a href={process.env.PUBLIC_URL + '/'} className={styles.btn}>{props.inner}</a>
    </div>
)

export default btnRed