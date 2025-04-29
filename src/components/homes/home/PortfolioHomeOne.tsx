"use client"

import React, { useState } from 'react'
import portfolio_data from '@/data/portfolio_data';
import Image from 'next/image';
import Link from 'next/link';

// data
const categories = ["All", ...new Set(portfolio_data.map((item) => item.category))];

type Props = {
  style_2?: boolean
}

export default function PortfolioHomeOne({style_2}: Props) {

  const [activeCategory, setActiveCategory] = useState("All");
  const [items, setItems] = useState(portfolio_data);

  const filterItems = (cateItem: string) => {
    setActiveCategory(cateItem);
    if (cateItem === "All") {
      return setItems(portfolio_data);
    } else {
      const findItems = portfolio_data.filter((findItem) => {
        return findItem.category == cateItem;
      });
      setItems(findItems);
    }
  };



  return (
    <> 
      <section className={`service-feature-section white-bg ${style_2 ? "space-top" : "space-bottom"}`}>
        <div className="filter-mixtup">
          <div className="container">
            <div className="row g-4 justify-content-between align-items-end mb-60">
              <div className="col-xxl-5 col-xl-7">
                <div className="section-title">
                  <h5 className="p1-clr wow fadeInLeft" data-wow-delay="0.4s">
                    Our Future
                  </h5>
                  <h2 className="wow fadeInDown" data-wow-delay=".3s">
                    Nourishing the world from seed to table
                  </h2>
                </div>
              </div>
              <div className="col-xxl-5 col-xl-5">
                <div className="mixtup-filtering d-flex justify-content-end">
                  <div className="filter-btns">

                    {categories.map((cate, i) => (
                      <React.Fragment key={i}>
                        <button
                          onClick={() => filterItems(cate)}
                          className={`${cate === activeCategory ? "mixitup-control-active" : ""}`}
                        >
                          {cate}
                        </button>  {' '}
                      </React.Fragment>
                    ))} 

                  </div>
                </div>
              </div>
            </div>
            <div className="all-catagorys">

              {items.slice(0, 6).map((item, i) => (
                <div key={i} className="mix category-a" data-order="1">
                  <div className="feature-itemsv1">
                    <Image src={item.image} alt="img" className="f-thumb" />
                    <div className="content">
                      <Link href="/product-details" className="title">{item.title}</Link>
                      <p>{item.description}</p>
                      <h5>$ {item.price}</h5>
                      <Link href="/product-details" className="add-tocart">Add To Chart</Link>
                    </div>
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </section>
    </>
  )
}
