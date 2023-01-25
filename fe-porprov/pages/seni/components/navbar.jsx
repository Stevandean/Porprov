import React from 'react'

const navbar = () => {
  return (
    <>
    {/* Navbar */}
    <div className="bg-[#2C2F48] sticky top-0 h-20 z-40 flex">
        <div className="flex justify-between w-full text-white px-10">
          <img className='py-3' src="../../../../../../images/trenggalekLogo.png" alt="Kabupaten Trenggalek" />
          <span className='text-xl font-semibold my-auto uppercase text-center'>porprov xxx jatim <br></br> surabaya 2025</span>
          <img className='py-3' src="../../../../../../images/ipsiIcon.png" alt="IPSI" />
        </div>
    </div>
    </>
  )
}

export default navbar