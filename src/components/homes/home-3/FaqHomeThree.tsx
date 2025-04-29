"use client"
import faq_data from '@/data/faq_data';
import VideoPopup from '@/modals/VideoPopup'
import React, { useState } from 'react'

export default function FaqHomeThree() {
  const [isVideoOpen, setIsVideoOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState(0);

  const toggle = (i: number) => {
    setIsOpen(i === isOpen ? 0 : i);
  }



  return (
    <>
      <section className="faq-section section-padding p100-bg">
        <div className="container">
          <div className="row g-md-4 g-2 align-items-center justify-content-between">
            <div className="col-lg-5 col-md-6">
              <div className="faq-content-left">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft text-uppercase" data-wow-delay="0.4s">
                    FAQ
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    How often should I water my Farming?
                  </h2>
                  <p>
                    It is a long established fact that a reader will be distracted by the readable content
                    of a page when looking at its
                    layout. Many desktop publishing packages and web page editors now use Lorem Ipsum as
                    their default model text
                  </p>
                  <div className="faq-watch">
                    <a
                      onClick={() => setIsVideoOpen(true)}
                      style={{ cursor: "pointer" }}
                      className="video-cmn d-center video-popup">
                      <i className="fa-solid fa-play"></i>
                    </a>
                    <h5>
                      Watch Video
                    </h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 order-md-0 order-1">
              <div className="tab-faq faq">
                <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">

                  {faq_data.map((item, i) => (
                    <div key={i} className={`accordion-single ${isOpen === i ? "active" : ""}`}>
                      <h5 className="header-area" onClick={() => toggle(i)}>
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          {item.question}
                        </button>
                      </h5>
                      <div className="content-area" style={{ display: isOpen === i ? "block" : "none" }}>
                        <div className="content-body">
                          <p>
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/faq-element.png" alt="img" className="faq-element" />
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
