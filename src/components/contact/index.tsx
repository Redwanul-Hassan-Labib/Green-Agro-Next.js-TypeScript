import HeaderThree from '@/layouts/headers/HeaderThree'
import React from 'react'
import Breadcrumnd from '../common/Breadcrumnd'
import SubscribeHomeThree from '../homes/home-3/SubscribeHomeThree'
import FooterTwo from '@/layouts/footers/FooterTwo'
import ContactHomeTwo from '../homes/home-2/ContactHomeTwo'
import GoogleMap from './GoogleMap'
import ContactInfo from './ContactInfo'

export default function Contact() {
  return (
    <>
      <HeaderThree />
      <Breadcrumnd title="Contact" subtitle="Contact" />
      <ContactHomeTwo />
      <GoogleMap />
      <ContactInfo />
      <SubscribeHomeThree />
      <FooterTwo />
    </>
  )
}
