"use client"
import React from 'react'
import ScrollToTop from '@/components/common/scroll-to-top'

export default function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <ScrollToTop />
    </>
  )
}
