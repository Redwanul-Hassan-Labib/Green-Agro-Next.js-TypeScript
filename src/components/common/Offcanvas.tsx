
import MobileMenu from '@/layouts/headers/menu/MobileMenu'
import Link from 'next/link'
import React from 'react'

type Props = {
  open: boolean,
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Offcanvas({ open, setOpen }: Props) {
  return (
    <>
      <div className="fix-area">
        <div className={`offcanvas__info ${open ? "info-open" : ""}`}>
          <div className="offcanvas__wrapper">
            <div className="offcanvas__content">
              <div className="offcanvas__top mb-4 d-flex justify-content-between align-items-center">
                <div className="offcanvas__logo">
                  <Link href="/">
                    <img src="assets/img/logo/favcion.png" alt="logo-img" />
                  </Link>
                </div>
                <div className="offcanvas__close">
                  <button onClick={() => setOpen(false)}>
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
              <div className="mobile-menu fix mb-3 mean-container d-xl-none">
                <MobileMenu />
              </div>
              <div className="offcanvas__contact">
                <h4>Contact Info</h4>
                <ul>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon">
                      <i className="fal fa-map-marker-alt"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Us 1216, road 45 house of street</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-envelope"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="mailto:demo23yourmail.com"><span
                        className="mailto:demo23yourmail.com">demo23yourmail.com</span></a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="fal fa-clock"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a target="_blank" href="#">Mod-friday, 06am -02pm</a>
                    </div>
                  </li>
                  <li className="d-flex align-items-center">
                    <div className="offcanvas__contact-icon mr-15">
                      <i className="far fa-phone"></i>
                    </div>
                    <div className="offcanvas__contact-text">
                      <a href="tel:+11002345909">(307) 555-0133</a>
                    </div>
                  </li>
                </ul>
                <div className="header-button mt-4 mb-4">
                  <Link href="/contact" className="cmn-btn">
                    Get A Quote
                    <i className="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
                <h4>Social Media</h4>
                <div className="social-icon d-flex align-items-center">
                  <a href="#"><i className="fab fa-facebook-f"></i></a>
                  <a href="#"><i className="fab fa-twitter"></i></a>
                  <a href="#"><i className="fab fa-youtube"></i></a>
                  <a href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={`offcanvas__overlay ${open ? "overlay-open" : ""}`} onClick={() => setOpen(false)}></div>
    </>
  )
}
