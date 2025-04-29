import Link from 'next/link'
import React from 'react'

export default function ServiceHomeTwo() {
  return (
    <>
      <section className="servicev2-section overflow-hidden white-bg">
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
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img src="assets/img/service/service1.jpg" alt="img" className="w-100 mimg" />
                </div>
                <div className="content">
                  <div className="iocns-box d-center"><img src="assets/img/icon/desert.svg" alt="svg" /></div>
                  <Link href="/service-details" className="title">Green Grow Solutions</Link>
                  <p>Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis</p>
                  <Link href="/service-details" className="arrows">Read More <i
                    className="fa-solid fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img src="assets/img/service/service2.jpg" alt="img" className="w-100 mimg" />
                </div>
                <div className="content">
                  <div className="iocns-box d-center"><img src="assets/img/icon/fence.svg" alt="svg" /></div>
                  <Link href="/service-details" className="title">Farm Services</Link>
                  <p>Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis</p>
                  <Link href="/service-details" className="arrows">Read More <i
                    className="fa-solid fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="service-itemsv02">
                <div className="thumb w-100">
                  <img src="assets/img/service/service3.jpg" alt="img" className="w-100 mimg" />
                </div>
                <div className="content">
                  <div className="iocns-box d-center"><img src="assets/img/icon/tree.svg" alt="svg" /></div>
                  <Link href="/service-details" className="title">AgriPro Consulting</Link>
                  <p>Amet lectus mi ultricies dictum facilisis sem. Imperdiet massa turpis</p>
                  <Link href="/service-details" className="arrows">Read More <i
                    className="fa-solid fa-angle-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
