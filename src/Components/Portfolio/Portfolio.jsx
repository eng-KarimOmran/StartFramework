import React, { useRef, useState } from 'react'
import TextStarLine from '../TextStarLine/TextStarLine'
import CardPortfolio from './CardPortfolio/CardPortfolio'
import PaddingNav from '../NavbarCustom/PaddingNav/PaddingNav'
import DisplayImg from './DisplayImg/DisplayImg'
export default function Portfolio() {
    const [disPlayImg,setDisPlayImg] = useState('')
    function dsplayImg(img){
        setDisPlayImg(<DisplayImg src={img} closeImg={closeImg} />)
    }
    function closeImg(img){
        setDisPlayImg('')
    }
    return (
        <section>
            <PaddingNav bgNav={'bg-white'} />
            <div className='d-flex justify-content-center align-items-center height-100vh flex-column'>
                <TextStarLine color={'text-dark'} bgLine={'bg-dark'} text={'portfolio component'} />
                <div className='d-flex flex-wrap align-items-center container'>
                    <CardPortfolio src={'https://routeegy.github.io/startFramework/assets/images/poert1.png'} dsplayImg={dsplayImg}/>
                    <CardPortfolio src={'https://routeegy.github.io/startFramework/assets/images/port2.png'} dsplayImg={dsplayImg}/>
                    <CardPortfolio src={'https://routeegy.github.io/startFramework/assets/images/port3.png'} dsplayImg={dsplayImg}/>
                    <CardPortfolio src={'https://routeegy.github.io/startFramework/assets/images/poert1.png'} dsplayImg={dsplayImg}/>
                    <CardPortfolio src={'https://routeegy.github.io/startFramework/assets/images/port2.png'} dsplayImg={dsplayImg}/>
                    <CardPortfolio src={'https://routeegy.github.io/startFramework/assets/images/port3.png'} dsplayImg={dsplayImg}/>
                </div>
            </div>
            {disPlayImg}
        </section>
    )
}
