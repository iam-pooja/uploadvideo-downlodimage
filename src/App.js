import { useState } from 'react';
import './App.css';
import ImageSection from './components/imageSection/ImageSection';
import VideoSection from './components/videoSection/VideoSection';


function App() {

  const scaleFactor = 0.25;

  const [videoSrc, setVideoSrc] = useState()
  const [frameLink, setFrameLink] = useState()

  function capture(video, scaleFactor) {
    if (scaleFactor == null) {
        scaleFactor = 1;
    }
    var w = video.videoWidth * scaleFactor;
    var h = video.videoHeight * scaleFactor;
    var canvas = document.createElement('canvas');
    canvas.width = w;
    canvas.height = h;
    var ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0, w, h);
    return canvas;
}

function shoot() {
    var video = document.getElementById('video');
    var output = document.getElementById('output');
    var canvas = capture(video, scaleFactor);
    canvas.style.borderRadius = '26px';
    canvas.style.height = '250px'
    canvas.style.width = '450px'
    canvas.style.display = 'block'
    output.innerHTML = '';
    output.appendChild(canvas);
    setFrameLink(canvas.toDataURL())
}


  return (
    <div className="App">
      <VideoSection videoSrc={videoSrc} setVideoSrc={setVideoSrc} shoot={shoot}/>
      <ImageSection frameLink={frameLink}/>
    </div>
  );
}

export default App;
