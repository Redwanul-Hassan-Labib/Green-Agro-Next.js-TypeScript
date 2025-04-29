
"use client"
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react'
import ImagePopup from '@/modals/ImagePopup';

import masonry_1 from "@/assets/img/gallery/gl1.jpg";
import masonry_2 from "@/assets/img/gallery/gl2.jpg";
import masonry_3 from "@/assets/img/gallery/gl3.jpg";
import masonry_4 from "@/assets/img/gallery/gl4.jpg";
import masonry_5 from "@/assets/img/gallery/gl5.jpg";

const masonry_data = [
  {
    img: masonry_1,
    cls: 7,
  },
  {
    img: masonry_2,
    cls: 5,
  },
]
const masonry_data2 = [
  { img: masonry_3 },
  { img: masonry_4 },
]
const masonry_data3 = [
  { img: masonry_5 },
]



export default function GalleryHomeOne() {

  // photoIndex
  const [photoIndex, setPhotoIndex] = useState(0);
  const [photoIndex2, setPhotoIndex2] = useState(0);
  const [photoIndex3, setPhotoIndex3] = useState(0);
  // image open state
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  // handleImagePopup
  const handleImagePopup = (i: number) => {
    setPhotoIndex(i);
    setIsOpen(true);
  };
  const handleImagePopup2 = (i: number) => {
    setPhotoIndex2(i);
    setIsOpen2(true);
  };
  const handleImagePopup3 = (i: number) => {
    setPhotoIndex3(i);
    setIsOpen3(true);
  };
  //  images
  const image = masonry_data.map((item) => item.img.src);
  const image2 = masonry_data2.map((item) => item.img.src);
  const image3 = masonry_data3.map((item) => item.img.src);




  return (
    <>

      <section className="gallery-section p100-bg section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xxl-6 col-xl-7 col-md-8 col-sm-11">
              <div className="section-title mb-60 text-center">
                <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                  OUR GALLARY
                </h5>
                <h2 className="wow fadeInDown" data-wow-delay=".3s">
                  Bringing natures bounty to your plate
                </h2>
              </div>
            </div>
          </div>

          <div className="row g-lg-4 g-3 justify-content-center">
            {masonry_data.map((item, i) => (
              <div key={i} className={`col-md-${item.cls} col-sm-${item.cls}`}>
                <a
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup(i)}
                  className="gallery-com-thumb first-item img-popup w-100 round20">
                  <Image src={item.img} alt="img" className="round20" />
                </a>
              </div>

            ))}

            <div className="d-flex flex-sm-nowrap flex-wrap justify-content-between gap-lg-4 gap-3">
              {masonry_data2.map((item, i) => (
                <a key={i}
                  style={{ cursor: "pointer" }}
                  onClick={() => handleImagePopup2(i)}
                  className="gallery-com-thumb secound img-popup w-100 round20">
                  <Image src={item.img} alt="img" className="round20" />
                </a>

              ))}

              {masonry_data3.map((item, i) => (
                <div key={i} className="d-grid gap-lg-4 gap-3">
                  <a
                    style={{ cursor: "pointer" }}
                    onClick={() => handleImagePopup3(i)}
                    className="gallery-com-thumb thard img-popup w-100 round20">
                    <Image src={item.img} alt="img" className="round20" />
                  </a>
                  <Link href="/gallery" className="cmn-btn d-center">
                    View all Project
                  </Link>
                </div>

              ))}
            </div>

          </div>
        </div>
      </section>

      {/* image light box start */}
      {isOpen && (
        <ImagePopup
          images={image}
          setIsOpen={setIsOpen}
          photoIndex={photoIndex}
          setPhotoIndex={setPhotoIndex}
        />
      )}
      {/* image light box end */}

      {/* image light box start */}
      {isOpen2 && (
        <ImagePopup
          images={image2}
          setIsOpen={setIsOpen2}
          photoIndex={photoIndex2}
          setPhotoIndex={setPhotoIndex2}
        />
      )}
      {/* image light box end */}
      {/* image light box start */}
      {isOpen3 && (
        <ImagePopup
          images={image3}
          setIsOpen={setIsOpen3}
          photoIndex={photoIndex3}
          setPhotoIndex={setPhotoIndex3}
        />
      )}
      {/* image light box end */}


    </>
  )
}
