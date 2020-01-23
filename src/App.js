import React from 'react';
import Weather from "./Weather"
import './App.css';




export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather/>
      <footer>
        <a href="https://github.com/GoksenCodes/weather-react" target="_blank">Open-source code</a>
        {" "} by Goksen Gorgulu
      </footer>
      </div>
    </div>
  );
}


