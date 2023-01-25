import axios from 'axios'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import Link from 'next/link'
import { globalState } from '../../../../../../context/context'
import Navbar from '../../../../components/navbar'
import Footer from '../../../../components/footer'
import ModalJuri from '../../../../components/modalJuri'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detail = () => {

    // socket io
    const socket = socketIo (BASE_URL, { forceNew:true, 'multiplex':false})

    const [data, setData] = useState ([])
    const [showModalJuri, setShowModalJuri] = useState (false)
    const [nama, setNama] = useState ('')
    const [namaJuri, setNamaJuri] = useState ([])

    // state kematian
    const router = useRouter()
    const { kategori } = router.query
    const { kelas } = router.query
    const { jk } = router.query
    const { babak } = router.query

    const addModalBiru = (item) => {
        localStorage.setItem ('peserta', JSON.stringify (item.biru))
        localStorage.setItem ('jadwal', (item.id))
        localStorage.setItem ('jurus', 1)


        setShowModalJuri (true)
        setNama ('')
    }

    const addModalMerah = item => {
        localStorage.setItem ('peserta', JSON.stringify (item.merah))
        localStorage.setItem ('jadwal', (item.id))
        localStorage.setItem ('jurus', 1)


        setShowModalJuri (true)
        setNama ('')
    }

    const getData = () => {
        axios.get (BASE_URL + "/api/tgr/bykelas/" + kategori + "/" + jk + "/" + kelas + "/" + babak)
        .then (res => {
            setData (res.data.data)
        }) 
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getJuri = () => {
        axios.get (BASE_URL + `/api/nama`)
        .then (res => {
            setNamaJuri (res.data.data)
        })
        .catch (err => [
            console.log(err.response.data.message)
        ]) 
    }

    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
        if (!router.isReady) return; 
        // socket.emit ('init_data')
        // socket.on ('getData', getData)
        // socket.on ('change_data', ubah_data)
        getData()
    }, [router.query.kategori, router.isReady])

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
                            {/* wrapper kategori & pool */}
                            <div className="flex">
                                {/* button back */}
                                <Link href={'/seni/juri/landingPage' + jk} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                                    <img className='p-3' src="../../../../../../svg/back.svg" />
                                </Link>
                                {/* kategori & pool */}
                                <div className="flex flex-col text-center m-auto space-y-3">
                                    <span className='text-4xl text-[#2C2F48] font-bold first-letter:uppercase'>{kategori}</span>
                                    <span className='bg-[#51607A] rounded-lg py-3 px-5 text-xl tracking-widest	'>{kelas} - {babak}</span>
                                </div>
                            </div>
            
                            {/* button proses & selesai */}
                            <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                                {data.map (item => (
                                    <div className="text-center rounded-lg shadow-lg">
                                        <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                                            <span className='text-xl font-semibold'>Partai {item.partai + 1} - {item.kelas} - {item.babak}</span>
                                        </div>
                                        {/* wrapper card */}
                                        <div className="grid grid-cols-2 gap-x-7 p-3">
                                            {/* card pesilat biru */}
                                            <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                            {/* nama pesilat biru */}
                                            <div className="bg-blue-700 rounded-t-lg py-1">
                                                {(() => {
                                                if (kategori.toLowerCase() === 'tunggal') {
                                                    return (
                                                    <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                    )
                                                } else if (kategori.toLowerCase() === 'ganda') {
                                                    return (
                                                    <span className='text-xl font-medium'>{item.biru.nama1} - {item.biru.nama2}</span>
                                                    )
                                                } else if (kategori.toLowerCase() === 'regu') {
                                                    return (
                                                    <span className='text-xl font-medium'>{item.biru.nama1} - {item.biru.nama2} - {item.biru.nama3}</span>
                                                    )
                                                } else {
                                                    console.log('gagal');
                                                }
                                                })()}
                                            </div>
                                            {/* kontingen pesilat biru */}
                                            <span className='font-medium texy-lg text-[#2C2F48]'>{item.biru.kontingen}</span>
                                            {/* action button */}
                                            <div className="px-7 pb-3">
                                                <button className='bg-[#2C2F48] py-2 rounded-lg w-full' onClick={() => addModalBiru(item)}>Nilai Pesilat</button>
                                            </div>
                                            </div>
                                            {/* card pesilat merah */}
                                            <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                            {/* nama pesilat merah */}
                                            <div className="bg-red-700 rounded-t-lg py-1">
                                                {(() => {
                                                if (kategori.toLowerCase() === 'tunggal') {
                                                    return (
                                                    <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                                    )
                                                } else if (kategori.toLowerCase() === 'ganda') {
                                                    return (
                                                    <span className='text-xl font-medium'>{item.merah.nama1} - {item.merah.nama2}</span>
                                                    )
                                                } else if (kategori.toLowerCase() === 'regu') {
                                                    return (
                                                    <span className='text-xl font-medium'>{item.merah.nama1} - {item.merah.nama2} - {item.merah.nama3}</span>
                                                    )
                                                }
                                                })()}
                                            </div>
                                            {/* kontingen pesilat merah */}
                                            <span className='font-medium texy-lg text-[#2C2F48]'>{item.merah.kontingen}</span>
                                            {/* action button */}
                                            <div className="px-7 pb-3">
                                                <button className='bg-[#2C2F48] py-2 rounded-lg w-full' onClick={() => addModalMerah(item)}>Nilai Pesilat</button>
                                            </div>
                                            </div>   
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                {/* akhir konten utama */}
            </div>

            <globalState.Provider value={{ showModalJuri, setShowModalJuri, nama, setNama, namaJuri, setNamaJuri }}>
                <ModalJuri />
            </globalState.Provider>

        </>  
    )
}

export default detail