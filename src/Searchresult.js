import React from "react";
import DateComponent from "./DateComponent" ;
import WeatherIcon from "./WeatherIcon" ;
import TempUnit from "./TempUnit" ;


export default function Searchresult(props) {

    return(
        <div className="searchresult-section">
                    <div className="searched-city">
                <ul>
                    <li>
                        <strong>{props.data.city}</strong>
                    </li>
                    <li><small><DateComponent date={props.data.date}/></small></li>
                </ul>
                </div>
                <div className="row">
                <div className="col temp">
                    <TempUnit celsius={props.data.temperature}/>
                      
                </div>
                <div className="col">
                <WeatherIcon code={props.data.icon} alt={props.data.description}/>
                        {/* <img src={props.data.icon} alt={props.data.description}/> */}  
                </div>
                </div>
                </div>
    )
}
