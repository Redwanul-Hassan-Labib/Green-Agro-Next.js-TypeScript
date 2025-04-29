"use client"
import useSticky from '@/hooks/use-sticky'
import Link from 'next/link'
import React, { useState } from 'react'
import NavMenu from './menu/NavMenu'
import Offcanvas from '@/components/common/Offcanvas'

export default function HeaderThree() {

  const { sticky } = useSticky()
  const [open, setOpen] = useState(false)




  return (
    <>
      <div id="header-sticky" className={`header-common-adjustment ${sticky ? "sticky" : ""}`}>
        <Link href="/" className="logo-v04">
          <img src="assets/img/logo/logo-light-clone.png" alt="img" />
        </Link>
        <div className="topheader-mainheader">

          <div className="header-top-section topcmn-style d-lg-block d-none">
            <div className="container">
              <div className="header-top-wrapper">
                <ul className="contact-list">
                  <li>
                    <a href="#"><i className="fa-solid fa-envelope p1-clr"></i>
                      info@example.com</a>
                  </li>
                  <li>
                    <a href="#" className="link"><i className="fa-solid fa-location-dot p1-clr"></i> 9991 Ohio St.
                      Califirnia,
                      10299</a>
                  </li>
                </ul>
                <div className="social-wrapper d-flex align-items-center">
                  <a href="#" className="white"><i className="white fa-brands fa-pinterest-p"></i></a>
                  <a href="https://www.linkedin.com/in/redwanul-hassan-labib/" className="white"><i className="white fa-brands fa-linkedin-in"></i></a>
                  <a href="#" className="white">
                    <svg width="11" height="12" viewBox="0 0 11 12" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.55735 5.16157L10.5183 0.65625H9.57971L6.14039 4.56816L3.39341 0.65625H0.225098L4.37906 6.57174L0.225098 11.2963H1.16378L4.79579 7.16516L7.6968 11.2963H10.8651L6.55712 5.16157H6.55735ZM5.2717 6.62386L4.85082 6.03481L1.502 1.34768H2.94375L5.64629 5.13034L6.06717 5.71939L9.58015 10.6363H8.13839L5.2717 6.62409V6.62386Z"
                        fill="white" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/Redwanul.Hasan.Labib/" className="white"><i className="white fab fa-facebook-f"></i></a>
                </div>
              </div>
            </div>
          </div>


          <header className="header-v4">
            <div className="container">
              <div className="mega-menu-wrapper">
                <div className="header-main">
                  <div className="header-left d-xl-none d-block">
                    <div className="logo">
                      <Link href="/" className="header-logo">
                        <img src="assets/img/logo/logo-black.png" alt="logo-img" />
                      </Link>
                    </div>
                  </div>
                  <div className="header-right d-flex justify-content-between w-100 align-items-center">
                    <div className="mean__menu-wrapper">
                      <div className="main-menu d-none d-xl-block">
                        <nav id="mobile-menu">
                          <NavMenu />
                        </nav>
                      </div>
                    </div>
                    <div className="common-adjust-toggle">
                      <a href="#" className="header-help">
                        <img src="assets/img/icon/chat.svg" alt="img" />
                        <span className="d-grid">
                          <span className="need">
                            Need help?
                          </span>
                          <span className="call">
                            (307) 555-0133
                          </span>
                        </span>
                      </a>
                      <div className="header__hamburger my-auto">
                        <div onClick={() => setOpen(!open)} className="sidebar__toggle d-center">
                          <svg width="22" height="10" viewBox="0 0 22 10" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.5879 1L21.1761 1" stroke="#FDD61F" strokeWidth="2" />
                            <path d="M0 8.41406L21.1765 8.41406" stroke="#FDD61F"
                              strokeWidth="2" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>

      <Offcanvas open={open} setOpen={setOpen} />

    </>
  )
}
