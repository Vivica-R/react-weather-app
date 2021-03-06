import React from "react";


export default function FormattedDate(props) {
    let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"]
    let day = days[props.date.getDay()];
    let hours = props.date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = props.date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    return( 
        <div className="today">
            {day}, {hours}:{minutes}
        </div>
    );
}