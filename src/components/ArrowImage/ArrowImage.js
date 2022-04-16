import React from 'react'
import ArrowImg from '../../assets/shared/desktop/arrow.svg'

function ArrowImage({ isFilter }) {
    const arrowFilter = 'invert(98%) sepia(2%) saturate(1%) hue-rotate(284deg) brightness(115%) contrast(100%)'
  return (
    <div>
        <img src={ ArrowImg } alt="" style={
            isFilter === true ? {filter: arrowFilter} : console.log(false)
        }/>
    </div>
  )
}

export default ArrowImage