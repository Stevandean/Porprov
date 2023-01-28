import React from 'react'
import socketIo from 'socket.io-client'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Clock from '../components/timer'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Link from 'next/link'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo (BASE_URL)

const detailSelesai = () => {

    // state data dari local storage
    const [peserta, setPeserta] = useState ([])

    // state
    const [hukum, setHukum] = useState ([])
    const [nilai, setNilai] = useState([])
    const [kategori, setKategori] = useState ([])
    const [median, setMedian] = useState (0)
    const [total, setTotal] = useState (0)
    const [deviasi, setDeviasi] = useState (0)

    const getNilai = async () => {
        const peserta = JSON.parse (localStorage.getItem ('peserta'))
        const jadwal = (localStorage.getItem ('jadwal'))
        setKategori ((peserta.kategori).toLowerCase())

        let id_peserta = peserta.id
        let id_jadwal = jadwal
        let nilai = []
        let hukum = []

        if (peserta.kategori == 'tunggal') {   
            await axios.get (BASE_URL + `/api/tunggal/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (peserta.kategori == 'ganda') {
            await axios.get (BASE_URL + `/api/ganda/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (peserta.kategori == 'regu') {
            await axios.get (BASE_URL + `/api/regu/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
            })
        } else {
            console.log('gagal');
        }
        await axios.get (BASE_URL + `/api/hukum/tgr/jadwal/${id_jadwal}/${id_peserta}`)
        .then (res => {
            setHukum (res.data.data)
            hukum = (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        // hitung median
        let sort = nilai.sort ((a, b) => a.total_skor - b.total_skor)
        let n1 = sort [4]
        let n2 = sort [5]
        let x1 = n1.total_skor
        let x2 = n2.total_skor
        let median = (x1 + x2)/2
        setMedian (median)

        // hitung skor akhir
        let total = median - hukum.total
        setTotal (total)

        // hitung deviasi
        let arrayNilai = []
        let sum = 0
        for (let i = 0; i < nilai.length; i++) {
            let skorA = nilai [1]
            arrayNilai.push (skorA.skor_a)
            sum += (arrayNilai[i])
        }
        let deviasi = Math.sqrt (sum/arrayNilai.length)
        setDeviasi (deviasi)
    }

    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
        return ()  => {
            setPeserta (JSON.parse (localStorage.getItem ('peserta')))
            socket.emit ('init_data')
            socket.on ('getData', getNilai)
            socket.on ('change_data', ubah_data)
        }
    }, [])

    return (
    <>
    <div className="flex ">

      {/* awal konten utama */}
      <div className="w-full overflow-y-auto h-screen"> 
      
        {/* header */}
        <Navbar />
        {/* akhir header */}

        {/* konten utama */}
        <div className="bg-white text-white min-h-full">
            
            {/* wrapper keseluruhan */}
            <div className="w-4/5 mx-auto py-10 space-y-5">

                {/* wrapper info & aktif timer*/}
                <div className="flex justify-between ">
                    <div className="flex flex-row space-x-3">
                        {/* button back */}
                        <Link href={'./landingPageputra'} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                            <img className='p-3' src="../../svg/back.svg" />
                        </Link>
                    </div>
                    {/* info pesilat */}
                    <div className="flex flex-row items-center space-x-3 p-2 text-[#222954] text-end">
                        <div className="flex flex-col">
                            {(() => {
                                if (peserta.kategori === 'tunggal') {
                                    return (
                                        <span className='text-2xl font-bold'>{peserta.nama1}</span>
                                    )
                                } else if (peserta.kategori === 'ganda') {
                                    return (
                                        <>
                                            <span className='text-2xl font-bold'>{peserta.nama1}</span>
                                            <span className='text-2xl font-bold'>{peserta.nama2}</span>
                                        </>
                                    )
                                } else if (peserta.kategori === 'regu') {
                                    return (
                                        <>
                                            <span className='text-2xl font-bold'>{peserta.nama1}</span>
                                            <span className='text-2xl font-bold'>{peserta.nama2}</span>
                                            <span className='text-2xl font-bold'>{peserta.nama3}</span>
                                        </>
                                    )
                                }
                            })()}
                            <span className='text-lg font-normal'>{peserta.kontingen}</span>
                        </div>
                    </div>
                </div>

                {/* border table */}
                <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                    
                    {/* table skor juri */}
                    <table className='w-full table-fixed border-separate border-spacing-x-2'>
                        <thead className='bg-[#2C2F48]'>
                            <tr>
                                <th colSpan={2} className="border-2 border-[#2C2F48]">Juri</th>
                                <th className='border-2 border-[#2C2F48]'>1</th>
                                <th className='border-2 border-[#2C2F48]'>2</th>
                                <th className='border-2 border-[#2C2F48]'>3</th>
                                <th className='border-2 border-[#2C2F48]'>4</th>
                                <th className='border-2 border-[#2C2F48]'>5</th>
                                <th className='border-2 border-[#2C2F48]'>6</th>
                                <th className='border-2 border-[#2C2F48]'>7</th>
                                <th className='border-2 border-[#2C2F48]'>8</th>
                                <th className='border-2 border-[#2C2F48]'>9</th>
                                <th className='border-2 border-[#2C2F48]'>10</th>
                            </tr>
                        </thead> 
                        <tbody className='text-center text-[#2C2F48] font-medium'>
                            {/* Total skor */}
                            <tr className='text-[#2C2F48]'>
                                <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">Total Skor</td>
                                {nilai.map (item => (
                                    <td className='border-2 border-[#2C2F48]'>
                                        <span>
                                            {item.total_skor?.toFixed(2)}
                                        </span>
                                    </td>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                    
                    {/* wrapper waktu & hukuman */}
                    <div className="grid grid-cols-12 px-2 gap-x-2">
                        <div className='col-span-2'>
                            <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                                <span className='text-2xl font-semibold'>Median</span>
                            </div>
                            <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                                <span className='text-4xl font-bold'>{median.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className='col-span-2'>
                            <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                                <span className='text-2xl font-semibold'>Hukuman</span>
                            </div>
                            <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                                {/* {hukum.map (item => { */}
                                    <span className='text-4xl font-bold'>{hukum.total?.toFixed(2)}</span>
                                {/* })} */}
                            </div>
                        </div>
                        {/* Skor */}
                        <div className="col-span-8 grid grid-rows-2 text-center gap-y-2 px-2">
                            <div className="grid grid-cols-2 gap-x-4 content-center	">
                                <span className='text-xl font-semibold rounded-lg bg-[#2C2F48] py-2'>Skor Akhir</span>
                                <span className='text-xl font-semibold rounded-lg bg-white text-black border-2 border-[#2C2F48] py-2'>{total.toFixed(2)}</span>
                            </div>
                            <div className="grid grid-cols-2 gap-x-4 content-center	">
                                <span className='text-xl font-semibold rounded-lg bg-[#2C2F48] py-2'>Standart Deviasi</span>
                                <span className='text-xl font-semibold rounded-lg bg-white text-black border-2 border-[#2C2F48] py-2'>{deviasi?.toFixed(2)}</span>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
        <Footer />
      </div>
      {/* akhir konten utama */}
    </div>
    </>

  )
}

export default detailSelesai