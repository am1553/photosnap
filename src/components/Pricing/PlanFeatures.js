import React from 'react'
import PlansFeatureCard from './PlansFeatureCard'

function PlanFeatures() {

    const Data = [
        {
            "id": 1,
            "title": 'UNLIMITED STORY POSTING',
            "isBasic": true,
            "isPro": true,
            "isBusiness": true
        },
        {
            "id": 2,
            "title": 'UNLIMITED PHOTO UPLOAD',
            "isBasic": true,
            "isPro": true,
            "isBusiness": true
        },
        {
            "id": 3,
            "title": 'EMBEDDING CUSTOM CONTENT',
            "isBasic": false,
            "isPro": true,
            "isBusiness": true
        },
        {
            "id": 4,
            "title": 'CUSTOMIZE METADATA',
            "isBasic": false,
            "isPro": true,
            "isBusiness": true
        },
        {
            "id": 5,
            "title": 'ADVANCED METRICS',
            "isBasic": false,
            "isPro": false,
            "isBusiness": true
        },
        {
            "id": 6,
            "title": 'PHOTO DOWNLOADS',
            "isBasic": false,
            "isPro": false,
            "isBusiness": true
        },
        {
            "id": 7,
            "title": 'SEARCH ENGINE INDEXING',
            "isBasic": false,
            "isPro": false,
            "isBusiness": true
        },
        {
            "id": 8,
            "title": 'CUSTOM ANALYTICS',
            "isBasic": false,
            "isPro": false,
            "isBusiness": true
        }
    ]

  return (
    <div className='plans_feature'>
        <h1>compare</h1>
        <div className="features_header">
            <h4 className='feature_title'>THE FEATURES</h4>
            <ul className='features_header__title'>
                <h4>basic</h4>
                <h4>pro</h4>
                <h4>business</h4>
            </ul>
        </div>
        <hr className='main_hr' />
        

       <div className="plans_feature__all_container">
           {
               Data.map((data, key) => {
                   return(
                        <PlansFeatureCard 
                            key = { data.id }
                            title = { data.title }
                            isBasic = { data.isBasic }
                            isPro = { data.isPro }
                            isBusiness = { data.isBusiness }
                        />
                   )
               })
           }
       </div>
    </div>
  )
}

export default PlanFeatures