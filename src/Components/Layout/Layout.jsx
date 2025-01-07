import React from 'react'
import NavbarCustom from '../NavbarCustom/NavbarCustom'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Copyright from '../Copyright/Copyright'

export default function Layout() {
    return (
        <>
            <NavbarCustom />
            <Outlet />
            <Footer />
            <Copyright />
        </>
    )
}
