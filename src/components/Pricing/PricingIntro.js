import React from 'react'
import IntroCard from '../Home/Intro/IntroCard'

import PricingHeroMobile from '../../assets/pricing/mobile/hero.jpg'
import PricingHeroTablet from '../../assets/pricing/tablet/hero.jpg'
import PricingHeroDesktop from '../../assets/pricing/desktop/hero.jpg'

function PricingIntro() {
  return (
    <div className='pricing__intro_card'>
        <IntroCard 
            title = 'PRICING'
            description = 'Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.'
            button_text = { null }
            mobile_image = { PricingHeroMobile }
            tablet_image = { PricingHeroTablet }
            desktop_image = { PricingHeroDesktop }
            line = { true }
            isReversed = { true }
            isArrowFilter = { null }
            cardBackground = '#000'
            textColor = '#fff'
            buttonClassname = { null }
            className = 'features_intro'
        />
    </div>
  )
}

export default PricingIntro