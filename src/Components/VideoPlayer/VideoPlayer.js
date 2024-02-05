import { useState } from "react";
import './videoPlayer.css'

function VideoPlayer({ trailer, trailerKey }) {
   const [videoMute, setVideoMute] = useState(true)

   // Mute Button
   const toggleMute = (e) => {
      e.preventDefault();
      setVideoMute(!videoMute)
   }
   // Mute Button SVG
   const SVG = {
      mute: () => (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="svg">
            <path d="M301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3zM425 167l55 55 55-55c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-55 55 55 55c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-55-55-55 55c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l55-55-55-55c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0z" />
         </svg>
      ),
      unmute: () => (
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" className="svg fill">
            <path d="M320 64c0-12.6-7.4-24-18.9-29.2s-25-3.1-34.4 5.3L131.8 160H64c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64h67.8L266.7 471.9c9.4 8.4 22.9 10.4 34.4 5.3S320 460.6 320 448V64z" />
         </svg>
      )
   }
   // Trailer key finder
   const movieKey = function () {
      if (trailerKey) {
         if (trailerKey[0]) {
            return trailerKey[0]
         } else if (trailerKey[1]) {
            return trailerKey[1]
         } else {
            return 'No Trailer found for this Movie'
         }
      }
   }
   // <div className="videoPlayer-div">
   //       </div>

   return (
      <>
         <button type="button" className='muteButton' onClick={toggleMute}>{videoMute ? SVG.mute() : SVG.unmute()}</button>
         <iframe
            title={trailer}
            width='100%'
            height='100%'
            src={`https://www.youtube.com/embed/${trailer || movieKey()}?autoplay=1&mute=${videoMute ? 1 : 0}&controls=0&loop=1&modestbranding}`}
            frameborder="0"
            allowFullScreen
            loop
            className="videoPlayer-iframe"
         ></iframe>
      </>
   )
}
// <section className="videoPlayer">
{/* </section > */ }


export default VideoPlayer;