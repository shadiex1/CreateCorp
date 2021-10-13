import React,{Component} from "react";
import styles from "./MenuSidebar.module.scss"
import { CloseIcon } from "../svg";
import { Link,NavLink } from "react-router-dom";

class MenuSidebar extends Component{
    state={
        showMenuSidebar:false
    }
    componentDidUpdate(){
        const {open} =this.props;
        if(open){
            document.body.style.overflow="hidden";
        }else document.body.style.overflow="unset";
    }
    componentDidMount(){
        document.body.style.overflow="auto"
    }
    showMenuSidebarToggleHandler=()=>{
        this.setState((prevState)=>{
            return{showMenuSidebar:!prevState.showMenuSidebar}
        })
    }
    showMenuSidebarClosedHandler=()=>{
        this.setState({showMenuSidebar:false})
    }
    render(){
        const {closed,open}=this.props
        let attachedStyles=[styles.sidebar,styles.Close];
        if(open){
            attachedStyles=[styles.sidebar,styles.Open];
        }
        return(
            <div className={attachedStyles.join(" ")}>
                <div className={styles.title}>
                <div className={styles.logo}>
          <Link to={process.env.PUBLIC_URL + "/"}>
          <p className={styles.logo}>Create<span className={styles.logoSpan}>Corp</span></p>
          </Link>
        </div>
        <div className={styles.close} onClick={closed}><CloseIcon/></div>
                </div>
                <ul className={styles.Links}>
          <li className={styles.navLink}> <NavLink exact to={process.env.PUBLIC_URL + '/'}  activeClassName={styles.active}>Home</NavLink></li>
                    <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/about'} activeClassName={styles.active}>About</NavLink></li>
                    <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/work'}  activeClassName={styles.active}>Work</NavLink></li>
                    <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/blog'}  activeClassName={styles.active}>Blog</NavLink></li>
                    <li className={styles.navLink}> <NavLink to={process.env.PUBLIC_URL + '/contact'} activeClassName={styles.active}>Contact</NavLink></li>
        </ul>
            </div>
        )
    }
}

export default MenuSidebar