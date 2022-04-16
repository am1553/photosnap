import React from 'react'
import ArrowImage from '../../ArrowImage/ArrowImage'

function StoriesCard( { mobile_image, desktop_image, title, artist, date } ) {
  return (
    <div className='stories_card'>
        <img src={ mobile_image } alt="" className="mobile_image" />
        <img src={ desktop_image } alt="" className="desktop_image" />
        <div className="overlay"></div>
        <div className="text_wrapper">
            <span className='date'>April 16th 2020</span>
            <h3>{ title }</h3>
            <span className='artist_tag'>by { artist }</span>
            <hr />
            <div className="button_wrapper">
                <button><h4>read story</h4></button>
                <button>
                    <ArrowImage isFilter={true}/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default StoriesCard