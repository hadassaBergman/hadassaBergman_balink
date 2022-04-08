import React from "react";

export default (props) => {
    return (
        <select className={"select"} value={props.region} onChange={async (e) => {
            props.setRegion(e.target.value);
        }}>
            <option value={""} disabled={true}> Select a country</option>
            <option value={"2459115"}> New York</option>
            <option value={"2442047"}> Los Angeles</option>
            <option value={"610264"}> Marseille</option>
            <option value={"753692"}> Barcelona</option>
            <option value={"721943"}> Rome</option>
        </select>
    )
}