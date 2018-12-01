import React, { Component } from 'react';
import axios from 'axios';
import {logIn} from '../../ducks/reducer'
import {logOut} from '../../ducks/reducer'
import { connect } from 'react-redux';
import MainContent from './MainContent'

class Login extends Component {
  state = {
    username: "test1",
    password: "test1",
    email: "test1",
    admin: false,
    user: this.props.user, 
  }


  
  login = () => {
    axios.post('/login',{username: this.state.username, password: this.state.password}).then( res => {
      this.props.logIn(res.data)}
    ).catch(error => {
      console.log('error', error);
    })
    // console.log(this.state)
  }

  logOut = () => {
    axios.post('/logout' ).then (res => {
      this.props.logOut(res.data)
      this.setState({
        username: "",
        password: ""
          })
        }
      )
    }

    render() {
      // console.log(this.state)
      const {user} =this.props
      console.log('current logged in user', user)
      return (
        <div>
          <div className="login-introProfile">
            {!user ?

              <div className="inputBoxs">
            <h1>Login</h1>
                Username:
            <input type='text' name ='username' onChange = {(e) => this.setState({username: e.target.value})}value = {this.state.username}/>
                Password:
            <input type='text' password ='password' onChange = {(e) => this.setState({password: e.target.value})}value = {this.state.password}/>
          <button onClick={this.login}>Login</button>
          </div>
          :
          <div className='  user-info'>
                <h2>Name:</h2>
                <div>{user ? 
                    <MainContent user={user} />
                  : 'please login'}</div>
                <button onClick={this.logOut}>logout</button>
              </div>
            } 
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
  
  export default connect(mapStateToProps,{logIn, logOut})(Login);