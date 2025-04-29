"use client"
import useSticky from '@/hooks/use-sticky'
import Link from 'next/link'
import React, { useState } from 'react'
import NavMenu from './menu/NavMenu'
import Offcanvas from '@/components/common/Offcanvas'
import SearchBar from '@/components/common/SearchBar'

export default function HeaderTwo() {

	const { sticky } = useSticky()
  const [open, setOpen] = useState(false)
  const [serchOpen, setSearchOpen] = useState(false)



  return (
    <>
      <div className="header-top-section style-v01 d-lg-block d-none">
        <div className="container">
          <div className="header-top-wrapper">
            <a href="#" className="location-area">
              <i className="fa-solid fa-location-dot"></i>
              2464 Royal Ln. Mesa, New Jersey 45463
            </a>
            <ul className="contact-list">
              <li>
                <a href="#">
                  <i className="fa-solid fa-phone"></i>
                  (629) 555-0129
                </a>
              </li>
              <li>
                <a href="debbie.baker@example.com" className="link"><i className="fa-solid fa-envelope"></i>
                  debbie.baker@example.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>


      <header id="header-sticky" className={`header-2 ${sticky ? "sticky" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/logo-black.png" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper d-none d-xl-block">
                  <div className="main-menu">
                    <nav id="mobile-menu">
                       <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="search-adjust">
                  <a href="#" className="search-trigger d-center" onClick={() => setSearchOpen(!serchOpen)}>
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </a>
                  <div className="header-button d-sm-block d-none">
                    <Link href="/contact" className="cmn-btn round100">
                      Get A Quote
                      <i className="fa-solid fa-arrow-right"></i>
                    </Link>
                  </div>
                </div>
                <div className="header__hamburger d-xl-none my-auto">
                  <div className="sidebar__toggle" onClick={() => setOpen(!open)}>
                    <i className="fas fa-bars"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <Offcanvas open={open} setOpen={setOpen} />
      <SearchBar serchOpen={serchOpen} setSearchOpen={setSearchOpen} />


    </>
  )
}
