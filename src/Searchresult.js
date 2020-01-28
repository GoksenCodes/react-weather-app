import React from "react";
import DateComponent from "./DateComponent" ;
import WeatherIcon from "./WeatherIcon" ;


export default function Searchresult(props) {

    return(
        <div className="searchresult-section">
                <div className="row">
                    <div className="col searchresult-left">
                <ul>
                    <li>
                        <strong>{props.data.city}</strong>
                    </li>
                    <li><small><DateComponent date={props.data.date}/></small></li>
                </ul>
                </div>
                <div className="col">
                <ul>
                    <li>
                        <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                        {/* <img src={props.data.icon} alt={props.data.description}/> */}
                    </li>
                    <li> 
                    <strong>{Math.round(props.data.temperature)}</strong>
                            <span><small>°C |°F</small></span></li>                
                </ul>
                </div>
                </div>
                </div>
    )
}
