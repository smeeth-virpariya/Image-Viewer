import React, {Component, Fragment} from 'react';

//Import of stylesheet for header component.
import './Header.css';

import {Input, InputAdornment} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

/**
 * Header Component serves header for multiple pages.
 */
class Header extends Component {

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
                                   startAdornment={<InputAdornment
                                       position="start"><SearchIcon/></InputAdornment>}></Input>
                        </div>
                    </Fragment>


            }
        </div>


    }
}

export default Header;