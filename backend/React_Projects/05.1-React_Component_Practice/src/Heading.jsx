import React from "react";

function Heading() {
    let heading;
    let color;

    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    
    if (currentHour > 6 && currentHour < 12) {
      heading = "Good Morning";
      color = "red";
    } else if (currentHour >= 12 && currentHour < 18) {
      heading = "Good Afternoon";
      color = "green";
    } else if (currentHour >= 18 && currentHour >= 0) {
      heading = "Good Evening";
    } else {
      heading = "Good Night";
      color = "blue";
    }
    
    return <h1 style={{ color: color }} className="heading"> { heading }</h1>
}

export default Heading;