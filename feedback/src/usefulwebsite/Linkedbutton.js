import React from "react";
import './Linkedbutton.css'

const Linkedbutton =({name,link}) =>{
   return <div>
 <a href={link} target="_blank" rel="noreferrer"><button className="buttonedit">{name}</button>
   </a>
   </div> 
  
}

export default Linkedbutton;