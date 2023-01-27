import React, { useEffect, useState } from 'react'
import axios from 'axios';
import socketIo from 'socket.io-client'
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
import Footer from './components/footer';
import ModalPeserta from './components/modalPeserta';
import ModalImport from './components/modalImport';
import ModalDelete from './components/modalDelete';
import { globalState } from '../../context/context';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const pesertaRegu = () => {

    // socket io
    const socket = socketIo (BASE_URL)

    // state modal
    const [showModalPeserta, setShowModalPeserta] = useState (false)
    const [showModalImport, setShowModalImport] = useState (false)
    const [showAlertHapus, setShowAlertHapus] = useState (false)

    // ini state
    const [dataRegu, setDataRegu] = useState ([])
    const [action, setAction] = useState ('')
    const [id, setId] = useState ('')
    const [kelas, setKelas] = useState ('')
    const [jenisKelamin, setJenisKelamin] = useState ('')
    const [nama1, setNama1] = useState ('')
    const [nama2, setNama2] = useState ('')
    const [nama3, setNama3] = useState ('')
    const [kontingen, setKontingen] = useState ('')
    const [aktif, setAktif] = useState ('')

    const addModal = () => {
        setShowModalPeserta (true)
        setAction ('insert')
        setKelas ('')
        setJenisKelamin ('')
        setNama1 ('')
        setNama2 ('')
        setNama3 ('')
        setKontingen ('')
    }

    const editModal = (selectedItem) => {
        setShowModalPeserta (true)
        setAction ('update')
        setId (selectedItem.id)
        setKelas (selectedItem.kelas)
        setJenisKelamin (selectedItem.jk)
        setNama1 (selectedItem.nama1)
        setNama2 (selectedItem.nama2)
        setNama3 (selectedItem.nama3)
        setKontingen (selectedItem.kontingen)
    }

    const deleteModal = (selectedId) => {
        setShowAlertHapus (true)
        setId (selectedId)
    }

    const getRegu = () => {
        axios.get (BASE_URL + `/api/peserta/seni/regu`)
        .then (res => {
            setDataRegu (res.data.data)
        })
    }

    // untuk merefresh saat data berubah
    const ubah_data = () => socket.emit ('init_data')

    useEffect (() => {
      socket.emit ('init_data')
      socket.on ('getData', getRegu)
      socket.on ('change_data', ubah_data)
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
                    <span className='text-lg uppercase font-semibold'>Peserta Regu</span>
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
                          <th className='w-[10%]'>Kelas</th>
                          <th>Jenis Kelamin</th>
                          <th className='w-[25%]'>Nama</th>
                          <th className='w-[25%]'>Kontingen</th>
                          <th>Aktif</th>
                          <th className='w-[10%]'>Aksi</th>
                        </tr>
                      </thead>
                    <tbody className='text-center'>
                      {dataRegu.map((item, index) => (
                        <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                          <td className='py-5'>{index + 1}</td>
                          <td>{item.kelas}</td>
                          <td>{item.jk}</td>
                          <td>{item.nama1} <br></br> {item.nama2} <br></br> {item.nama3} </td>
                          <td>{item.kontingen}</td>
                          <td>{item.aktif}</td>
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
  
        <globalState.Provider value={{ showModalPeserta, setShowModalPeserta, action, setAction, id, setId, dataRegu, setDataRegu, kelas, setKelas, jenisKelamin, setJenisKelamin, nama1, setNama1, nama2, setNama2, nama3, setNama3, kontingen, setKontingen, aktif, setAktif }}>
          <ModalPeserta />
        </globalState.Provider>
  
        <globalState.Provider value = {{ showModalImport, setShowModalImport }}>
          <ModalImport />
        </globalState.Provider>
  
        <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, id, setDataRegu }}>
          <ModalDelete />
        </globalState.Provider>
  
      </>
  
    )
}

export default pesertaRegu