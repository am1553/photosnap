import React from 'react'
import BGBetaImage from '../../assets/shared/desktop/bg-beta.jpg'
import ArrowImage from '../ArrowImage/ArrowImage'
function FooterHero() {
  return (
    <div className='footer_hero'>
        <div className="image_container">
            <img src={ BGBetaImage } alt="" />
        </div>
        <div className="line"></div>
        <div className="text_wrapper">
            <h1>
                We’re in beta.
                Get your invite today!
            </h1>
            <button>
                <h4>get an invite</h4>
                <ArrowImage isFilter={true}/>    
            </button>
        </div>
    </div>
  )
}

export default FooterHero