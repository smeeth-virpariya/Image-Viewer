import React, {Component, Fragment} from 'react';

//Import of stylesheet for header component.
import './Header.css';

import {Avatar, IconButton, Input, InputAdornment, Menu, MenuItem, Typography} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

/**
 * Header Component serves header for multiple pages.
 */
class Header extends Component {

    constructor() {
        super();
        this.state = {
            menuState: false,
            anchorEl: null
        }
    }

    render() {
        return <div className='header-flex-container'>
            {
                this.props.isLoggedIn !== true ?
                    <div>
                        <header className='logo'>Image Viewer</header>
                    </div>
                    :
                    <Fragment>
                        <div>
                            <header className='logo'>Image Viewer</header>
                        </div>
                        <div className='header-right-flex-container'>
                            <Input className='search-box' type='search' placeholder='Search...' disableUnderline
                                   startAdornment={
                                       <InputAdornment position="start"><SearchIcon/></InputAdornment>
                                   }/>
                            <IconButton id='profile-icon' onClick={this.onProfileIconClick}>
                                <Avatar alt="profile_picture"
                                        src={this.props.profilePictureUrl}/>
                            </IconButton>
                            <div>
                                <Menu open={this.state.menuState} onClose={this.onMenuClose}
                                      anchorEl={this.state.anchorEl} getContentAnchorEl={null}
                                      anchorOrigin={{vertical: "bottom", horizontal: "right"}} keepMounted>
                                    <MenuItem><Typography>My Account</Typography></MenuItem>
                                    <hr className='horizontal-line'/>
                                    <MenuItem><Typography>Logout</Typography></MenuItem>
                                </Menu>
                            </div>
                        </div>
                    </Fragment>
            }
        </div>

    }

    onProfileIconClick = (e) => {
        this.setState({'menuState': !this.state.menuState, 'anchorEl': e.currentTarget});
    }

    onMenuClose = () => {
        this.setState({'menuState': !this.state.menuState, 'anchorEl': null});
    }
}

export default Header;