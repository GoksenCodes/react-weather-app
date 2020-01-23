import React from "react";
import "./Weather.css";

export default function Weather(){
    return (
        <div className="Weather">
            <h1>
        How is the weather today?
      </h1>
            <div className="search-section">
            <form>
                <input type="search" placeholder="Enter a city" className="form-control search-box" autoFocus="on"/>
                <input type="submit" value="Search" className="button"/>

            </form>
            </div>
            <div className="searchresult-section">
            <div className="row">
                <div className="col searchresult-left">
            <ul>
                <li>
                    Amsterdam
                </li>
                <li>Last updated at Thu 10:38</li>
            </ul>
            </div>
            <div className="col">
            <ul>
                <li>
                    <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="foggy"/>
                </li>
                <li> 
                <strong> 6 </strong>
                        <span><small>°C |°F</small></span></li>                
            </ul>
            </div>
            </div>
            </div>
        </div>


    )
}