import React, { Component } from 'react'
import axios from 'axios'
import Gallery from 'react-photo-gallery';






export class MainContent extends Component {

    constructor(){
        super()
        this.state = {
            photoSet: []
        }
    }

    componentDidMount(){
        // need to set up endpont to pull images on server
        axios.get('/api/usersPhotos').then(response => {
            console.log(response.data)
            this.setState({
                photoSet: response.data
            })
        })
    }



  render() {

    const photos = this.state.photoSet.map((set) => {
        return {
            src: set.photos_url,
            width: 5,
            height: 3
        }
    })

    return (
        <div>
        <div>
            <p>{this.props.user.username}</p>
        </div>
        <div className = "mainContent">
            <div className = "galleryMainContent">
                <Gallery photos={photos} columns={3}/>
            </div>
                <div className="mobileViewMainContent">
                  <Gallery photos={photos} columns={1}/>
                </div>
            </div>
      </div>
    )
  }
}

export default MainContent
