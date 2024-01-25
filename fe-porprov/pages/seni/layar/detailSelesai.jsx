import React, { useState, useEffect, useContext } from 'react'
import socketIo from 'socket.io-client'
import axios from 'axios'
import Link from 'next/link'
import { globalState } from '../../../context/context'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer'
import TimerLayar from '../components/timerLayar'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo.connect(BASE_URL)

const detailSelesai = () => {

    // state data dari local storage
    const [peserta, setPeserta] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const router = useRouter ()


    // state
    const {duration, setDuration} = useContext (globalState)
    const {running, setRunning} = useContext (globalState)
    const [hukum, setHukum] = useState ([])
    const [nilai, setNilai] = useState([])
    const [nilaiSort, setNilaiSort] = useState ([])
    const [kategori, setKategori] = useState ('')
    const [babak, setBabak] = useState ([])
    const [median, setMedian] = useState (0)
    const [total, setTotal] = useState (0)
    const [deviasi, setDeviasi] = useState (0)

    const start = () => {
        setDuration (1000)
        setRunning (true)
    }

    const stop = () => {
        setRunning (false)
    }

    const getNilai = async () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse (localStorage.getItem ('jadwalSeni'))
        const babak = (localStorage.getItem ('babak'))
        setPeserta(peserta)
        setJadwal(jadwal)

        // console.log(jadwal);

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let nilai = []
        let hukum = []

        if (peserta.kategori == 'tunggal') {   
            await axios.get (BASE_URL + `/api/nilai/tunggal/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
                // console.log(nilai);
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (peserta.kategori == 'ganda') {
            await axios.get (BASE_URL + `/api/nilai/ganda/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (peserta.kategori == 'regu') {
            await axios.get (BASE_URL + `/api/nilai/regu/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (peserta.kategori == 'solo_kreatif') {
            await axios.get (BASE_URL + `/api/nilai/solo_kreatif/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
        }
        // console.log(peserta.kategori);

        //nilai berdasarkan besar nilai
        if (peserta.kategori == 'tunggal') {
            await axios.get (BASE_URL + `/api/nilai/tunggal/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
                nilai = (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (peserta.kategori == 'ganda') {
            await axios.get (BASE_URL + `/api/nilai/ganda/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
                nilai = res.data.data
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (peserta.kategori == 'regu') {
            await axios.get (BASE_URL + `/api/nilai/regu/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
                nilai = res.data.data
                
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (peserta.kategori == 'solo_kreatif') {
            await axios.get (BASE_URL + `/api/nilai/solo_kreatif/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
                nilai = res.data.data
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('gagal');
        }

        await axios.get (BASE_URL + `/api/seni/hukum/jadwal/${id_jadwal}/${id_peserta}`)
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
        let x1 = n1?.total_skor
        let x2 = n2?.total_skor
        let median = (x1 + x2)/2
        setMedian (median)

        // hitung skor akhir
        let total = median + hukum?.total
        setTotal (total)

        // hitung deviasi
        let arrayNilai = []
        let sum = 0
        for (let i = 0; i < nilai.length; i++) {
            let skorA = nilai [i]
            arrayNilai.push (skorA.total_skor)
            sum += (arrayNilai[i])
        }
        let deviasi = Math.sqrt (sum/arrayNilai.length)
        setDeviasi (deviasi)
    }

    //socket    
    const [isConnected, setIsConnected] = useState(socket.connected);
    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            // console.log("connected");
            // console.log(isConnected);   
        }
        // if (socket.connected === false) {
        //     socket.connect({'forceNew': true});
        //     console.log(isConnected);   
        // }
    
        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, []);

    useEffect(() => {
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        const user = JSON.parse(localStorage.getItem('user'))
        let data ={
            user: user.username,
            id_jadwal: jadwal.id
        }
        socket.emit('joinSeni', data)
    
        return () => {
            socket.off('joinSeni', data)
            socket.close()
        }
    }, [])

    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
        setPeserta (JSON.parse (localStorage.getItem ('pesertaSeni')))
        socket.on('getDewanLayar', getNilai)
        // socket.emit ('init_data')
        // socket.on ('getData', getNilai)
        // socket.on ('change_data', ubah_data)
        socket.on('start_seni', start)
        socket.on('stop_seni', stop)
        getNilai()
    }, [isConnected === true])

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
            <div className="w-11/12 mx-auto py-10 space-y-5">

                {/* wrapper info & aktif timer*/}
                <div className="flex flex-col gap-y-3">
                    <div className="flex justify-between space-x-3">
                        {/* button back */}
                        <button onClick={() => router.back()} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                            <img className='p-3' src="../../svg/back.svg" />
                        </button>
                        <div className="bg-[#222954] py-2 px-8 rounded-lg flex flex-col jusitfy-center items-center w-full">
                            <span className='text-3xl font-semibold uppercase'>{peserta.kategori} - {peserta.kelas} {peserta.jk} - {jadwal.babak}</span>
                        </div>
                    </div>
                    {/* info pesilat */}
                    <div className={babak.id_peserta_biru == peserta.id ? " grid grid-cols-12 gap-x-3" : "grid grid-cols-12 gap-x-3"}>
                        <div className={jadwal.id_peserta_biru == peserta.id ? "flex flex-col justify-start rounded-lg col-span-10 bg-blue-700 px-5 py-2" : "flex flex-col justify-start rounded-lg col-span-10 bg-red-700 px-5 py-2"}>
                            {(() => {
                                if (peserta.kategori === 'tunggal') {
                                    return (
                                        <span className='text-2xl font-bold'>{peserta.nama1}</span>
                                    )
                                } else if (peserta.kategori === 'ganda') {
                                    return (
                                        <>
                                            <span className='text-2xl font-bold'>{peserta.nama1} - {peserta.nama2}</span>
                                        </>
                                    )
                                } else if (peserta.kategori === 'regu') {
                                    return (
                                        <>
                                            <span className='text-2xl font-bold'>{peserta.nama1} - {peserta.nama2} - {peserta.nama3}</span>
                                        </>
                                    )
                                } else if (peserta.kategori === 'solo_kreatif') {
                                    <span className='text-2xl font-bold'>{peserta.nama1}</span>
                                }
                            })()}
                            <span className='text-lg font-normal'>{peserta.kontingen}</span>
                        </div>
                        <div className="bg-[#222954] col-span-2 flex justify-center items-center text-4xl font-bold rounded-lg">
                            {jadwal ? <TimerLayar id_jadwal={jadwal.id} id_peserta={peserta.id}/> : null}
                        </div>
                    </div>
                    
                </div>
                {/* table skor juri */}
                <table className='w-full table-fixed border-separate border-spacing-x-2'>
                    <thead className='bg-[#2C2F48]'>
                        <tr>
                            <th colSpan={2} className="border-2 border-[#2C2F48]">JURI</th>
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
                            <td colSpan={2} className="text-2xl font-semibold border-2 border-[#2C2F48]">Total Skor</td>
                            {nilai.map ((item, index) => (
                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                    <span className='text-3xl font-bold'>
                                        {item.total_skor?.toFixed(2)}
                                    </span>
                                </td>
                            ))}
                        </tr>
                    </tbody>
                </table>

                {/* Table urutan juri */}
                <table className='w-full table-fixed border-separate border-spacing-x-2 font-medium'>
                    <tbody className='text-center'>
                            <tr className='bg-[#2C2F48]'>
                                <th colSpan={2} rowSpan={2} className="text-lg border-2 border-[#2C2F48] ">Urutan Nilai</th>
                                {nilaiSort.sort ((a,b) => a.total - b.total).map ((item )=> (
                                    <th className=' font-bold'>
                                        {item.juri.no}
                                    </th>
                                ))}
                            </tr>
                            <tr className='text-[#2C2F48]'>
                                {nilaiSort.sort ((a,b) => a.total - b.total).map ((item, index) => {
                                    if (nilaiSort[5].id == item.id) {
                                        return(
                                            <th key={index+1} className='border-2 border-[#2C2F48] text-3xl font-bold bg-yellow-300'>{(item.total_skor).toFixed(2)}</th>
                                        )
                                    }
                                    if (nilaiSort[4].id == item.id) {
                                        return(
                                            <th key={index+1} className='border-2 border-[#2C2F48] text-3xl font-bold bg-yellow-300'>{(item.total_skor).toFixed(2)}</th>
                                        )
                                    }else{
                                        return(
                                            <th key={index+1} className='border-2 border-[#2C2F48] text-3xl font-bold'>{(item.total_skor).toFixed(2)}</th>
                                        )
                                    }
                                })}
                            </tr>
                    </tbody>
                </table>
                
                {/* wrapper waktu & hukuman */}
                <div className="grid grid-cols-4     px-2 gap-x-2">
                    <div className='col-span-2'>
                        <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                            <span className='text-2xl font-semibold'>Median</span>
                        </div>
                        <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                            <span className='text-4xl font-bold'>{median?.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                            <span className='text-2xl font-semibold'>Hukuman</span>
                        </div>
                        <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                            {/* {hukum.map (item => { */}
                                <span className='text-4xl font-bold'>{hukum?.total?.toFixed(2)}</span>
                            {/* })} */}
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                            <span className='text-2xl font-semibold'>Skor Akhir</span>
                        </div>
                        <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                            <span className='text-4xl font-bold'>{total?.toFixed(2)}</span>
                        </div>
                    </div>
                    <div className='col-span-2'>
                        <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                            <span className='text-2xl font-semibold'>Standart Deviasi</span>
                        </div>
                        <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                            {/* {hukum.map (item => { */}
                                <span className='text-4xl font-bold'>{deviasi}</span>
                            {/* })} */}
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