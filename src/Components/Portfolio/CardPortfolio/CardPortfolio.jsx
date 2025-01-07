import React, { useRef, useState } from 'react'
import './CardPortfolio.css'
export default function CardPortfolio({src,dsplayImg}) {
    return (    
    <>
    <div className='p-3 bg-white col-12 col-sm-6 col-md-4'>
        <div className='position-relative rounded-3 overflow-hidden w-100' onClick={()=>{dsplayImg(src)}}>
            <img className='w-100 d-block' src={src}/>
            <div className='card-Portfolio-absolute d-flex justify-content-center align-items-center'><i className="fa-solid fa-plus fa-4x text-white"></i></div>
        </div>
    </div>
    </>
    )
}