
import Link from 'next/link'
import React from 'react'

export default function ServiceHomeThree() {
  return (
    <>
      <section className="servicev3-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft text-uppercase" data-wow-delay="0.4s">
                  Our Services
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Nourishing the world from seed to table
                </h2>
              </div>
            </div>
          </div>
          
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img src="assets/img/service/servicev3-1.jpg" alt="img" className="w-100 mimg" />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">Green Grow Solutions</Link>
                  <img src="assets/img/icon/water-hose.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img src="assets/img/service/servicev3-2.jpg" alt="img" className="w-100 mimg" />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">Harvest Tech to Farm Service</Link>
                  <img src="assets/img/icon/ser-flower.svg" alt="icon" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-itemsv02 service-style03">
                <div className="thumb w-100">
                  <img src="assets/img/service/servicev3-3.jpg" alt="img" className="w-100 mimg" />
                </div>
                <div className="content">
                  <Link href="/service-details" className="title">AgriPro is the Consulting</Link>
                  <img src="assets/img/icon/map-plant.svg" alt="icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
