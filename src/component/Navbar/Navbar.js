import React from 'react';
import { Link } from 'react-router-dom';
import camera from '../../media/camera.png'

export default function Nav(){
    return(
        <div className="navBar">
                <div className="navBar-container">
                    <div className="logo-container">
                        <p className="Home"></p>
                         <Link to="/">
                            <img className='camera-logo' src={camera}/>
                        </Link>
                    </div>
                    <div>
                        <p className="Portfolio"></p>
                        <Link to="/Portfolio">
                            <button>Portfolio</button>
                        </Link>
                        <p className="Profile"></p>
                        <Link to="/Profile">
                            <button>Profile</button>
                        </Link>
                        <p className="About"></p>
                        <Link to="/About">
                            <button>About</button>
                        </Link>
                        <p className="Contact"></p>
                        <Link to="/Contact">
                            <button>Contact</button>
                        </Link> 
                    </div>
                </div>
        </div>
    )
 }
