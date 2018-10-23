import React, {Component} from 'react';
import { NavLink, Link } from 'react-router-dom';
import {logIn} from '../../ducks/reducer'
import { connect } from 'react-redux';
import logo from '../../media/logo.png'
import axios from 'axios'


class Nav extends Component{
    componentDidMount(){
        axios.get('/api/getLoggedInUser').then(response => {
            this.props.logIn(response.data)
            console.log(response.data)
        })
    }
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
                        <NavLink to="/About">
                            About
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

const mapStateToProps = (store) => {
    return{
      user: store.users
    }
  }
  
  export default connect(mapStateToProps,{logIn})(Nav);