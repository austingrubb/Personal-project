import React, {Component} from 'react';
import UsersList from '../Admin/UsersList'
import axios from 'axios';
import {logIn} from '../../ducks/reducer'
import {logOut} from '../../ducks/reducer'
import { connect } from 'react-redux';

export class Admin extends Component {
    constructor(){
        super();
        this.state = {  
            gallery: [],
            username: "test1",
            password: "test1",
            email: "test1",
            admin: false,
            users: ''
        }
    }

    componentDidMount(){
        axios.get('/api/users').then(response => {
            console.log(response.data)
            this.setState({
                users: response.data
            })
        })
    }

    signup = () => {
        axios.post('/signup' ,{username: this.state.username, password: this.state.password, email: this.state.email, admin: this.state.admin})
        .then(res => this.setState({username: "", password: "", email: "", user: ""}))
        .catch(error => {
        console.log('error', error);
        })
        console.log(this.state.username,this.state.password,this.state.email,this.state.admin)
    }
    
    login = () => {
        axios.post('/login',{username: this.state.username, password: this.state.password}).then( res => {
            this.props.logIn(res.data)}
        ).catch(error => {
            console.log('error', error);
        })
        console.log(this.state.username,this.state.password,this.state.email,this.state.admin)
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

    uploadWidget = () => {

        let imagesArray = []
        window.cloudinary.openUploadWidget(
     { cloud_name: 'alexishandphotography', upload_preset: 'main_up', folder: 'main', tags: ['TAG'] },
          (error, result) => {
            if (result.info.secure_url) {
                imagesArray.push(result.info.secure_url);
            }
         })
         this.setState({ userImages:{ id: this.state.id, gallery:imagesArray }})  
     }

     getId = (id, name) => {
        this.setState({
            id: id,
            name: name
        })
    }

     submitImages = () => {
        
        axios.post('/api/submitImages', this.state.userImages).then( res => {
            console.log(this.state.userImages)
            this.setState({
                message: 'success!'
            })
        }).catch(error => {
            console.log('error', error);
          })
     }


    render(){  
        const {user} = this.props
        const admin = this.props.user.admin
        console.log(this.state.userImages)
        return(
            <div className="Admin">
              {!admin ?
                <div className="login-introAdmin">
                     <h1>LOGIN</h1>
                        Name:
                        <input type = "text" name ='username' onChange = {(e) => this.setState({username: e.target.value})}value = {this.state.username}/>
                        Password:
                        <input type = "text" password ='password' onChange = {(e) => this.setState({password: e.target.value})}value = {this.state.password}/>
                        <button type="submit" onClick={this.login}>Login</button>
                </div>
                        :
                 <div className='adminInfo'>
                    <div>
                    {user ?
                    <div className="upload">
                            <button type="submit" onClick={this.uploadWidget} className="upload-button">
                            Add Images
                            </button>
                            <button type="submit" onClick={this.submitImages} className="userImages">
                            Submit Images
                            </button>
                        {this.state.message}
                        <div className="adminSignUp">
                            <h1>SIGNUP</h1>
                                name:
                                <input type = "text" name ='username' onChange = {(e) => this.setState({username: e.target.value})}value = {this.state.username}/>
                                password:
                                <input type = "text" password ='password' onChange = {(e) => this.setState({password: e.target.value})}value = {this.state.password}/>
                                email:
                                <input type = "text" email ='email' onChange = {(e) => this.setState({email: e.target.value})}value = {this.state.email}/>
                                <button type="submit" onClick={this.signup}>signUp</button>
                        </div>
                        <div>
                            <UsersList name={this.state.name} id={this.state.id} getId={this.getId} users={this.state.users}/>
                        </div>
                    </div>
              :
              'please login'
              }
                 <button type="submit" onClick={this.logOut}>logout</button>
                    </div>
                </div>
                }     
            </div>        
        )
    }
}

  const mapStateToProps = (store) => {
    return{
      user: store.users
    }
  }
  
  export default connect(mapStateToProps,{logIn, logOut})(Admin);
