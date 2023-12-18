import React from 'react'
import { CheckNavBar } from '../Components/CheckNavBar/CheckNavBar'
import { Outlet} from 'react-router-dom'
import { CheckFooter } from '../Components/CheckFooter/CheckFooter'
export const RootLayout = () => {
  return (
    <div>
        <CheckNavBar/>
        <Outlet/>
        <CheckFooter/>
    </div>
  )
}
