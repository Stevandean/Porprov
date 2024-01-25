import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ModalGelanggang from './components/modalGelanggang'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const Gelanggang = () => {

    const router = useRouter ()

    // ini state
    const [gelanggang, setGelanggang] = useState ([])
    const [action, setAction] = useState ('')
    const [nomor, setNomor] = useState ('')
    const [status, setStatus] = useState ('')
    const [id, setId] = useState ('')

    // state modal
    const [showModalGelanggang, setShowModalGelanggang] = useState (false)
    const [showAlertHapus, setShowAlertHapus] = useState (false)

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }
    
    const editModal = (selectedItem) => {
        setShowModalGelanggang (true)
        setAction ('update')
        setNomor (selectedItem.gelanggang)
        setStatus (selectedItem.status)
        setId (selectedItem.id)
    }

    
      const getGelanggang = () => {
        let user = JSON.parse(localStorage.getItem('admin'))
        axios.get (BASE_URL + `/api/gelanggang/event`, headerConfig())
        .then (res => {
          setGelanggang (res.data.data)
        })
        .catch (err => {
          console.log(err.response.data.message);
        })
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('admin') === null) {
            router.push ('/admin/login')
        }
    }

    useEffect (() => {
        getGelanggang ()
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
        <div className="w-full overflow-y-auto h-screen relative"> 
        

            {/* konten utama */}
            <div className="bg-[#1E213C] text-white h-full">

            {/* header */}
            <Navbar />
            {/* akhir header */}

            {/* wrapper */}
            <div className="p-7 space-y-5">
                {/* Input Data */}
                <div className="bg-[#2C2F48] rounded-lg flex justify-between p-3">
                    <div className="flex items-center px-2">
                    <span className='text-lg uppercase font-semibold'>Gelanggang</span>
                    </div>
                </div>

                {/* table */}
                <div className="bg-[#2C2F48] min-h-full rounded-lg">
                {/* Table */}
                <table className='w-full table-fixed'>
                <thead className='border-b-2'>
                    <tr>
                        <th className='py-2 w-[5%]'>No</th>
                        <th className='py-2'>Gelanggang</th>
                        <th className='py-2'>Status</th>
                        <th className='w-[15%]'>Aksi</th>
                    </tr>
                </thead>
                    <tbody className='text-center'>
                        {gelanggang.map((item,index)=>(
                            <tr key={index+1} className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                                <td className='text-lg w-full'>{index+1}</td>
                                <td className='text-lg w-full'>{item.gelanggang}</td>
                                <td className='text-lg w-full'>{item.status}</td>
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

            <div className='w-full bottom-0 absolute'>
                <Footer/>
            </div>
            </div>
        </div>
        {/* akhir konten utama */}
        </div>

        <globalState.Provider value={{ showModalGelanggang, setShowModalGelanggang, action, setAction, gelanggang, setGelanggang, nomor, setNomor, status, setStatus, id, setId}}>
            <ModalGelanggang />
        </globalState.Provider>
        
        <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, id }}>
        <ModalDelete />
        </globalState.Provider>

    </>

    )
}

export default Gelanggang