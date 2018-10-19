import React, {Component} from 'react';
import axios from 'axios'
// const nodemailer = require('nodemailer');

class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name: 'austin grubb',
            email: 'austin.grubb@gmail.com',
            moment: 'anaversary photos',
            hearAbout: 'found you on face book'

        }
        
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(key, value){
        this.setState({
         [key]: value
        })
    }


    handleSubmit(event){
        alert('The email was submitted thank you ' + this.state.name);
        const formData = {
            name: this.state.name,
            email: this.state.email,
            moment: this.state.moment,
            hearAbout: this.state.hearAbout
        }
        axios.post('/api/sendEmail', formData).then((res) => {
        })
        event.preventDefault();
    }

    
    render(){   
        return(
            <div className = "contact">
                    <div className = "headerContact">
                        Contact Alexis Marie Photography
                    </div>
                <div className="thankYouBox">
                    <p>
                        I appreciate that you took the time to look around and consider me as your potential photographer and would love to get the chance to speak with you. Please contact me with any of your questions or concerns and if you would like to set up a session. This is about YOU and I want to make sure to capture every moment exactly how you want to remember it.
                    </p>
                </div>
                <div className="inputContainerBox">
                    <div className = "inputContainer" >
                        <label for = "Name">Name</label>
                        <input type = "text" value={this.state.name} onChange={e => this.handleChange('name', e.target.value)} placeholder = "Your First and Last Name"/>
                    </div>
                    <div className = "inputContainer" >
                        <label for = "email">Email</label>
                        <input type = "text" value={this.state.email} onChange={e => this.handleChange('email', e.target.value)} placeholder = "Your Email"/>
                    </div>
                    <div className = "inputContainer" >
                        <label for = "reason">Your Moment</label>
                        <input type = "text" value={this.state.moment} onChange={e => this.handleChange('moment', e.target.value)} placeholder = "What moment would you like me to capture?"/>
                    </div>
                    <div className = "inputContainer" >
                        <label for = "reason">How did You Hear About Me?</label>
                        <input type = "text" value={this.state.hearAbout} onChange={e => this.handleChange('hearAbout', e.target.value)} placeholder = "What moment would you like me to capture?"/>
                    </div>
                    <button className = "submit" type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
                </div>
            </div>
        )
    }
}

export default Contact;