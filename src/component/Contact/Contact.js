import React, {Component} from 'react';
import axios from 'axios'
// const nodemailer = require('nodemailer');

class Contact extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            email: '',
            moment: ''

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
            moment: this.state.moment
        }
        axios.post('/api/sendEmail', formData).then((res) => {
            console.log(res.data)
        })
        event.preventDefault();
    }

    
    render(){   
        return(
            <div className = "contact">
                    <header>
                        Alexis Marie Photography Contact
                    </header>
                 <p>
                    I appreciate that you took the time to look around and consider me as your potential photographer and would love to get the chance to speak with you. Please contact me with any of your questions or concerns and if you would like to set up a session. This is about YOU and I want to make sure to capture every moment exactly how you want to remember it.
                </p>

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
                <button type="submit" value="Submit" onClick={(e) => this.handleSubmit(e)}>Submit</button>
            </div>
        )
    }
}

export default Contact;