import React, { Component } from 'react'
import axios from "axios"

export class UsersList extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         users: [],
         id: ''
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
    
    componentDidUpdate = (prevProps, prevState) => {
      if(this.props !== prevProps){
        axios.get('/api/users').then(response => {
                    console.log(response.data)
                    this.setState({
                        users: response.data
                    })
                })
      }
    }
    
    
    getId = (id) => {
        this.setState({
            id: id
        })
    }
  render() {
      console.log(this.props)
    return (
      <div className='usersList'>
        <div className='selectedUser'>
            <p>selected user {this.state.id}</p>
        </div>
        <div>
            {this.state.users.map(users => {
                return <div className="usersName" onClick={() => this.getId(users.name)}>
                            <p>{users.name}</p>
                        </div>
            })}
        </div>
      </div>
    )
  }
}

export default UsersList
