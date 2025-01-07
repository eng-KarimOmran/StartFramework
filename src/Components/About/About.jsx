import React from 'react'
import './About.css'
import TextStarLine from '../TextStarLine/TextStarLine'
import PaddingNav from '../NavbarCustom/PaddingNav/PaddingNav'
export default function About() {
    return (
        <>
            <PaddingNav bgNav={'bg-About'} />
            <div className='height-100vh bg-About d-flex justify-content-center align-items-center flex-column font-family'>
                <TextStarLine color={'text-white'} bgLine={'bg-white'} text={'start Framework'} />
                <div className='d-flex container flex-wrap'>
                    <p className='text-white col-12 col-md-6 p-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    <p className='text-white col-12 col-md-6 p-3'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
            </div>
        </>
    )
}
