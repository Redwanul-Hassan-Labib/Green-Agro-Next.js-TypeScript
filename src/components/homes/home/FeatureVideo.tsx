
"use client"

import VideoPopup from '@/modals/VideoPopup'
import React, { useState } from 'react'

export default function FeatureVideo() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);


  return (
    <>
      <div className="feature-video">
        <div className="container">
          <div className="feature-video-wrap w-100">
            <img src="assets/img/about/feature-vid.jpg" alt="img" className="w-100" />
            <a
              onClick={() => setIsVideoOpen(true)}
              style={{ cursor: "pointer" }}
              className="video-cmn d-center video-popup"><i className="fa-solid fa-play"></i></a>
          </div>
        </div>
      </div>

      {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"-hTVNidxg2s"}
      />
      {/* video modal end  */}


    </>
  )
}
