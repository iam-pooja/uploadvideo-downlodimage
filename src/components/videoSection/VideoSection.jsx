import React from 'react';
import './video.css'
import '../../../node_modules/video-react/dist/video-react.css'



const VideoSection = ({ videoSrc, setVideoSrc, shoot }) => {

    function handleChange(e) {
        const file = e.target.files[0]
        const url = URL.createObjectURL(file)
        setVideoSrc(url);
    }

    return (
        <div className='videoSection'>
            <input type="file" name='uVideo' id='uVideo' onChange={handleChange} />
            <div className='video-header'>

                <button className='import-video-btn'>Import Video</button>
                <label htmlFor='uVideo' className='browse-btn'>Browse</label>
            </div>
            <div className='body'>
                <video width='450px' id='video' controls src={videoSrc} />
            </div>
            <div className="footer">
                <button className='take-frame-btn' onClick={shoot}>Take Frame</button>
            </div>

        </div>
    )
}

export default VideoSection
