import React from 'react'

export default function header() {

    const tgWebApp = window.Telegram.WebApp;
  const onCLose = () => {
    tgWebApp.close()
  }
  return (
    <div className='header'>
      <button onClick={onCLose}>Close</button>
      <span className='username'>{tgWebApp.initDataUnsafe?.user?.username}</span>
    </div>
  )
}
