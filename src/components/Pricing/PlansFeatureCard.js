import React from 'react'
import TickMark from '../../assets/pricing/desktop/check.svg'

function PlansFeatureCard({title, isBasic, isPro, isBusiness}) {
  return (
    <div className='plans_feature__card'>
        
        <div className="features_desktop">
            <h4>{ title }</h4>
            <div className="desktop_checklist">
                <img src={ TickMark } alt="" style={ isBasic === false ? {display: 'none'} : null } />
                <img src={ TickMark } alt="" style={ isPro === false ? {display: 'none'} : null }/>
                <img src={ TickMark } alt="" style={ isBusiness === false ? {display: 'none'} : null }/>
            </div>
        </div>

        <ul className="feature_checklist mobile_checklist">
            <li>
                <span>basic</span>
                <img src={ TickMark } alt="" style={ isBasic === false ? {display: 'none'} : null } />
            </li>
            <li>
                <span>pro</span>
                <img src={ TickMark } alt="" style={ isPro === false ? {display: 'none'} : null }/>
            </li>
            <li>
                <span>business</span>
                <img src={ TickMark } alt="" style={ isBusiness === false ? {display: 'none'} : null }/>
            </li>
        </ul>
        <hr />
    </div>
  )
}

export default PlansFeatureCard