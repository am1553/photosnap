import React from 'react'
import FeaturesContainer from '../../components/Home/HomeFeatures/FeaturesContainer'
import HomeStoriesContainer from '../../components/Home/HomeStories/HomeStoriesContainer'
import IntroContainer from '../../components/Home/IntroContainer/IntroContainer'

function Home() {
  return (
    <div className='home'>
        <IntroContainer />
        <HomeStoriesContainer />
        <FeaturesContainer />
    </div>
  )
}

export default Home