import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const dewanSelesai = () => {

    // ini state
    const router = useRouter ()
    const [isLoading, setIsLoading] = useState(true)
    const [jadwalTanding, setJadwalTanding] = useState ([])
    const [nilaiTanding, setNilaiTanding] = useState ([])
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
        "tiga kali"
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
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/biru/${id_jadwal}/ii`)
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

    const getJadwal = () => {
        const jadwal = JSON.parse (localStorage.getItem ('jadwalTanding'))
        setJadwalTanding (jadwal)
    }

    const getNilaiTanding = () => {
        const jadwal = JSON.parse (localStorage.getItem ('jadwalTanding'))
        axios.get (BASE_URL + `/api/nilai/tanding/jadwal/` + jadwal.id)
        .then (res => {
            setNilaiTanding (res.data.data)
            setIsLoading(false)
            console.log(res.data.data);
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
        console.log(BASE_URL + `/api/nilai/tanding/jadwal/` + jadwal.id);
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

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('dewanTanding') === null) {
         router.push ('/tanding/dewan/login') 
        }
    }

    useEffect (() => {
        (async () => {
            const jadwal = localStorage.getItem ('jadwal')
            let id_jadwal = jadwal

            let babak = []
            await axios.get (BASE_URL + `/api/nilai/tanding/babakbyjadwal/${id_jadwal}`)
            .then (res => {
                babak = res.data.data
            })
            .catch (err => {
                console.log(err.message);
            })

            if (babak.length >= 1) {
                getJuriBiru1()
                getJuriMerah1()

            } 
            if (babak.length >= 2){
                getJuriBiru2()
                getJuriMerah2()
            } 
            if (babak.length >= 3){
                getJuriBiru3()
                getJuriMerah3()

            }
            getJadwal ()
            getNilaiTanding ()
            getPeringatan()
            // isLogged ()
        })();
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
                    <div className="w-11/12 mx-auto py-10">

                        {/* wrapper tanding information */}
                        <div className="grid grid-cols-3 gap-x-3 mb-8">
                            {/* partai */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>Partai {jadwalTanding.partai}</h1>
                            </div>
                            {/* kelas and kategori */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwalTanding.kelas} {jadwalTanding.jk} {jadwalTanding.golongan}</h1>
                            </div>
                            {/* babak */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwalTanding.babak}</h1>
                            </div>
                        </div>

                        {/* wrapper participant information */}
                        <div className="grid grid-cols-7 mb-8">
                            {/* sudut biru information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                <div className="py-2 px-5 col-span-4">
                                    <h1 className='text-xl font-bold'>{jadwalTanding.biru?.nama}</h1>
                                    <h1 className='text-xl font-bold'>{jadwalTanding.biru?.kontingen}</h1>
                                </div>
                                {/* total nilai */}
                                <div className="bg-blue-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwalTanding.total_biru}</h1>
                                </div>
                            </div>
                            <div></div>
                            {/* sudut merah information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                {/* total nilai  */}
                                <div className="bg-red-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwalTanding.total_merah}</h1>
                                </div>
                                <div className="py-2 px-5 col-span-4 flex flex-col items-end">
                                    <h1 className='text-xl font-bold'>{jadwalTanding.merah?.nama}</h1>
                                    <h1 className='text-xl font-bold'>{jadwalTanding.merah?.kontingen}</h1>
                                </div>
                            </div>
                        </div>

                        {isLoading ? 
                            <div role="status" className='flex justify-center mb-7'>
                                <svg aria-hidden="true" className="w-24 h-24 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </div>
                            :
                            null
                        }
                        {/* table nilai */}
                        {nilaiTanding.map ((item, index) => (
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
                                <tbody className='text-[#222954]'>
                                    {/* wrapper nilai juri 1 */}
                                    <tr>
                                        {/* total */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.nilai_biru?.total_poin}</td>

                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
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
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.babak}</td>

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
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.nilai_merah?.total_poin}</td>
                                    </tr>

                                    {/* wrapper nilai juri 2 */}
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
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">{item.nilai_biru?.poin_masuk}</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0] break-words">
                                                    {item.nilai_biru?.log_poin_masuk.map ((item, index) => (
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
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0] break-words">
                                                    {item.nilai_merah?.log_poin_masuk.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">{item.nilai_merah?.poin_masuk}</div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin jatuhan */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">{item.nilai_biru?.jatuhan}</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF] ">
                                                    {item.nilai_biru?.log_jatuhan.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">
                                                    {item.nilai_merah?.log_jatuhan.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">
                                                    {item.nilai_merah?.jatuhan}
                                                </div>
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
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.nilai_biru?.total_hukum}</div>
                                                {/* nilai hukuman */}
                                                <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1 ">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.nilai_biru?.log_binaan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">{item.nilai_biru?.log_teguran.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
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
                                                        {item.nilai_merah?.log_binaan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.nilai_merah.log_teguran.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {(()=>{
                                                            if(item.babak === "I"){
                                                                return(
                                                                    peringatan1merah.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }else if(item.babak === 'II'){
                                                                return(
                                                                    peringatan2merah.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }else if(item.babak === 'III'){
                                                                return(
                                                                    peringatan3merah.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }
                                                        })()}
                                                    </div>
                                                </div>
                                                {/* total hukuman */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.nilai_merah?.total_hukum}</div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        ))}

                        {/* Keputusan pemenang */}
                        <div className="bg-[#222954] text-center rounded-t-lg py-3">
                            <h1 className='text-2xl font-bold'>Keputusan Pemenang</h1>
                        </div>
                        
                        {/* wrapper keputusan pemenang */}
                        <div className={jadwalTanding.id_pemenang == jadwalTanding.id_peserta_biru ?  "bg-blue-600 text-2xl font-bold py-2 rounded-b-lg text-center mb-3" : "bg-red-600 text-2xl font-bold py-2 rounded-b-lg text-center mb-3"}>{jadwalTanding.keterangan}</div>

                        {/* wrapper back*/}
                        <button onClick={() => router.back ()} className="bg-green-600 hover:bg-green-700 col-span-2 py-3 text-center rounded-lg text-xl font-bold w-full">Kembali</button>

                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
        </>

    )
}

export default dewanSelesai