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
    // return (
    //     <div>
    //         <strong>
    //             {console.log(props.celsius)}
            
                
    //             {unit === "celcius" ? (
    //                 Math.round(Number(props.celsius))
    //             ):(
    //                 Math.round(Number(props.fahrenheit))
    //             )}
    //         </strong>
    //         <span>
    //             {unit === "celcius" ? (
    //                 <small> °C | <a href="/" onClick={convertToF}>°F</a></small>
    //             ):(
    //                 <small><a href="/" onClick={convertToC}>°C </a>| °F</small>
    //             )}
    //         </span>
    //     </div>
    // )
    
    
    if(unit === "celsius") {
    return(
        <div className="temp-container">
        <strong>{Math.round(props.celsius)}</strong>
                            <span><small> °C | <a href="/" onClick={convertToF}>°F</a></small></span>
                            </div>
    ) ;
    } else {
        let fahrenheit = (props.celsius * 9/5) + 32 ;
        return (
            <div className="temp-container">
            <strong>{Math.round(fahrenheit)}</strong>
                                <span><small><a href="/" onClick={convertToC}>°C </a>| °F</small></span>
                                </div>
        ) ;
        
    }

}