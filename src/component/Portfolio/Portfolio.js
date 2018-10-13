import React, {Component} from 'react';
import fish from '../../media/fish.jpg'
import Gallery from 'react-photo-gallery';

const PHOTO_SET = [
    {
      src: fish,
      width: 5,
      height: 3
    },
    {
      src: 'https://www.cesarsway.com/sites/newcesarsway/files/styles/large_article_preview/public/Common-dog-behaviors-explained.jpg?itok=FSzwbBoi',
      width: 5,
      height: 3
    }
  ];

class Portfolio extends Component {
    render(){   
        console.log(fish)
        return(
            <div className = "portfolio">
                <Gallery photos={PHOTO_SET} columns={3}/>
            </div>
        )
    }
}

export default Portfolio;