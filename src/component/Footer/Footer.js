import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom';

export class Footer extends Component {
  render() {
    return (
      <div >
        <a href='https://www.instagram.com/austin.grubb.1995/'>
        <img className='instaLogo' src={`https://res.cloudinary.com/alexishandphotography/image/upload/v1539812892/39772.png`}/>
        </a>
        <a href='https://www.facebook.com/austin.grubb.75'>
        <img className='faceLogo' src={`https://res.cloudinary.com/alexishandphotography/image/upload/v1539813254/kisspng-social-media-facebook-computer-icons-logo-clip-art-facebook-outline-transparent-5ab0368f8211e2.5576458315214977435328.jpg`}/>
        </a>
        <div className='builtBy'>
            Built by Austin Grubb
        </div>
      </div>
    )
  }
}

export default Footer
