import React from 'react'
import './Home.css'
import TextStarLine from '../TextStarLine/TextStarLine'
import PaddingNav from '../NavbarCustom/PaddingNav/PaddingNav'
export default function Home() {
    return (
        <>
            <PaddingNav bgNav={'bg-Home'} />
            <div className='height-100vh bg-Home d-flex justify-content-center align-items-center flex-column font-family'>
                <div className='img-home'><img className='w-100 d-block' src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" alt="avataaars" /></div>
                <TextStarLine color={'text-white'} bgLine={'bg-white'} text={'start Framework'} />
                <span className='text-white'>Graphic Artist - Web Designer - Illustrator</span>
            </div>
        </>
    )
}
