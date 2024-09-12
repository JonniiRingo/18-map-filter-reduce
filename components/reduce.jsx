import React from "react"; 
import ReactDOM from "react-dom/client"; 
import emojipedia from "../emojipedia";





function reduceEmoji(){
    return (<div>
        <p>{emojipedia.reduce}</p>
    </div>);
}


export default reduceEmoji;