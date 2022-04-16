import React from 'react'
import IntroCard from '../../components/Stories/Intro/IntroCard'
import StoriesContainer from '../../components/Stories/StoriesContainer/StoriesContainer'

function Stories() {
  return (
    <div className='stories'>

        <IntroCard />
        <StoriesContainer />

    </div>
  )
}

export default Stories