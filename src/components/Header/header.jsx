import React from 'react'
import { useTelegram } from '../hooks/useTelegram'


const Header = () => {
const { user, onCLose} = useTelegram()
  return (
    <div className='header'>
      <button onClick={onCLose}>Close</button>
      <span className='username'>{user?.username}</span>
    </div>
  )
}

export default Header;
