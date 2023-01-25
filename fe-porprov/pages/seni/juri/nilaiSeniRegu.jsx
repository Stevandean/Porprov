import React, { useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import axios from 'axios';
import Router from 'next/router';
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const nilaiSeniRegu = () => {

    // socket io
    const socket = socketIo (BASE_URL)

    // state untuk ambil data dari local storage
    const [peserta, setPeserta] = useState ([])

    // ini state
    const [nilai,setNilai] = useState ([])
    const [count, setCount] = useState (1)
    const [jurus, setJurus] = useState (`${count}`)
    const [active, setActive] = useState (0)

    const getNilai = () => {
        const peserta = JSON.parse (localStorage.getItem ('peserta'))
        const jadwal = (localStorage.getItem ('jadwal'))
        const juri = JSON.parse (localStorage.getItem ('juri'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal
        let id_juri = juri.id

        axios.get (BASE_URL + `/api/regu/juri/${id_jadwal}/${id_peserta}/${id_juri}`)
        .then (res => {
            setNilai (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const naikJurus = () => {
        setCount (count + 1)
        localStorage.setItem ('jurus', (count + 1))
        setJurus (localStorage.getItem ('jurus'))
    }

    const kurangNilai = () => {
        const peserta = JSON.parse (localStorage.getItem ('peserta'))
        const jadwal = (localStorage.getItem ('jadwal'))
        const juri = JSON.parse (localStorage.getItem ('juri'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal
        let id_juri = juri.id
        
        if (count == 1) {
            let jurus1 = 0
                jurus1 = nilai.jurus1

            let form = {
                jurus1 : jurus1 + (-0.01)
            }

            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 2) {
            let jurus2 = 0
                jurus2 = nilai.jurus2

            let form = {
                jurus2 : jurus2 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 3) {
            let jurus3 = 0
                jurus3 = nilai.jurus3

            let form = {
                jurus3 : jurus3 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 4) {
            let jurus4 = 0
                jurus4 = nilai.jurus4

            let form = {
                jurus4 : jurus4 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 5) {
            let jurus5 = 0
                jurus5 = nilai.jurus5

            let form = {
                jurus5 : jurus5 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 6) {
            let jurus6 = 0
                jurus6 = nilai.jurus6
            
            let form = {
                jurus6 : jurus6 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 7) {
            let jurus7 = 0
                jurus7 = nilai.jurus7

            let form = {
                jurus7 : jurus7 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 8) {
            let jurus8 = 0
                jurus8 = nilai.jurus8
            
            let form = {
                jurus8 : jurus8 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 9) {
            let jurus9 = 0
                jurus9 = nilai.jurus9

            let form = {
                jurus9 : jurus9 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 10) {
            let jurus10 = 0
                jurus10 = nilai.jurus10

            let form = {
                jurus10 : jurus10 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 11) {
            let jurus11 = 0
                jurus11 = nilai.jurus11

            let form = {
                jurus11 : jurus11 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (count == 12) {
            let jurus12 = 0
                jurus12 = nilai.jurus12

            let form = {
                jurus12 : jurus12 + (-0.01)
            }
            
            axios.put (BASE_URL + `/api/regu/skor/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (res => {
                console.log(res.data.message);
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('gagal');
        }
    }

    const skorB = (b) => {
        setActive(b)
        const peserta = JSON.parse (localStorage.getItem ('peserta'))
        const jadwal = (localStorage.getItem ('jadwal'))
        const juri = JSON.parse (localStorage.getItem ('juri'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal
        let id_juri = juri.id

        let form = {
            skor_b : b
        }

        axios.put (BASE_URL + `/api/regu/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
        .then (
            socket.emit ('editData')
        )
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const selesai = () => {
        const peserta = JSON.parse (localStorage.getItem ('peserta'))
        const jadwal = (localStorage.getItem ('jadwal'))
        const juri = JSON.parse(localStorage.getItem ('juri'))
        const nama = (localStorage.getItem ('nama'))

        let id_peserta = peserta.id
        let id_jadwal = jadwal
        let id_juri = juri.id
        let nama_juri= nama

        let form = {
            nama_juri : nama_juri
        }

        if (confirm ('Anda yakin mengakhiri pertandingan?') == 1) {
            axios.put (BASE_URL + `/api/regu/juri/${id_jadwal}/${id_peserta}/${id_juri}`, form)
            .then (
                Router.back()
            )
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('batal selesai');
        }
    }

    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
        setPeserta (JSON.parse (localStorage.getItem ('peserta')))   
        localStorage.setItem ('jurus', (count))
        const socket = socketIo (BASE_URL)
        socket.connect();
        socket.emit ('init_data')
        socket.on ('getData', getNilai)
        socket.on ('change_data', ubah_data)

        return () =>{
            socket.disconnect();
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
                        
                        {/* info pesilat */}
                        <div className="flex flex-row items-center space-x-3 p-2 text-[#222954]">
                            <div className="flex flex-col">
                                <span className='text-2xl font-bold'>{peserta.nama1}</span>
                                <span className='text-2xl font-bold'>{peserta.nama2}</span>
                                <span className='text-2xl font-bold'>{peserta.nama3}</span>
                                <span className='text-lg font-normal'>{peserta.kontingen}</span>
                            </div>
                        </div>

                        {/* border table */}
                        <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                            {/* wrapper */}
                            <div className="grid grid-row-3 gap-y-4">

                                {/* skor A */}
                                <div className="grid grid-row-3">
                                    {/* title */}
                                    <div className="bg-[#2C2F48] rounded-lg py-2 text-center">
                                        <span className='text-xl font-bold uppercase'>skor a</span>
                                    </div>
                                    {/* urutan jurus */}
                                    <div className="border-2 border-[#2C2F48] rounded-lg py-2 text-center">
                                        <span className='text-xl font-bold uppercase text-[#2C2F48]'>jurus {count}</span>
                                    </div>
                                    {/* wrapper penilaian jurus */}
                                    <div className="grid grid-cols-12 border-2 border-[#2C2F48] rounded-lg text-center">
                                        {/* pengurangan nilai */}
                                        <div className="col-span-2 border-r-2 border-[#2C2F48] p-2 flex justify-center items-center">
                                            <button onClick={() => kurangNilai()} className="bg-[#2C2F48] hover:bg-[#4C4F6D] rounded-lg py-5 h-full w-full flex justify-center items-center">
                                                <span className='text-xl font-bold'>- 0,1</span>
                                            </button>
                                        </div>
                                        {/* deskripsi jurus */}
                                        <div className="col-span-8 p-2">
                                            <div className="text-[#2C2F48] rounded-lg flex flex-col font-semibold py-2">
                                                <span>Kesalahan dalam urutan gerakan</span>
                                                <span>kesalahan dalam teknik</span>
                                                <span>gerakan yang hilang</span>
                                                <span>senjata terlepas dari dari tangan, tetapi tidak menyentuh matras</span>
                                            </div>
                                        </div>
                                        {/* jurus berikutnya */}
                                        <div className="col-span-2 border-l-2 border-[#2C2F48] p-2 flex justify-center items-center">
                                            {(() => {
                                                if (count >= 12) {
                                                    return (
                                                        <button disabled onClick={() => kurangNilai()} className="bg-[#2C2F48] hover:bg-[#4C4F6D] rounded-lg py-5 h-full w-full flex justify-center items-center">
                                                            <span className='text-xl font-bold'>Naik Jurus </span>
                                                        </button>
                                                    )
                                                } else if (count < 12) {
                                                    return (
                                                        <button onClick={() => naikJurus()} className="bg-[#2C2F48] hover:bg-[#4C4F6D] rounded-lg py-5 h-full w-full flex justify-center items-center">
                                                            <span className='text-xl font-bold'>Naik Jurus</span>
                                                        </button>
                                                    )
                                                }
                                            })()}
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="grid grid-row-3 gap-y-2">
                                    {/* akurasi skor A */}
                                    <div className="grid grid-cols-12 gap-x-2">
                                        <div className="col-span-10 bg-[#2C2F48] rounded-lg text-center py-2">
                                            <span className='text-xl font-bold'>Akurasi Skor A</span>
                                        </div>
                                        <div className="col-span-2 border-2 border-[#2C2F48] rounded-lg text-center flex items-center justify-center">
                                            <span className='text-xl font-bold text-[#2C2F48]'>{nilai.skor_a}</span>
                                        </div>
                                    </div>

                                    {/* skor B */}
                                    <div className="grid grid-cols-12 gap-x-2">
                                        <div className="col-span-10 grid grid-rows-2 rounded-lg text-center border-2 border-[#2C2F48]">
                                            <div className="bg-[#2C2F48] flex justify-center items-center">
                                                <span className='text-xl font-bold'>Skor B</span>
                                            </div>
                                            {/* button nilai */}
                                            <div className="grid grid-cols-10 gap-x-2 p-2">
                                                <button className={active == 0.01 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.01)}>
                                                    0,01
                                                </button>
                                                <button className={active == 0.02 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.02)}>
                                                    0,02
                                                </button>
                                                <button className={active == 0.03 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.03)}>
                                                    0,03
                                                </button>
                                                <button className={active == 0.04 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.04)}>
                                                    0,04
                                                </button>
                                                <button className={active == 0.05 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.05)}>
                                                    0,05
                                                </button>
                                                <button className={active == 0.06 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.06)}>
                                                    0,06
                                                </button>
                                                <button className={active == 0.07 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.07)}>
                                                    0,07
                                                </button>
                                                <button className={active == 0.08 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.08)}>
                                                    0,08
                                                </button>
                                                <button className={active == 0.09 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.09)}>
                                                    0,09
                                                </button>
                                                <button className={active == 0.10 ? 'bg-green-500 p-2 rounded-lg text-lg font-semibold active:bg-green-500' : 'bg-gray-400 p-2 rounded-lg text-lg font-semibold active:bg-green-500'} onClick={() => skorB (0.10)}>
                                                    0,10
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-span-2 border-2 border-[#2C2F48] rounded-lg text-center flex items-center justify-center">
                                            <span className='text-xl font-bold text-[#2C2F48]'>{nilai.skor_b?.toFixed(2)}</span>
                                        </div>
                                    </div>

                                    {/* Total Skor */}
                                    <div className="grid grid-cols-12 gap-x-2">
                                        <div className="col-span-10 bg-[#2C2F48] rounded-lg text-center py-2">
                                            <span className='text-xl font-bold'>Total Skor</span>
                                        </div>
                                        <div className="col-span-2 border-2 border-[#2C2F48] rounded-lg text-center flex items-center justify-center bg-[#2C2F48]">
                                            <span className='text-xl font-bold'>{nilai.total_skor?.toFixed (2)}</span>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Selesai */}
                                <button onClick={() => selesai()} className="bg-yellow-500 text-center text-2xl font-bold py-2 rounded-lg">
                                    <span>Selesai</span>
                                </button>

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

export default nilaiSeniRegu