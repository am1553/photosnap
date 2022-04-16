import React from 'react'
import FeaturesCard from '../../Features/FeaturesCard'
import ResponsiveImage from '../../../assets/features/desktop/responsive.svg'
import LimitImage from '../../../assets/features/desktop/no-limit.svg'
import EmbedImage from '../../../assets/features/desktop/embed.svg'

function FeaturesContainer() {

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
            "description": 'Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.'
        },
    ]

  return (
    <div className='home__features_container' style={ {padding: '0 2rem', margin: '5rem 0'} }>
        {
            Data.map((data, key) => {
                return(
                    <FeaturesCard
                        key={ data.id }
                        image = { data.image }
                        title = { data.title }
                        description = { data.description }
                    />
                )
            })
        }
    </div>
  )
}

export default FeaturesContainer