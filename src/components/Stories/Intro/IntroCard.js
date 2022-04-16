import React from 'react'
import AppalachiaImageMobile from '../../../assets/stories/mobile/moon-of-appalacia.jpg'
import AppalachiaImageDesktop from '../../../assets/stories/desktop/moon-of-appalacia.jpg'
import ArrowImage from '../../ArrowImage/ArrowImage'

function IntroCard() {
  return (
    <div className='stories__intro_card'>
        <img src={ AppalachiaImageMobile } alt="" className='hero_image mobile_image' />
        <div className="desktop_image_container">
            <img src={ AppalachiaImageDesktop } alt="" className='desktop_image' />
            <div className="overlay"></div>
        </div>
        <div className="text_container">
            <div className="text_wrapper">
                <h4>last month's featured story</h4>
                <h1>HAZY FULL MOON OF APPALACHIA</h1>
                <div className="story_info">
                    <span className='stories_date'>
                        March 2nd 2020
                    </span>
                    <span className='stories_artist'>
                        by John Appleseed
                    </span>
                </div>
                <p>
                    The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.
                </p>
                <button>
                    <h4>read the story</h4>
                    <ArrowImage isFilter={true}/>
                </button>
            </div>

        </div>
    </div>
  )
}

export default IntroCard