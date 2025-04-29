
"use client"
import React from 'react'

import counter_img_1 from "@/assets/img/icon/count1.svg";
import counter_img_2 from "@/assets/img/icon/count2.svg";
import counter_img_3 from "@/assets/img/icon/count3.svg";
import counter_img_4 from "@/assets/img/icon/count4.svg";
import Count from '@/components/common/Count';

interface CountDataType {
  id: number;
  number: number;
  icon: string;
  text: string;
  title: string;
}

const coundet_data: CountDataType[] = [
  { id: 1, number: 200, icon: counter_img_1, text: "+", title: "Team member" },
  { id: 2, number: 20, icon: counter_img_2, text: "+", title: "Winning award" },
  { id: 2, number: 10, icon: counter_img_3, text: "k+", title: "Complete project" },
  { id: 2, number: 900, icon: counter_img_4, text: "+", title: "Client review" },
]

type Props = {
  style_2?: boolean
}

export default function CounterHomeThree({ style_2 }: Props) {
  return (
    <>
      <section className={`counter-sectionv03 position-relative ${style_2 ? "counter-main-section section-padding" : ""}`}>
        <div className="container">
          <div className="counter-version-wrapv1 d-flex align-items-center justify-content-between gap-4">

            {coundet_data.map((item, i) => (

              <React.Fragment key={i}>
                <div className="counter-items style02">
                  <div className="con-box">
                    <h2 className="d-flex align-items-center">
                      <span className="count"> <Count number={item.number} /> </span> {item.text}
                    </h2>
                    <p>{item.title}</p>

                  </div>
                </div>
                {i !== 3 &&
                  <div className="count-animal d-lg-block d-none">
                    <img src="assets/img/icon/count-animal.svg" alt="img" />
                  </div>
                }
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
