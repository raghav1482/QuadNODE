import React from 'react'

function Headstrip(props) {
  return (
    <div className='head-strip'>
      <h3 style={{color:"grey" , fontSize:"30px" , fontWeight:"400"}}>Best Price to Trade</h3>
      <div className='dats-strip'>
        <div className='dat-head'>
            <h3>{props.one}%</h3>
            <p>5 mins</p>
        </div>
        <div className='dat-head'>
            <h3>{props.two}%</h3>
            <p>1 Hour</p>
        </div>
        <div className='dat-head main'>
            <h3>₹{parseFloat(props.best)+(5+Math.random().toFixed(2)*100000)}</h3>
            <p>Average BTC/INR net price including commission</p>
        </div>
        <div className='dat-head'>
            <h3>{props.three}%</h3>
            <p>1 Day</p>
        </div>
        <div className='dat-head'>
            <h3>{props.four}%</h3>
            <p>7 Days</p>
        </div>
      </div>
   </div>
  )
}

export default Headstrip
