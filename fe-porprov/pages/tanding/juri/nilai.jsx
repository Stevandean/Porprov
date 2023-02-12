import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const nilai = () => {

    const router = useRouter ()
    
    // ini state
    const [data, setData] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [jadwalBiru, setJadwalBiru] = useState ([])
    const [jadwalMerah, setJadwalMerah] = useState ([])
    const [dataJuri, setDataJuri] = useState ([])

    const getNilai = () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        axios.get (BASE_URL + `/api/nilai/tanding/jadwal/${id_jadwal}`)
        .then (res => {
            setData (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJadwal = () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        axios.get (BASE_URL + `/api/tanding/${id_jadwal}`)
        .then (res => {
            setJadwal (res.data.data)
            setJadwalBiru (res.data.data.biru)
            setJadwalMerah (res.data.data.merah)
        })
    }

    const getJuri = () => {
        const juri = JSON.parse (localStorage.getItem ('juri'))
        setDataJuri (juri)
    }

    const tambahPukulan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('juri'))

        // babak 1
        if (e == 'tambahPukulanBiru1') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPukulanMerah1') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahPukulanBiru2') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPukulanMerah2') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        //babak 3
        else if (e == 'tambahPukulanBiru3') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'III',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPukulanMerah3') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'III',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    const tambahTendangan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('juri'))

        // babak 1
        if (e == 'tambahTendanganBiru1') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTendanganMerah1') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahTendanganBiru2') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTendanganMerah2') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahTendanganBiru3') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'III',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTendanganMerah3') {
            let form = {
                id_jadwal : jadwal,
                id_juri : juri,
                babak : 'III',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/juri`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    const deleteNilai = (e) => {
        const jadwal = localStorage.getItem('jadwal')
        const juri = JSON.parse (localStorage.getItem ('juri'))

        let id_jadwal = jadwal
        let id_juri = juri.id

        if (e == 'hapusNilaiBiru') {
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/juri/${id_juri}`)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusNilaiMerah') {
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/juri/${id_juri}`)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    const selesai = () => {
        if (confirm('Anda yakin mengakhiri pertandingan?') == 1) {
            router.back()
        } else {
            console.log('batal selesai');
        }
    }

    useEffect (() => {
        getNilai ()
        getJadwal ()
        getJuri ()
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
                    <div className="w-9/12 mx-auto py-10 space-y-10">
                        {/* wrapper tanding information */}
                        <div className="grid grid-cols-3 gap-x-2 text-center">
                            <div className="bg-[#222954] rounded-lg">
                                <h1 className='text-xl font-semibold py-1.5'>Partai {jadwal.partai}</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg">
                                <h1 className='text-xl font-semibold py-1.5'>{jadwal.jk} {jadwal.kelas}</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg">
                                <h1 className='text-xl font-semibold py-1.5'>{jadwal.babak}</h1>
                            </div>
                        </div>
                        {/* wrapper pesilat information */}
                        <div className="grid grid-cols-7">
                            {/* pesilat biru information */}
                            <div className="col-span-3 bg-blue-600 rounded-lg py-1.5 px-4 text-white flex flex-col">
                                <h1 className='text-xl font-semibold'>{jadwalBiru.nama}</h1>
                                <h1 className='tracking-wider'>{jadwalBiru.kontingen}</h1>
                            </div>
                            <div></div>
                            {/* pesilat biru information */}
                            <div className="col-span-3 bg-red-600 rounded-lg py-1.5 px-4 text-white flex flex-col items-end">
                                <h1 className='text-xl font-semibold'>{jadwalMerah.nama}</h1>
                                <h1 className='tracking-wider'>{jadwalMerah.kontingen}</h1>
                            </div>
                        </div>
                        {/* table nilai */}
                        <table className='w-full table-fixed'>
                            <thead>
                                <tr>
                                    <th className='border-2 border-[#222954] bg-blue-600 py-1.5' colSpan={3}>Nilai</th>
                                    <th className='border-2 border-[#222954] text-[#222954]'>Babak</th>
                                    <th className='border-2 border-[#222954] bg-red-600' colSpan={3}>Nilai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* nilai babak 1 */}
                                {data.map ((item, index) => (
                                    <tr key={index + 1}>
                                        {/* nilai sudut biru */}
                                        <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                            {(() => {
                                                if (dataJuri.username == 'juri1') {
                                                    return (
                                                        <div className="flex flex-row pl-4 gap-x-1">
                                                            {item.poin_biru.log_juri1.map ((item, index) => (
                                                                <>
                                                                {(() => {
                                                                    if (item.masuk == false) {
                                                                        return (
                                                                            <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                            </s>
                                                                        )
                                                                    } else if (item.masuk == true) {
                                                                        return (
                                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                        )
                                                                    }
                                                                })()}
                                                                </>
                                                            ))}
                                                        </div>
                                                    )
                                                } else if (dataJuri.username == 'juri2') {
                                                    return (
                                                        <div className="flex flex-row pl-4 gap-x-1">
                                                            {item.poin_biru.log_juri2.map ((item, index) => (
                                                                <>
                                                                {(() => {
                                                                    if (item.masuk == false) {
                                                                        return (
                                                                            <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                            </s>
                                                                        )
                                                                    } else if (item.masuk == true) {
                                                                        return (
                                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                        )
                                                                    }
                                                                })()}
                                                                </>
                                                            ))}
                                                        </div>
                                                    )
                                                } else if (dataJuri.username == 'juri3') {
                                                    return (
                                                        <div className="flex flex-row pl-4 gap-x-1">
                                                            {item.poin_biru.log_juri3.map ((item, index) => (
                                                                <>
                                                                {(() => {
                                                                    if (item.masuk == false) {
                                                                        return (
                                                                            <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                            </s>
                                                                        )
                                                                    } else if (item.masuk == true) {
                                                                        return (
                                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                        )
                                                                    }
                                                                })()}
                                                                </>
                                                            ))}
                                                        </div>
                                                    )
                                                }
                                            })()}
                                        </td>
                                        {/* babak */}
                                        <td className='border-2 border-[#222954]'>
                                            <h1 className='text-2xl font-bold text-[#222954] flex justify-center items-center'>{item.babak}</h1>
                                        </td>
                                        {/* nilai sudut merah */}
                                        <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                            {(() => {
                                                if (dataJuri.username == 'juri1') {
                                                    return (
                                                        <div className="flex flex-row pl-4 gap-x-1">
                                                            {item.poin_merah.log_juri1.map ((item, index) => (
                                                                <>
                                                                {(() => {
                                                                    if (item.masuk == false) {
                                                                        return (
                                                                            <s key={index + 1} className='text-lg font-bold text-red-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                            </s>
                                                                        )
                                                                    } else if (item.masuk == true) {
                                                                        return (
                                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                        )
                                                                    }
                                                                })()}
                                                                </>
                                                            ))}
                                                        </div>
                                                    )
                                                } else if (dataJuri.username == 'juri2') {
                                                    return (
                                                        <div className="flex flex-row pl-4 gap-x-1">
                                                            {item.poin_merah.log_juri2.map ((item, index) => (
                                                                <>
                                                                {(() => {
                                                                    if (item.masuk == false) {
                                                                        return (
                                                                            <s key={index + 1} className='text-lg font-bold text-red-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                            </s>
                                                                        )
                                                                    } else if (item.masuk == true) {
                                                                        return (
                                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                        )
                                                                    }
                                                                })()}
                                                                </>
                                                            ))}
                                                        </div>
                                                    )
                                                } else if (dataJuri.username == 'juri3') {
                                                    return (
                                                        <div className="flex flex-row pl-4 gap-x-1">
                                                            {item.poin_merah.log_juri3.map ((item, index) => (
                                                                <>
                                                                {(() => {
                                                                    if (item.masuk == false) {
                                                                        return (
                                                                            <s key={index + 1} className='text-lg font-bold text-red-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                            </s>
                                                                        )
                                                                    } else if (item.masuk == true) {
                                                                        return (
                                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                        )
                                                                    }
                                                                })()}
                                                                </>
                                                            ))}
                                                        </div>
                                                    )
                                                }
                                            })()}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                        {/* wrapper button nilai */}
                        {(() => {
                            if (data.length == 1) {
                                return (
                                    <div className="grid grid-cols-7">
                                        {/* wrapper button nilai biru */}
                                        <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                            <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                {/* button pukulan */}
                                                <button onClick={() => tambahPukulan ('tambahPukulanBiru1')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                </button>
                                                {/* button tendangan */}
                                                <button onClick={() => tambahTendangan ('tambahTendanganBiru1')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                </button>
                                            </div>
                                            {/* button hapus */}
                                            <button onClick={() => deleteNilai ('hapusNilaiBiru')} className="bg-blue-600 hover:bg-blue-700 rounded-xl flex justify-center items-center">
                                                <h1 className='text-xl font-semibold'>Hapus</h1>
                                            </button>
                                        </div>
                                        <div></div>
                                        {/* wrapper button nilai merah */}
                                        <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                            {/* button hapus */}
                                            <button onClick={() => deleteNilai ('hapusNilaiMerah')} className="bg-red-600 hover:bg-red-700 rounded-xl flex justify-center items-center">
                                                <h1 className='text-xl font-semibold'>Hapus</h1>
                                            </button>
                                            <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                {/* button pukulan */}
                                                <button onClick={() => tambahPukulan ('tambahPukulanMerah1')} className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                </button>
                                                {/* button tendangan */}
                                                <button onClick={() => tambahTendangan ('tambahTendanganMerah1')} className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else if (data.length == 2) {
                                return (
                                    <div className="grid grid-cols-7">
                                        {/* wrapper button nilai biru */}
                                        <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                            <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                {/* button pukulan */}
                                                <button onClick={() => tambahPukulan ('tambahPukulanBiru2')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                </button>
                                                {/* button tendangan */}
                                                <button onClick={() => tambahTendangan ('tambahTendanganBiru2')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                </button>
                                            </div>
                                            {/* button hapus */}
                                            <button onClick={() => deleteNilai ('hapusNilaiBiru')} className="bg-blue-600 hover:bg-blue-700 rounded-xl flex justify-center items-center">
                                                <h1 className='text-xl font-semibold'>Hapus</h1>
                                            </button>
                                        </div>
                                        <div></div>
                                        {/* wrapper button nilai merah */}
                                        <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                            {/* button hapus */}
                                            <button onClick={() => deleteNilai ('hapusNilaiMerah')} className="bg-red-600 hover:bg-red-700 rounded-xl flex justify-center items-center">
                                                <h1 className='text-xl font-semibold'>Hapus</h1>
                                            </button>
                                            <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                {/* button pukulan */}
                                                <button onClick={() => tambahPukulan ('tambahPukulanMerah2')} className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                </button>
                                                {/* button tendangan */}
                                                <button onClick={() => tambahTendangan ('tambahTendanganMerah2')} className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else if (data.length == 3) {
                                return (
                                    <div className="grid grid-cols-7">
                                        {/* wrapper button nilai biru */}
                                        <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                            <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                {/* button pukulan */}
                                                <button onCLick={() => tambahPukulan ('tambahPukulanBiru3')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                </button>
                                                {/* button tendangan */}
                                                <button onCLick={() => tambahTendangan ('tambahTendanganBiru3')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                </button>
                                            </div>
                                            {/* button hapus */}
                                            <button onCLick={() => deleteNilai ('hapusNilaiBiru')} className="bg-blue-600 hover:bg-blue-700 rounded-xl flex justify-center items-center">
                                                <h1 className='text-xl font-semibold'>Hapus</h1>
                                            </button>
                                        </div>
                                        <div></div>
                                        {/* wrapper button nilai merah */}
                                        <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                            {/* button hapus */}
                                            <button onClick={() => deleteNilai ('hapusNilaiMerah')} className="bg-red-600 hover:bg-red-700 rounded-xl flex justify-center items-center">
                                                <h1 className='text-xl font-semibold'>Hapus</h1>
                                            </button>
                                            <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                {/* button pukulan */}
                                                <button onCLick={() => tambahPukulan ('tambahPukulanMerah3')} className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                </button>
                                                {/* button tendangan */}
                                                <button onCLick={() => tambahTendangan ('tambahTendanganMerah3')} className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                                    <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })()}
                        <button onClick={() => selesai()} className="bg-green-600 hover:bg-green-700 rounded-lg py-3 text-center w-full">
                            <h1 className='text-2xl font-semibold'>Selesai</h1>
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
    </>
    )
}

export default nilai