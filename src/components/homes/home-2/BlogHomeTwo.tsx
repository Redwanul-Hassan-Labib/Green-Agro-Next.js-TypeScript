

import Link from 'next/link'
import React from 'react'

export default function BlogHomeTwo() {
  return (
    <>
      <section className="blog-section overflow-hidden white-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft text-uppercase" data-wow-delay="0.4s">
                  oUR BLOGS
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Taking care of the Earth one field at a time
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-xl-6 col-lg-5 col-md-10 col-sm-11 wow fadeInUp" data-wow-delay=".3s">
              <div className="blog-itemsv1 blog-itemsv2">
                <div className="thumb w-100">
                  <img src="assets/img/blog/blogv2-1.jpg" alt="img" className="w-100" />
                </div>
                <ul className="comment-inner">
                  <li>
                    <a href="#"><i className="fa-solid fa-calendar-days"></i> October 19, 2024</a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-regular fa-user"></i> By admin</a>
                  </li>
                </ul>
                <div className="content">
                  <Link href="/blog-details" className="title">Nourishing the world from seed to the best
                    table</Link>
                  <Link href="/blog-details" className="arrows">Read More <i
                    className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".5s">
              <div className="blog-itemsv1 blog-itemsv2">
                <div className="thumb w-100">
                  <img src="assets/img/blog/blogv2-2.jpg" alt="img" className="w-100" />
                </div>
                <ul className="comment-inner">
                  <li>
                    <a href="#"><i className="fa-solid fa-calendar-days"></i> October 19, 2024</a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-regular fa-user"></i> By admin</a>
                  </li>
                </ul>
                <div className="content">
                  <Link href="/blog-details" className="title">Sow harvest to the repeat</Link>
                  <Link href="/blog-details" className="arrows">Read More <i
                    className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".7s">
              <div className="blog-itemsv1 blog-itemsv2">
                <div className="thumb w-100">
                  <img src="assets/img/blog/blogv2-13.jpg" alt="img" className="w-100" />
                </div>
                <ul className="comment-inner">
                  <li>
                    <a href="#"><i className="fa-solid fa-calendar-days"></i> October 19, 2024</a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-regular fa-user"></i> By admin</a>
                  </li>
                </ul>
                <div className="content">
                  <Link href="/blog-details" className="title">Discover the Pot of Agriculture</Link>
                  <Link href="/blog-details" className="arrows">Read More <i
                    className="fa-solid fa-arrow-right"></i></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
