
import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import BlogArea from './BlogArea'

export default function Blog() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Blog" subtitle="Blog" />
      <BlogArea />
      <SubscribeHomeThree />
      <FooterTwo />

    </>
  )
}
