"use client"

import Header from "@/components/header/Header";
import styles from "./page.module.css";
import Footer from "@/components/footer/Footer";
import VideoPlayer from "@/components/videoplayer/VideoPlayer";
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

  let videolist = [
    {
      sources: [
        {
          src: "https://media.w3.org/2010/05/sintel/trailer.mp4",
          type: "video/mp4"
        }
      ],
      poster: "https://media.w3.org/2010/05/sintel/poster.png",
      thumbnail: "https://media.w3.org/2010/05/sintel/poster.png"
    },
    {
      sources: [
        {
          src: "https://media.w3.org/2010/05/bunny/trailer.mp4",
          type: "video/mp4"
        }
      ],
      poster: "https://media.w3.org/2010/05/bunny/poster.png",
      thumbnail: "https://media.w3.org/2010/05/sintel/poster.png"
    }
  ];
  const handlePlayerReady = (player) => {
    playerRef.current = player;
  };

  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} videoList={videolist} />
      </div>
      <Footer />
    </div>
  );
}
