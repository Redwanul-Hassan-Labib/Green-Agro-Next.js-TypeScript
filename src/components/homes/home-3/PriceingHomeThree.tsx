
import React from 'react'

export default function PriceingHomeThree() {
  return (
    <>
      <section className="pricing-section overflow-hidden white-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  OUR PRICING
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Harvesting dreams, one crop at a time
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="pricing-itemsv1">
                <h5>
                  Consult
                </h5>
                <div className="price d-flex">
                  <h2>
                    $9
                  </h2>
                  <span>
                    /month
                  </span>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Mistakes To Avoid
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Your Startup
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-xmark"></i> Knew About Fonts
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-xmark"></i>Winning Metric for Your Startup
                  </li>
                </ul>
                <a href="#" className="cmn-btn primary-border">
                  Get Now
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="pricing-itemsv1 active">
                <h5>
                  Perfect
                </h5>
                <div className="price d-flex">
                  <h2>
                    $29
                  </h2>
                  <span>
                    /month
                  </span>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Mistakes To Avoid
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Your Startup
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Knew About Fonts
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Winning Metric for Your Startup
                  </li>
                </ul>
                <a href="#" className="cmn-btn primary-border">
                  Get Now
                </a>
                <span className="price-badge">
                  Polupar
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="pricing-itemsv1">
                <h5>
                  Easy
                </h5>
                <div className="price d-flex">
                  <h2>
                    $19
                  </h2>
                  <span>
                    /month
                  </span>
                </div>
                <ul className="pricing-list">
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Mistakes To Avoid
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Your Startup
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i> Knew About Fonts
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-check"></i>Winning Metric for Your Startup
                  </li>
                </ul>
                <a href="#" className="cmn-btn primary-border">
                  Get Now
                </a>
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/pricing-animal.png" alt="img" className="pricing-element" />
      </section>
    </>
  )
}
