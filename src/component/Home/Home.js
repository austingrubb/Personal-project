import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';


class Home extends Component {
    render(){   
        return(
            <div>
                <div className = "home">
                    <Carousel showThumbs={false} centerMode={true} autoPlay={true} infiniteLoop={true} centerSlidePercentage={100} className='carousel' swipeable={true} width='99%'>
                        <div className = "honey" >
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543515524/DSC_1490.jpg' />
                        </div>
                        <div className = "peir">
                        <img src= 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515524/DSC_1489.jpg' />
                        </div>
                        <div className = "trees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543514762/DSC_1830.jpg' />
                        </div>
                        <div className = "houseTrees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543517527/DSC_0807.jpg' />
                        </div>
                    </Carousel>
                    <div className="mobileView">
                        {/* <Gallery photos={photoSet} columns={1}/> */}
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
                    </div>
                </div>
            </div>
            
        )
    }
}




export default Home;