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
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543515524/DSC_1489.jpg' />
                        </div>
                        <div className = "peir">
                        <img src= 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516706/DSC_1096.jpg' />
                        </div>
                        <div className = "trees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543514762/DSC_1830.jpg' />
                        </div>
                        <div className = "houseTrees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543517439/DSC_0798.jpg' />
                        </div>
                    </Carousel>
                    <div className="mobileView">
                        {/* <Gallery photos={photoSet} columns={1}/> */}
                        <div className = "honey" >
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543515524/DSC_1489.jpg' />
                        </div>
                        <div className = "peir">
                        <img src= 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516706/DSC_1096.jpg' />
                        </div>
                        <div className = "trees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543514762/DSC_1830.jpg' />
                        </div>
                        <div className = "houseTrees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1543517439/DSC_0798.jpg' />
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}




export default Home;