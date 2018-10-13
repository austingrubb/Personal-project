import React, {Component} from 'react';
import frontYard from '../../media/front-yard.jpg';



class About extends Component {
    render(){   
        return(
            <div className = "about">
               <div className = "about-me">
                   <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lobortis et magna at ullamcorper. Suspendisse vel sem nec magna imperdiet pharetra. In sit amet scelerisque nisi. Sed porta purus urna, eu hendrerit risus euismod a. Proin vel felis gravida, feugiat purus ultrices, luctus turpis. Sed convallis urna urna, in tristique quam ultrices sit amet. Nulla et porttitor sapien.

                    Nulla luctus sollicitudin tortor sed sagittis. Fusce varius finibus tincidunt. Phasellus lobortis elit id efficitur lacinia. Donec faucibus hendrerit nulla sed porta. Sed venenatis elit nec velit mattis maximus. Donec eu pellentesque leo, quis viverra dolor. Praesent consectetur vitae quam eu commodo. Nunc elit felis, auctor ac fermentum sed, mollis ac est. In at volutpat sapien. Proin tortor mi, finibus in neque ac, venenatis tincidunt dolor. Morbi nunc ex, rhoncus sit amet sapien vel, pulvinar scelerisque felis.

                    Etiam id suscipit dui. Aliquam erat volutpat. Maecenas non ultrices mauris, non dapibus purus. Suspendisse dictum eleifend neque, vitae pellentesque dolor consectetur eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas venenatis in leo a bibendum. Donec ultrices a sapien at cursus. Aenean enim lorem, posuere in fermentum ut, elementum vel odio. Fusce sollicitudin odio eget dui sollicitudin, sed molestie nulla rhoncus.

                    Maecenas a congue mi. Aenean eros dolor, tincidunt vitae egestas non, mollis vel libero. In hac habitasse platea dictumst. Etiam placerat porta lorem ut maximus. In porta felis odio, at pellentesque mi auctor at. Cras porta justo non erat rhoncus, quis eleifend dui sodales. Quisque porta interdum orci id hendrerit.

                    Proin turpis mauris, ornare sit amet dolor sit amet, semper rhoncus felis. Sed eget orci convallis, aliquet nisi et, consectetur mi. Donec commodo ligula et eros gravida, nec posuere tellus commodo. Nam faucibus vitae felis id commodo. Sed tempor est id velit ornare, quis egestas justo pulvinar. Praesent scelerisque felis magna, sed varius dui vulputate vitae. Sed iaculis leo nisl, ut mattis augue lacinia non.
                   </p>
               </div>
               <div className = "front">
                    <img className='frontYard' src={frontYard}/>
               </div>
            </div>
        )
    }
}

export default About;