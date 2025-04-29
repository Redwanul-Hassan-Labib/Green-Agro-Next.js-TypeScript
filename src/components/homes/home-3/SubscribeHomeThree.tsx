
"use client"
import React from 'react'

export default function SubscribeHomeThree() {
  return (
    <>
      <div className="subscrbie-section subscrbie-stylev03">
        <div className="container">
          <div className="subscribe-wrapper-v03">
            <div className="container position-relative">
              <div className="row g-4 align-items-end justify-content-between">
                <div className="col-lg-6 col-md-6 mb-xl-5 pb-xl-4">
                  <div className="get-element">
                    <img src="assets/img/element/get-element.png" alt="img" className="d-md-block d-none" />
                  </div>
                  <div className="subs-contentv3">
                    <h2>
                      Get Update <span>Subscribe</span> <br /> to Newsletter
                    </h2>
                    <form onSubmit={(e) => e.preventDefault()} className="subscribe-form03 flex-xl-nowrap flex-wrap">
                      <input type="text" placeholder="Enter Your Email" />
                      <button type="submit" className="cmn-btn text-capitalize">
                        Subcribe
                        <i className="fa-solid fa-arrow-right"></i>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="conatact-box common-contact-inner position-relative">
                    <div className="section-title mb-40">
                      <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                        Contact
                      </h5>
                      <h2>
                        Get Touch Here
                      </h2>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} className="row g-xl-4 g-3">
                      <div className="col-lg-6">
                        <input type="text" placeholder="Name" />
                      </div>
                      <div className="col-lg-6">
                        <input type="email" placeholder="E-mail" />
                      </div>
                      <div className="col-lg-12">
                        <input type="text" placeholder="Subject" />
                      </div>
                      <div className="col-lg-12">
                        <textarea name="message" placeholder="Message"></textarea>
                      </div>
                      <div className="col-lg-6">
                        <button type="submit" className="cmn-btn text-capitalize">
                          Submit Now
                        </button>
                      </div>
                    </form>

                    <img src="assets/img/element/sun-element.png" alt="img"
                      className="sun-element d-xl-block d-none" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
