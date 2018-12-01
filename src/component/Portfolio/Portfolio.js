import React, {Component} from 'react';

import Gallery from 'react-photo-gallery';

const photoSet = [
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543517216/DSC_0749-2.jpg',
      width: 6,
      height: 4
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543514328/DSC_0005-2.jpg',
      width: 3,
      height: 4
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515333/DSC_1385.jpg',
      width: 6,
      height: 9
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
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515163/DSC_1976.jpg',
      width: 9,
      height: 12
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515496/DSC_1480.jpg',
      width: 10,
      height: 14
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515742/DSC_1727.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516539/DSC_1035.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515692/DSC_1642.jpg',
      width: 6,
      height: 4
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516292/DSC_0961.jpg',
      width: 8,
      height: 10
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515385/DSC_1389.jpg',
      width: 6,
      height: 8
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543514827/DSC_1850.jpg',
      width: 8,
      height: 10
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516481/DSC_1004.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516546/DSC_1049.jpg',
      width: 5,
      height: 4
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543515763/DSC_1718.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543517439/DSC_0798.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1543516312/DSC_0923.jpg',
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