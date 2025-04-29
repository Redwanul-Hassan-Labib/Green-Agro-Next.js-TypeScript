"use client"
import React from 'react'
import Image from 'next/image';
import Count from '@/components/common/Count';
import counter_img_1 from "@/assets/img/icon/count1.svg";
import counter_img_2 from "@/assets/img/icon/count2.svg";
import counter_img_3 from "@/assets/img/icon/count3.svg";
import counter_img_4 from "@/assets/img/icon/count4.svg";

interface CountDataType {
  id: number;
  number: number;
  icon: string;
  text: string;
  title: string;
}

const coundet_data: CountDataType[] = [
  { id: 1, number: 200, icon: counter_img_1, text: "+", title: "Team member" },
  { id: 2, number: 300, icon: counter_img_2, text: "k+", title: "Winning award" },
  { id: 2, number: 100, icon: counter_img_3, text: "+", title: "Complete project" },
  { id: 2, number: 900, icon: counter_img_4, text: "+", title: "Client review" },
]


interface PropsType {
  style_2?: boolean
}

export default function CounterHomeOne({ style_2 }: PropsType) {
  return (
    <>
      <section className={` position-relative ${style_2 ? "counter-section02" : "counter-section"}`}>
        <div className="container">
          <div className="counter-version-wrapv1 d-flex align-items-center justify-content-between gap-4">
            {coundet_data.map((item, i) => (
              <div key={i} className={`counter-items ${style_2 ? "style02" : ""}`}>
                {style_2 ?
                  <>
                    <div className="cont-bottom">
                      <Image src={item.icon} alt="img" />
                    </div>
                    <div className="con-box">
                      <h2 className="d-flex align-items-center">
                        <span className="count"> <Count number={item.number} /> </span> {item.text}
                      </h2>
                      <p>{item.title}</p>
                    </div>
                  </>
                  :
                  <>
                    <h2 className="d-flex align-items-center">
                      <span className="count"> <Count number={item.number} /> </span> {item.text}
                    </h2>
                    <div className="cont-bottom">
                      <Image src={item.icon} alt="img" />
                      <p>{item.title}</p>
                    </div>
                  </>

                }

              </div>
            ))}
 

            {
              style_2 &&
              <>
                <img src="assets/img/element/count-flower-left.png" alt="img" className="cout-flower-left" />
                <img src="assets/img/element/count-flower-right.png" alt="img" className="cout-flower-right" />
              </>
            }
          </div>
        </div>
      </section>
    </>
  )
}
