"use client"
import React from 'react'

export default function SubscribeHomeOne() {
  return (
    <>
      <div className="subscrbie-section">
        <div className="container">
          <div className="subscribe-wrapper-v01">
            <div className="container">
              <div className="row g-4 justify-content-lg-start justify-content-between align-items-end">
                <div className="col-lg-5 col-md-5">
                  <div className="subscribe-thumb">
                    <img src="assets/img/footer/subscribe.png" alt="img" className="w-100" />
                  </div>
                </div>
                <div className="col-lg-1 d-lg-block d-none"></div>
                <div className="col-lg-5 col-md-6">
                  <div className="subscribe-content">
                    <h2>
                      Subscribe to our newsletter
                    </h2>
                    <p>
                      It is a long established fact that a reader will be distracted
                    </p>
                    <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
                      <input type="text" placeholder="Enter Your Email" />
                      <button type="submit" className="d-center">
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M16.9688 2.15625L14.9688 15.125C14.9375 15.4375 14.75 15.7188 14.4688 15.875C14.3125 15.9375 14.1562 16 13.9688 16C13.8438 16 13.7188 15.9688 13.5938 15.9062L9.78125 14.3125L8.1875 16.6875C8.0625 16.9062 7.84375 17 7.625 17C7.28125 17 7 16.7188 7 16.375V13.375C7 13.125 7.0625 12.9062 7.1875 12.75L14 4L4.8125 12.2812L1.59375 10.9375C1.25 10.7812 1 10.4688 1 10.0625C0.96875 9.625 1.15625 9.3125 1.5 9.125L15.5 1.15625C15.8125 0.96875 16.25 0.96875 16.5625 1.1875C16.875 1.40625 17.0312 1.78125 16.9688 2.15625Z"
                            fill="#1F4E3D" />
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
