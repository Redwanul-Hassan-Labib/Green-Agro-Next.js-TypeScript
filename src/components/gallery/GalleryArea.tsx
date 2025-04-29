

import Link from 'next/link'
import React from 'react'

export default function GalleryArea() {
  return (
    <>
      <section className="gallery-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="gallery-static-item">
                <img src="assets/img/gallery/mg1.jpg" alt="img" className="w-100 mimg" />
                <div className="content">
                  <span>
                    Business Intelligence
                  </span>
                  <Link href="/gallery-details" className="title">Vibrant Blooms the a Farming Services</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="gallery-static-item">
                <img src="assets/img/gallery/mg2.jpg" alt="img" className="w-100 mimg" />
                <div className="content">
                  <span>
                    Business Intelligence
                  </span>
                  <Link href="/gallery-details" className="title">Vibrant Blooms the a Farming Services</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="gallery-static-item">
                <img src="assets/img/gallery/mg3.jpg" alt="img" className="w-100 mimg" />
                <div className="content">
                  <span>
                    Business Intelligence
                  </span>
                  <Link href="/gallery-details" className="title">Vibrant Blooms the a Farming Services</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="gallery-static-item">
                <img src="assets/img/gallery/mg4.jpg" alt="img" className="w-100 mimg" />
                <div className="content">
                  <span>
                    Business Intelligence
                  </span>
                  <Link href="/gallery-details" className="title">Vibrant Blooms the a Farming Services</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="gallery-static-item">
                <img src="assets/img/gallery/mg5.jpg" alt="img" className="w-100 mimg" />
                <div className="content">
                  <span>
                    Business Intelligence
                  </span>
                  <Link href="/gallery-details" className="title">Vibrant Blooms the a Farming Services</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="gallery-static-item">
                <img src="assets/img/gallery/mg6.jpg" alt="img" className="w-100 mimg" />
                <div className="content">
                  <span>
                    Business Intelligence
                  </span>
                  <Link href="/gallery-details" className="title">Vibrant Blooms the a Farming Services</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
