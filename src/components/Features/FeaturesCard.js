import React from 'react'

function FeaturesCard({ image, title, description }) {
  return (
    <div className='features_card'>
        <div className="image_wrapper">
          <img src={ image } alt="" />
        </div>
        <h3>{ title }</h3>
        <p>{ description }</p>
    </div>
  )
}

export default FeaturesCard