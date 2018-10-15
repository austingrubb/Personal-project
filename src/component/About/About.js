import React, {Component} from 'react';

class About extends Component {
    render(){   
        return(
            <div className = "about">
               <div className = "about-me">
                   <p>
                   " Hi, I am Alexis! I am a student, fiance, and fur-baby mom to many different sizes of animals. I grew up on a small ranch in Scottsdale, Arizona and currently reside in the west valley. I am 21 years old and love protecting and preserving as many moments as I can. For as long as I could remember, I have always been behind the camera taking pictures and making mini-movies. I love taking picture and believe they are a timeless. Today, we have to ability to take as many picture as we want and we need to take advantage of that opportunity. Coming from a family where we have maybe a handful of early-life picture of myself and my two sisters, I want to make sure everyone has enough picture for generations to come. From breathtaking landscapes to the happy faces of couples, I want to capture as many memories as possible. A lot of people say life is short, which is true. But as you are just starting out, it may feel like it is taking a long time to come around, and next thing you know it will be 30 years later and you will not realize what you may have forgotten over time. My goal is to protect the beauty of the moment so one day you can look back and remind yourself of those heartfelt times of your life. "  
                   </p>
               </div>
               <div>
                    <img className='self-photo' src='https://res.cloudinary.com/alexishandphotography/image/upload/v1539635553/a1-22.jpg'/>
               </div>
               <div className = "thankYou">
                    <p>
                    Outside of photography I can be found riding horses, hiking, or enjoying the stars. I love listening to music so country music and old rock n' roll tend to be my go to jams. A little secret about me I absolutely love film scores and could listen to them all day long. please take the time to look at my portfolio and blog. 
                    </p>
                    <p>
                    I appreciate that you took the time to look around and consider me as your potential photographer and would love to get the chance to speak with you. Please contact me with any of your questions or concerns and if you would like to set up a session. This is about YOU and I want to make sure to capture every moment exactly how you want to remember it.
                    </p>
               </div>
            </div>
        )
    }
}

export default About;