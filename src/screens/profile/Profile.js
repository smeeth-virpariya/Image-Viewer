import React, {Component} from 'react'
import Header from "../../common/header/Header";
import {Redirect} from "react-router-dom";

class Profile extends Component {
    render() {
        if (this.props.location.state === undefined) {
            return <Redirect to='/'/>
        } else if (this.props.location.state.loginSuccess === true) {
            return <Header {...this.props} isLoggedIn={true} showSearchBox={false}/>
        }
    }
}

export default Profile;