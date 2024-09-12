import React from "react"; 
import emojipedia from "../emojipedia";



function findEmoji(){
    return (<p> {emojipedia.find((element) => element > 3)}</p>); 
}

export default findEmoji; 









