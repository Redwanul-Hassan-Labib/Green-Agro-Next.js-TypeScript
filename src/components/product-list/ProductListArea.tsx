
"use client"
import portfolio_data from '@/data/portfolio_data';
import InputRange from '@/ui/InputRange';
import Image from 'next/image';
import Link from 'next/link'
import React, { useState } from 'react'


// data
const categories = ["All", ...new Set(portfolio_data.map((item) => item.category))];


export default function ProductListArea() {

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

  // handle price 

  const all_data = portfolio_data
  const maxPrice = all_data.reduce((max, item) => {
    return item.price > max ? item.price : max;
  }, 0);
  const [priceValue, setPriceValue] = useState([0, maxPrice]);
 

  const handleChanges = (val: number[]) => {
    setPriceValue(val)
  }

  return (
    <>
      <section className="product-list-section overflow-hidden section-padding white-bg">
        <div className="container">
          <div className="row g-xl-4 g-3 justify-content-center">
            <div className="col-lg-3">
              <div className="product-list-leftbar">
                <h5 className="title">
                  Filter By price
                </h5>
                <div className="pricing-range-area">
                  <div className="wrapper">
                    <div className="price-input" onChange={() => handleChanges}>
                      <div className="field">
                        <input type="number" className="input-min" value={priceValue[0]} />
                      </div>
                      <div className="separator">-</div>
                      <div className="field">
                        <input type="number" className="input-max" value={priceValue[1]} />
                      </div> 
                    </div> 

                    <InputRange
                      MAX={maxPrice}
                      MIN={0}
                      STEP={1}
                      values={priceValue}
                      handleChanges={handleChanges}
                    />

                  </div>
                </div>
                <div className="d-flex align-items-center justify-content-between mb-24 mt-3">
                  <span className="total-price">
                    Price $30 - $1500
                  </span>
                  <button className="filter-btns" type="button">
                    FIlter
                  </button>
                </div>
                <div className="product-cate">
                  <h5 className="product-title">
                    Product
                  </h5>
                  <ul className="product-list">
                    <li>
                      <Link href="/product-details"><span className="name">Wheat</span>01</Link>
                    </li>
                    <li>
                      <Link href="/product-details"><span className="name">Rice</span>02</Link>
                    </li>
                    <li>
                      <Link href="/product-details"><span className="name">Meat</span>03</Link>
                    </li>
                    <li>
                      <Link href="/product-details"><span className="name">Corn</span>04</Link>
                    </li>
                    <li>
                      <Link href="/product-details"><span className="name">Oats</span>05</Link>
                    </li>
                    <li>
                      <Link href="/product-details"><span className="name">Cotton</span>06</Link>
                    </li>
                    <li>
                      <Link href="/product-details"><span className="name">Sunflower</span>07</Link>
                    </li>
                  </ul>
                </div>
                <span className="show-filter">
                  Showing 1-16 Of 47 Result
                </span>
                <div className="colo-filter">
                  <h5 className="product-title">
                    Filter By Color
                  </h5>
                  <ul className="color-style">
                    <li>
                      <span className="color-item">
                        <span className="clr-step v1"></span>
                        Yellow
                      </span>
                      <span className="step">
                        1
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v2"></span>
                        Black
                      </span>
                      <span className="step">
                        2
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v3"></span>
                        White
                      </span>
                      <span className="step">
                        3
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v4"></span>
                        Green
                      </span>
                      <span className="step">
                        4
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v5"></span>
                        Blue
                      </span>
                      <span className="step">
                        5
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v6"></span>
                        Red
                      </span>
                      <span className="step">
                        6
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        <span className="clr-step v6"></span>
                        Gray
                      </span>
                      <span className="step">
                        7
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="product-status">
                  <h5 className="product-title">
                    Product Status
                  </h5>
                  <ul className="color-style">
                    <li>
                      <span className="color-item">
                        In Stock
                        <span className="clr-step v1"></span>
                      </span>
                    </li>
                    <li>
                      <span className="color-item">
                        On Sale
                        <span className="clr-step v2"></span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="filter-mixtup">
                <div className="mixtup-filtering d-flex justify-content-center mb-60">
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
                <div className="all-catagorys">

                  {items.map((item, i) => (
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
          </div>
        </div>
      </section>
    </>
  )
}
