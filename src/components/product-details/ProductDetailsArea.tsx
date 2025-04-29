"use client"
import NiceSelect from '@/ui/NiceSelect'
import Link from 'next/link'
import React, { useState } from 'react'
import { Navigation, Thumbs } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function ProductDetailsArea() {
  // const selectHandler = (e) => { };
  // const selectHandler = (e: React.ChangeEvent<HTMLSelectElement>) => { };
  const selectHandler = (e: unknown) => { };

  // increment and decrement
  const [quantity, setQuantity] = React.useState(1);

  const increment = () => {
    setQuantity(quantity + 1);
  };
  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

 
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null); 
  // const [thumbsSwiper, setThumbsSwiper] = useState<typeof Swiper | null>(null);
  



  return (
    <>
      <section className="product-details-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-3 col-md-5 pe-xl-4">
              <div className="product-details-leftbar mb-60">
                <div className="product-categori-select">
                  <i className="fa-solid fa-list"></i>

                  <NiceSelect
                    options={[
                      { value: "00", text: "Shop By Ctagory" },
                      { value: "01", text: "Fresh Meat" },
                      { value: "02", text: "Beef Meat" },
                      { value: "04", text: "Potatoes" },
                      { value: "05", text: "Soybean" },
                    ]}
                    defaultCurrent={0}
                    onChange={selectHandler}
                    placeholder="Select an option"
                    name="myNiceSelect"
                  />

                </div>
                <div className="tab-faq faq wow fadeInUp" data-wow-delay=".3s">
                  <div className="accordion-section d-grid gap-xxl-3 gap-lg-3 gap-2">
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc1.svg" alt="icon" />
                          Meat
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc2.svg" alt="icon" />
                          Sugar Cane
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc3.svg" alt="icon" />
                          Potatoes
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc4.svg" alt="icon" />
                          Rice
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc5.svg" alt="icon" />
                          Tractor
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc6.svg" alt="icon" />
                          Mower
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc7.svg" alt="icon" />
                          Plow
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="accordion-single">
                      <h5 className="header-area">
                        <button
                          className="accordion-btn d-flex align-items-center d-flex position-relative w-100"
                          type="button">
                          <img src="assets/img/icon/mc8.svg" alt="icon" />
                          Rake
                        </button>
                      </h5>
                      <div className="content-area">
                        <ul className="content-body">
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Fresh Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Beef Meat
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Potatoes
                            </Link>
                          </li>
                          <li>
                            <Link href="/product-details">
                              <i className="fa-solid fa-angle-right"></i>Rice
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="latest-project-wrap">
                <h5 className="mb-24">
                  Latest Project
                </h5>
                <div className="recent-postwrap">
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/blog/details-small1.png" alt="img" />
                    </div>
                    <div className="recent-content">
                      <Link href="/product-details">
                        Nourishing world from table
                      </Link>
                      <span>
                        $123.00
                      </span>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/blog/product-recente1.jpg" alt="img" />
                    </div>
                    <div className="recent-content">
                      <Link href="/product-details">
                        Farm goodness fresh for all
                      </Link>
                      <p>
                        $120.00 <span>100$</span>
                      </p>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/blog/product-recente2.jpg" alt="img" />
                    </div>
                    <div className="recent-content">
                      <Link href="/product-details">
                        Farming passion feeding purpose
                      </Link>
                      <span>
                        100.00
                      </span>
                    </div>
                  </div>
                  <div className="recent-items">
                    <div className="recent-thumb">
                      <img src="assets/img/blog/product-recente3.jpg" alt="img" />
                    </div>
                    <div className="recent-content">
                      <Link href="/product-details">
                        Growing strong a feeding futures
                      </Link>
                      <span>
                        50.00
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 col-md-7">
              <div className="row g-4 mb-60">
                <div className="col-xl-5 col-lg-6">
                  <div className="shop-details-wrap">
                    <Swiper
                      loop={true}
                      spaceBetween={10}
                      navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                      }}
                      thumbs={{ swiper: thumbsSwiper }}
                      modules={[Navigation, Thumbs]}

                      className="swiper mySwiper2">

                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-bigthumb">
                          <img src="assets/img/service/product-small6.jpg" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-bigthumb">
                          <img src="assets/img/service/product-small6.jpg" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-bigthumb">
                          <img src="assets/img/service/product-small6.jpg" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-bigthumb">
                          <img src="assets/img/service/product-small6.jpg" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-bigthumb">
                          <img src="assets/img/service/product-small6.jpg" alt="img" />
                        </div>
                      </SwiperSlide>

                      <div className="swiper-button-next"></div>
                      <div className="swiper-button-prev"></div>
                    </Swiper>
                    <Swiper
                      onSwiper={(swiper) => setThumbsSwiper(swiper)}
                      loop={true}
                      spaceBetween={10}
                      slidesPerView={3}
                      freeMode={true}
                      watchSlidesProgress={true}
                      breakpoints={{
                        480: {
                          slidesPerView: 4,
                          spaceBetween: 10,
                        },
                        991: {
                          slidesPerView: 4,
                          spaceBetween: 20,
                        },
                        1199: {
                          slidesPerView: 5,
                          spaceBetween: 24,
                        },
                      }}

                      className="swiper mySwiper">

                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small1.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small2.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small3.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small4.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small5.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      {/* repeat */}
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small1.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small2.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small3.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small4.png" alt="img" />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="shop-details-samll d-center">
                          <img src="assets/img/service/product-small5.png" alt="img" />
                        </div>
                      </SwiperSlide>

                    </Swiper>
                  </div>
                </div>
                <div className="col-xl-7 col-lg-6">
                  <div className="product-infowrap">
                    <h3 className="title">
                      Beef Meat
                    </h3>
                    <p>
                      Web designing in a powerful way of just not an only professi however, in a pass
                      Company a to a tendency
                    </p>
                    <div className="ratting">
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                      <i className="fa-solid fa-star"></i>
                    </div>
                    <span className="creview">
                      1 Customer Review
                    </span>
                    <h3 className="prices">
                      32.00 <span>$25.00</span>
                    </h3>
                    <span className="d-block">Bonless Meat</span>
                    <span className="d-block">Fresh Meat</span>
                    <div className="quantity-wrap">
                      <div className="counter">
                        <span className="down" onClick={decrement}>-</span>
                        <input type="text" defaultValue={quantity} />
                        <span className="up" onClick={increment}>+</span>
                      </div>
                    </div>
                    <Link href="/contact" className="cmn-btn d-inline-flex">
                      Add To Cart
                    </Link>
                  </div>
                </div>
              </div>
              <div className="review-description">
                <div className="singletab">
                  <ul className="tablinks">
                    <li className="nav-links">
                      <button className="tablink">Accesories</button>
                    </li>
                    <li className="nav-links">
                      <button className="tablink">Description</button>
                    </li>
                    <li className="nav-links">
                      <button className="tablink">Specificaton</button>
                    </li>
                    <li className="nav-links active">
                      <button className="tablink">Reviews</button>
                    </li>
                  </ul>
                  <div className="tabcontents">
                    <div className="tabitem">
                      <p className="dess">
                        Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                        Ipsum is not simply random text It has roots in a piece of classical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                      </p>
                    </div>
                    <div className="tabitem">
                      <p className="dess">
                        Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                        Ipsum is not simply random text It has roots in a piece of classical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                      </p>
                    </div>
                    <div className="tabitem">
                      <p className="dess">
                        Contrary to popular belief Lorem Ipsum is not simply random text It has roots in a piece of classical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                        Ipsum is not simply random text It has roots in a piece of classical  the a  literature from 45 BC making it over 2000 years old. Richard McClintock a Latin professor at Hampden-a Sydney College Virgini the looked up one of the more obscure
                      </p>
                    </div>
                    <div className="tabitem active">
                      <div className="review-main-body mb-40">
                        <div className="left-review">
                          <h3 className="p900-clr fw-normal mb-2">
                            Besed In 2 Comment
                          </h3>
                          <div className="d-flex align-items-center gap-2 mb-30">
                            <h3 className="p900-clr fw-normal">
                              4.5
                            </h3>
                            <div className="ratting mt-3 d-flex align-items-center gap-2 mb-20">
                              <i className="fa-solid fa-star p2-clr"></i>
                              <i className="fa-solid fa-star p2-clr"></i>
                              <i className="fa-solid fa-star p2-clr"></i>
                              <i className="fa-solid fa-star p2-clr"></i>
                              <i className="fa-solid fa-star"></i>
                            </div>
                          </div>
                          <div className="review-start-inner">
                            <div className="review-star-item">
                              <div className="ratting d-flex align-items-center gap-2">
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                              </div>
                              <div className="progress_bar">
                                <div className="progress_bar_item">
                                  <div className="item_bar">
                                    <div className="progress" data-progress="50" style={{ width: "50%" }}></div>
                                  </div>
                                </div>
                              </div>
                              <span className="p800-clr">
                                01
                              </span>
                            </div>
                            <div className="review-star-item">
                              <div className="ratting d-flex align-items-center gap-2">
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <div className="progress_bar">
                                <div className="progress_bar_item">
                                  <div className="item_bar">
                                    <div className="progress" data-progress="40" style={{ width: "40%" }}></div>
                                  </div>
                                </div>
                              </div>
                              <span className="p800-clr">
                                01
                              </span>
                            </div>
                            <div className="review-star-item">
                              <div className="ratting d-flex align-items-center gap-2">
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <div className="progress_bar">
                                <div className="progress_bar_item">
                                  <div className="item_bar">
                                    <div className="progress" data-progress="30" style={{ width: "30%" }}></div>
                                  </div>
                                </div>
                              </div>
                              <span className="p800-clr">
                                01
                              </span>
                            </div>
                            <div className="review-star-item">
                              <div className="ratting d-flex align-items-center gap-2">
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <div className="progress_bar">
                                <div className="progress_bar_item">
                                  <div className="item_bar">
                                    <div className="progress" data-progress="20" style={{ width: "20%" }}></div>
                                  </div>
                                </div>
                              </div>
                              <span className="p800-clr">
                                01
                              </span>
                            </div>
                            <div className="review-star-item">
                              <div className="ratting d-flex align-items-center gap-2">
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                              <div className="progress_bar">
                                <div className="progress_bar_item">
                                  <div className="item_bar">
                                    <div className="progress" data-progress="10" style={{ width: "10%" }}></div>
                                  </div>
                                </div>
                              </div>
                              <span className="p800-clr">
                                01
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="left-review">
                          <h3 className="p900-clr fw-normal mb-2">
                            Add Your Comment
                          </h3>
                          <form action="#">
                            <div className="d-flex align-items-center gap-3">
                              <span className="cmn-name p900-clr fw-medium">
                                Ratting
                              </span>
                              <div className="ratting mt-3 d-flex align-items-center gap-2">
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star p2-clr"></i>
                                <i className="fa-solid fa-star"></i>
                              </div>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                              <span className="cmn-name p900-clr fw-medium">
                                Name
                              </span>
                              <input type="text" placeholder="Your Name" />
                            </div>
                            <div className="d-flex align-items-center gap-3">
                              <span className="cmn-name p900-clr fw-medium">
                                Address
                              </span>
                              <input type="text" placeholder="Your Address" />
                            </div>
                            <div className="d-flex align-items-center gap-3">
                              <span className="cmn-name p900-clr fw-medium">
                                Review
                              </span>
                              <textarea name="comment" placeholder="Message"></textarea>
                            </div>
                            <div className="d-flex align-items-center gap-3">
                              <span className="cmn-name p900-clr fw-medium">

                              </span>
                              <button type="button" className="cmn-btn round100">
                                Add Review
                              </button>
                            </div>
                          </form>
                        </div>
                        <form action="#" className=""></form>
                      </div>
                      <div className="ratting d-flex align-items-center gap-2 mb-20">
                        <i className="fa-solid fa-star p2-clr"></i>
                        <i className="fa-solid fa-star p2-clr"></i>
                        <i className="fa-solid fa-star p2-clr"></i>
                        <i className="fa-solid fa-star p2-clr"></i>
                        <i className="fa-solid fa-star p2-clr"></i>
                      </div>
                      <p className="p800-clr">
                        Ecommerce is the buying and selling of goods and services over the internet. It revolutionizes the way businesses operate, providing convenience and access to a global market. Ecommerce platforms
                      </p>
                    </div>
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
