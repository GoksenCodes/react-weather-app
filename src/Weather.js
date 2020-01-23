import React, { useState } from "react";
import axios from "axios" ;
import "./Weather.css";

export default function Weather(props){
    const [weatherData , setWeatherData] = useState({ ready: false });
    function handleResponse(response) {
        setWeatherData({
            ready: true ,
            temperature: response.data.main.temp,
            city: response.data.name,
            icon:"https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
            description: response.data.weather[0].description,
            date: "Thu 15.30"

        })
    
    }



    if (weatherData.ready) {
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
                        <strong>{weatherData.city}</strong>
                    </li>
                    <li><small>Last updated at {weatherData.date}</small></li>
                </ul>
                </div>
                <div className="col">
                <ul>
                    <li>
                        <img src={weatherData.icon} alt={weatherData.description}/>
                    </li>
                    <li> 
                    <strong>{Math.round(weatherData.temperature)}</strong>
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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."



    }
    

    }
    
    
    
    
    
    
    