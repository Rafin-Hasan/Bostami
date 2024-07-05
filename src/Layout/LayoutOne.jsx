import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar } from '../Component/Navbar'

export const LayoutOne = () => {
  return (
    <>
    <Navbar/>
    <Outlet />
    </>
  )
}
