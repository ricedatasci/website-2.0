import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../media/deep_image1.jpg';
import image2 from '../media/welcome_back_image2.jpg';
import image3 from '../media/welcome_back_image1.jpg';
import image4 from '../media/how_to_image1.jpg';
import image5 from '../media/how_to_image2.jpg';


// const fadeImages = [
//   {
//       url: '../media/deep_image1.jpg',
//       caption: 'First Slide'
//   },
//   {
//       url: '../media/welcome_back_image2.jpg',
//       caption: 'Second Slide'
//   },
//   {
//       url: '../media/welcome_back_image1.jpg',
//       caption: 'Third Slide'
//   },
//   {
//       url: '../media/how_to_image1.jpg',
//       caption: 'Forth Slide'
//   },
//   {
//       url: '../media/how_to_image2.jpg',
//       caption: 'Fifth Slide'
//   }
// ];

const fadeImages = [image1, image2, image3, image4, image5];

const SlideShow = () => {
  return (
    <div className="slide-container">
      <Fade>
        {fadeImages.map((fadeImage, index) => (
          <div className="each-fade" key={index}>
            <div className="image-container">
              <img src={fadeImage} style={{ width: "40%" }}/>
            </div>
            <h2>{fadeImage.caption}</h2>
          </div>
        ))}
      </Fade>
    </div>
  )
}

export default SlideShow