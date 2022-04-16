import React from 'react'
import PlanFeatures from '../../components/Pricing/PlanFeatures'
import PricePlans from '../../components/Pricing/PricePlans'
import PricingIntro from '../../components/Pricing/PricingIntro'
import FooterHero from '../../components/Footer/FooterHero'
function Pricing() {
  return (
    <div className='pricing'>
        <PricingIntro />
        <PricePlans />
        <PlanFeatures />
        <FooterHero />
    </div>
  )
}

export default Pricing