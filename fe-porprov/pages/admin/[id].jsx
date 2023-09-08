import React, { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '../component/navbar/navbar'
import Footer from './components/footer'
import {useReactToPrint} from 'react-to-print'
import ResultTanding from './components/ResultTanding'
import ReactPDF, { PDFDownloadLink } from '@react-pdf/renderer';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detailNilaiTanding = () => {

    // print pdf
    const componentRef = useRef ()
    const handlePrint = useReactToPrint ({
      content: () => componentRef.current, 
    })

    // state kematian
    const router = useRouter ()
    const { id } = router.query

    // ini state
    const [data, setData] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [jadwalBiru, setJadwalBiru] = useState ([])
    const [jadwalMerah, setJadwalMerah] = useState ([])

    const [juri1Biru1, setJuri1Biru1] = useState([])
    const [juri2Biru1, setJuri2Biru1] = useState([])
    const [juri3Biru1, setJuri3Biru1] = useState([])
    const [juri1Merah1, setJuri1Merah1] = useState([])
    const [juri2Merah1, setJuri2Merah1] = useState([])
    const [juri3Merah1, setJuri3Merah1] = useState([])
    const [juri1Biru2, setJuri1Biru2] = useState([])
    const [juri2Biru2, setJuri2Biru2] = useState([])
    const [juri3Biru2, setJuri3Biru2] = useState([])
    const [juri1Merah2, setJuri1Merah2] = useState([])
    const [juri2Merah2, setJuri2Merah2] = useState([])
    const [juri3Merah2, setJuri3Merah2] = useState([])
    const [juri1Biru3, setJuri1Biru3] = useState([])
    const [juri2Biru3, setJuri2Biru3] = useState([])
    const [juri3Biru3, setJuri3Biru3] = useState([])
    const [juri1Merah3, setJuri1Merah3] = useState([])
    const [juri2Merah3, setJuri2Merah3] = useState([])
    const [juri3Merah3, setJuri3Merah3] = useState([])

    const [peringatan1merah, setPeringatan1merah] = useState([])
    const [peringatan2merah, setPeringatan2merah] = useState([])
    const [peringatan3merah, setPeringatan3merah] = useState([])

    const [peringatan1biru, setPeringatan1biru] = useState([])
    const [peringatan2biru, setPeringatan2biru] = useState([])
    const [peringatan3biru, setPeringatan3biru] = useState([])

    // const getPeringatan  = async () =>{
    //     const jadwal = localStorage.getItem ('jadwal')
    //     let id_jadwal = jadwal
        
    //     let babak = []
    //     await axios.get(BASE_URL + `/api/nilai/tanding/babakbyjadwal/${id_jadwal}`)
    //     .then (res => {
    //         babak = res.data.data
    //     })
    //     .catch (err => {
    //         console.log(err.message);
    //     })

    //     if (babak.length === 1) {
    //         //get juri 1 merah
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
    //         .then (res => {
    //             setPeringatan1merah (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })

    //         //get juri 1 merah
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
    //         .then (res => {
    //             setPeringatan1biru (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //     } else if(babak.length === 2){
    //         //get juri 1 merah
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
    //         .then (res => {
    //             setPeringatan1merah (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //         //get juri 2 merah
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/ii`)
    //         .then (res => {
    //             setPeringatan2merah (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })

    //         //get juri 1 biru
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
    //         .then (res => {
    //             setPeringatan1biru (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //         //get juri 2 biru
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/ii`)
    //         .then (res => {
    //             setPeringatan2biru (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //     } else if (babak.length === 3){
    //         //get juri 1 merah
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
    //         .then (res => {
    //             setPeringatan1merah (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //         //get juri 1 merah
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/ii`)
    //         .then (res => {
    //             setPeringatan2merah (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/iii`)
    //         .then (res => {
    //             setPeringatan3merah (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })

    //         //get juri 1 biry
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
    //         .then (res => {
    //             setPeringatan1biru (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //         //get juri 2 biru
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/ii`)
    //         .then (res => {
    //             setPeringatan2biru (res.data.data)
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //         //get juri 3 biru
    //         await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/iii`)
    //         .then (res => {
    //             setPeringatan3biru (res.data.data)
    //             console.log(res.data.data);
    //         })
    //         .catch (err => {
    //             console.log(err.message);
    //         })
    //     }
    // }

    const getNilai = () => {
        axios.get (BASE_URL + `/api/nilai/tanding/jadwal/` + id)
        .then (res => {
            setData (res.data.data)
            console.log(res.data.data);
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }
    
    const getJadwal = () => {
        axios.get (BASE_URL + `/api/tanding/jadwal/` + id)
        .then (res => {
            console.log(res.data.data);

            setJadwal (res.data.data)
            setJadwalBiru (res.data.data.biru)
            setJadwalMerah (res.data.data.merah)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getPeringatan  = async () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        
        let babak = []
        await axios.get(BASE_URL + `/api/nilai/tanding/babakbyjadwal/${id_jadwal}`)
        .then (res => {
            babak = res.data.data
        })
        .catch (err => {
            console.log(err.message);
        })

        if (babak.length === 1) {
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })

            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if(babak.length === 2){
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 2 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })

            //get juri 1 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 2 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (babak.length === 3){
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/iii`)
            .then (res => {
                setPeringatan3merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })

            //get juri 1 biry
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 2 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 3 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/iii`)
            .then (res => {
                setPeringatan3biru (res.data.data)
                console.log(res.data.data);
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    const getJuriBiru1 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/biru/${id_jadwal}/i`)
        .then (res => {
            setJuri1Biru1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/biru/${id_jadwal}/i`)
        .then (res => {
            setJuri2Biru1 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/biru/${id_jadwal}/i`)
        .then (res => {
            setJuri3Biru1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriMerah1 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/merah/${id_jadwal}/i`)
        .then (res => {
            setJuri1Merah1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/merah/${id_jadwal}/i`)
        .then (res => {
            setJuri2Merah1 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/merah/${id_jadwal}/i`)
        .then (res => {
            setJuri3Merah1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriBiru2 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/biru/${id_jadwal}/ii`)
        .then (res => {
            setJuri1Biru2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/biru/${id_jadwal}/ii`)
        .then (res => {
            setJuri2Biru2 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log//3/biru/${id_jadwal}/ii`)
        .then (res => {
            setJuri3Biru2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriMerah2 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/merah/${id_jadwal}/ii`)
        .then (res => {
            setJuri1Merah2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/merah/${id_jadwal}/ii`)
        .then (res => {
            setJuri2Merah2 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/merah/${id_jadwal}/ii`)
        .then (res => {
            setJuri3Merah2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriBiru3 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/biru/${id_jadwal}/iii`)
        .then (res => {
            setJuri1Biru3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/biru/${id_jadwal}/iii`)
        .then (res => {
            setJuri2Biru3 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/biru/${id_jadwal}/iii`)
        .then (res => {
            setJuri3Biru3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriMerah3 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/merah/${id_jadwal}/iii`)
        .then (res => {
            setJuri1Merah3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/merah/${id_jadwal}/iii`)
        .then (res => {
            setJuri2Merah3 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/merah/${id_jadwal}/iii`)
        .then (res => {
            setJuri3Merah3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('admin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
        if (!router.isReady) return;
        getNilai ()
        getJadwal ()
        isLogged ()
        getPeringatan()
    }, [router.query.id, router.isReady])



    return (
        <>
            <div ref={componentRef} className="flex">

                {/* awal konten utama */}
                <div className="w-full h-screen"> 
                
                    {/* header */}
                    <Navbar />
                    {/* akhir header */}

                    {/* konten utama */}
                    <div className="bg-white text-white min-h-full">
                        {/* wrapper keseluruhan */}
                        <div className="w-11/12 mx-auto py-10">

                            {/* wrapper tanding information */}
                            <div className="grid grid-cols-3 gap-x-3 mb-3">
                                {/* partai */}
                                <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                    <h1 className='text-xl font-bold'>Partai {jadwal.partai}</h1>
                                </div>
                                {/* kelas and kategori */}
                                <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                    <h1 className='text-xl font-bold'>{jadwal.kelas} {jadwal.jk} {jadwal.golongan}</h1>
                                </div>
                                {/* babak */}
                                <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                    <h1 className='text-xl font-bold'>{jadwal.babak}</h1>
                                </div>
                            </div>

                            {/* wrapper participant information */}
                            <div className="grid grid-cols-7 mb-6">
                                {/* sudut biru information */}
                                <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                    <div className="py-2 px-5 col-span-4">
                                        <h1 className='text-xl font-bold'>{jadwalBiru.nama}</h1>
                                        <h1 className='text-xl font-bold'>{jadwalBiru.kontingen}</h1>
                                    </div>
                                    {/* total nilai */}
                                    <div className="bg-blue-600 flex justify-center items-center">
                                        <h1 className='text-4xl font-bold text-white'>{jadwal.total_biru}</h1>
                                    </div>
                                </div>
                                <div></div>
                                {/* sudut merah information */}
                                <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                    {/* nomor partai  */}
                                    <div className="bg-red-600 flex justify-center items-center">
                                        <h1 className='text-4xl font-bold text-white'>{jadwal.total_merah}</h1>
                                    </div>
                                    <div className="py-2 px-5 col-span-4 flex flex-col items-end">
                                        <h1 className='text-xl font-bold'>{jadwalMerah.nama}</h1>
                                        <h1 className='text-xl font-bold'>{jadwalMerah.kontingen}</h1>
                                    </div>
                                </div>
                            </div>

                            {/* table nilai */}
                            {data.map ((item, index) => (
                                <table key={index + 1} className='w-full table-fixed border-separate border-spacing-1 mb-4'>
                                    <thead>
                                        <tr>
                                            <th className='border-2 border-[#222954] rounded-lg py-3 bg-blue-600'>total</th>
                                            <th className='border-2 border-[#222954] rounded-lg bg-blue-600' colSpan={4}>Detail poin</th>
                                            <th className='border-2 border-[#222954] rounded-lg bg-yellow-300 text-[#222954]'>Babak</th>
                                            <th className='border-2 border-[#222954] rounded-lg bg-red-600' colSpan={4}>Detail poin</th>
                                            <th className='border-2 border-[#222954] rounded-lg bg-red-600'>total</th>
                                        </tr>
                                    </thead>
                                    <tbody key={index + 1} className='text-[#222954]'>
                                        {/* wrapper nilai juri 1 */}
                                        <tr>
                                            {/* total */}
                                            <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.nilai_biru.total_poin}</td>

                                            {/* wrapper detail poin biru */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600 text-end">
                                                    {(() =>{
                                                        if(item.babak === 'I'){
                                                            return(
                                                                juri1Biru1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri1Biru2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri1Biru3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                    
                                                    </div>
                                                    {/* urutan juri */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                                </div>
                                            </td>

                                            {/* babak */}
                                            <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>
                                                {item.babak}
                                            </td>

                                            {/* wrapper detail poin merah */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* urutan juri */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                    {(()=>{
                                                        if(item.babak === "I"){
                                                            return(
                                                                juri1Merah1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri1Merah2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri1Merah3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                    </div>
                                                </div>
                                            </td>

                                            {/* total */}
                                            <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.nilai_merah.total_poin}</td>
                                        </tr>

                                        {/* wrapper nilai juri 2 */}
                                        <tr>
                                            {/* wrapper detail poin biru */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600 text-end">
                                                    {(() =>{
                                                        if(item.babak === 'I'){
                                                            return(
                                                                juri2Biru1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri2Biru2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri2Biru3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                    </div>
                                                    {/* urutan juri */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 2</div>
                                                </div>
                                            </td>
                                            {/* wrapper detail poin merah */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* urutan juri */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 2</div>
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                    {(()=>{
                                                        if(item.babak === "I"){
                                                            return(
                                                                juri2Merah1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri2Merah2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri2Merah3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* wrapper nilai juri 3 */}
                                        <tr>
                                            {/* wrapper detail poin biru */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                        {(() =>{
                                                        if(item.babak === 'I'){
                                                            return(
                                                                juri3Biru1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri3Biru2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri3Biru3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                    </div>
                                                    {/* urutan juri */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 3</div>
                                                </div>
                                            </td>
                                            {/* wrapper detail poin merah */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* urutan juri */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 3</div>
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                    {(()=>{
                                                        if(item.babak === "I"){
                                                            return(
                                                                juri3Merah1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri3Merah2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri3Merah3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* wrapper poin masuk */}
                                        <tr>
                                            {/* wrapper detail poin biru */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2 text-end">
                                                    {/* total nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">{item.nilai_biru.poin_masuk}</div>
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0]">
                                                        {item.nilai_biru.log_poin_masuk.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    {/* nama poin */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                                </div>
                                            </td>
                                            {/* wrapper detail poin merah */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* nama poin */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0]">
                                                        {item.nilai_merah.log_poin_masuk.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    {/* total nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">
                                                    {item.nilai_merah.poin_masuk}
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* wrapper poin jatuhan */}
                                        <tr>
                                            {/* wrapper detail poin */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2 text-end">
                                                    {/* total nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">{item.nilai_biru.jatuhan}</div>
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">
                                                        {item.nilai_biru.log_jatuhan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    {/* nama poin */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                                </div>
                                            </td>
                                            {/* wrapper detail poin */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* nama poin */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                                    {/* nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">
                                                        {item.nilai_merah.log_jatuhan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    {/* total nilai */}
                                                    <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">{item.nilai_merah.jatuhan}</div>
                                                </div>
                                            </td>
                                        </tr>

                                        {/* wrapper poin hukuman */}
                                        <tr>
                                            {/* wrapper detail poin biru */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* total hukuman */}
                                                    <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.nilai_biru.total_hukum}</div>
                                                    {/* nilai hukuman */}
                                                    <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1 text-end">
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                            {item.nilai_biru.log_binaan.map ((item, index) => (
                                                                <span key={index + 1}>{item.poin}</span>
                                                            ))}
                                                        </div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                            {item.nilai_biru.log_teguran.map ((item, index) => (
                                                                <span key={index + 1}>{item.poin}</span>
                                                            ))}
                                                        </div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                            {(()=>{
                                                                if(item.babak === "I"){
                                                                    return(
                                                                        peringatan1biru.map ((item, index) => (
                                                                            <span key={index + 1}>{item.poin}, </span>
                                                                        ))
                                                                    )
                                                                }else if(item.babak === 'II'){
                                                                    return(
                                                                        peringatan2biru.map ((item, index) => (
                                                                            <span key={index + 1}>{item.poin}, </span>
                                                                        ))
                                                                    )
                                                                }else if(item.babak === 'III'){
                                                                    return(
                                                                        peringatan3biru.map ((item, index) => (
                                                                            <span key={index + 1}>{item.poin}, </span>
                                                                        ))
                                                                    )
                                                                }
                                                            })()}
                                                        </div>
                                                    </div>
                                                    {/* nama hukuman */}
                                                    <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                                    </div>
                                                </div>
                                            </td>
                                            {/* wrapper detail poin merah */}
                                            <td className='text-lg font-semibold' colSpan={4}>
                                                {/* detail nilai */}
                                                <div className="grid grid-cols-6 gap-x-2">
                                                    {/* nilai hukuman */}
                                                    <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                                    </div>
                                                    {/* nama hukuman */}
                                                    <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1">
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                            {item.nilai_merah.log_binaan.map ((item, index) => (
                                                                <span key={index + 1}>{item.poin}</span>
                                                            ))}
                                                        </div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                            {item.nilai_merah.log_teguran.map ((item, index) => (
                                                                <span key={index + 1}>{item.poin}</span>
                                                            ))}
                                                        </div>
                                                        <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                            {(()=>{
                                                                if(item.babak === "I"){
                                                                    return(
                                                                        peringatan1biru.map ((item, index) => (
                                                                            <span key={index + 1}>{item.poin}, </span>
                                                                        ))
                                                                    )
                                                                }else if(item.babak === 'II'){
                                                                    return(
                                                                        peringatan2biru.map ((item, index) => (
                                                                            <span key={index + 1}>{item.poin}, </span>
                                                                        ))
                                                                    )
                                                                }else if(item.babak === 'III'){
                                                                    return(
                                                                        peringatan3biru.map ((item, index) => (
                                                                            <span key={index + 1}>{item.poin}, </span>
                                                                        ))
                                                                    )
                                                                }
                                                            })()}
                                                        </div>
                                                    </div>
                                                    {/* total hukuman */}
                                                    <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.nilai_merah.total_hukum}</div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            ))}

                            <div className="border-2 border-black rounded-lg p-2 mb-3">

                                {/* Keputusan pemenang */}
                                <div className="bg-[#222954] text-center rounded-t-lg py-2">
                                    <h1 className='text-2xl font-bold'>Keputusan Pemenang</h1>
                                </div>
                                
                                {/* wrapper keputusan pemenang */}
                                {(() => {
                                    if (jadwal.id_pemenang == jadwal.id_biru) {
                                        return (
                                            <div className="bg-blue-600 text-2xl font-bold py-2 rounded-b-lg text-center">{jadwal.keterangan}</div>
                                        )
                                    } else if (jadwal.id_pemenang == jadwal.id_merah) {
                                        return (
                                            <div className="bg-red-600 text-2xl font-bold py-2 rounded-b-lg text-center">{jadwal.keterangan}</div>
                                        )
                                    }
                                })()}

                            </div>

                            {/* wrapper back and selesai */}
                            <button onClick={() => handlePrint ()} className="bg-red-600 hover:bg-red-700 py-2 text-center rounded-lg text-xl font-bold w-full mb-2">Print</button>
                            <button onClick={() => router.back ()} className="bg-green-600 hover:bg-green-700 py-2 text-center rounded-lg text-xl font-bold w-full">Kembali</button>
                        </div>
                    </div>
                    <Footer />
                </div>
                {/* akhir konten utama */}
            </div>
        </>

    )
}

export default detailNilaiTanding