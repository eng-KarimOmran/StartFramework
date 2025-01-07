import React from 'react'
import './TextStarLine.css'
export default function TextStarLine({color,bgLine,text}) {
    return (
        <>
            <div className='text-star-line'>
                <h2 className={`text-uppercase py-3 text-center  ${color}`}>{text}</h2>
                <div className='d-flex justify-content-center align-items-center pb-2'>
                    <div className={`line me-3 ${bgLine}`}></div>
                    <i className={`fa-solid fa-star ${color}`}></i>
                    <div className={`line ms-3 ${bgLine}`}></div>
                </div>
            </div>
        </>
    )
}
