import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Pages/Shared/Footer/Footer'
import NavigationBar from '../Pages/Shared/Navbar/NavigationBar'

const Main = () => {
  return (
    <div>
        <NavigationBar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Main