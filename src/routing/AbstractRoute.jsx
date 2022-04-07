import React, {useContext} from "react";
import {Route} from "react-router-dom";

export {AbstractRoute};

const AbstractRoute = (props) => {

    return (<Route exact={props.exact} path={props.path}
                   render={(componentProps) => <props.component {...componentProps} page={props.page}/>}/>);
}