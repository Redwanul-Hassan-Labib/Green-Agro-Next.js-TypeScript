

import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import FooterTwo from '@/layouts/footers/FooterTwo'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FaqHomeThree from '../homes/home-3/FaqHomeThree'
import CounterHomeThree from '../homes/home-3/CounterHomeThree'

export default function Faq() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Faq" subtitle="Faq" />
      <FaqHomeThree />
      <CounterHomeThree style_2={true} />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
