"use client"

import Link from 'next/link'
import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

 

export default function ProjectHomeTwo() {
  return (
    <>
      <section className="recent-project-section fix section-padding white-bg">
        <div className="container">
          <div className="recent-project-head d-md-flex d-grid gap-4 justify-content-between align-items-end mb-60">
            <div className="section-title">
              <h5 className="p1-clr wow fadeInLeft text-uppercase" data-wow-delay="0.4s">
                Recent projects
              </h5>
              <h2 className="wow fadeInDown" data-wow-delay=".3s">
                Bringing nature bounty <br /> to your plate
              </h2>
            </div>
            <div className="common-slidebtn d-flex align-items-center gap-xl-3 gap-2">
              <button className="cmn-prev1 cust-swiper">
                <i className="fa-solid fa-arrow-left"></i>
              </button>
              <button className="cmn-next1 cust-swiper active">
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
        <Swiper
          spaceBetween={24}
          speed={1500}
          loop={true}
          slidesPerView={4.5}
          centeredSlides={true}
          navigation={{
            nextEl: ".cmn-next1",
            prevEl: ".cmn-prev1",
          }}
          modules={[Navigation]}
          breakpoints={{
            1199: {
              slidesPerView: 4.5,
            },
            767: {
              slidesPerView: 3.5,
              spaceBetween: 14,
            },
            575: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            0: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
          }}
          className="swiper recent-project-wrap">

          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp1.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp2.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp3.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp4.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>

          
          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp1.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp2.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp3.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="recent-project-item position-relative overflow-hidden">
              <img src="assets/img/blog/rp4.jpg" alt="img" />
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
            </div>
          </SwiperSlide>

        </Swiper>
      </section>
    </>
  )
}
