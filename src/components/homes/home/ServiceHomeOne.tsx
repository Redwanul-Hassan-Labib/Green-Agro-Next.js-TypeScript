

import Link from 'next/link'
import React from 'react'

type Props = {
  style_2?: boolean
}

export default function ServiceHomeOne({style_2}: Props) {
  return (
    <>
    {/* service-section white-bg */}
      <section className={`service-section white-bg ${style_2 ? "" : "space-top"}`}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  Our Latest Service
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Harvesting dreams one crop at a time
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="service-itemsv1">
                <img src="assets/img/icon/count1.svg" alt="svg" className="icons" />
                <div className="content">
                  <Link href="/service-details" className="title">Green Grow</Link>
                  <p>Agriculture and farming are essential industries</p>
                  <Link href="/service-details" className="arrows">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-itemsv1">
                <img src="assets/img/icon/wheat-sesh.svg" alt="svg" className="icons" />
                <div className="content">
                  <Link href="/service-details" className="title">Agri Consulting</Link>
                  <p>Agriculture and farming are essential industries</p>
                  <Link href="/service-details" className="arrows">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="service-itemsv1">
                <img src="assets/img/icon/smart-flower.svg" alt="svg" className="icons" />
                <div className="content">
                  <Link href="/service-details" className="title">Farm Smart</Link>
                  <p>Agriculture and farming are essential industries</p>
                  <Link href="/service-details" className="arrows">Read More <i className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
