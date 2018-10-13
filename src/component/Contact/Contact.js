import React, {Component} from 'react';

class Contact extends Component {
    render(){   
        return(
            <div className = "contact">

                <div className = "inputContainer" >
                    <label for = "fname">First Name</label>
                    <input type = "text" id = "fname" placeholder = "Your First Name"/>
                </div>
                <div className = "inputContainer" >
                    <label for = "lname">Last Name</label>
                    <input type = "text" id = "lname" placeholder = "Your Last Name"/>
                </div>
                <div className = "inputContainer" >
                    <label for = "email">Email</label>
                    <input type = "text" id = "email" placeholder = "Your Email"/>
                </div>
                <div className = "inputContainer" >
                    <label for = "reason">Your Moment</label>
                    <input type = "text" id = "reason" placeholder = "What moment would you like me to capture?"/>
                </div>
                <button>Submit</button>
            </div>
        )
    }
}

export default Contact;