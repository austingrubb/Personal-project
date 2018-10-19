import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="socialMedia">
          <a href='https://www.instagram.com/austin.grubb.1995/'>
          <img className='instaLogo' src={`https://res.cloudinary.com/alexishandphotography/image/upload/v1539812892/39772.png`}/>
          </a>
          <a href='https://www.facebook.com/austin.grubb.75'>
          <img className='faceLogo' src={`https://res.cloudinary.com/alexishandphotography/image/upload/v1539884188/black-and-white-icon-6-facebook-logo-png-transparent-background.png`}/>
          </a>
        </div>
        <div className='builtBy'>
            Built by Austin Grubb
        </div>
      </div>
    )
  }
}

export default Footer
