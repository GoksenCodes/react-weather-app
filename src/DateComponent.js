import React from "react" ;

export default function DateComponent(props) {
    console.log(props.date)
    let days = ["Sun" , "Mon" , "Tue" , "Wed", "Thu", "Fri", "Sat"]
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();

    if (minutes < 10) {
        minutes = `0${minutes}` ;
    }

    if (hours < 10) {
      hours = `0${hours}` ;
  }




    return <div>
      <div className="icon">
     Last updated at {day} {hours} : {minutes}
     </div>
    </div>;

}