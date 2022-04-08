import React, { useEffect, useState} from "react";
import axios from "axios";
import ComponentForDay from "./ComponentForDay";
import {useTranslation} from "react-i18next";
import Header from "./Header";
import SelectCountry from "./SelectCountry";
export {LandingPage};

const LandingPage = (props) => {

    const [region, setRegion] = useState("2459115");
    const [response, setResponse] = useState({});
    console.log(response);
    const { t, i18n } = useTranslation();
    console.log(i18n);
    function changeLanguage (lng) {
        i18n.changeLanguage(lng);
        window.localStorage.setItem('language', lng);
    };


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
            <select className={"select"} value={i18n.resolvedLanguage} onChange={async (e) => {
                console.log("hit");
                changeLanguage(e.target.value);
            }}>
                <option value={"en"}> English </option>
                <option value={"hb"}> Hebrew </option>
            </select>

            <div><h1 className={"title"}>{t("title")}</h1></div>

            <div>
                <SelectCountry region={region} setRegion={setRegion}/>
            </div>

            <Header response={response}/>

            <div
                className={"weather"}> {response.consolidated_weather && response.consolidated_weather.map((item,index) => (
                    <ComponentForDay item={item} region={region} index={index} displayDate={true} t={t}/>

            ))}</div>

            <div className={"copyright"}>© Weather, Inc. 2021. We love weather</div>


        </div>
    </>);

};

