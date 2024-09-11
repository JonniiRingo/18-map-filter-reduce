import React from "react"; 
import ReactDOM from "react-dom/client"; 
import emojipedia from "../emojipedia";





function reduceEmoji(){
    return (<div>
        {emojipedia.reduce}
    </div>);
}


export default reduceEmoji;