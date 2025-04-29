"use client"

import VideoPopup from '@/modals/VideoPopup'
import Link from 'next/link'
import React, { useState } from 'react'

export default function AboutHomeThree() {

  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);


  return (
    <>
      <section className="about-section style-v01 white-bg">
        <div className="container">
          <div className="about-wrapperv3">
            <div className="row g-4 align-items-center justify-content-center">
              <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
                <div className="about-thumv03 position-relative pe-xl-4 wow fadeInDown" data-wow-delay=".3s">
                  <img src="assets/img/about/aboutv3.png" alt="img" className="mimg" />
                  <div className="avarage-counting">
                    <div className="avarag">
                      <img src="assets/img/icon/agriculture.svg" alt="img" />
                    </div>
                    <div className="cont">
                      <h5>
                        Agriculture Activity
                      </h5>
                      <span>
                        Loream is ispam
                      </span>
                    </div>
                  </div>
                  <a
                    onClick={() => setIsVideoOpen(true)}
                    style={{ cursor: "pointer" }}
                    className="play-v3 video-popup">
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="about-contentv1">
                  <div className="section-title mb-40">
                    <h5 className="p1-clr text-uppercase wow fadeInLeft" data-wow-delay="0.4s">
                      Why Choose us
                    </h5>
                    <h2 className="wow fadeInDown" data-wow-delay=".3s">
                      Farming with passion the feeding with purpose
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s">
                      Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dict facisem.
                      Imperdiet
                      massa turpis sit Lorem ipsum
                      dolor sit amet consectetur. Amet the lectus mi ultricies dictum facilisis sem.
                      Imperdiet
                    </p>
                    <div className="progress_bar d-grid gap-xxl-4 gap-4">
                      <div className="progress_bar_item">
                        <div className="per-title d-flex align-items-center justify-content-between">
                          <div className="item_label p900-clr">FarmSmart Innovations</div>
                        </div>
                        <div className="item_bar">
                          <div className="progress" data-progress="70" style={{ width: "70%" }}></div>
                        </div>
                      </div>
                      <div className="progress_bar_item">
                        <div className="per-title d-flex align-items-center justify-content-between">
                          <div className="item_label p900-clr">CropCare Solutions</div>
                        </div>
                        <div className="item_bar">
                          <div className="progress" data-progress="80" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                    </div>
                    <Link href="/about" className="cmn-btn">
                      Read More
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


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
