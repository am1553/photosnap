import React from 'react'
import IntroCard from '../../components/Home/Intro/IntroCard'
import FeaturesCard from '../../components/Features/FeaturesCard'
import IntroImageMobile from '../../assets/features/mobile/hero.jpg'
import IntroImageTablet from '../../assets/features/tablet/hero.jpg'
import IntroImageDesktop from '../../assets/features/desktop/hero.jpg'

import ResponsiveImage from '../../assets/features/desktop/responsive.svg'
import LimitImage from '../../assets/features/desktop/no-limit.svg'
import EmbedImage from '../../assets/features/desktop/embed.svg'
import DomainImage from '../../assets/features/desktop/custom-domain.svg'
import ExposureImage from '../../assets/features/desktop/boost-exposure.svg'
import DragDropImage from '../../assets/features/desktop/drag-drop.svg'
import FooterHero from '../../components/Footer/FooterHero'



// image, title, description
function Features() {

    const Data = [
        {
            "id": 1,
            "image": ResponsiveImage,
            "title": '100% Responsive',
            "description": 'No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.'
        },
        {
            "id": 2,
            "image": LimitImage,
            "title": 'No Photo Upload Limit',
            "description": 'Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.'
        },
        {
            "id": 3,
            "image": EmbedImage,
            "title": 'Available to Embed',
            "description": 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more. '
        },
        {
            "id": 4,
            "image": DomainImage,
            "title": 'Custom Domain',
            "description": 'With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!'
        },
        {
            "id": 5,
            "image": ExposureImage,
            "title": 'Boost Your Exposure',
            "description": 'Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.'
        },
        {
            "id": 6,
            "image": DragDropImage,
            "title": 'Drag & Drop Image',
            "description": 'Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories..'
        }
    ]

  return (
    <div className='features'>

        <IntroCard 
            title = 'FEATURES'
            description = 'We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.'
            button_text = { null }
            mobile_image = { IntroImageMobile }
            tablet_image = { IntroImageTablet }
            desktop_image = { IntroImageDesktop }
            line = { true }
            isReversed = { true }
            isArrowFilter = { null }
            cardBackground = '#000'
            textColor = '#fff'
            buttonClassname = { null }
            className = 'features_intro'
        />

        <div className="features_container">
        {
            Data.map((data, key) => {
                return(
                    <FeaturesCard 
                    key = { data.id }
                    image = { data.image }
                    title = { data.title }
                    description = { data.description }
                    />
                )
            })
        }
        </div>
        
        <FooterHero />
    </div>
  )
}

export default Features