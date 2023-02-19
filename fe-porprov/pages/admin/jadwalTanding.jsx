import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import ModalJadwalTanding from './components/modalJadwalTanding'
import ModalImport from './components/modalImport'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const jadwalTanding = () => {

    const router = useRouter ()

    // state modal
    const [showModalJadwalTanding, setShowModalJadwalTanding] = useState (false)
    const [showModalImport, setShowModalImport] = useState (false)
    const [showAlertHapus, setShowAlertHapus] = useState (false)
    const [dropdownTanding, setDropdownTanding] = useState (false)

    // ini state
    const [dataJadwalTanding, setDataJadwalTanding] = useState ([])
    const [action, setAction] = useState ('')
    const [idJadwal, setIdJadwal] = useState ('')
    const [gelanggang, setGelanggang] = useState ('')
    const [partai, setPartai] = useState ('')
    const [kelas, setKelas] = useState ('')
    const [jk, setJk] = useState ('')
    const [golongan, setGolongan] = useState ('')
    const [idBiru, setIdBiru] = useState ('')
    const [idMerah, setIdMerah] = useState ('')
    const [babak, setBabak] = useState ('')

    const getJadwalTanding = () => {
        axios.get (BASE_URL + `/api/tanding`)
        .then (res => {
            setDataJadwalTanding (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const addModalPutra = () => {
        setShowModalJadwalTanding (true)
        setAction ('insert')
        setJk ('PUTRA')
        setKelas ('')
        setGolongan ('')
        setIdBiru ('')
        setIdMerah ('')
        setBabak ('')
    }

    const addModalPutri = () => {
        setShowModalJadwalTanding (true)
        setAction ('insert')
        setJk ('PUTRI')
        setKelas ('')
        setGolongan ('')
        setIdBiru ('')
        setIdMerah ('')
        setBabak ('')
    }

    const editModal = (selectedItem) => {
        setShowModalJadwalTanding (true)
        setAction ('update')
        setIdJadwal (selectedItem.id)
        setJk (selectedItem.jk)
        setGelanggang (selectedItem.gelanggang)
        setPartai (selectedItem.partai)
        setKelas (selectedItem.kelas)
        setGolongan (selectedItem.golongan)
        setIdBiru (selectedItem.id_biru)
        setIdMerah (selectedItem.id_merah)
        setBabak (selectedItem.babak)
    }

    const deleteModal = (selectedId) => {
        setShowAlertHapus (true)
        setIdJadwal (selectedId)
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === localStorage.getItem ('admin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
        getJadwalTanding ()
        isLogged ()
    }, [])

    return (
        <>
        <div className="flex ">

            {/* side bar */}
            <Sidebar />
            {/* Akhir sidebar */}

            {/* awal konten utama */}
            {/* supaya konten dan header dapat di scroll dan tidak memengaruhi sidebar */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <Navbar />
                {/* akhir header */}

                {/* konten utama */}
                <div className="bg-[#1E213C] text-white min-h-full">

                    {/* wrapper */}
                    <div className="p-7 space-y-5">
                        {/* Input Data */}
                        <div className="bg-[#2C2F48] rounded-lg flex justify-between p-3">
                            <div className="flex items-center px-2">
                                <span className='text-lg uppercase font-semibold'>Jadwal Tanding</span>
                            </div>
                            <div className="flex px-5 space-x-5">
                                {/* wrapper button dropdown input */}
                                <div className= 'flex flex-col bg-blue-700 py-2 rounded-lg'>
                                {(() => {
                                    if (dropdownTanding === true) {
                                    return (
                                        <button onClick={() => setDropdownTanding (false)} className="text-white text-center inline-flex items-center w-full px-5" type="button">Input Data
                                        </button>
                                    )
                                    } else if (dropdownTanding === false) {
                                    return (
                                        <button onClick={() => setDropdownTanding (true)} className="text-white text-center inline-flex items-center w-full px-5" type="button">Input Data
                                        </button>
                                    )
                                    }
                                })()}
                                {dropdownTanding ? (
                                    <div className="absolute mt-10 bg-black bg-opacity-30 p-3 rounded-lg">
                                    <div className='flex flex-col space-y-2'>
                                        <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <button onClick={() => addModalPutra ()} className="block px-4 py-2 ">Jadwal Putra</button>
                                        </li>
                                        </ul>
                                        </div>
                                        <div className="z-10 divide-y divide-gray-100 rounded-xl shadow w-44 bg-gray-700">
                                        <ul className="py-1 text-sm " aria-labelledby="dropdownDefaultButton">
                                        <li>
                                            <button onClick={() => addModalPutri ()} className="block px-4 py-2 ">Jadwal Putri</button>
                                        </li>
                                        </ul>
                                        </div>
                                    </div>
                                    </div>
                                ):null}
                                </div>
                                {/* button import data */}
                                <button className='bg-green-600 px-3 py-2 rounded-lg' onClick={() => setShowModalImport(true)}>Import Data</button>
                            </div>
                        </div>

                        {/* table */}
                        <div className="bg-[#2C2F48] min-h-full rounded-lg">
                            {/* Table */}
                            <table className='w-full table-fixed'>
                                <thead className='border-b-2'>
                                    <tr>
                                        <th className='py-4 w-[5%]'>No</th>
                                        <th className='w-[5%]'>Gel</th>
                                        <th className='w-[5%]'>Partai</th>
                                        <th className='w-[10%]'>Kelas</th>
                                        <th>Jenis Kelamin</th>
                                        <th>Golongan</th>
                                        <th className='w-[15%]'>Sudut Biru</th>
                                        <th className='w-[15%]'>Sudut Merah</th>
                                        <th>Babak</th>
                                        <th className='w-[10%]'>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {dataJadwalTanding.map((item, index) => (
                                        <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                                            <td className='py-5'>{index + 1}</td>
                                            <td>{item.gelanggang}</td>
                                            <td>{item.partai}</td>
                                            <td>{item.kelas}</td>
                                            <td>{item.jk}</td>
                                            <td>{item.golongan}</td>
                                            <td>{item.biru.nama} - {item.biru.kontingen}</td>
                                            <td>{item.merah.nama} - {item.merah.kontingen}</td>
                                            <td>{item.babak}</td>
                                            <td>
                                            <div className="p-2 space-x-2">
                                                <button onClick={() => editModal(item)} className='w-10 h-10 p-2 bg-green-600 rounded-xl'>
                                                <img src='../svg/pencil.svg'></img>
                                                </button>
                                                <button onClick={() => deleteModal(item.id)} className='w-10 h-10 p-2 bg-red-600 rounded-xl'>
                                                <img src='../svg/trash.svg'></img>
                                                </button>
                                            </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>

        <globalState.Provider value={{ showModalJadwalTanding, setShowModalJadwalTanding, action, setAction, dataJadwalTanding, setDataJadwalTanding, gelanggang, setGelanggang, partai, setPartai, kelas, setKelas, jk, setJk, golongan, setGolongan, idBiru, setIdBiru, idMerah, setIdMerah, babak, setBabak, idJadwal, setIdJadwal}}>
            <ModalJadwalTanding />
        </globalState.Provider>

        {/* <globalState.Provider value = {{ showModalImport, setShowModalImport }}>
        <ModalImport />
        </globalState.Provider> */}

        <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, setDataJadwalTanding, idJadwal}}>
            <ModalDelete />
        </globalState.Provider>

    </>

    )
}

export default jadwalTanding