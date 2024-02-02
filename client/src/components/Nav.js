import React from 'react'

function Nav() {
  return (
    <div className='nav'>
      <img src='https://hodlinfo.com/static/media/HODLINFO.8f78fc06.png'></img>
      <div className='btns-div'>
        <button className='btn'>INR</button>
        <button className='btn'>BTC</button>
        <button className='btn'>BUY BTC</button>
      </div>
      <div className='connect-tel'>
        <a href=''>Connect Telegram</a>
      </div>
    </div>
  )
}

export default Nav
