import React, { useState } from "react";

import Searchresult from "./Searchresult" ;
import axios from "axios" ;
import "./Weather.css";


export default function Weather(props){
    const [weatherData , setWeatherData] = useState({ ready: false });
    const [city , setCity] = useState(props.defaultCity) ; 
    function handleResponse(response) {
        setWeatherData({
            ready: true ,
            temperature: response.data.main.temp,
            city: response.data.name,
            icon:response.data.weather[0].icon,
            description: response.data.weather[0].description,
            date: new Date(response.data.dt * 1000)

        })
    
    }

    function search() {
        const apiKey = "683dab27e61c352cc6f11bcf41592476"
        // let city = "New York"
        let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiUrl).then(handleResponse);
    }
    

    function handleSubmit(event) {
        event.preventDefault();
        search();

    }

    function handleInput(event) {
        setCity(event.target.value);


    }



    if (weatherData.ready) {
        return (
            <div className="Weather">
                <h2>
            How is the weather today?
          </h2>
                <div className="search-section">
                <form onSubmit={handleSubmit}> 
                    <input type="search" placeholder="Enter a city and press enter" className="form-control search-box" autoFocus="on" onChange={handleInput}/>
                    
    
                </form>
                </div>
                <Searchresult data={weatherData}/>
                <p><small>No matter how the weather is, let your day be beautiful 💜</small></p>
                
            </div>
    
    
        );


    } else {
        search();
        return "Loading..."



    }
    

    }
    
    
    
    
    
    
    