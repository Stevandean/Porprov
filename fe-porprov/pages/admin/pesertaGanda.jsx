import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import ModalPeserta from './components/modalPeserta'
import ModalImport from './components/modalImport'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const pesertaGanda = () => {

  const router = useRouter ()

  // state modal
  const [showModalPeserta, setShowModalPeserta] = useState (false)
  const [showModalImport, setShowModalImport] = useState (false)
  const [showAlertHapus, setShowAlertHapus] = useState (false)

  // ini state
  const [dataPesertaGanda, setDataPesertaGanda] = useState ([])
  const [action, setAction] = useState ('')
  const [id, setId] = useState ('')
  const [golongan, setGolongan] = useState ('')
  const [jenisKelamin, setJenisKelamin] = useState ('')
  const [nama1, setNama1] = useState ('')
  const [nama2, setNama2] = useState ('')
  const [kontingen, setKontingen] = useState ('')
  const [aktif, setAktif] = useState ('')

  const headerConfig = () => {
    let token = localStorage.getItem("token")
    let header = {
      headers : { Authorization : `Bearer ${token}` }
    }
    return header
  }

  const addModal = () => {
      setShowModalPeserta (true)
      setAction ('insert')
      setGolongan ('')
      setJenisKelamin ('')
      setNama1 ('')
      setNama2 ('')
      setKontingen ('')
  }

  const editModal = (selectedItem) => {
      setShowModalPeserta (true)
      setAction ('update')
      setId (selectedItem.id)
      setGolongan (selectedItem.golongan)
      setJenisKelamin (selectedItem.jk)
      setNama1 (selectedItem.nama1)
      setNama2 (selectedItem.nama2)
      setKontingen (selectedItem.kontingen)
  }

  const deleteModal = (selectedId) => {
      setShowAlertHapus (true)
      setId (selectedId)
  }

  const getPesertaGanda = () => {
    axios.get (BASE_URL + `/api/seni/peserta/ganda`, headerConfig())
    .then (res => {
        setDataPesertaGanda (res.data.data)
    })
    .catch (err => {
      console.log (err.message)
    })
  }

  const isLogged = () => {
    if (localStorage.getItem ('token') == null || localStorage.getItem ('admin') === null) {
      router.push ('/admin/login')
    }
  }

  useEffect (() => {
    getPesertaGanda ()
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
                <span className='text-lg uppercase font-semibold'>Peserta Ganda</span>
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
                      <th className='w-[10%]'>Golongan</th>
                      <th>Jenis Kelamin</th>
                      <th className='w-[25%]'>Nama</th>
                      <th className='w-[25%]'>Kontingen</th>
                      <th className='w-[10%]'>Aksi</th>
                    </tr>
                  </thead>
                <tbody className='text-center'>
                  {dataPesertaGanda.map((item, index) => (
                    <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                      <td className='py-5'>{index + 1}</td>
                      <td>{item.golongan}</td>
                      <td>{item.jk}</td>
                      <td>{item.nama1} <br></br> {item.nama2} </td>
                      <td>{item.kontingen}</td>
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

    <globalState.Provider value={{ showModalPeserta, setShowModalPeserta, action, setAction, id, setId, dataPesertaGanda, setDataPesertaGanda, golongan, setGolongan, jenisKelamin, setJenisKelamin, nama1, setNama1, nama2, setNama2, kontingen, setKontingen, aktif, setAktif }}>
      <ModalPeserta />
    </globalState.Provider>

    <globalState.Provider value = {{ showModalImport, setShowModalImport }}>
      <ModalImport />
    </globalState.Provider>

    <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, id, setDataPesertaGanda }}>
      <ModalDelete />
    </globalState.Provider>

    </>
  )
}

export default pesertaGanda