import React from "react";
import ReactDOM from "react-dom/client";
import emojipedia from "../emojipedia"; 
import reduce from "./reduce"; 
import mapped_emojies from "./map"; 



function App(){
    return (
        <div>
            <span>List of each stl function </span>

            <map />
            <reduce /> 
            <find /> 

        </div>
    )
}