import React, {Component} from 'react';

import Gallery from 'react-photo-gallery';

const photoSet = [
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543517216/DSC_0749-2.jpg',
      width: 6,
      height: 4
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543517319/DSC_0760.jpg',
      width: 6,
      height: 4
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543517083/DSC_1214.jpg',
      width: 6,
      height: 9
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516941/DSC_1177.jpg',
      width: 10,
      height: 6
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515651/DSC_1569.jpg',
      width: 10,
      height: 12
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516878/DSC_1163.jpg',
      width: 10,
      height: 6
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516710/DSC_1109.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516539/DSC_1035.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516487/DSC_1012.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515570/DSC_1532.jpg',
      width: 10,
      height: 9
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515675/DSC_1609.jpg',
      width: 6,
      height: 8
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515128/DSC_1966.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543514995/DSC_1919.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543514445/DSC_0066.jpg',
      width: 5,
      height: 3
    }
  ];

class Portfolio extends Component {
    render(){   
        return(
            <div className = "portfolio">
            <div className = "gallery">
                <Gallery photos={photoSet} columns={3}/>
            </div>
                <div className="mobileViewP">
                  <Gallery photos={photoSet} columns={1}/>
                </div>
            </div>
        )
    }
}

export default Portfolio;