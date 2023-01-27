import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const sidebar = () => {

    const location = useRouter();
    const {pathname} = location;
    const splitLoc = pathname.split("admin/");

    const [dropdownTunggal, setDropdownTunggal] = useState (false)
    const [dropdownGanda, setDropdownGanda] = useState (false)
    const [dropdownRegu, setDropdownRegu] = useState (false)

    return (
        <>
            <aside className="bg-[#222538] w-2/12 relative min-h-screen overflow-y-auto text-white">
                <div className="flex justify-center py-5 border-b-2 border-slate-500">
                    <span className='text-2xl font-semibold'>Admin</span>
                </div>
                <div className="flex flex-col p-5">
                    <Link href="landingPage" className={splitLoc[1] === "landingPage" ? "bg-[#11121C] rounded-xl py-1 px-4 flex mb-5" : "bg-[#11121C] rounded-xl py-1 px-4 flex mb-5 bg-opacity-40"}>
                        <img className='w-6 h-6' src='../svg/home.svg'/>
                        <span className='px-4 text-lg'>Dashboard</span>
                    </Link>
                    <div className="text-lg mb-5">
                        <div className="mb-2">
                            <span className={splitLoc[1] === "tanding" ? 'px-2 italic text-white' : 'px-2 italic text-[#51607A]'}>Jadwal Tanding</span>
                        </div>
                        <Link href="tanding" className={splitLoc[1] === "tanding" ? "bg-[#11121C] rounded-xl py-1 px-4 flex" : "bg-[#11121C] rounded-xl py-1 px-4 flex bg-opacity-40"}>
                            <img className='w-6 h-6' src='../svg/tanding.svg'/>
                            <span className='px-4 text-lg'>Tanding</span>
                        </Link>
                    </div>
                    <div className="text-lg mb-5">
                        <div className="mb-2">
                            <span className='px-2 italic text-[#51607A]'>Jadwal TGR</span>
                        </div>
                        {/* Dropdown */}
                        <div className="mb-3">
                            {(() => {
                                if (dropdownTunggal === true) {
                                    return (
                                        <div className={splitLoc[1] === 'pesertaTunggal' || splitLoc[1] === 'jadwalTunggal' ? 'flex justify-between bg-[#11121C] items-center py-2 px-4 mb-2 rounded-xl' : 'flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'}>
                                            <button onClick={() => setDropdownTunggal (false)} className="text-white text-center inline-flex items-center w-full" type="button">Tunggal
                                            </button>
                                            <svg className ="w-4 h-4 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                } else if (dropdownTunggal === false) {
                                    return (
                                        <div className={splitLoc[1] === 'pesertaTunggal' || splitLoc[1] === 'jadwalTunggal' ? 'flex justify-between bg-[#11121C] items-center py-2 px-4 mb-2 rounded-xl' : 'flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'}>
                                            <button onClick={() => setDropdownTunggal (true)} className="text-white text-center inline-flex items-center w-full" type="button">Tunggal
                                            </button>
                                            <svg className ="w-4 h-4 -rotate-90 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                }
                            })()}
                            {dropdownTunggal ? (
                                <div className='flex flex-col space-y-2'>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="./jadwalTunggal" className="block px-4 py-2 ">Jadwal Tunggal</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="./pesertaTunggal" className="block px-4 py-2 ">Peserta Tunggal</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}

                        </div>
                        <div className="mb-3">
                            {(() => {
                                if (dropdownGanda === true) {
                                    return (
                                        <div className='flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'>
                                            <button onClick={() => setDropdownGanda (false)} className="text-white text-center inline-flex items-center w-full" type="button">Ganda
                                            </button>
                                            <svg className ="w-4 h-4 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                } else if (dropdownGanda === false) {
                                    return (
                                        <div className='flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'>
                                            <button onClick={() => setDropdownGanda (true)} className="text-white  text-center inline-flex items-center w-full" type="button">Ganda
                                            </button>
                                            <svg className ="w-4 h-4 -rotate-90 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                }
                            })()}
                            {dropdownGanda ? (
                                <div className='flex flex-col space-y-2'>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="./jadwalGanda" className="block px-4 py-2 ">Jadwal Ganda</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="./pesertaGanda" className="block px-4 py-2 ">Peserta Ganda</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}

                        </div>
                        <div>
                            {(() => {
                                if (dropdownRegu === true) {
                                    return (
                                        <div className='flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'>
                                            <button onClick={() => setDropdownRegu (false)} className="text-white text-center inline-flex items-center w-full" type="button">Regu
                                            </button>
                                            <svg className ="w-4 h-4 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                } else if (dropdownRegu === false) {
                                    return (
                                        <div className='flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'>
                                            <button onClick={() => setDropdownRegu (true)} className="text-white  text-center inline-flex items-center w-full" type="button">Regu
                                            </button>
                                            <svg className ="w-4 h-4 -rotate-90 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                }
                            })()}
                            {dropdownRegu ? (
                                <div className='flex flex-col space-y-2'>
                                <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                    <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="./jadwalRegu" className="block px-4 py-2 ">Jadwal Regu</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                    <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <a href="./pesertaRegu" className="block px-4 py-2 ">Peserta Regu</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            ):null}

                        </div>
                        
                        {/* <Link href="tgrGanda" className={splitLoc[1] === "tgrGanda" ? "bg-[#11121C] rounded-xl py-1 px-4 flex mb-3" : "bg-[#11121C] rounded-xl py-1 px-4 flex mb-3 bg-opacity-40"}>
                            <img className='w-6 h-6' src='../svg/home.svg'/>
                            <span className='px-4 text-lg'>Ganda</span>
                        </Link>
                        <Link href="tgrRegu" className={splitLoc[1] === "tgrRegu" ? "bg-[#11121C] rounded-xl py-1 px-4 flex" : "bg-[#11121C] rounded-xl py-1 px-4 flex bg-opacity-40"}>
                            <img className='w-6 h-6' src='../svg/home.svg'/>
                            <span className='px-4 text-lg'>Regu</span>
                        </Link> */}
                    </div>
                    <div className="text-lg mb-5">
                        <div className="mb-2">
                            <span className='px-2 italic text-[#51607A]'>Rekap Nilai</span>
                        </div>
                        <Link href="nilaiTanding" className={splitLoc[1] === "nilaiTanding" ? "bg-[#11121C] rounded-xl py-1 px-4 flex mb-3" : "bg-[#11121C] rounded-xl py-1 px-4 flex mb-3 bg-opacity-40"}>
                            <img className='w-6 h-6' src='../svg/tanding.svg'/>
                            <span className='px-4 text-lg'>Tanding</span>
                        </Link>
                        <Link href="nilaiTgr" className={splitLoc[1] === "nilaiTgr" ? "bg-[#11121C] rounded-xl py-1 px-4 flex" : "bg-[#11121C] rounded-xl py-1 px-4 flex bg-opacity-40"}>
                            <img className='w-6 h-6' src='../svg/home.svg'/>
                            <span className='px-4 text-lg'>TGR</span>
                        </Link>
                    </div>
                    <div className="text-lg mb-5">
                        <div className="mb-2">
                            <span className={splitLoc[1] === "juri" ? 'px-2 italic text-white' : 'px-2 italic text-[#51607A]'}>Juri</span>
                        </div>
                        <Link href="juri" className={splitLoc[1] === "juri" ? "bg-[#11121C] rounded-xl py-1 px-4 flex" : "bg-[#11121C] rounded-xl py-1 px-4 flex bg-opacity-40"}>
                            <img className='w-6 h-6' src='../svg/tanding.svg'/>
                            <span className='px-4 text-lg'>Juri</span>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default sidebar