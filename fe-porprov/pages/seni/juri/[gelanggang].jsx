import React, { useEffect, useState } from 'react'
import axios from 'axios'
import socketIo from 'socket.io-client'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import ModalJuri from '../components/modalJuri'
import { globalState } from '../../../context/context'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
// socket io
const socket = socketIo (BASE_URL, { forceNew:true, 'multiplex':false})

const detail = () => {
    
    // state kematian
    const router = useRouter()
    const { gelanggang } = router.query

    const [data, setData] = useState ([])
    // const [gelanggang, setGelanggang] = useState ([])
    const [showModalJuri, setShowModalJuri] = useState (false)
    const [nama, setNama] = useState ('')
    const [namaJuri, setNamaJuri] = useState ([])
    const [dataJuri, setDataJuri] = useState ([])


    const addModalBiru = (item) => {
        localStorage.setItem ('pesertaSeni', JSON.stringify (item.biru))
        localStorage.setItem ('jadwalSeni', JSON.stringify(item))
        localStorage.setItem ('jurus', 1) 
        
        let form = {
            id_jadwal : item.id,
            id_peserta : item.biru.id
        }
  
        if (item.kategori.toLowerCase() == 'tunggal') {   
            axios.post (BASE_URL + "/api/tunggal/dewan", form)
            .then ((res) => {
                setShowModalJuri (true)
                setNama ('')
                console.log(res.data.message);    
            })
            .catch ((err) => {
                console.log(err.response.data.message);
            })
        } else if (item.kategori.toLowerCase() === 'ganda') {
            axios.post (BASE_URL + `/api/ganda/dewan`, form)
            .then (res => {
                setShowModalJuri (true)
                setNama ('')
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (item.kategori.toLowerCase() === 'regu') {
            axios.post (BASE_URL + `/api/regu/dewan`, form)
            .then (res => {
                setShowModalJuri (true)
                setNama ('')
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (item.kategori.toLowerCase() === 'solo_kreatif') {
            axios.post (BASE_URL + `/api/solo_kreatif/dewan`, form)
            .then (res => {
                setShowModalJuri (true)
                setNama ('')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
            console.log('gagal');
        }
    }

    const addModalMerah = (item) => {
        localStorage.setItem ('pesertaSeni', JSON.stringify (item.merah))
        localStorage.setItem ('jadwalSeni', JSON.stringify(item))
        localStorage.setItem ('jurus', 1)
        
        let form = {
            id_jadwal : item.id,
            id_peserta : item.merah.id
        }
        if (item.kategori.toLowerCase() == 'tunggal') {   
            axios.post (BASE_URL + "/api/tunggal/dewan", form)
            .then ((res) => {
                setShowModalJuri (true)
                setNama ('')
                console.log(res.data.message);    
            })
            .catch ((err) => {
                console.log(err.response.data.message);
            })
        } else if (item.kategori.toLowerCase() === 'ganda') {
            axios.post (BASE_URL + `/api/ganda/dewan`, form)
            .then (res => {
                setShowModalJuri (true)
                setNama ('')
            console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (item.kategori.toLowerCase() === 'regu') {
            axios.post (BASE_URL + `/api/regu/dewan`, form)
            .then (res => {
                setShowModalJuri (true)
                setNama ('')
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (item.kategori.toLowerCase() === 'solo_kreatif') {
            axios.post (BASE_URL + `/api/solo_kreatif/dewan`, form)
            .then (res => {
                setShowModalJuri (true)
                setNama ('')
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else {
        console.log('gagal');
      }
    }

    const getData = () => {
        axios.get (BASE_URL + "/api/tgr/gel/" + gelanggang)
        .then (res => {
            setData (res.data.data)
        }) 
        .catch (err => {
            console.log(err.response.data.message);
        })
        console.log (BASE_URL + "/api/tgr/");
    }

    // const getGelanggang = () => {
    //     axios.get (BASE_URL + `/api/tgr`)
    //     .then (res => {
    //         setGelanggang (res.data.data)
    //     })
    //     .catch (err => {
    //         console.log(err.response.data.message);
    //     })
    // }

    const getJuri = () => {
        const juri = JSON.parse(localStorage.getItem ('juriSeni'))
        setDataJuri (juri)

        axios.get (BASE_URL + `/api/nama`)
        .then (res => {
            setNamaJuri (res.data.data)
        })
        .catch (err => [
            console.log(err.response.data.message)
        ]) 
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('juriSeni') === null) {
            router.push ('/seni/juri/login')
        }
    }

    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
        if (!router.isReady) return; 
        socket.emit ('init_data')
        socket.on ('getData', getData)
        socket.on ('change_data', ubah_data)
        isLogged ()
        getData()
        // getGelanggang ()
        getJuri ()
    }, [router.query.kategori, router.isReady])

    return (
        <>
            <div className="flex">

                {/* awal konten utama */}
                <div className="w-full overflow-y-auto h-screen"> 
                
                    {/* header */}
                    <Navbar />
                    {/* akhir header */}

                    {/* konten utama */}
                    <div className="bg-white text-white min-h-full">
                        {/* wrapper keseluruhan */}
                        <div className="w-11/12 mx-auto py-10">

                            {/* wrapper pertandingan information */}
                            <div className="grid grid-cols-2 gap-x-3 mb-8">
                                <div className="bg-[#222954] rounded-lg py-2 text-center">
                                    <h1 className='text-xl font-bold'>Gelanggang {gelanggang}</h1>
                                </div>
                                <div className="bg-[#222954] rounded-lg py-2 text-center">
                                    {(() => {
                                        if (dataJuri.username == 'juri1') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 1</h1>
                                            )
                                        } else if (dataJuri.username == 'juri2') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 2</h1>
                                            )
                                        } else if (dataJuri.username == 'juri3') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 3</h1>
                                            )
                                        } else if (dataJuri.username == 'juri4') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 4</h1>
                                            )
                                        } else if (dataJuri.username == 'juri5') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 5</h1>
                                            )
                                        } else if (dataJuri.username == 'juri6') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 6</h1>
                                            )
                                        } else if (dataJuri.username == 'juri7') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 7</h1>
                                            )
                                        } else if (dataJuri.username == 'juri8') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 8</h1>
                                            )
                                        } else if (dataJuri.username == 'juri9') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 9</h1>
                                            )
                                        } else if (dataJuri.username == 'juri10') {
                                            return (
                                                <h1 className='text-xl font-bold first-letter:uppercase'>Juri 10</h1>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>

                            {/* wrapper card pertandingan */}
                            {data.filter (a => a.selesai == false).map ((item, index) => (
                                <div key={index + 1} className="text-center rounded-lg shadow-lg border-2 border-[#2C2F48] mb-3">
                                <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                                    {(() => {
                                        if (item.kategori.toLowerCase() == 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-semibold'>PARTAI {item.partai} - Solo Kreatif - {item.jk} {item.kelas} - {item.babak}</span>
                                            )

                                            } else {
                                                return (
                                                <span className='text-xl font-semibold'>PARTAI {item.partai} - {item.kategori} - {item.jk} {item.kelas} - {item.babak}</span>

                                            )
                                        }
                                    })()}
                                </div>
                                {/* wrapper card */}
                                <div className="grid grid-cols-2 gap-x-7 p-3">
                                    {/* card pesilat biru */}
                                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                        {/* nama pesilat biru */}
                                        <div className="bg-blue-700 rounded-t-lg py-1 flex flex-col">
                                        {(() => {
                                            if (item.kategori.toLowerCase() == 'tunggal') {
                                            return (
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'ganda') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                                </>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'regu') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama3}</span>
                                                </>
                                                )
                                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                            )
                                            } else {
                                            console.log('gagal');
                                            }
                                        })()}
                                        </div>
                                        {/* kontingen pesilat merah */}
                                        <span className='font-medium texy-lg text-[#2C2F48]'>{item.biru.kontingen}</span>
                                        {/* action button */}
                                        <div className="px-7 pb-3">
                                            <button className='bg-[#39ac39] hover:bg-[#2f912f] py-2 text-lg font-semibold rounded-lg w-full' onClick={() => addModalBiru(item)}>Nilai Pertandingan</button>
                                        </div>
                                    </div>
                                    {/* card pesilat merah */}
                                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                        {/* nama pesilat merah */}
                                        <div className="bg-red-700 rounded-t-lg py-1 flex flex-col">
                                        {(() => {
                                            if (item.kategori.toLowerCase() == 'tunggal') {
                                            return (
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'ganda') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                                <span className='text-xl font-medium'>{item.merah.nama2}</span>
                                                </>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'regu') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                                <span className='text-xl font-medium'>{item.merah.nama2}</span>
                                                <span className='text-xl font-medium'>{item.merah.nama3}</span>
                                                </>
                                                )
                                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                            )
                                            } else {
                                            console.log('gagal');
                                            }
                                        })()}
                                    </div>
                                    {/* kontingen pesilat merah */}
                                    <span className='font-medium texy-lg text-[#2C2F48]'>{item.merah.kontingen}</span>
                                    {/* action button */}
                                    <div className="px-7 pb-3">
                                    <button className='bg-[#39ac39] hover:bg-[#2f912f] py-2 text-lg font-semibold rounded-lg w-full' onClick={() => addModalMerah(item)}>Nilai Pertandingan</button>
                                    </div>
                                  </div>   
                                </div>
                              </div>
                            ))}
                        </div>
                    </div>
                    <Footer />
                </div>
                {/* akhir konten utama */}
            </div>

            <globalState.Provider value={{ showModalJuri, setShowModalJuri, namaJuri, setNamaJuri }}>
                <ModalJuri />
            </globalState.Provider>
        </>  
    )
}

export default detail