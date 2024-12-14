import React from 'react'
import Panier from './Panier'
import Cars from './Cars'
import './section.css'

const UserDashboard = () => {
  return (
    <div className='main'>
      <div>
        <Cars />
      </div>
      <div>
        <Panier />
      </div>
    </div>

  )
}

export default UserDashboard