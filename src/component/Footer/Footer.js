import React, { Component } from 'react'

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
      <h1 className="footerQuote">Capturing Moments So They Last A Life Time!</h1>
        <div className="socialMedia">
          <a href='https://www.instagram.com/photographyalexismarie/'>
          <img className='instaLogo' src={`https://res.cloudinary.com/alexishandphotography/image/upload/v1539812892/39772.png`}/>
          </a>
          <a href='https://www.facebook.com/photos.alexismarie/'>
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
