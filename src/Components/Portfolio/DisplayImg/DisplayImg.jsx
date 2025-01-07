import React from 'react'

export default function DisplayImg({src,closeImg}) {
    return (
        <div onClick={(e)=>{
                if(e.target.tagName != 'IMG'){
                closeImg()
            }
        }} className='position-fixed top-0 bottom-0 start-0 end-0 bg-info bg-opacity-50 d-flex justify-content-center align-items-center z-3'><img className='col-11 col-sm-10 col-md-8 col-lg-6 col-xl-5 d-block' src={src} alt="" /></div>
    )
}
