
import Link from 'next/link'
import React from 'react'

export default function AboutHomeTwo() {
  return (
    <>
      <section className="about-section style-v01 space-top pb-60 mb-3 white-bg">
        <div className="container">
          <div className="row g-4 align-items-lg-center justify-content-center">
            <div className="col-lg-6 col-md-6 col-sm-8 order-md-0 order-1">
              <div className="about-thumv02 position-relative w-100 wow fadeInDown" data-wow-delay=".3s">
                <img src="assets/img/about/choose-thumb2.png" alt="img" className="w-100" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="about-contentv1">
                <div className="section-title mb-40">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Why Chose Us
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Farming with passion the feeding purpose
                  </h2>
                  <p className="wow fadeInUp mb-lg-4 mb-3" data-wow-delay=".4s">
                    Morem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum se facilisis
                    sem. Imperdiet massa turpis sit
                    Lorem ipsum dolor sit amet consectetur. Amet lectus mi ultricies dictum facilisis sem.
                    Imperdiet
                  </p>
                  <ul className="about-list2">
                    <li><i className="fa-solid fa-circle-check"></i> Agriculture and farming are essential
                      industries that involve</li>
                    <li><i className="fa-solid fa-circle-check"></i> Agriculture and farming are essential
                      industries that involve</li>
                  </ul>
                  <Link href="/about" className="cmn-btn primary-border">
                    Read More
                    <i className="fa-solid fa-arrow-right p1-clr"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
