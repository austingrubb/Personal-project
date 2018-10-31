import React, {Component} from 'react';
import Login from '../Login/Login'
import axios from 'axios'

class Profile extends Component {

    

    render(){   
        return(
            <div className = "profile">
                <div>
                    <Login />
                </div>
            </div>
        )
    }
}


export default Profile;
