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
    
    
    getId = (id, name) => {
        this.setState({
            id: id,
            name: name
        })
    }
  render() {
      console.log(this.props.id)
    return (
      <div className='usersList'>
        <div className='selectedUser'>
            <p>selected user {this.props.name}</p>
        </div>
        <div>
            {this.state.users.map(users => {
                return <div className="usersName" onClick={() => this.props.getId(users.id, users.name)}>
                            <p>{users.name}</p>
                        </div>
            })}
        </div>
      </div>
    )
  }
}

export default UsersList
