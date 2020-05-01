import React, { Component } from "react";
import styles from "./gallery.module.scss";

class Gallery extends Component {

    state={
        imgURL:
        [
            "https://images.unsplash.com/photo-1471890701797-59336a877de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=788&q=80",
            "https://images.unsplash.com/photo-1566950932365-03e5a9f13780?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
            "https://images.unsplash.com/photo-1560141343-966cb5212777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1579677917230-8a938ffc0279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1580907826414-5345a5aa68ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1561630156-d73c288d1a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
            "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        ],
        filterd:[
            "https://images.unsplash.com/photo-1471890701797-59336a877de4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=788&q=80",
            "https://images.unsplash.com/photo-1566950932365-03e5a9f13780?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=801&q=80",
            "https://images.unsplash.com/photo-1560141343-966cb5212777?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1579677917230-8a938ffc0279?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1580907826414-5345a5aa68ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1561630156-d73c288d1a56?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            "https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=676&q=80",
            "https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
        ],
    }

     filterImgs= (start,end)=>{
         const origenal=this.state.imgURL
        const newFilterd=[...this.state.imgURL].slice(start,end)
            let final
            origenal.length<8 ? final=origenal : final=newFilterd;
            this.setState({filterd:final});
            
    }
    
    render(){
        return(
            <div className={styles.gallery}>
                <h1>Featured Work</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim veniam.</p>
                <ul>
                    <li><button onClick={()=>this.filterImgs(0)}>All</button></li>
                    <li><button onClick={()=>this.filterImgs(0,2)}>Website</button></li>
                    <li><button onClick={()=>this.filterImgs(4,5)}>Logo & Branding</button></li>
                    <li><button onClick={()=>this.filterImgs(2,4)}>Graphic Design</button></li>
                    <li><button onClick={()=>this.filterImgs(5,7)}>Online Marketing</button></li>
                    <li><button onClick={()=>this.filterImgs(7,8)}>Video</button></li>
                </ul>
            <div className={styles.collection}>
                {this.state.filterd.map(url=>(
                    <img src={url} alt="image1"/>
                ))}
            </div>
            </div>
        )
    }
}

export default Gallery