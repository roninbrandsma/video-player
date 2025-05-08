"use client"

import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import VideoPlayer from "@/components/videoplayer/VideoPlayer";
import { Videolist } from "@/components/playlist/playlistvideo/VideoList";
import { useRef, useState } from "react";
import { Playlist } from "@/components/playlist/Playlist";


export default function Home() {
  const playerRef = useRef(null);

  const [videoPlaying, setVideoPlaying] = useState(Videolist[0].sources[0])
  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    fluid: true,
    breakpoints : {
      huge: Infinity,
      xlarge: 2560,
      large: 1440,
      medium: 768,
      small: 425,
      xsmall: 100,
      tiny: 50,
    },
    playbackRates: [0.5, 1, 1.5, 2, 2.5, 3],
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  const handleSelectVideo = (src) => {
    setVideoPlaying(src)
  }

  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} videoSrc={videoPlaying}/>
        <Playlist videos={Videolist} onSelect={handleSelectVideo} playing={videoPlaying} />
      </div>
      <Footer />
    </div>
  );
}
