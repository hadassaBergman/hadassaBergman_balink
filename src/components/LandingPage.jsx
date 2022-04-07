import React, {useContext, useEffect, useState} from "react";
import {format} from "date-fns";
import axios from "axios";
import ComponentForDay from "./ComponentForDay";
import {useTranslation} from "react-i18next";
export {LandingPage};

const LandingPage = (props) => {

    const [region, setRegion] = useState("2459115");
    const [response, setResponse] = useState({});
    console.log(response);
    const { t } = useTranslation();


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
            <div><h1 className={"title"}>{t("Info Weather")}</h1></div>


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
                <div><span className={"city"}> {response.title} </span> {response.title}</div>
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

            <div
                className={"weather"}> {response.consolidated_weather && response.consolidated_weather.map((item,index) => (
                    <ComponentForDay item={item} region={region} index={index} displayDate={true}/>

            ))}</div>

            <div className={"copyright"}>© Weather, Inc. 2021. We love weather</div>


        </div>
    </>);

};

