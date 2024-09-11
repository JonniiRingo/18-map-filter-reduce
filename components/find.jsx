import React from "react"; 
import emojipedia from "../emojipedia";



function findEmoji(){
    return emojipedia.find((element) => element > 3); 
}

export default findEmoji; 



