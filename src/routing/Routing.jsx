import React, {Fragment, useContext} from "react";
import {Switch, Route} from "react-router-dom";
import {routes} from "./routes";
import {AbstractRoute} from "./AbstractRoute";
import {LandingPage} from "../components/LandingPage";
export {Routing};

const Routing = (props) => {

    return (<Fragment>
        <Switch>
            <AbstractRoute exact={true} path={"/"} page={"LandingPage"} component={LandingPage} key={0} routeType={'public'} />
            {routes.public.filter((item) => item.path !== "/").map((item, key) => (
                <AbstractRoute {...item} key={key} routeType={'public'} />))}
        </Switch>

    </Fragment>);
};