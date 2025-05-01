"use client"

import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import VideoPlayer from "@/components/videoplayer/VideoPlayer";
import { Videolist } from "@/components/playlist/playlistvideo/VideoList";
import { useRef } from "react";


export default function Home() {
  const playerRef = useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    // responsive: true,
    // fluid: true,
    width: 1280,
    height: 720,
    playbackRates: [0.5, 1, 1.5, 2, 2.5, 3],
    controlBar: {
      skipButtons: {
        forward: 10,
        backward: 10,
      },
    },
  //   sources: [{
  //     src: 'https://s3.eu-west-1.amazonaws.com/ronin.portfolio/video1.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     src: 'https://s3.eu-west-1.amazonaws.com/ronin.portfolio/video2.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     src: 'https://s3.eu-west-1.amazonaws.com/ronin.portfolio/video3.mp4',
  //     type: 'video/mp4'
  //   },
  //   {
  //     src: 'https://s3.eu-west-1.amazonaws.com/ronin.portfolio/video4.mp4',
  //     type: 'video/mp4'
  //   }

  // ]
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} videoList={Videolist} />
      </div>
      <Footer />
    </div>
  );
}
