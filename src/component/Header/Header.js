import React, {Component} from 'react';
import Nav from '../Navbar/Navbar';

class Header extends Component {
    render(){   
        return(
            <div className = "header">
                <Nav/>
            </div>
        )
    }
}

export default Header;