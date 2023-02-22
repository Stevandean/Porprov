import React, { useEffect, useState, useRef, use } from 'react'
import { useReactToPrint } from 'react-to-print'
import Link from 'next/link'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detailJurus = () => {
    
    const router = useRouter ()

    // untuk print
    const componentRef = useRef ()
    const handlePrint = useReactToPrint ({
        content : () => componentRef.current,
        documentTitle : 'test',
        onAfterPrint : () => alert (`print berhasil`)
    })

    // ini State
    const [data, setData] = useState ([])
    const [dataRegu, setDataRegu] = useState ([])
    const [peserta, setPeserta] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [kebenaran, setKebenaran] = useState(0)
    const [kesalahan, setKesalahan] = useState(0)
    const [total, setTotal] = useState(0)

    const getNilai = () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))

        setPeserta (peserta)
        setJadwal (jadwal)
        let data = []
        let total = []
        let jumlahtotal = 0

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        
        if (peserta.kategori == 'tunggal') {
            axios.get (BASE_URL + `/api/tunggal/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setData (res.data.data)
                data = (res.data.data)
                data.map(item =>{
                    setTotal(Math.round(((item.jurus1) + (item.jurus2) + (item.jurus3) + (item.jurus4) + (item.jurus5) + (item.jurus6) + (item.jurus7) + (item.jurus8) + (item.jurus9) + (item.jurus10) + (item.jurus11) + (item.jurus12) + (item.jurus13) + (item.jurus14)) * (-100)))
                    total.push (Math.round(((item.jurus1) + (item.jurus2) + (item.jurus3) + (item.jurus4) + (item.jurus5) + (item.jurus6) + (item.jurus7) + (item.jurus8) + (item.jurus9) + (item.jurus10) + (item.jurus11) + (item.jurus12) + (item.jurus13) + (item.jurus14)) * (-100)))
                })
                for(let i =0; i < total.length; i++){
                    jumlahtotal += total[i]
                }
                setKesalahan(jumlahtotal)
                setKebenaran(1000 - jumlahtotal)
                console.log(1000 - jumlahtotal);
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (peserta.kategori == 'regu') {
            axios.get (BASE_URL + `/api/regu/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setDataRegu (res.data.data)
                data = (res.data.data)
                data.map(item =>{
                    setTotal(Math.round(((item.jurus1) + (item.jurus2) + (item.jurus3) + (item.jurus4) + (item.jurus5) + (item.jurus6) + (item.jurus7) + (item.jurus8) + (item.jurus9) + (item.jurus10) + (item.jurus11) + (item.jurus12)) * (-100)))
                    total.push (Math.round(((item.jurus1) + (item.jurus2) + (item.jurus3) + (item.jurus4) + (item.jurus5) + (item.jurus6) + (item.jurus7) + (item.jurus8) + (item.jurus9) + (item.jurus10) + (item.jurus11) + (item.jurus12)) * (-100)))
                })
                for(let i =0; i < total.length; i++){
                    jumlahtotal += total[i]
                }
                setKesalahan(jumlahtotal)
                setKebenaran(1000 - jumlahtotal)
                console.log(1000 - jumlahtotal);
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    const getJumlah = () => {
        console.log(data);
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('dewan') === null) {
         router.push ('/seni/dewan/login') 
        }
    }

    useEffect (() => {
        getNilai ()
        getJumlah()
        isLogged ()
    }, [])

    return (
        <>
        <div ref={componentRef} className="flex ">

            {/* awal konten utama */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <Navbar />
                {/* akhir header */}

                {/* konten utama */}
                <div className="bg-white text-white min-h-full">
                    {/* wrapper keseluruhan */}
                    <div className="w-11/12 mx-auto py-10 space-y-6">
                        {/* wrapper information */}
                        <div className="grid grid-cols-12 gap-x-5">
                            {/* button back */}
                            <button onClick={() => router.back ()} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                                <img className='p-3' src="../../../../../../svg/back.svg" />
                            </button>
                            {/* pesilat information */}
                            <div className={peserta.id == jadwal.id_biru ? "col-span-9 py-2 bg-blue-600 rounded-lg flex flex-col" : "col-span-9 py-2 bg-red-600 rounded-lg flex flex-col"}>
                                {(() => {
                                    if (peserta.kategori == 'tunggal') {
                                        return (
                                            <span className='text-lg font-semibold px-4 tracking-wide'>{peserta.nama1}</span>
                                        )
                                    } else if (peserta.kategori == 'regu') {
                                        return (
                                            <>
                                                <span className='text-lg font-semibold px-4 tracking-wide'>{peserta.nama1} - {peserta.nama2} - {peserta.nama3}</span>
                                            </>
                                        )
                                    }
                                })()}
                                <span className='font-semibold tracking-wider px-4'>{peserta.kontingen}</span>
                            </div>
                            {/* pertandingan information */}
                            <div className={peserta.id == jadwal.id_biru ? "col-span-2 py-2 bg-blue-600 rounded-lg flex flex-col text-center" : "col-span-2 py-2 bg-red-600 rounded-lg flex flex-col text-center"}>
                                <span className='text-lg font-semibold px-4 tracking-wide'>Penyisihan</span>
                                <span className='font-semibold tracking-wider px-4 uppercase'>{(peserta.kategori)} - {peserta.jk}</span>
                            </div>
                        </div>
                        {/* table detail jurus */}
                        {(() => {
                            if (peserta.kategori == 'tunggal') {
                                return (
                                    <>
                                    <table className='w-full table-fixed'>
                                        <thead>
                                            <tr className='bg-[#222954] border-2 border-[#c9c9c9]'>
                                                <th className='py-2'>Juri</th>
                                                <th className='border-2 border-[#c9c9c9]'>1</th>
                                                <th className='border-2 border-[#c9c9c9]'>2</th>
                                                <th className='border-2 border-[#c9c9c9]'>3</th>
                                                <th className='border-2 border-[#c9c9c9]'>4</th>
                                                <th className='border-2 border-[#c9c9c9]'>5</th>
                                                <th className='border-2 border-[#c9c9c9]'>6</th>
                                                <th className='border-2 border-[#c9c9c9]'>7</th>
                                                <th className='border-2 border-[#c9c9c9]'>8</th>
                                                <th className='border-2 border-[#c9c9c9]'>9</th>
                                                <th className='border-2 border-[#c9c9c9]'>10</th>
                                                <th className='border-2 border-[#c9c9c9]'>11</th>
                                                <th className='border-2 border-[#c9c9c9]'>12</th>
                                                <th className='border-2 border-[#c9c9c9]'>13</th>
                                                <th className='border-2 border-[#c9c9c9]'>14</th>
                                                <th className='border-2 border-[#c9c9c9]'>JUMLAH</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data.map ((item, index) => (
                                                <tr key={index + 1} className='text-[#222954] text-center text-lg font-semibold'>
                                                    <td className='border-2 border-[#c9c9c9] bg-[#222954] text-white'>{item.juri.no}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus1) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus2) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus3) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus4) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus5) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus6) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus7) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus8) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus9) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus10) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus11) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus12) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus13) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus14) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9] bg-[#faff00]'>{Math.round(((item.jurus1) + (item.jurus2) + (item.jurus3) + (item.jurus4) + (item.jurus5) + (item.jurus6) + (item.jurus7) + (item.jurus8) + (item.jurus9) + (item.jurus10) + (item.jurus11) + (item.jurus12) + (item.jurus13) + (item.jurus14)) * (-100))}</td>
                                                    {/* <td className='border-2 border-[#c9c9c9]'>{total}</td> */}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <table className='w-full'>
                                        <tbody>
                                            <tr className='bg-black'>
                                                <td>Kesalahan</td>
                                                <td>{kesalahan} </td>
                                            </tr>
                                            <tr className='bg-black'>
                                            <td>Kebenaran</td>
                                                <td>{kebenaran} </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </>
                                )
                            } else if (peserta.kategori == 'regu') {
                                return (
                                    <>
                                    <table className='w-full table-fixed'>
                                        <thead>
                                            <tr className='bg-[#222954] border-2 border-[#c9c9c9]'>
                                                <th className='py-2'>Juri</th>
                                                <th className='border-2 border-[#c9c9c9]'>1</th>
                                                <th className='border-2 border-[#c9c9c9]'>2</th>
                                                <th className='border-2 border-[#c9c9c9]'>3</th>
                                                <th className='border-2 border-[#c9c9c9]'>4</th>
                                                <th className='border-2 border-[#c9c9c9]'>5</th>
                                                <th className='border-2 border-[#c9c9c9]'>6</th>
                                                <th className='border-2 border-[#c9c9c9]'>7</th>
                                                <th className='border-2 border-[#c9c9c9]'>8</th>
                                                <th className='border-2 border-[#c9c9c9]'>9</th>
                                                <th className='border-2 border-[#c9c9c9]'>10</th>
                                                <th className='border-2 border-[#c9c9c9]'>11</th>
                                                <th className='border-2 border-[#c9c9c9]'>12</th>
                                                <th className='border-2 border-[#c9c9c9]'>JUMLAH</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {dataRegu.map ((item, index) => (
                                                <tr key={index + 1} className='text-[#222954] text-center text-lg font-semibold'>
                                                    <td className='border-2 border-[#c9c9c9] bg-[#222954] text-white'>{item.juri.no}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus1) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus2) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus3) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus4) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus5) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus6) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus7) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus8) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus9) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus10) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus11) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9]'>{Math.round((item.jurus12) * (-100))}</td>
                                                    <td className='border-2 border-[#c9c9c9] bg-[#faff00]'>{Math.round(((item.jurus1) + (item.jurus2) + (item.jurus3) + (item.jurus4) + (item.jurus5) + (item.jurus6) + (item.jurus7) + (item.jurus8) + (item.jurus9) + (item.jurus10) + (item.jurus11) + (item.jurus12)) * (-100))}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    <table className='w-full'>
                                    <tbody>
                                        <tr className='bg-black'>
                                            <td>Kesalahan</td>
                                            <td>{kesalahan} </td>
                                        </tr>
                                        <tr className='bg-black'>
                                        <td>Kebenaran</td>
                                            <td>{kebenaran} </td>
                                        </tr>
                                    </tbody>
                                </table>
                                </> 
                                )
                            }
                        })()}
                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
    </>

    )
}

export default detailJurus