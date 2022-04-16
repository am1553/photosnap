import React from 'react'
import ArrowImage from '../../ArrowImage/ArrowImage'

function IntroCard(
    {
        title,
        description,
        button_text,
        mobile_image,
        tablet_image,
        desktop_image,
        line,
        isReversed,
        isArrowFilter,
        cardBackground,
        textColor,
        buttonClassname,
        className
    }
) {
  return (
    <div className={ 'home__intro_card' + ' ' + className }>

        <img src={ mobile_image } alt="" className='mobile_image' />
        <img src={ tablet_image } alt="" className='tablet_image' />
        <img src={ desktop_image } alt="" className='desktop_image' />

        <div className="text_container" style={ {backgroundColor: cardBackground} }>
            <div className="line"
                style={ line === false ? {display:'none'} : null }
            ></div>
            <div className="text_wrapper">
                <h1 style={ {color: textColor} }>{ title }</h1>
                <p style={ {color: textColor, opacity: '0.5'} }>{ description }</p>
                <button className={ buttonClassname } style={ button_text === null ? { display: 'none' } : null }>
                    <h4 style={ {color: textColor} }>{ button_text }</h4>
                    <ArrowImage isFilter={ isArrowFilter }/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default IntroCard