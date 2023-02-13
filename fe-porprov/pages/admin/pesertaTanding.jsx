import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import ModalPesertaTanding from './components/modalPesertaTanding'
import ModalImport from './components/modalImport'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const pesertaTanding = () => {

    // state modal
    const [showModalPesertaTanding, setShowModalPesertaTanding] = useState (false)
    const [showModalImport, setShowModalImport] = useState (false)
    const [showAlertHapus, setShowAlertHapus] = useState (false)

    // ini state
    const [dataPesertaTanding, setDataPesertaTanding] = useState ([])
    const [action, setAction] = useState ('')
    const [id, setId] = useState ('')
    const [kelas, setKelas] = useState ('')
    const [jk, setJk] = useState ('')
    const [nama, setNama] = useState ('')
    const [kontingen, setKontingen] = useState ('')
    const [golongan, setGolongan] = useState ('')

    const addModal = () => {
        setShowModalPesertaTanding (true)
        setAction ('insert')
        setKelas ('')
        setJk ('')
        setNama ('')
        setKontingen ('')
        setGolongan ('')
    }

    const editModal = (selectedItem) => {
        setShowModalPesertaTanding (true)
        setAction ('update')
        setId (selectedItem.id)
        setKelas (selectedItem.kelas)
        setJk (selectedItem.jk)
        setNama (selectedItem.nama)
        setKontingen (selectedItem.kontingen)
        setGolongan (selectedItem.golongan)
    }

    const deleteModal = (selectedId) => {
        setShowAlertHapus (true)
        setId (selectedId)
    }

    const getPesertaTanding = () => {
        axios.get (BASE_URL + `/api/peserta/tanding`)
        .then (res => {
            setDataPesertaTanding (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    useEffect (() => {
        getPesertaTanding ()
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
                            <div className="px-5 space-x-5">
                                <button className='bg-blue-700 px-3 py-2 rounded-lg' onClick={() => addModal()}>Input Data</button>
                                <button className='bg-green-600 px-3 py-2 rounded-lg' onClick={() => setShowModalImport(true)}>Import Data</button>
                            </div>
                        </div>

                        <div className="bg-[#2C2F48] min-h-full rounded-lg">
                            {/* Table */}
                            <table className='w-full table-fixed'>
                                <thead className='border-b-2'>
                                    <tr>
                                        <th className='py-4'>No</th>
                                        <th>Kelas</th>
                                        <th>Jenis Kelamin</th>
                                        <th className='w-[20%]'>Nama</th>
                                        <th className='w-[15%]'>Kontingen</th>
                                        <th>Golongan</th>
                                        <th>Aktif</th>
                                        <th className='w-[10%]'>Aksi</th>
                                    </tr>
                                </thead>
                                <tbody className='text-center'>
                                    {dataPesertaTanding.map((item, index) => (
                                        <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                                            <td className='py-5'>{index + 1}</td>
                                            <td>{item.kelas}</td>
                                            <td>{item.jk}</td>
                                            <td>{item.nama}</td>
                                            <td>{item.kontingen}</td>
                                            <td>{item.golongan}</td> 
                                            <td>{item.aktif}</td>
                                            <td>
                                                <div className="p-2 space-x-2">
                                                    <button onClick={()=>editModal(item)} className='w-10 h-10 p-2 bg-green-600 rounded-xl'>
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

        
        <globalState.Provider 
        value={{showModalPesertaTanding, setShowModalPesertaTanding, action, setAction, id, setId, dataPesertaTanding, setDataPesertaTanding, kelas, setKelas, jk, setJk, nama, setNama, kontingen, setKontingen, golongan, setGolongan}}
        >
            <ModalPesertaTanding />
        </globalState.Provider>

        {/* <globalState.Provider value={{ showModalImport, setShowModalImport }}>
        <ModalImport />
        </globalState.Provider> */}

        <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, id, setDataPesertaTanding }}>
            <ModalDelete />
        </globalState.Provider>

        </>
    )
}

export default pesertaTanding