import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ModalNavbar from './components/modalNavbar'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const webSetting = () => {

    // ini state
    const [navbar, setNavbar] = useState ([])
    const [action, setAction] = useState ('')
    const [nama, setNama] = useState ('')

    // state modal
    const [showModalNavbar, setShowModalNavbar] = useState (false)
    const [showAlertHapus, setShowAlertHapus] = useState (false)

    const addModal = () => {
        setShowModalNavbar (true)
        setAction ('insert')
        setNama ('')
    }

    const getNavbar = () => {
        axios.get (BASE_URL + `/api/event`)
        .then (res => {
            setNavbar (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
        console.log(BASE_URL + `/api/event`);
    }

    useEffect (() => {
        getNavbar ()
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
                    <span className='text-lg uppercase font-semibold'>Juri</span>
                </div>
                <div className="flex px-5 space-x-5">
                    <button className='bg-blue-700 px-3 py-2 rounded-lg' onClick={() => addModal()}>Input Data</button>
                </div>
                </div>

                {/* table */}
                <div className="bg-[#2C2F48] min-h-full rounded-lg">
                {/* Table */}
                <table className='w-full table-fixed'>
                <thead className='border-b-2'>
                    <tr>
                    <th className='w-[35%] py-4'>Nama Event</th>
                    <th>Icon 1</th>
                    <th>Icon 2</th>
                    <th className='w-[15%]'>Aksi</th>
                    </tr>
                </thead>
                    <tbody className='text-center'>
                    {navbar.map((item, index) => (
                    <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                        <td className='py-5'>{item.nama}</td>
                        <td>
                            <img className='w-12' src={item.icon1} alt="" />
                        </td>
                        <td>{item.icon2}</td>
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
                    <tr></tr>
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        <Footer />
        </div>
        {/* akhir konten utama */}
        </div>

        <globalState.Provider value={{ showModalNavbar, setShowModalNavbar, action, setAction, nama, setNama }}>
        <ModalNavbar />
        </globalState.Provider>
        {/* <globalState.Provider value={{ showModalJuri, setShowModalJuri, action, setAction, namaJuri, setNamaJuri, nama, setNama, id, setId}}>
        <ModalJuri />
        </globalState.Provider> */}
        
        {/* <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, setNamaJuri, id }}>
        <ModalDelete />
        </globalState.Provider> */}

    </>

    )
}

export default webSetting