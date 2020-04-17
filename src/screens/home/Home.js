import React, {Component} from 'react';
import Header from "../../common/header/Header";

//Router import for redirection.
import {Redirect} from 'react-router-dom';

class Home extends Component {

    render() {
        if (this.props.location.state === undefined) {
            return <Redirect to='/'/>
        }
        if (this.props.location.state.loginSuccess === true) {
            return <div>
                <div><Header/></div>
                <div><span>Success</span></div>
            </div>
        }
    }
}

export default Home;