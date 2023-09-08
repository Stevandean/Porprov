import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Link from 'next/link'
import { useRouter } from 'next/router';
import socketIo from 'socket.io-client'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer'
import TimerLayar from '../components/timerLayar';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// socket io
const socket = socketIo (BASE_URL)

const detailSelesai = () => {
    
    const router = useRouter ()

    // state data dari local storage
    const [peserta, setPeserta] = useState ([])
    const [jadwal, setJadwal] = useState ([])

    // state
    const [hukum, setHukum] = useState ([])
    const [nilai, setNilai] = useState([])
    const [nilaiSort, setNilaiSort] = useState ([])
    const [kategori, setKategori] = useState ('')
    const [median, setMedian] = useState (0)
    const [total, setTotal] = useState (0)
    const [deviasi, setDeviasi] = useState (0)

    const getNilai = async () => {
        const peserta = JSON.parse (localStorage.getItem ('pesertaSeni'))
        const jadwal = JSON.parse(localStorage.getItem ('jadwalSeni'))
        setKategori((peserta.kategori).toLowerCase())
        setJadwal (jadwal)

        let id_peserta = peserta.id
        let id_jadwal = jadwal.id
        let nilai = []
        let hukum = []

        if (peserta.kategori == 'tunggal') {   
            await axios.get (BASE_URL + `/api/nilai/tunggal/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilai (res.data.data)
                nilai = (res.data.data)
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
        } else if (peserta.kategori == 'solo_kreatif') {
            await axios.get (BASE_URL + `/api/nilai/solo_kreatif/${id_jadwal}/${id_peserta}`)
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
        } else {
            console.log('gagal');
        }

        console.log (BASE_URL + `/api/nilai/tunggal/jadwal/${id_jadwal}/${id_peserta}`);

        await axios.get (BASE_URL + `/api/seni/hukum/jadwal/${id_jadwal}/${id_peserta}`)
        .then (res => {
            setHukum (res.data.data)
            hukum = (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        if (peserta.kategori == 'tunggal') {
            axios.get (BASE_URL + `/api/nilai/tunggal/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (peserta.kategori == 'ganda') {
            axios.get (BASE_URL + `/api/nilai/ganda/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (peserta.kategori == 'regu') {
            axios.get (BASE_URL + `/api/nilai/regu/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (peserta.kategori == 'solo_kreatif') {
            axios.get (BASE_URL + `/api/nilai/solo_kreatif/jadwal/${id_jadwal}/${id_peserta}`)
            .then (res => {
                setNilaiSort (res.data.data)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('gagal');
        }

        // hitung median
        let sort = nilai.sort ((a, b) => a.total_skor - b.total_skor)
        let n1 = sort [4]
        let n2 = sort [5]
        let x1 = n1.total_skor
        let x2 = n2.total_skor
        let median = (x1 + x2)/2
        setMedian (median)

        // hitung skor akhir
        let total = median + hukum.total
        setTotal (total)

        // hitung deviasi
        let arrayNilai = []
        let sum = 0
        for (let i = 0; i < nilai.length; i++) {
            let skorA = nilai [1]
            arrayNilai.push (skorA.total_skor)
            sum += (arrayNilai[i])
        }
        let deviasi = Math.sqrt (sum/arrayNilai.length)
        setDeviasi (deviasi)
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('dewan') === null) {
         router.push ('/seni/dewan/login') 
        }
    }

    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
        setPeserta (JSON.parse (localStorage.getItem ('pesertaSeni')))
        socket.emit ('init_data')
        socket.on ('getData', getNilai)
        socket.on ('change_data', ubah_data)
        getNilai ()
        isLogged ()
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
                <div className="flex">
                    <div className="flex flex-row space-x-3">
                        {/* button back */}
                        <button onClick={() => router.back()} className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                            <img className='p-3' src="../../svg/back.svg" />
                        </button>
                    </div>
                    {/* info pesilat */}
                    <div className="flex flex-row items-center space-x-3 p-2 text-white w-full text-start">
                        <div className={peserta.id == jadwal?.id_biru ? "flex flex-col bg-blue-600 rounded-lg px-3 w-full py-2" : "flex flex-col bg-red-600 rounded-lg px-3 w-full py-2"}>
                            {(() => {
                                if (kategori == 'tunggal') {
                                    return(
                                        <span className='text-2xl font-semibold'>{peserta.nama1}</span>
                                    )
                                } else if (kategori == 'ganda') {
                                    return (
                                        <>
                                            <span className='text-2xl font-semibold'>{peserta.nama1} - {peserta.nama2}</span>
                                        </>
                                    )
                                } else if (kategori == 'regu') {
                                    return (
                                        <>
                                            <span className='text-2xl font-semibold'>{peserta.nama1} - {peserta.nama2} - {peserta.nama3}</span>
                                        </>
                                    )
                                } else if (kategori == 'solo_kreatif') {
                                    return (
                                        <>
                                            <span className='text-2xl font-semibold'>{peserta.nama1}</span>

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
                    {(() => {
                        if (peserta.kategori == 'tunggal' || peserta.kategori == 'regu') {
                            return (
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
                                        {/* Skor A */}
                                        <tr>
                                            <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">Skor A</td>
                                            {nilai.map ((item, index) => (
                                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                                    <span>
                                                        {item.skor_a?.toFixed(2)}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        {/* Skor B */}
                                        <tr>
                                            <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">Kemantapan</td>
                                            {nilai.map ((item, index) => (
                                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                                    <span>
                                                        {item.skor_b?.toFixed(2)}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        {/* Total skor */}
                                        <tr className='bg-[#2C2F48] text-white'>
                                            <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">Total Skor</td>
                                            {nilai.map ((item, index) => (
                                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                                    <span>
                                                        {item.total_skor?.toFixed(2)}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        } else if (peserta.kategori == 'ganda' || peserta.kategori == 'solo_kreatif') {
                            return (
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
                                        {/* technique */}
                                        <tr>
                                            <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">TEKNIK</td>
                                            {nilai.map ((item, index) => (
                                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                                    <span>
                                                        {item.technique?.toFixed(2)}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        {/* firmness */}
                                        <tr>
                                            <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">KEMANTAPAN</td>
                                            {nilai.map ((item, index) => (
                                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                                    <span>
                                                        {item.firmness?.toFixed(2)}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        {/* soulfulness */}
                                        <tr>
                                            <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">EKSPRESI</td>
                                            {nilai.map ((item, index) => (
                                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                                    <span>
                                                        {item.soulfulness?.toFixed(2)}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                        {/* Total skor */}
                                        <tr className='bg-[#2C2F48] text-white'>
                                            <td colSpan={2} className="text-lg font-semibold border-2 border-[#2C2F48]">Total Skor</td>
                                            {nilai.map ((item, index) => (
                                                <td key={index + 1} className='border-2 border-[#2C2F48]'>
                                                    <span>
                                                        {item.total_skor?.toFixed(2)}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    </tbody>
                                </table>
                            )
                        } else {
                            console.log(peserta.kategori);
                        }
                    })()}

                    {/* Table urutan juri */}
                    <table className='w-full table-fixed border-separate border-spacing-x-2 font-medium'>
                        <tbody className='text-center'>
                            <tr className='bg-[#2C2F48]'>
                                <th colSpan={2} rowSpan={2} className="text-lg border-2 border-[#2C2F48] ">urutan juri</th>
                                {nilai.sort ((a,b) => a.skor_a - b.skor_a).map ((item, index)=> (
                                    <th key={index + 1} className='border-2 border-[#2C2F48]'>
                                        {item.juri.no}
                                    </th>
                                ))}
                            </tr>
                            <tr className='text-[#2C2F48]'>
                                {nilai.sort ((a,b) => a.skor_a - b.skor_b).map ((item, index) => (
                                    <th key={index + 1} className='border-2 border-[#2C2F48]'>{item.total_skor?.toFixed(2)}</th>
                                ))}
                            </tr>
                        </tbody>
                    </table>
                    
                    {/* wrapper waktu & hukuman */}
                    <div className="grid grid-cols-12 px-2 gap-x-2">
                        {/* waktu & median */}
                        <div className="col-span-2 flex flex-col space-y-3">
                            {/* Waktu */}
                            <div>
                                <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                                    <span className='text-2xl font-semibold'>Waktu</span>
                                </div>
                                <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48] text-3xl font-semibold">
                                    {jadwal.id ? <TimerLayar id_peserta={peserta.id}/> : null}
                                </div>
                            </div>
                            {/* Median */}
                            <div>
                                <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                                    <span className='text-2xl font-semibold'>Median</span>
                                </div>
                                <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                                    <span className='text-4xl font-bold'>{median.toFixed(2)}</span>
                                </div>
                            </div>
                        </div>
                        {/* table hukuman */}
                        <div className="col-span-10">
                            <table className='w-full table-fixed'>
                                <thead className='bg-[#FF3030]'>
                                    <tr>
                                        <th colSpan={9} className='border-2 border-[#FF3030] py-3'>Hukuman</th>
                                        <th className='border-2 border-[#FF3030]'>Skor</th>
                                    </tr>
                                </thead>
                                {(() => {                                  
                                    if (kategori == 'tunggal') {
                                        return (
                                            <tbody className='text-[#FF3030] font-semibold'>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan melebihi toleransi waktu</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum1}</span>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan keluar gelanggang 10m x 10m</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum2}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Menjatuhkan senjata, menyentuh lantai</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum3}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Pakaian tidak sesuai aturan (Tanjak / samping jatuh, atasan - bawahan, samping - tanjak tidak 1 warna)</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum4}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Menahan gerakan lebih dari 5 detik</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum5}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    } else if (kategori === 'ganda') {
                                        return (
                                            <tbody className='text-[#FF3030] font-semibold'>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan melebihi toleransi waktu</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum1}</span>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan keluar gelanggang 10m x 10m</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum2}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Senjata jatuh tidak sesuai dengan sinopsis</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum3}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Senjata jatuh diluar gelanggang saat tim masih harus menggunakannya</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum4}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Pakaian tidak sesuai aturan. (Atasan - bawahan, samping - tanjak tidak 1 warna)</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum5}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Menahan gerakan lebih dari 5 detik</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum6}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    } else if (kategori == 'regu') {
                                        return (
                                            <tbody className='text-[#FF3030] font-semibold'>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan melebihi toleransi waktu</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum1}</span>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan keluar gelanggang 10m x 10m</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum2}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Pakaian tidak sesuai persyaratan (Sabuk putih jatuh)</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum3}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Menahan gerakan lebih dari 5 detik</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum4}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    } else if (kategori == 'solo_kreatif') {
                                        return (
                                            <tbody className='text-[#FF3030] font-semibold'>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan keluar gelanggang 10m x 10m</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum1}</span>
                                                    </td>
                                                    
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Senjata jatuh tidak sesuai sinopsis</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum2}</span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Senjata jatuh keluar gelanggang saat tim masih harus menggunakannya</td>
                                                    <td className='border-2 border-[#FF3030] text-center'>
                                                        <span>{hukum.hukum3}</span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        )
                                    }
                                })()}
                            </table>
                        </div>
                    </div>

                    {/* Skor */}
                    <div className="grid grid-rows-2 text-center gap-y-2 px-2">
                        <div className="grid grid-cols-2 gap-x-4">
                            <span className='text-xl font-semibold rounded-lg bg-[#2C2F48]'>Total Kebenaran</span>
                            <span className='text-xl font-semibold rounded-lg bg-white text-black border-2 border-[#2C2F48]'>{total.toFixed(2)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                            <span className='text-xl font-semibold rounded-lg bg-[#2C2F48]'>Skor Akhir</span>
                            <span className='text-xl font-semibold rounded-lg bg-white text-black border-2 border-[#2C2F48]'>{total.toFixed(2)}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                            <span className='text-xl font-semibold rounded-lg bg-[#2C2F48]'>Standart Deviasi</span>
                            <span className='text-xl font-semibold rounded-lg bg-white text-black border-2 border-[#2C2F48]'>{deviasi}</span>
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