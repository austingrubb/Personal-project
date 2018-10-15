import React, {Component} from 'react';

import Gallery from 'react-photo-gallery';

const photoSet = [
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

class Portfolio extends Component {
    render(){   
        return(
            <div className = "portfolio">
                <Gallery photos={photoSet} columns={3}/>
            </div>
        )
    }
}

export default Portfolio;