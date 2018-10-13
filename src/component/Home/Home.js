import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class Home extends Component {
    render(){   
        return(
            <div className = "home">
            <Carousel showThumbs={false} centerMode={true} infiniteLoop={true} dynamicHeight={true} className='carousel' swipeable={true} width='600px'>
                <div className = "honey" >
                <img src='http://res.cloudinary.com/alexishandphotography/image/upload/f_auto/v1532632276/FB_IMG_1532556028069.jpg' />
                    <p className="legend">Legend 2</p>
                </div>
                <div className = "peir">
                <img src= 'http://res.cloudinary.com/alexishandphotography/image/upload/f_auto/v1532631121/tiger.jpg' />
                    <p className="legend">Legend 3</p>
                </div>
                <div className = "trees">
                <img src='http://res.cloudinary.com/alexishandphotography/image/upload/f_auto/v1532631103/lake.jpg' />
                    <p className="legend">Legend 3</p>
                </div>
                <div className = "houseTrees">
                <img src='http://res.cloudinary.com/alexishandphotography/image/upload/f_auto/v1532631062/cows.jpg' />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>

            </div>
        )
    }
}

export default Home;