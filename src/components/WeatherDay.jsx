import React, {useEffect, useState} from "react";
import axios from "axios";
import {format} from "date-fns";
import ComponentForDay from "./ComponentForDay";
import BBC from "../images/BBC.png";
import forecast from "../images/forecast.jpeg";
import hamWeather from "../images/hamWeather.png";
import metOffice from "../images/metOffice.png";
import openWeatherMap from "../images/openWeatherMap.png";
import weatherUnderground from "../images/weatherUnderground.png";
import worldWeatherOnline from "../images/worldWeatherOnline.png";

export default (props) => {

    const firstRegion = props.match.params.region;
    const index = props.match.params.index;
    const [region, setRegion] = useState(firstRegion);
    const [response, setResponse] = useState({});
    console.log("by date",response);

    useEffect(() => {
        (async function () {
            try {
                const {status, data} = (await axios.get(`https://www.metaweather.com/api/location/${region}/`, {}));
                setResponse(data);
            } catch (error) {
                console.log(error);
            }
        })()
    }, [region]);

    return(<>
        <div className={"container"}>
            <div><h1 className={"title"}>Info Weather</h1></div>


            <div>
                <select className={"select"} value={region} onChange={async (e) => {
                    setRegion(e.target.value);
                }}>
                    <option value={""} disabled={true}> Select a country</option>
                    <option value={"2459115"}> New York</option>
                    <option value={"2442047"}> Los Angeles</option>
                    <option value={"610264"}> Marseille</option>
                    <option value={"753692"}> Barcelona</option>
                    <option value={"721943"}> Rome</option>
                </select>
            </div>

            <div className={"header"}>
                <span className={"city"}> {response.title} </span>
                <div className={"hours"}>
                    <div><span
                        className={"hours__title"}>Time</span> {response.time && format(new Date(response.time), "h:mm aaaa")}
                    </div>
                    <div><span
                        className={"hours__title"}>Sunrise</span> {response.sun_rise && format(new Date(response.sun_rise), "h:mm aaaa")}
                    </div>
                    <div><span
                        className={"hours__title"}>Sunset</span> {response.sun_set && format(new Date(response.sun_set), "h:mm aaaa")}
                    </div>
                </div>
            </div>

           <div className={"middle"}>{response.consolidated_weather && <div className={"weather"}>
                <ComponentForDay item={response.consolidated_weather[index]} region={region}/>
            </div>}
               <div className={"sources"}> <span className={"bold"}>Sources</span>
                   {response.sources && response.sources.map(item=>(
                       <div>
                           {item.title==="BBC" && <img className={"logo"} src={BBC}/>}
                           {item.title==="Forecast.io" && <img className={"logo"} src={forecast}/>}
                           {item.title==="HAMweather" && <img className={"logo"} src={hamWeather}/>}
                           {item.title==="Met Office" && <img className={"logo"} src={metOffice}/>}
                           {item.title==="OpenWeatherMap" && <img className={"logo"} src={openWeatherMap}/>}
                           {item.title==="Weather Underground" && <img className={"logo"} src={weatherUnderground}/>}
                           {item.title==="World Weather Online" && <img className={"logo"} src={worldWeatherOnline}/>}
                         <a href={item.url} className={"link"}>  {item.title} </a>
                       </div>))}
               </div>
           </div>

            <div className={"copyright"}>© Weather, Inc. 2021. We love weather</div>


        </div>
    </>);

};

