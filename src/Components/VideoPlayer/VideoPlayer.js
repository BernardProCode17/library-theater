import { useContext } from "react"
import { GlobalContext } from "../../Context/GlobalContext"

function VideoPlayer() {

   const { headerVideo } = useContext(GlobalContext);
   console.log(headerVideo)
   return (
      <section>
         {headerVideo && (
            <>

               <button type="button" className='muteButton' onClick={toggleMute}>{videoMute ? SVG.mute() : SVG.unmute()}</button>
               <div className="videoPlayer">
                  <iframe
                     title={headerVideo.title}
                     width='100%'
                     height='100%'
                     src={`https://www.youtube.com/embed/${headerVideo}?autoplay=1&mute=${videoMute ? 1 : 0}&controls=0&loop=1&modestbranding}`}
                     frameborder="0"
                     allowFullScreen
                     className="videoPlayer2"
                  ></iframe>
               </div>
            </>
         )}
      </section>
   )
}

export default VideoPlayer;