

import Link from 'next/link'
import React from 'react'

type PropsType = {
  title: string
  subtitle: string
}

export default function Breadcrumnd({title, subtitle}: PropsType) {
  return (
    <>
      <section className="breadcrumnd-banner overflow-hidden">
        <div className="container">
          <div className="breadcrumnd-wrapp">
            <div className="bread-content">
              <h1 className="wow fadeInDown" data-wow-delay=".4s">
                {title}
              </h1>
              <ul className="bread-listing">
                <li>
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="fa-solid fa-angle-right"></i>
                </li>
                <li>
                  {subtitle}
                </li>
              </ul>
            </div>
            <div className="bread-thumb d-sm-block d-none">
              <img src="assets/img/about/tt-slice.png" alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
