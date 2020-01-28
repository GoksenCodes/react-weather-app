import React, { useState } from "react";


export default function TempUnit(props){
    const [unit,setUnit] = useState("celsius");
    function convertToF(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToC(event) {
        event.preventDefault();
        setUnit("celsius");

        }
    if(unit === "celsius") {
    return(
        <div>
        <strong>{Math.round(props.celsius)}</strong>
                            <span><small> °C | <a href="/" onClick={convertToF}>°F</a></small></span>
                            </div>
    ) ;
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32 ;
        return (
            <div>
            <strong>{Math.round(fahrenheit)}</strong>
                                <span><small><a href="/" onClick={convertToC}>°C </a>| °F</small></span>
                                </div>
        ) ;
        
    }

}