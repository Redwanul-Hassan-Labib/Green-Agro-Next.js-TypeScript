import Link from 'next/link'
import React from 'react'

export default function FooterOne() {
  return (
    <>
      <footer className="footer-section overflow-hidden position-relative footer-style1">
        <div className="footer-widgets-wrapper footer-widget-wrapperv01">
          <div className="container">
            <div className="row g-md-4 g-4 justify-content-between">
              <div className="col-xl-4 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <Link href="/" className="footer-logo">
                      <img src="assets/img/logo/logo-light.png" alt="logo-img" />
                    </Link>
                  </div>
                  <div className="footer-content">
                    <p className="pre-pragraph">
                      Lorem ipsum dolor amet consectetur <br /> sell adipis elit phase nibh ellentes
                    </p>
                    <div className="social-wrapper social-empact d-flex align-items-center">
                      <a href="#" className="white-clr"><i className="white-clr fab fa-facebook-f"></i></a>
                      <a href="#" className="white-clr">
                        <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                            fill="white-clr" />
                        </svg>
                      </a>
                      <a href="#" className="white-clr"><i className="white-clr fa-brands fa-linkedin-in"></i></a>
                      <a href="#" className="white-clr"><i className="white-clr fa-brands fa-pinterest-p"></i></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Service</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Success Steps Education
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Pathway to Progress
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Skill Builders Academy
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-angle-right"></i>
                        Academic Achievers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Link</h3>
                  </div>
                  <ul className="list-area">
                    <li>
                      <Link href="/about">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/service">
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link href="/faq">
                        FAQ
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog">
                        Blog Ang News
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
                <div className="single-footer-widget">
                  <div className="widget-head">
                    <h3 className="white-clr">Contact</h3>
                  </div>
                  <ul className="list-area list-contact">
                    <li>
                      <a href="#">
                        <i className="fa-solid fa-envelope"></i>
                        debra.holt@example.com
                      </a>
                    </li>
                    <li>
                      <a href="info@example.com" className="link">
                        <i className="fa-solid fa-location-dot"></i>
                        1901 Thornridge Cir. Shiloh, <br /> Hawaii 81063
                      </a>
                    </li>
                    <li>
                      <a href="#" className="link">
                        <i className="fa-solid fa-phone"></i>
                        (270) 555-0117 <br />
                          (270) 555-0118
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div
              className="footer-wrapper footer-wrapperv01 d-md-flex d-grid gap-md-0 gap-2 align-items-center justify-content-md-between justify-content-center text-md-start text-center">
              <p className="wow fadeInLeft color-2" data-wow-delay=".3s">
              © Redwan  Labib {new Date().getFullYear()}. All Rights Reserved
              </p>
              <ul className="footer-menu wow fadeInRight" data-wow-delay=".5s">
                <li>
                  <Link href="/contact">
                    Trams & Condition
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <img src="assets/img/footer/footer-wheat.png" alt="img" className="footer-wheat position-absolute" />
          
      </footer>

    </>
  )
}
