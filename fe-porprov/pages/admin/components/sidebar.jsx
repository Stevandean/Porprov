import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';

const sidebar = () => {

    const location = useRouter();
    const {pathname} = location;
    const splitLoc = pathname.split("admin/");

    const [dropdownTanding, setDropdownTanding] = useState (false)
    const [dropdownTunggal, setDropdownTunggal] = useState (false)
    const [dropdownGanda, setDropdownGanda] = useState (false)
    const [dropdownSoloKreatif, setDropdownSoloKreatif] = useState (false)
    const [dropdownRegu, setDropdownRegu] = useState (false)
    const [dropdownNilaitgr, setDropdownNilaitgr] = useState (false)

    return (
        <>  
            <aside className="bg-[#222538] w-2/12 relative min-h-screen overflow-y-auto text-white h-screen scrollbar-hide">
                <div className="flex justify-center py-5 border-b-2 border-slate-500">
                    <span className='text-2xl font-semibold'>Admin</span>
                </div>
                <div className="flex flex-col p-5">
                    {/* dashboard */}
                    <Link href="/admin" className={splitLoc[1] === "landingPage" ? "bg-[#11121C] rounded-xl py-1 px-4 flex mb-5" : "bg-[#11121C] rounded-xl py-1 px-4 flex mb-5 bg-opacity-40"}>
                        <img className='w-6 h-6' src='../svg/home.svg'/>
                        <span className='px-4 text-lg'>Dashboard</span>
                    </Link>
                    {/* tanding */}
                    <div className="text-lg mb-4">
                        <div className="mb-2">
                            <span className='px-2 italic text-[#51607A]'>Tanding</span>
                        </div>
                        {/* Dropdown tunggal*/}
                        <div className="">
                            {(() => {
                                if (dropdownTanding === true) {
                                    return (
                                        <div className={splitLoc[1] === 'pesertaTanding' || splitLoc[1] === 'jadwalTanding' ? 'flex justify-between bg-[#11121C] items-center py-2 px-4 rounded-xl' : 'flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'}>
                                            <button onClick={() => setDropdownTanding (false)} className="text-white text-center inline-flex items-center w-full" type="button">Tanding
                                            </button>
                                            <svg className ="w-4 h-4 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                } else if (dropdownTanding === false) {
                                    return (
                                        <div className={splitLoc[1] === 'pesertaTanding' || splitLoc[1] === 'jadwalTanding' ? 'flex justify-between bg-[#11121C] items-center py-2 px-4 rounded-xl' : 'flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'}>
                                            <button onClick={() => setDropdownTanding (true)} className="text-white text-center inline-flex items-center w-full" type="button">Tanding
                                            </button>
                                            <svg className ="w-4 h-4 -rotate-90 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                }
                            })()}
                            {dropdownTanding ? (
                                <div className='flex flex-col space-y-2'>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/pesertaTanding" className="block px-4 py-2 ">Peserta Tanding</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/jadwalTanding" className="block px-4 py-2 ">Jadwal Tanding</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}
                        </div>
                    </div>
                    {/* tgr */}
                    <div className="text-lg mb-4">
                        <div className="mb-2">
                            <span className='px-2 italic text-[#51607A]'>Jadwal TGR</span>
                        </div>
                        {/* Dropdown tunggal*/}
                        <div className="mb-2">
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
                                                <a href="/admin/pesertaTunggal" className="block px-4 py-2 ">Peserta Tunggal</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/jadwalTunggal" className="block px-4 py-2 ">Jadwal Tunggal</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}
                        </div>
                        {/* dropdown ganda */}
                        <div className="mb-2">
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
                                                <a href="/admin/pesertaGanda" className="block px-4 py-2 ">Peserta Ganda</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/jadwalGanda" className="block px-4 py-2 ">Jadwal Ganda</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}
                        </div>
                        {/* dropwdown regu */}
                        <div className='mb-2'>
                            {(() => {
                                if (dropdownRegu === true) {
                                    return (
                                        <div className='flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 rounded-xl'>
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
                                                <a href="/admin/pesertaRegu" className="block px-4 py-2 ">Peserta Regu</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/jadwalRegu" className="block px-4 py-2 ">Jadwal Regu</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}
                        </div>
                        {/* dropdown solo kreatif */}
                        <div>
                            {(() => {
                                if (dropdownSoloKreatif === true) {
                                    return (
                                        <div className='flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 rounded-xl'>
                                            <button onClick={() => setDropdownSoloKreatif (false)} className="text-white text-center inline-flex items-center w-full" type="button">Solo Kreatif
                                            </button>
                                            <svg className ="w-4 h-4 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                } else if (dropdownSoloKreatif === false) {
                                    return (
                                        <div className='flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 rounded-xl'>
                                            <button onClick={() => setDropdownSoloKreatif (true)} className="text-white  text-center inline-flex items-center w-full" type="button">Solo Kreatif
                                            </button>
                                            <svg className ="w-4 h-4 -rotate-90 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                }
                            })()}
                            {dropdownSoloKreatif ? (
                                <div className='flex flex-col space-y-2'>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/pesertaSoloKreatif" className="block px-4 py-2 ">Peserta Solo Kreatif</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/jadwalSoloKreatif" className="block px-4 py-2 ">Jadwal Solo Kreatif</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}
                        </div>
                    </div>
                    {/* juri */}
                    <div className="text-lg mb-4">
                        <div className="mb-2">
                            <span className={splitLoc[1] === "juri" ? 'px-2 italic text-white' : 'px-2 italic text-[#51607A]'}>Juri</span>
                        </div>
                        <Link href="/admin/juri" className={splitLoc[1] === "juri" ? "bg-[#11121C] rounded-xl py-2 flex" : "bg-[#11121C] rounded-xl py-2 flex bg-opacity-40"}>
                            <span className='px-4 text-lg'>Juri</span>
                        </Link>
                    </div>
                    {/* rekap nilai */}
                    <div className="text-lg mb-4">
                        <div className="mb-2">
                            <span className='px-2 italic text-[#51607A]'>Rekap Nilai</span>
                        </div>
                        <Link href="/admin/nilaiTanding" className={splitLoc[1] === "nilaiTanding" ? "bg-[#11121C] rounded-xl py-2 flex mb-3" : "bg-[#11121C] rounded-xl py-2 flex mb-3 bg-opacity-40"}>
                            <span className='px-4 text-lg'>Tanding</span>
                        </Link>
                        <div className="mb-2">
                            {(() => {
                                if (dropdownNilaitgr === true) {
                                    return (
                                        <div className={splitLoc[1] === 'nilaiTunggal' || splitLoc[1] === 'nilaiGanda' || splitLoc[1] === 'nilaiRegu' || splitLoc[1] === 'nilaiSoloKreatif' ? 'flex justify-between bg-[#11121C] items-center py-2 px-4 rounded-xl' : 'flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'}>
                                            <button onClick={() => setDropdownNilaitgr (false)} className="text-white text-center inline-flex items-center w-full" type="button">Nilai Tgr
                                            </button>
                                            <svg className ="w-4 h-4 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                } else if (dropdownNilaitgr === false) {
                                    return (
                                        <div className={splitLoc[1] === 'nilaiTunggal' || splitLoc[1] === 'nilaiGanda' || splitLoc[1] === 'nilaiRegu' || splitLoc[1] === 'nilaiSoloKreatif' ? 'flex justify-between bg-[#11121C] items-center py-2 px-4 rounded-xl' : 'flex justify-between bg-[#11121C] bg-opacity-40 items-center py-2 px-4 mb-2 rounded-xl'}>
                                            <button onClick={() => setDropdownNilaitgr (true)} className="text-white text-center inline-flex items-center w-full" type="button">Nilai Tgr
                                            </button>
                                            <svg className ="w-4 h-4 -rotate-90 transition-all" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7">
                                                </path>
                                            </svg>
                                        </div>
                                    )
                                }
                            })()}
                            {dropdownNilaitgr ? (
                                <div className='flex flex-col space-y-2'>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/nilaiTunggal" className="block px-4 py-2 ">Nilai Tunggal</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/nilaiGanda" className="block px-4 py-2 ">Nilai Ganda</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/nilaiRegu" className="block px-4 py-2 ">Nilai Regu</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                            <li>
                                                <a href="/admin/nilaiSoloKreatif" className="block px-4 py-2 ">Nilai Solo Kreatif</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            ):null}
                        </div>
                    </div>
                    {/* web setting */}
                    <div className="text-lg mb-4">
                        <div className="mb-2">
                            <span className={splitLoc[1] === "webSetting" ? 'px-2 italic text-white' : 'px-2 italic text-[#51607A]'}>Web Setting</span>
                        </div>
                        <Link href="/admin/webSetting" className={splitLoc[1] === "webSetting" ? "bg-[#11121C] rounded-xl py-2 flex" : "bg-[#11121C] rounded-xl py-2 flex bg-opacity-40"}>
                            <span className='px-4 text-lg'>Setting</span>
                        </Link>
                    </div>
                </div>
            </aside>
        </>
    )
}

export default sidebar