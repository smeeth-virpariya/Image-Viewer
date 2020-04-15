import React, {Component} from 'react'

//Router import for redirection.
import {BrowserRouter as Router, Route} from "react-router-dom";

//Imports of different pages in the application
import Login from "./screens/login/Login";

/**
 * This class represents the whole ImageViewer Application.
 */
class ImageViewer extends Component {
    render() {
        return <Router>
            <Route exact path='/' render={(props) => <Login/>}/>
        </Router>
    }
}

export default ImageViewer;