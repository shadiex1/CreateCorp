import React from "react";
import styles from "./companyOverview.module.scss";
import BtnRed from "../../components/btn-red/btnRed"

const companyOverview = props =>(
    <div className={styles.companyOverview}>
    <h2>Company Overview</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilla. sed do eiusmod tempor incididunt ut labore et dolore.
     </p>
     <h4>Let's Start Today</h4>
     <BtnRed inner="VIEW MORE"/>
     </div>
)

export default companyOverview