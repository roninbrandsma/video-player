"use client"

import videojs from "video.js"
import "videojs-playlist"
import "videojs-playlist-ui"
import {useRef, useEffect } from "react"
import { Videolist } from "../playlist/playlistvideo/VideoList"

import "videojs-playlist-ui/dist/videojs-playlist-ui.css"
import 'video.js/dist/video-js.css'
import "./VideoPlayer.scss"

const VideoPlayer = (props) => {
    const videoRef = useRef(null);
    const playerRef = useRef(null);
    const {options, onReady} = props;

    useEffect(() => {

      // Make sure Video.js player is only initialized once
      if (!playerRef.current) {
        // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
        const videoElement = document.createElement("video-js");
        videoElement.classList.add('vjs-big-play-centered');
        videoRef.current.appendChild(videoElement);

        const player = playerRef.current = videojs(videoElement, options, () => {
          videojs.log('player is ready');
          onReady && onReady(player);
        });

        console.log(videoRef)

        player.playlist(Videolist);
        player.playlist.autoadvance(0);
        player.playlistUi();

        // You could update an existing player in the `else` block here
        // on prop change, for example:
      } else {
        const player = playerRef.current;

        player.autoplay(options.autoplay);
        player.src(props.videoSrc);
      }
    }, [options, videoRef]);

    // Dispose the Video.js player when the functional component unmounts
    useEffect(() => {
      const player = playerRef.current;

      return () => {
        if (player && !player.isDisposed()) {
          player.dispose();
          playerRef.current = null;
        }
      };
    }, [playerRef]);

    return (
      <div className="videoContainer" data-vjs-player>
          <div ref={videoRef} />
          <div className="videoTitle"></div>
      </div>
    )
  }

export default VideoPlayer