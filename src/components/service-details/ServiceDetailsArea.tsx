"use client"
import React, { useState } from 'react'

const accordioa_data = [
  {
    id: 1,
    title: 'CropSense Agriculture?',
    description: 'It is a long established fact that a reader will be distracted',
  },
  {
    id: 2,
    title: 'Farm Thumb Services?',
    description: 'It is a long established fact that a reader will be distracted',
  },
  {
    id: 3,
    title: 'Natures Landscaping?',
    description: 'It is a long established fact that a reader will be distracted',
  },
  {
    id: 4,
    title: 'Fresh Start Farm',
    description: 'It is a long established fact that a reader will be distracted',
  },
  {
    id: 5,
    title: 'Evergreen Lawn Care',
    description: 'It is a long established fact that a reader will be distracted',
  },
]

export default function ServiceDetailsArea() {

  const [isOpen, setIsOpen] = useState(0);
  
  const toggle = (i: number) => {
    setIsOpen(i === isOpen ? 0 : i);
  }


  return (
    <>
      <section className="servicevm-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-4">
              <div className="service-details-left">
                <div className="tab-faq faq mb-40 wow fadeInUp" data-wow-delay=".3s">
                  <div className="accordion-section d-grid gap-xxl-4 gap-lg-3 gap-2">
                    {accordioa_data.map((item, i) => (
                      <div key={i} className={`accordion-single ${isOpen === i ? "active" : ""}`}>
                        <h5 className="header-area">
                          <button
                            onClick={() => toggle(i)}
                            className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                            type="button">
                            {item.title}
                          </button>
                        </h5>
                        <div className="content-area" style={{ display: isOpen === i ? "block" : "none" }}>
                          <div className="content-body">
                            <p>
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}

                  </div>
                </div>
                <div className="service-bambo-box wow fadeInUp" data-wow-delay=".4s">
                  <h3 className="text-uppercase">
                    GET TOUCH
                  </h3>
                  <span className="fast">
                    For fast service
                  </span>
                  <a href="#" className="call">
                    <span className="call-icon">
                      <i className="fa-solid fa-phone"></i>
                    </span>
                    (+888) 123 456 765
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="service-wrapper-right ps-xl-2">
                <div className="thumb mb-30 wow fadeInUp" data-wow-delay=".3s">
                  <img src="assets/img/service/service-single2.jpg" alt="img" />
                </div>
                <div className="cont-box wow fadeInUp" data-wow-delay=".4">
                  <h3>
                    Cultivate Success with Agriculture
                  </h3>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the
                    printing .Lorem Ipsum is simply
                    dummy text of the printing.Lorem Ipsum is simply dummy text of the printing Lorem Ipsum
                    is si dummy text of the printing
                    .Lorem Ipsum
                  </p>
                </div>
                <div className="working-process-details">
                  <div className="working-proces-items01 wow fadeInUp" data-wow-delay=".4s">
                    <h3 className="white-clr">
                      Prepare <br /> the soil
                    </h3>
                    <div className="details-iconbox d-center">
                      <img src="assets/img/icon/details-desert.svg" alt="img" />
                    </div>
                  </div>
                  <div className="working-proces-items01 wow fadeInUp" data-wow-delay=".5s">
                    <h3 className="white-clr">
                      Prepare <br /> the soil
                    </h3>
                    <div className="details-iconbox d-center">
                      <img src="assets/img/icon/details-flower.svg" alt="img" />
                    </div>
                  </div>
                </div>
                <div className="cont-box mb-40 wow fadeInUp" data-wow-delay=".6s">
                  <h3>
                    Explore the beauty of nature
                  </h3>
                  <p>
                    It is a long esta asblished fact that a reader will be distr acted byoi the read able
                    content of a page when lookiing
                    for okngjo at its layout The point of using Lorem Ipsum is that it has a more orless
                    norimal dist ribution of letters
                    opposed to using It is a long estab lished fact that a readey
                  </p>
                </div>
                <div className="service-single-thumb">
                  <div className="thumb wow fadeInUp" data-wow-delay=".7s">
                    <img src="assets/img/service/service-details-big.jpg" alt="img" />
                  </div>
                  <div className="thumb wow fadeInUp" data-wow-delay=".8s">
                    <img src="assets/img/service/service-single1.jpg" alt="img" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
