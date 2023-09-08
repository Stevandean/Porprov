import React, { useState } from 'react'
import Navbar from '../component/navbar/navbar'
import Footer from '../seni/components/footer'

import ModalDewan from '../component/modal/modalDewan'
import Link from 'next/link'

const user = () => {
    const [modalDewan, setModalDewan] = useState(false)
    const Dewan = () => {
        
    }
    return (
        <>
            <div className='h-screen relative'>
                {/* header */}
                <Navbar />
                {/* akhir header */}

                <div className='h-[80%] w-full'>
                    <div className='p-12 px-17 flex items-center space-x-5 h-full'>

                        <Link href='./dewan' className='h-[90%] w-1/4 rounded-[5%] bg-[#222954] text-white text-5xl uppercase flex items-center justify-center' type='button'>
                            dewan
                        </Link>
                        <Link href='./juri' className='h-[90%] w-1/4 rounded-[5%] bg-[#222954] text-white text-5xl uppercase flex items-center justify-center' type='button'>juri</Link>
                        <Link href='./timer' className='h-[90%] w-1/4 rounded-[5%] bg-[#222954] text-white text-5xl uppercase flex items-center justify-center' type='button'>timer</Link>
                        <Link href='./layar' className='h-[90%] w-1/4 rounded-[5%] bg-[#222954] text-white text-5xl uppercase flex items-center justify-center' type='button'>layar</Link>
                    
                    </div>
                </div>
            
                <div className='fixed bottom-0 w-full'>
                    <Footer/>
                </div>
            </div>

            {modalDewan ? (
                <ModalDewan
                close={()=> setModalDewan(false)}
                />
            ): null}
        </>
    )
}

export default user