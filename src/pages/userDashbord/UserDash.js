import React from 'react'
import Header from '../../Components/UserDash/Header'
import FilterSection from '../../Components/UserDash/FilterSection'
import UserDashboard from '../../Components/UserDash/UserDashboard'


const UserDash = () => {
  return (
    <>
        <Header />
        <FilterSection />
        <UserDashboard />
    </>
  )
}

export default UserDash