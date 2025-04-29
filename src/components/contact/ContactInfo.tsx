

import React from 'react'

export default function ContactInfo() {
  return (
    <>
      <section className="contact-infosectionv1 space-top overflow-hidden space-bottom">
        <div className="container">
          <div className="row g-lg-4 g-3 justify-content-center">
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Address
                  </h5>
                  <a href="#" className="pra">
                    Dhaka 102, 8000 sent behaibior utl <br /> 1216, road 45 house of street
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Lets Talk us
                  </h5>
                  <a href="#" className="pra">
                    Phone number: +32566 - 800 - 890 <br />
                    Fax: 1234 -58963 - 007
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
              <div className="contact-call-info">
                <div className="icon d-center">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div className="co-box">
                  <h5 className="black">
                    Send us email
                  </h5>
                  <a href="#" className="pra">
                    demo0023yourmailhotmail.com <br />
                    demo23yourmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
