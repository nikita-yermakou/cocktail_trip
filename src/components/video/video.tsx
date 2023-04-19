import React from 'react';
import { VideoContainer, VideoItem } from './video.styles';
import VideoBg from '../common/videos/videoBg.mp4';

const Video = () => {
    return(
        <VideoContainer>
            <VideoItem  autoPlay loop muted src={VideoBg}/>
        </VideoContainer>
    )
}

export default Video;