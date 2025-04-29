
import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import AboutHomeOne from '../homes/home/AboutHomeOne'
import ServiceHomeOne from '../homes/home/ServiceHomeOne'
import TestimoniaHomeOne from '../homes/home/TestimoniaHomeOne'
import CtaHomeOne from '../homes/home/CtaHomeOne'
import PortfolioHomeOne from '../homes/home/PortfolioHomeOne'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import BrandHomeOne from '../homes/home/BrandHomeOne'

export default function About() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="About Us" subtitle="About Us" />
      <AboutHomeOne />
      <ServiceHomeOne style_2={true} />
      <TestimoniaHomeOne />
      <CtaHomeOne />
      <PortfolioHomeOne style_2={true} />
      <BrandHomeOne style_3={true} />
      <SubscribeHomeThree />
      <FooterTwo />

    </>
  )
}
