
"use client"
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function TestimonialHomeThree() {
  return (
    <>
      <section className="testimonial-section style-section-v03 overflow-hidden">
        <div className="container">
          <div className="row g-4 align-items-center">
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-common-wrapper testimonial-wrapperv02 position-relative">
                <div className="section-title mb-50">
                  <h5 className="p2-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Testimonial
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Farm fresh goodness <br /> for all
                  </h2>
                </div>
                <Swiper
                  spaceBetween={2}
                  loop={true}
                  slidesPerView={1}
                  speed={1300}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: ".cmn-prev2",
                    prevEl: ".cmn-next2",
                  }}
                  pagination={{
                    el: ".dot-cmn",
                    clickable: true,
                  }}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="swiper testimonial-slidewrap01 ">

                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>
                              Leslie Alexander
                            </h3>
                            <span>
                              Nursing Assistant
                            </span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Financial planners help people to knowledge in about how to invest and save
                        their moneye the most efficient way in to
                        eve.planners Financial planners help people to my destin knowledge in about
                        design
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>
                              Leslie Alexander
                            </h3>
                            <span>
                              Nursing Assistant
                            </span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Financial planners help people to knowledge in about how to invest and save
                        their moneye the most efficient way in to
                        eve.planners Financial planners help people to my destin knowledge in about
                        design
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>
                              Leslie Alexander
                            </h3>
                            <span>
                              Nursing Assistant
                            </span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Financial planners help people to knowledge in about how to invest and save
                        their moneye the most efficient way in to
                        eve.planners Financial planners help people to my destin knowledge in about
                        design
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonail-common-items stylev03">
                      <div className="d-lg-flex d-grid justify-content-between">
                        <div className="review-man">
                          <img src="assets/img/testimonial/re2.png" alt="img" />
                          <div className="cont">
                            <h3>
                              Leslie Alexander
                            </h3>
                            <span>
                              Nursing Assistant
                            </span>
                          </div>
                        </div>
                        <div className="stars">
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                          <i className="fa-solid fa-star"></i>
                        </div>
                      </div>
                      <p>
                        Financial planners help people to knowledge in about how to invest and save
                        their moneye the most efficient way in to
                        eve.planners Financial planners help people to my destin knowledge in about
                        design
                      </p>
                      <div className="dot-cmn"></div>
                    </div>
                  </SwiperSlide>

                </Swiper>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="testimonial-thumbv3 w-100 wow fadeInDown" data-wow-delay=".4s">
                <img src="assets/img/testimonial/testimonial-thumbv3.png" alt="img" className="w-100 mimg" />
                <div className="testimonial-count">
                  <img src="assets/img/icon/apple-count.png" alt="img" />
                  <div className="cont">
                    <h3>
                      <span className="count">15</span>+ Years
                    </h3>
                    <p>Happy Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}
