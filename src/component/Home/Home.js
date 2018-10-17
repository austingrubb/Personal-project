import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import About from '../About/About'

5

class Home extends Component {
    render(){   
        return(
            <div>
                <div className = "home">
                    <Carousel showThumbs={false} centerMode={true} autoPlay={true} infiniteLoop={true} centerSlidePercentage={100} dynamicHeight={true} className='carousel' swipeable={true} width='100%'>
                        <div className = "honey" >
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1539801107/high-quality-high-definition.jpg' />
                        </div>
                        <div className = "peir">
                        <img src= 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801108/4k-nature-wallpaper-high-quality-resolution-Is-4K-Wallpaper.jpg' />
                        </div>
                        <div className = "trees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1539801108/95ee8696f8ed1abb3767928c4d0daf65.jpg' />
                        </div>
                        <div className = "houseTrees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1539801108/Field-High-Quality-Background-Wallpapers.jpg' />
                        </div>
                    </Carousel>
                </div>
            </div>
            
        )
    }
}




export default Home;