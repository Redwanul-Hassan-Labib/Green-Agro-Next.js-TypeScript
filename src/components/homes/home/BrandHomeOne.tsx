
"use client"
import React from 'react'
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import brand_img_1 from "@/assets/img/sponsor/sp1.png";
import brand_img_2 from "@/assets/img/sponsor/sp2.png";
import brand_img_3 from "@/assets/img/sponsor/sp3.png";
import brand_img_4 from "@/assets/img/sponsor/sp4.png";
import brand_img_5 from "@/assets/img/sponsor/sp5.png";

const brand_data = [
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
  brand_img_1,
  brand_img_2,
  brand_img_3,
  brand_img_4,
  brand_img_5,
]

interface PropsType {
  style_2?: boolean,
  style_3?: boolean,
}

export default function BrandHomeOne({ style_2, style_3 }: PropsType) {

  return (
    <>
      <section className={`sponsor-branding-section ${style_2 ? "section-padding p100-bg" : "space-top"} ${style_3 ? "section-padding white-bg" : ""}`}>
        <div className="container">
          <Swiper
            spaceBetween={30}
            slidesPerView={5}
            speed={1300}
            loop={true}
            centeredSlides={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              1199: {
                slidesPerView: 5,
              },
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 3,
              },
              575: {
                slidesPerView: 2,
              },
              0: {
                slidesPerView: 2,
              },
            }}
            className="swiper brand-slider">
            {brand_data.map((item, i) => (
              <SwiperSlide key={i} className="swiper-slide">
                <div className="brand-image">
                  <Image src={item} alt="img" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  )
}
