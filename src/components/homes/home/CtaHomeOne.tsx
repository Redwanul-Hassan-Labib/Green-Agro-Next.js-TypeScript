
"use client"
import NiceSelect from '@/ui/NiceSelect'
import Link from 'next/link';
import React from 'react'

export default function CtaHomeOne() {

  // const selectHandler = (e: any) => { };
  const selectHandler = (e: unknown) => { };



  return (
    <>
      <section className="who-section overflow-hidden p900-bg section-padding">
        <div className="container">
          <div className="row g-4 justify-content-between align-items-end">
            <div className="col-lg-6">
              <div className="section-title mb-40">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">Who we are</h5>
                <h2 className="wow fadeInDown white-clr mb-24" data-wow-delay=".3s">Nourishing world from seed to table</h2>
                <p className="white-clr wow fadeInDown" data-wow-delay=".4s">Agriculture and farming are essential industries that involve the cultivation of crops,raising of livestock, and production of food.</p>
              </div>
              <div className="row g-xl-6 g-4">
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".4s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img src="assets/img/icon/hand-planp900.svg" alt="icon" />
                    </div>
                    <Link href="/about" className="title">Growing stron <br /> a feeding</Link>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeInDown" data-wow-delay=".6s">
                  <div className="who-box">
                    <div className="icon d-center">
                      <img src="assets/img/icon/wheath-p900.svg" alt="icon" />
                    </div>
                    <Link href="/about" className="title">Taking care of <br /> the Earth</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="who-contact-wrap">
                <h3 className="white-clr">Leave message</h3>
                <form onSubmit={(e) => e.preventDefault()} className="row g-xl-4 g-3">
                  <div className="col-lg-6">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-6">
                    <input type="email" placeholder="E-mail" />
                  </div>
                  <div className="col-lg-6">
                    <input type="number" placeholder="Your Number" />
                  </div>
                  <div className="col-lg-6">

                    <NiceSelect
                      options={[
                        { value: "00", text: "Your Area" },
                        { value: "01", text: "Us" },
                        { value: "02", text: "Uk" },
                        { value: "04", text: "Turky" },
                      ]}
                      defaultCurrent={0}
                      onChange={selectHandler}
                      placeholder="Select an option"
                      name="myNiceSelect"
                    />


                  </div>
                  <div className="col-lg-12">
                    <textarea name="message" rows={4} placeholder="Message"></textarea>
                  </div>
                  <div className="col-lg-12">
                    <button type="submit" className="cmn-btn cmn-primary2 text-capitalize">Submit Now</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <img src="assets/img/element/who-element.png" alt="img" className="who-element" />
      </section>
    </>
  )
}
