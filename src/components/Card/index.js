import React from "react";
import "./style.css";
 


function Card(props){
   
    return (
    <div className="card-container">   
    <h4>Click On this Image</h4>
    <img src={props.imageInfo}/>
    </div> 
    )
}
export default Card;