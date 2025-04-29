
"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import useSticky from '@/hooks/use-sticky'
import NavMenu from './menu/NavMenu'
import Offcanvas from '@/components/common/Offcanvas'

type PropsType = {
  style_2?: boolean
}

export default function HeaderOne({ style_2 }: PropsType) {

  const { sticky } = useSticky()
  const [open, setOpen] = useState(false)


  return (
    <>
      <header id="header-sticky" className={`header-1 ${sticky ? "sticky" : ""} ${style_2 ? "header-3" : ""}`}>
        <div className="container">
          <div className="mega-menu-wrapper">
            <div className="header-main">
              <div className="header-left">
                <div className="logo">
                  <Link href="/" className="header-logo">
                    <img src="assets/img/logo/logo.png" alt="logo-img" />
                  </Link>
                </div>
              </div>
              <div className="header-right d-flex justify-content-end align-items-center">
                <div className="mean__menu-wrapper">
                  <div className="main-menu d-none d-xl-block">
                    <nav id="mobile-menu">
                       <NavMenu />
                    </nav>
                  </div>
                </div>
                <div className="shop-adjust"> 
                  <div className="header-button d-sm-block d-none">
                    <Link href="/contact" className="cmn-btn d-center round100 cmn-white-clr">
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
    </>
  )
}
