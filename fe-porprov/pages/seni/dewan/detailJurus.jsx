import React, { useEffect, useState, useRef } from 'react'
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
    const [peserta, setPeserta] = useState ([])

    const getNilai = () => {
        const peserta = JSON.parse (localStorage.getItem ('peserta'))
        const jadwal = (localStorage.getItem ('jadwal'))

        setPeserta (peserta)

        let id_peserta = peserta.id
        let id_jadwal = jadwal
        
        axios.get (BASE_URL + `/api/tunggal/jadwal/${id_jadwal}/${id_peserta}`)
        .then (res => {
            setData (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
        console.log(BASE_URL + `/api/tunggal/jadwal/${id_jadwal}/${id_peserta}`);
    }

    useEffect (() => {
        getNilai ()
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
                            <div className="col-span-9 py-2 bg-blue-600 rounded-lg flex flex-col">
                                <span className='text-lg font-semibold px-4 tracking-wide'>{peserta.nama1}</span>
                                <span className='font-semibold tracking-wider px-4'>{peserta.kontingen}</span>
                                <button onClick={() => handlePrint()} className='bg-red-600 hover:bg-red-700'>Print</button>
                            </div>
                        {/* pertandingan information */}
                        <div className="col-span-2 py-2 bg-blue-600 rounded-lg flex flex-col text-center">
                            <span className='text-lg font-semibold px-4 tracking-wide'>Penyisihan</span>
                            <span className='font-semibold tracking-wider px-4'>{peserta.kategori} - {peserta.jk}</span>
                        </div>
                    </div>
                    {/* table detail jurus */}
                    <table className='w-full table-fixed'>
                        <thead>
                            <tr className='bg-[#222954] border-2 border-[#222954]'>
                                <th className='py-2'>Juri</th>
                                <th>1</th>
                                <th>2</th>
                                <th>3</th>
                                <th>4</th>
                                <th>5</th>
                                <th>6</th>
                                <th>7</th>
                                <th>8</th>
                                <th>9</th>
                                <th>10</th>
                                <th>11</th>
                                <th>12</th>
                                <th>13</th>
                                <th>14</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map (item => (
                                <tr className='text-[#222954] text-center text-lg font-semibold'>
                                    <td className='border-2 border-[#222954]'>{item.juri.no}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus1) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus2) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus3) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus4) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus5) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus6) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus7) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus8) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus9) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus10) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus11) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus12) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus13) / (-0.01)}</td>
                                    <td className='border-2 border-[#222954]'>{(item.jurus14) / (-0.01)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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