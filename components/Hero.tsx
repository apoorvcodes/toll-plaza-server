import React from 'react'
import Image from 'next/image'
import HeroImg from "../public/img/truck.svg"
const Hero:React.FC = () => {
  return (
    <div className='min-h-screen w-screen bg-moon pl-32 pr-32 pt-12 '>
       <div className='flex justify-between items-center flex-row'>
           <div className='flex flex-col '>
                <div className='text-[5.75rem] text-white font-extrabold'>
                   Hi, I am <span className='text-rose'>Apoorv</span>
                </div> 
                <div className='text-6xl text-white font-bold'>
                    a <span className='text-rose'>self taught</span> frontend
                </div>  
                <div className='text-6xl text-white font-bold pt-1'>
                   & backend developer<span className='text-rose'>.</span>
                </div> 
                <div className='text-xl text-peri font-bold pt-8 font-sans'>
                   stick around to see some of my work
                </div> 
                <div className='pt-8 font-sans'>
                </div>
            </div>
            <Image src={HeroImg} />
        </div> 
    </div>
  )
}

export default Hero