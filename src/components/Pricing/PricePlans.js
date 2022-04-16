import React from 'react'
import PricePlanCard from './PricePlanCard'
import { useState } from 'react'

function PricePlans() {

    const [monthlyYearly, setMonthlyYearly] = useState(false)
    // if true then its month and if false its year

    const Data = [
        {
            "id": 1, 
            "title": 'Basic',
            "description": 'Includes basic usage of our platform. Recommended for new and aspiring photographers.',
            "price": monthlyYearly === true ? '$19.00' : '$190.00',
            "subscriptionPlan": monthlyYearly === true ? 'per month' : 'per year',
            "backgroundColor": '#F5F5F5',
            "textColor": '#000',
            "buttonColor": '#000',
            "buttonTextColor": '#fff',
            "line": false
        },
        {
            "id": 2, 
            "title": 'Pro',
            "description": 'More advanced features available. Recommended for photography veterans and professionals.',
            "price": monthlyYearly === true ? '$39.00' : '$390.00',
            "subscriptionPlan": monthlyYearly === true ? 'per month' : 'per year',
            "backgroundColor": '#000',
            "textColor": '#fff',
            "buttonColor": '#fff',
            "buttonTextColor": '#000',
            "line": true
        },
        {
            "id": 3, 
            "title": 'Business',
            "description": 'Additional features available such as more detailed metrics. Recommended for business owners.',
            "price": monthlyYearly === true ? '$99.00' : '$990.00',
            "subscriptionPlan": monthlyYearly === true ? 'per month' : 'per year',
            "backgroundColor": '#F5F5F5',
            "textColor": '#000',
            "buttonColor": '#000',
            "buttonTextColor": '#fff',
            "line": false
        }
    ]
    
    
    
    
    return (

    <div className='price__plan_container'>
        <div className="plan_switch">
            <h3>Monthly</h3>
            <button onClick={ () => setMonthlyYearly(!monthlyYearly) } style={ monthlyYearly === true ? {backgroundColor: '#DFDFDF'} : {backgroundColor: '#000'} }>
                <div className="circle" style={ monthlyYearly === true ? { left: '5px', backgroundColor: '#000' } : { right: '5px', backgroundColor: '#fff' } }></div>
            </button>
            <h3>Yearly</h3>
        </div>

        <div className="plans_container">
        {
            Data.map((data, key) => {
                return(
                    <PricePlanCard 
                        key = { data.id }
                        title = { data.title } 
                        description = { data.description } 
                        price = { data.price } 
                        subscriptionPlan = { data.subscriptionPlan } 
                        backgroundColor = { data.backgroundColor } 
                        textColor = { data.textColor } 
                        buttonColor = { data.buttonColor } 
                        buttonTextColor = { data.buttonTextColor } 
                        line = { data.line } 
                    />
                )
            })
        }
        </div>

    </div>
  )
}

export default PricePlans