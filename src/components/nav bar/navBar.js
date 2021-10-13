import React from "react";
import styles from "./navBar.module.scss";
import {NavLink} from "react-router-dom";
import { Component } from "react";
import MenuSidebar from "../MenuSidebar/MenuSidebar";
class navBar extends Component{
    
    state={
            showMenuSideBar:false
    }
    showMenuSidebarToggleHandler=()=>{
        this.setState((prevState)=>{
          return({showMenuSidebar:!prevState.showMenuSidebar})
        })
      }
      showMenuSidebarClosedHandler=()=>{
        this.setState({
          showMenuSidebar:false
        })
      }
    render(){
        

        return(
            <>
                    <MenuSidebar open={this.state.showMenuSidebar} closed={this.showMenuSidebarClosedHandler}></MenuSidebar>

            <div className={styles.navbar}>

                 <div onClick={this.showMenuSidebarToggleHandler} className={styles.toggler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
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
        </div></>
        )
        
    }
}
   



export default navBar