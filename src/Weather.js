import React, { useState } from "react";
import axios from "axios" ;
import "./Weather.css";

export default function Weather(){
    const [ready, setReady] = useState(false)
    const [temperature , setTemperature] = useState(null)
    function handleResponse(response) {
        setTemperature(response.data.main.temp);
        setReady(true);
    }

    if (ready) {
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
                        <strong>New York</strong>
                    </li>
                    <li><small>Last updated at Thu 10:38</small></li>
                </ul>
                </div>
                <div className="col">
                <ul>
                    <li>
                        <img src="http://openweathermap.org/img/wn/50d@2x.png" alt="foggy"/>
                    </li>
                    <li> 
                    <strong>{Math.round(temperature)}</strong>
                            <span><small>°C |°F</small></span></li>                
                </ul>
                </div>
                </div>
                </div>
            </div>
    
    
        );


    } else {
    const apiKey = "683dab27e61c352cc6f11bcf41592476"
    let city = "New York"
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&apid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."



    }
    

    }
    
    
    
    
    
    
    