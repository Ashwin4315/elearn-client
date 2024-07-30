import ReactPlayer from 'react-player'
import "./index.css"

function VideoPlayer({yid}) {
    return (
        <div className='video-player'>
            <ReactPlayer 
            width="60vw"
            height="65vh"
            url={yid} />
        </div>
    );
}

export default VideoPlayer;
