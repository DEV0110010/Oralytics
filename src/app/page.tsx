import CTA from '@/components/landing/CTA'
import Footer from '@/components/landing/Footer'
import Header from '@/components/landing/Header'
import Hero from '@/components/landing/Hero'
import HowItWorks from '@/components/landing/HowItWorks'
import PricingSection from '@/components/landing/PricingSection'
import WhatToAsk from '@/components/landing/WhatToAsk'
import { SignedIn, SignedOut, SignOutButton, SignUpButton } from '@clerk/nextjs'

const page = () => {
  return (
    <div className='min-hscreen bg-background'>
      <Header/>
      <Hero/>
      <HowItWorks/>
      <WhatToAsk/>
      <PricingSection/>
      <CTA/>
      <Footer/>

    </div>
  )
}

export default page