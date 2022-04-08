import {format} from "date-fns";
import React from "react";

export default (props) => {
    return (


        <div className={"header"}>
            <div><span className={"city"}> {props.response.title} </span> {props.response.title}</div>
            <div className={"hours"}>
                <div><span
                    className={"hours__title"}>Time</span> {props.response.time && format(new Date(props.response.time), "h:mm aaaa")}
                </div>
                <div><span
                    className={"hours__title"}>Sunrise</span> {props.response.sun_rise && format(new Date(props.response.sun_rise), "h:mm aaaa")}
                </div>
                <div><span
                    className={"hours__title"}>Sunset</span> {props.response.sun_set && format(new Date(props.response.sun_set), "h:mm aaaa")}
                </div>
            </div>
        </div>
    )
}