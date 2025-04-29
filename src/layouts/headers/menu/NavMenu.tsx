

import menu_data from '@/data/menu_data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavMenu() {
  return (
    <>
      <ul>
        {menu_data.map((item, i) => (
          <li key={i} className={`${item.has_dropdown ? "has-dropdown active menu-thumb" : ""}`}>
            <Link href={item.link}>
              {item.title}
              {item.has_dropdown || item.img_dropdown ? <i className="fas fa-angle-down"></i> : null}
            </Link>


            {item.img_dropdown &&
              <ul className="submenu has-homemenu">
                <li>
                  <div className="homemenu-items">
                    {item.sub_menus?.map((sub_item, index) => (
                      <div key={index} className="homemenu">
                        <div className="homemenu-thumb">
                          <Image src={sub_item.demo_img || ""} style={{height: "auto"}} alt="img" />
                          <div className="demo-button">
                            <Link href={sub_item.link} className="theme-btn p5-bg">
                              <span>{sub_item.title}</span>
                            </Link>
                          </div>
                        </div>
                        <div className="homemenu-content text-center">
                          <h4 className="homemenu-title">
                            Home Version 0{index + 1}
                          </h4>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            }
            {item.has_dropdown &&
              <ul className="submenu">
                {item.sub_menus?.map((sub_item, index) => (
                  <li key={index}><Link href={sub_item.link}>{sub_item.title}</Link></li>
                ))}
              </ul>
            }
          </li>
        ))}
      </ul>
    </>
  )
}
