import React, {Component, Fragment} from 'react'

//Router import for redirection.
import {Route, Switch} from "react-router-dom";

//Imports of different pages in the application
import Login from "./screens/login/Login";
import Home from "./screens/home/Home";

/**
 * This class represents the whole ImageViewer Application.
 */
class ImageViewer extends Component {
    render() {
        return <Fragment>
            <Switch>
                <Route exact path='/' render={(props) => <Login/>}/>
                <Route exact path='/home' render={(props) => <Home {...props}/>}/>
            </Switch>
        </Fragment>
    }
}

export default ImageViewer;