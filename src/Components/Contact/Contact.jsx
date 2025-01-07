import React from 'react'
import PaddingNav from '../NavbarCustom/PaddingNav/PaddingNav'
import TextStarLine from '../TextStarLine/TextStarLine'
import './Contact.css'
export default function Contact() {
    return (
        <>
            <PaddingNav bgNav={'bg-white'} />
            <TextStarLine color={'text-dark'} bgLine={'bg-dark'} text={'conatct section'} />
            <div className='d-flex height-100vh justify-content-center align-items-start'>
                <form action="#" className='mx-auto col-11 col-md-10 col-lg-8  col-xl-6 mt-5'>
                    <div className='border-bottom w-100 my-5'>
                        <input type="text" className='py-1 w-100' placeholder='userName'/>
                    </div>
                    <div className='border-bottom w-100 my-5'>
                        <input type="text" className='py-1 w-100' placeholder='userAge'/>
                    </div>
                    <div className='border-bottom w-100 my-5'>
                        <input type="email" className='py-1 w-100' placeholder='userEmail'/>
                    </div>
                    <div className='border-bottom w-100 my-5'>
                        <input type="password" className='py-1 w-100' placeholder='userPassword'/>
                    </div>
                    <button onClick={(e)=>{e.preventDefault()}} className='btn py-2 text-white'>send Message</button>
                </form>
            </div>
        </>
    )
}
