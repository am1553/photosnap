 import React from 'react'
 
 function PricePlanCard(
     {
        title,
        description,
        price,
        subscriptionPlan,
        backgroundColor,
        textColor,
        buttonColor,
        buttonTextColor,
        line
     }
 ) {
   return (
     <div className='price_plan__card' style={ {backgroundColor: backgroundColor} }>

         <div className="line" style={ line === false ? { display: 'none' } : null }>
         </div>

        <div className="card_wrapper">
            <div className="plan_info">
                <h2 style={{ color: textColor }}>{ title }</h2>

                <p style={{ color: textColor }}>{ description }</p>
            </div>

            <div className="price_wrapper">
                <h1 style={{ color: textColor }}>{ price }</h1>

                <p style={{ color: textColor }}>{ subscriptionPlan }</p>
            </div>

            <button style={ {backgroundColor: buttonColor} } >

                <h4 style={{ color: buttonTextColor }}>
                    pick plan
                </h4>

            </button>
        </div>

     </div>
   )
 }
 
 export default PricePlanCard