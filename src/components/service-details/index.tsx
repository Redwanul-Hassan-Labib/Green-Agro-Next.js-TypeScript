

import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ServiceDetailsArea from './ServiceDetailsArea'

export default function ServiceDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Service Details" subtitle="Service Details" />
      <ServiceDetailsArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
