import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src="https://assets-netstorage.groww.in/stock-assets/logos/NSE.png" alt="" />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="https://assets-netstorage.groww.in/stock-assets/logos/NSE.png" alt="" />
      </div>
    </div>
  )
}

export default Message