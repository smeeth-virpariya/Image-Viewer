import React,{Component} from 'react';

//Import of stylesheet for header component.
import './Header.css';

/**
 * Header Component serves header for multiple pages.
 */
class Header extends Component{

    render() {
        return <div className='header-flex-container'>
            <div>
                <header className='logo'>Image Viewer</header>
            </div>
        </div>
    }
}

export default Header;