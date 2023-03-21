import React from 'react'
import image from '../images/design2.jpeg';
import './image.css'


const ImageSection = ({frameLink}) => {

  
  return (
    <div className='imageSection'>
      <div className="image-header">
        <button className='tool-btn'>Tool to draw rectangles on below image</button>
      </div>
      <div className="image-container" id='output'>
        <img className='image' src={image} alt="images" />
      </div>
      <div className="footer">
        <button className='upload-btn'><a href={frameLink} download>Upload</a></button>
      </div>
    </div>
  )
}


export default ImageSection
