import React from "react";
import {Link} from "react-router-dom";
import {format} from "date-fns";
import Arrow from "@elsdoerfer/react-arrow";

export default (props) => {
    function isToday(date) {
        const today = new Date()
        return date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
    }

    function isTomorrow(date) {
        const today = new Date()
        return date.getDate() === today.getDate() + 1 &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
    }

    return(
            <div>
                {props.displayDate && <Link to={`/${props.region}/day/${props.index}`}>
                <div className={"date"}>
                    {isToday(new Date(props.item.applicable_date)) && <>Today</>}
                    {isTomorrow(new Date(props.item.applicable_date)) && <>Tomorrow</>}
                    {!isToday(new Date(props.item.applicable_date)) && !isTomorrow(new Date(props.item.applicable_date)) && format(new Date(props.item.applicable_date), "E d MMM")}
                </div>
                </Link>}
                <br/>
                <div>
                    <img className={"img"}
                         src={`https://www.metaweather.com/static/img/weather/${props.item.weather_state_abbr}.svg`}/>
                    {props.item.weather_state_name}
                </div>
                <div>Max:{Math.round(props.item.max_temp)}°C</div>
                <div>Min:{Math.round(props.item.min_temp)}°C</div>
                <br/>
                <div><Arrow angle={Math.round(props.item.wind_direction)} length={20}
                            style={{width: '20px'}}/> {Math.round(props.item.wind_speed)}mph
                </div>
                <br/>
                <div className={"bold"}>Humidity</div>
                <div>{props.item.humidity}%</div>
                <div className={"bold"}>Visibility</div>
                <div>{Math.round(props.item.visibility * 10) / 10}miles</div>
                <div className={"bold"}>Pressure</div>
                <div>{Math.round(props.item.air_pressure)}mb</div>
                <br/>
                <div className={"bold"}>Confidence</div>
                <div>{props.item.predictability}%</div>
            </div>
    )
};