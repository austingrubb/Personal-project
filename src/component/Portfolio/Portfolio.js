import React, {Component} from 'react';

import Gallery from 'react-photo-gallery';

const photoSet = [
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801321/high-quality-tiger-images.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801321/Tigers_Snow_Cute_544989_1920x1200.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801321/maxresdefault.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801322/Free-places-to-download-stock-photos-1600x806.jpg',
      width: 6,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801322/Wallpaper-free-desktop-wallpapers-high-quality-hd-wallpaper-high.jpg',
      width: 6,
      height: 4
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801323/high-quality-free-pictures-hd-wallpaper.jpg',
      width: 6,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801324/wallpaper2you_193668.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801631/High-Quality-Computer-Wallpapers.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801632/3844570-high-quality-images.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539800900/f4ed76093299eb5308e777358ed18a32.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539800894/6338997-high-quality-images.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539800894/6353726-high-quality-wallpaper.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801106/wallpaper.wiki-Beautiful-hd-high-quality-nature-widescreen-desktop-backgrounds-PIC-WPD0011994.jpg',
      width: 5,
      height: 3
    },
    {
      src: 'https://res.cloudinary.com/alexishandphotography/image/upload/v1539801106/tiger-high-quality-wallpapers.jpg',
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