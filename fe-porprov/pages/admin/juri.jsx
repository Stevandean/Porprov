import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from './components/navbar'
import Sidebar from './components/sidebar'
import Footer from './components/footer'
import ModalJuri from './components/modalJuri'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const juri = () => {

  const router = useRouter ()

  const [namaJuri, setNamaJuri] = useState ([])
  const [action, setAction] = useState ('')
  const [nama, setNama] = useState ('')
  const [id, setId] = useState ('')

  // state modal
  const [showModalJuri, setShowModalJuri] = useState (false)
  const [showAlertHapus, setShowAlertHapus] = useState (false)

  const addModal = () => {
      setShowModalJuri (true)
      setAction ('insert')
      setNama ('')
  }

  const editModal = (selectedItem) => {
      setShowModalJuri (true)
      setAction ('update')
      setNama (selectedItem.nama)
      setId (selectedItem.id)
  }

  const deleteModal = (selectedId) => {
      setShowAlertHapus (true)
      setId (selectedId)
  }

  const getJuri = () => {
      axios.get (BASE_URL + `/api/nama`)
      .then (res => {
          setNamaJuri (res.data.data)
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
      getJuri ()
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
                  <th className='py-4 w-[10%]'>No</th>
                  <th>Nama Juri</th>
                  <th className='w-[15%]'>Aksi</th>
                  </tr>
                </thead>
                  <tbody className='text-center'>
                  {namaJuri.map((item, index) => (
                    <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                      <td className='py-5'>{index + 1}</td>
                      <td>{item.nama}</td>
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

      <globalState.Provider value={{ showModalJuri, setShowModalJuri, action, setAction, namaJuri, setNamaJuri, nama, setNama, id, setId}}>
        <ModalJuri />
      </globalState.Provider>

      <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, setNamaJuri, id }}>
        <ModalDelete />
      </globalState.Provider>

    </>
  )
}

export default juri