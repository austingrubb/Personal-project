import React, {Component} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import About from '../About/About'
import Gallery from 'react-photo-gallery';

const photoPreview = [
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539629819/test_8.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539629819/test_6.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539629819/test_9.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539629819/test_7.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539629819/test_10.jpg',
      width: 5,
      height: 3
    }
  ];

class Home extends Component {
    render(){   
        return(
            <div>
                <div className = "home">
                    <Carousel showThumbs={false} centerMode={true} infiniteLoop={true} dynamicHeight={true} className='carousel' swipeable={true} width='600px'>
                        <div className = "honey" >
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1539624727/test_photo_one.jpg' />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div className = "peir">
                        <img src= 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539624727/test_Photo_3.jpg' />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div className = "trees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1539624727/tst_photo_2.jpg' />
                            <p className="legend">Legend 3</p>
                        </div>
                        <div className = "houseTrees">
                        <img src='https://res.cloudinary.com/alexishandphotography/image/upload/v1539624727/images.jpg' />
                            <p className="legend">Legend 4</p>
                        </div>
                    </Carousel>
                </div>
                <div className = "photoPreview">
                    <Gallery photos={photoPreview} columns={3}/>
                </div>
                    <div>
                        <About/>
                    </div>

            </div>
            
        )
    }
}




export default Home;