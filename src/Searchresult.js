import React from "react";
import DateComponent from "./DateComponent" ;
import WeatherIcon from "./WeatherIcon" ;
import TempUnit from "./TempUnit" ;


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
                        <TempUnit celsius={props.data.temperature}/>
                    </li>                
                </ul>
                </div>
                </div>
                </div>
    )
}
