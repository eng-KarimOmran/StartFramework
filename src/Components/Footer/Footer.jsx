import React from 'react'
import './Footer.css'
export default function Footer() {
    return (
        <footer className='py-3 bg-main font-family'>
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center flex-wrap'>
                    <div className='d-flex flex-column align-items-center justify-content-center col-12 col-md-6 col-lg-4 p-3'>
                        <h3 className='text-white'>LOCATION</h3>
                        <p className='text-white'>2215 John Daniel Drive</p>
                        <p className='text-white'>Clark, MO 65243</p>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center col-12 col-md-6 col-lg-4 p-3'>
                        <h3 className='text-white'>AROUND THE WEB</h3>
                        <ul className='d-flex justify-content-center list-style-none w-100 ps-0 mb-0'>
                            <li className='d-flex justify-content-center align-items-center text-white mx-1'><a className='text-white' href="#"><i className="fa-brands fa-facebook"></i></a></li>
                            <li className='d-flex justify-content-center align-items-center text-white mx-1'><a className='text-white' href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li className='d-flex justify-content-center align-items-center text-white mx-1'><a className='text-white' href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                            <li className='d-flex justify-content-center align-items-center text-white mx-1'><a className='text-white' href="#"><i className="fa-solid fa-globe"></i></a></li>
                        </ul>
                    </div>
                    <div className='d-flex flex-column align-items-center justify-content-center col-12 col-md-6 col-lg-4 p-3'>
                        <h3 className='text-white'>ABOUT FREELANCER</h3>
                        <p className='text-white text-center px-2'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
