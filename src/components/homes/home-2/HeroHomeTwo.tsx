

import Link from 'next/link'
import React from 'react'

export default function HeroHomeTwo() {
  return (
    <>
      <section className="banner-section position-relative style-v2 overflow-hidden">
        <div className="container">
          <div className="banner-wrapperv2 position-relative">
            <div className="row g-4 align-items-center">
              <div className="col-lg-7 col-md-9">
                <div className="banner-contentv02">
                  <h5 className="wow fadeInUp" data-wow-delay="0.2s">
                    Farming for tomorrow
                  </h5>
                  <h1 className="wow fadeInUp" data-wow-delay="0.5s">
                    Farming is ours heritage <span>future <br /> our harvest</span>
                  </h1>
                  <p className="wow fadeInUp" data-wow-delay="0.7s">
                    We have been operating for over a decade, providing top-notch services to our clients
                    and building a strong track record in the industry.
                  </p>
                  <div className="banner-buttonv2 wow fadeInUp" data-wow-delay="1s">
                    <Link href="/about" className="cmn-btn round100 primary-border">
                      Read More
                      <i className="fa-solid fa-angle-right"></i>
                    </Link>
                    <a href="#" className="header-help">
                      <span className="icon d-center">
                        <i className="fa-solid fa-phone"></i>
                      </span>
                      <span className="d-grid">
                        <span className="need">
                          Need help?
                        </span>
                        <span className="call">
                          (808) 555-0111
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/banner/hero-v2.png" alt="img" className="hero-v02-thumb" />

      </section>
    </>
  )
}
