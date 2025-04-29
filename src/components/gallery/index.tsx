

import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import GalleryArea from './GalleryArea'

export default function Gallery() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Gallery" subtitle="Gallery" />
      <GalleryArea />
      <SubscribeHomeThree />
      <FooterTwo />

    </>
  )
}
