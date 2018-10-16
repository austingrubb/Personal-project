import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../media/logo.png'

export default class Nav extends Component{
    state = {
        toggle: false
    }

    toggleFunc = () => {
        this.setState((prevState) => {
            return {
                toggle: !prevState.toggle
            }
        })
    }
    render(){
        return(
            <div className="navBar">
                <div className="navBar-container">
                    <div className="logo-container">
                         <Link to="/">
                            <img className='camera-logo' src={logo}/>
                        </Link>
                    </div>

                    <div onClick={this.toggleFunc}className='mobileToggle'>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <div className={this.state.toggle ? "link-container" : "link-container hide" }>
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/Portfolio">
                            Portfolio
                        </NavLink>
                        <NavLink to="/Profile">
                            Profile
                        </NavLink>
                        <NavLink to="/Contact">
                            Contact
                        </NavLink> 
                    </div>
                </div>
        </div>
    )
}
}
