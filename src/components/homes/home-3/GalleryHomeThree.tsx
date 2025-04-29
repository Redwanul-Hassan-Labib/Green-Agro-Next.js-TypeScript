

import Link from 'next/link'
import React from 'react'

export default function GalleryHomeThree() {
  return (
    <>
      <section className="gallery-sectionv02 overflow-hidden white-bg space-top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-5 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr text-uppercase wow fadeInLeft" data-wow-delay="0.4s">
                  OUR GALLARY
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Bringing natures bounty to your plate
                </h2>
              </div>
            </div>
          </div>
          <div className="d-flex flex-md-nowrap flex-wrap gap-lg-4 gap-3">
            <div className="gallery-itemsv02 gallery-itemshover wow fadeInUp" data-wow-delay=".3s">
              <div className="thumb w-100">
                <img src="assets/img/gallery/galleryv2-1.jpg" alt="img" className="w-100" />
              </div>
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
              <div className="content">
                <Link href="/gallery-details" className="title">Farming for a Better Tomorrow</Link>
                <p>
                  Green Thumb Farm Services
                </p>
              </div>
            </div>
            <div className="gallery-itemsv02 white-bg wow fadeInUp" data-wow-delay=".5s">
              <div className="thumb w-100">
                <img src="assets/img/gallery/galleryv2-2.jpg" alt="img" className="w-100" />
              </div>
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
              <div className="content">
                <Link href="/gallery-details" className="title">Farming for a Better Tomorrow</Link>
                <p>
                  Green Thumb Farm Services
                </p>
              </div>
            </div>
            <div className="gallery-itemsv02 gallery-itemshover  wow fadeInUp" data-wow-delay=".7s">
              <div className="thumb w-100">
                <img src="assets/img/gallery/galleryv2-3.jpg" alt="img" className="w-100" />
              </div>
              <Link href="/gallery-details" className="arrow">
                <i className="fa-solid fa-angle-right"></i>
              </Link>
              <div className="content">
                <Link href="/gallery-details" className="title">Farming for a Better Tomorrow</Link>
                <p>
                  Green Thumb Farm Services
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
