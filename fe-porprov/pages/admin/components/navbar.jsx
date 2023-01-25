import React from 'react'

const navbar = () => {
  return (
    <>
    {/* Navbar */}
    <div className="bg-[#2C2F48] sticky top-0 h-20 flex">
        <div className="flex items-center w-full text-white">
            <span className='text-xl uppercase font-semibold pl-7 my-auto'>Dashboard</span>
            {/* Search */}
            <div className='justify-center flex w-4/6 mx-auto text-xl uppercase font-semibold'>
                <div className=" flex p-1 rounded-full  border-2 border-slate-500">
                <img className='w-6 h-6 mx-4 my-auto' src='../svg/search.svg'></img>
                <form className=''>
                    <input className='bg-transparent focus:outline-none' placeholder='Seacrch'></input>
                </form>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default navbar