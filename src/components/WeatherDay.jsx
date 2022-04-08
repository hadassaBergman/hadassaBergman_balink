import React, {useEffect, useState} from "react";
import axios from "axios";
import ComponentForDay from "./ComponentForDay";
import BBC from "../images/BBC.png";
import forecast from "../images/forecast.jpeg";
import hamWeather from "../images/hamWeather.png";
import metOffice from "../images/metOffice.png";
import openWeatherMap from "../images/openWeatherMap.png";
import weatherUnderground from "../images/weatherUnderground.png";
import worldWeatherOnline from "../images/worldWeatherOnline.png";
import Arrow from "@elsdoerfer/react-arrow";
import Link from "react-router-dom/es/Link";
import {useTranslation} from "react-i18next";
import Header from "./Header";
import SelectCountry from "./SelectCountry";

export default (props) => {

    const firstRegion = props.match.params.region;
    const index = props.match.params.index;
    const [region, setRegion] = useState(firstRegion);
    const [response, setResponse] = useState({});
    const { t, i18n } = useTranslation();

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

    return (<>
        <div className={"container"}>
            <div><h1 className={"title"}>Info Weather</h1></div>


            <div className={""}>
                <Link to={`/`}>
                    <div className={"arrow"}>
                        <Arrow angle={270} length={30} style={{width: '30px'}}/>
                    </div>
                </Link>
                <SelectCountry  region={region} setRegion={setRegion}/>
            </div>

            <Header response={response}/>


            <div className={"middle"}>{response.consolidated_weather && <div className={"weather"}>
                <ComponentForDay item={response.consolidated_weather[index]} region={region} t={t}/>
            </div>}
                <div className={"sources"}><span className={"bold"}>{t("Sources")}</span>
                    {response.sources && response.sources.map(item => (
                        <div>
                            {item.title === "BBC" && <img className={"logo"} src={BBC}/>}
                            {item.title === "Forecast.io" && <img className={"logo"} src={forecast}/>}
                            {item.title === "HAMweather" && <img className={"logo"} src={hamWeather}/>}
                            {item.title === "Met Office" && <img className={"logo"} src={metOffice}/>}
                            {item.title === "OpenWeatherMap" && <img className={"logo"} src={openWeatherMap}/>}
                            {item.title === "Weather Underground" && <img className={"logo"} src={weatherUnderground}/>}
                            {item.title === "World Weather Online" &&
                                <img className={"logo"} src={worldWeatherOnline}/>}
                            <a href={item.url} className={"link"}>  {item.title} </a>
                        </div>))}
                </div>
            </div>

            <div className={"copyright"}>© Weather, Inc. 2021. We love weather</div>


        </div>
    </>);

};

