
import React from 'react'
import HeaderThree from '@/layouts/headers/HeaderThree'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import BlogDetailsArea from './BlogDetailsArea'

export default function BlogDetails() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Blog Details" subtitle="Blog Details" />
      <BlogDetailsArea />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
