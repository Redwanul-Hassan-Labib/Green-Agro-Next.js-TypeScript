

import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ProductDetailsArea from './ProductDetailsArea'

export default function ProductDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Product Details" subtitle="Product Details" />
      <ProductDetailsArea />       
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
