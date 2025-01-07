import React, { useState } from 'react'
import './NavbarCustom.css'
import { NavLink } from 'react-router-dom'
export default function NavbarCustom() {
    const [isOpen, setIsOpen] = useState(false)
    function btnNavbar(){
        setIsOpen(!isOpen)
    }
    function closeNav(){
        setIsOpen(false)
    }
    return (
        <>
        <nav className='py-4 position-fixed w-100 bg-main font-family z-2'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                <NavLink className='text-white text-decoration-none text-uppercase text-center nav-brand' to='/'>Start Framework</NavLink>
                <button onClick={btnNavbar} className='btn text-white d-inline-block d-lg-none p-Custom'><i className='fa-solid fa-list'></i></button>
                <ul className={`col-12 col-lg-auto d-flex flex-column flex-lg-row list-style-none ps-0 mb-0 ${isOpen ? 'open-nav' : ''}`}>
                    <li onClick={closeNav} className='mx-lg-2 my-2 my-lg-0'><NavLink className='text-white text-decoration-none text-uppercase p-2' to='/about'>about</NavLink></li>
                    <li onClick={closeNav} className='mx-lg-2 my-2 my-lg-0'><NavLink className='text-white text-decoration-none text-uppercase p-2' to='/portfolio'>portfolio</NavLink></li>
                    <li onClick={closeNav} className='mx-lg-2 my-2 my-lg-0'><NavLink className='text-white text-decoration-none text-uppercase p-2' to='/contact'>contact</NavLink></li>
                </ul>
                </div>
            </div>
        </nav>
        </>
    )
}