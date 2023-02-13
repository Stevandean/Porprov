import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ModalJadwal from './components/modalJadwal'
import ModalImport from './components/modalImport'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const jadwalTunggal = () => {

  // state modal
  const [showModalJadwal, setShowModalJadwal] = useState (false)
  const [showModalImport, setShowModalImport] = useState (false)
  const [showAlertHapus, setShowAlertHapus] = useState (false)
  const [dropdownJadwal, setDropdownJadwal] = useState (false)
  
  // ini state
  const [dataJadwalTunggal, setDataJadwalTunggal] = useState([])
  const [action, setAction] = useState ('')
  const [idBiru, setIdBiru] = useState ('')
  const [idMerah, setIdMerah] = useState ('')
  const [babak, setBabak] = useState ('')
  const [idJadwal, setIdJadwal] = useState ('')
  const [jk, setJk] = useState ('')
  const [aktif, setAktif] = useState ('')

  const addModalPutra = () => {
    setShowModalJadwal (true)
    setAction ('insert')
    setJk ('PUTRA')
    setIdBiru ('');
    setIdMerah ('');
  }

  const addModalPutri = () => {
    setShowModalJadwal (true)
    setAction ('insert')
    setJk ('PUTRI')
    setIdBiru ('');
    setIdMerah ('');
  }

  const editModal = (selectedItem) => {
    setShowModalJadwal (true)
    setAction ('update')
    console.log(action);
    setIdBiru (selectedItem.id_biru)
    setIdMerah (selectedItem.id_merah)
    setIdJadwal (selectedItem.id)
    setJk (selectedItem.jk)
    setBabak (selectedItem.babak)
  }

  const deleteModal = (selectedId) => {
    setShowAlertHapus (true)
    setIdJadwal (selectedId)
  }

  const getJadwalTunggal = () => {
    axios.get (BASE_URL + '/api/tgr/tunggal')
    .then((res) => {
      setDataJadwalTunggal(res.data.data);
    });
  }

  useEffect(() => {
    getJadwalTunggal ()
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
                  <span className='text-lg uppercase font-semibold'>Jadwal tunggal</span>
                </div>
                <div className="flex px-5 space-x-5">
                  {/* wrapper button dropdown input */}
                  <div className= 'flex flex-col bg-blue-700 py-2 rounded-lg'>
                    {(() => {
                      if (dropdownJadwal === true) {
                        return (
                          <button onClick={() => setDropdownJadwal (false)} className="text-white text-center inline-flex items-center w-full px-5" type="button">Input Data
                          </button>
                        )
                      } else if (dropdownJadwal === false) {
                        return (
                          <button onClick={() => setDropdownJadwal (true)} className="text-white text-center inline-flex items-center w-full px-5" type="button">Input Data
                          </button>
                        )
                      }
                    })()}
                    {dropdownJadwal ? (
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
                  <th className='py-4'>No</th>
                  <th className='w-[10%]'>Kelas</th>
                  <th>Jenis Kelamin</th>
                  <th>Babak</th>
                  <th className='w-[21%]'>Sudut Biru</th>
                  <th className='w-[21%]'>Sudut Merah</th>
                  <th>Aktif</th>
                  <th className='w-[10%]'>Aksi</th>
                  </tr>
                </thead>
                  <tbody className='text-center'>
                  {dataJadwalTunggal.map((item, index) => (
                    <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                      <td className='py-5'>{index + 1}</td>
                      <td>{item.kelas}</td>
                      <td>{item.jk}</td>
                      <td>{item.babak}</td>
                      <td>{item.biru.nama1} - {item.biru.kontingen}</td>
                      <td>{item.merah.nama1} - {item.merah.kontingen}</td>
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

      <globalState.Provider value={{ showModalJadwal, setShowModalJadwal, action, setAction, dataJadwalTunggal, setDataJadwalTunggal, idBiru, setIdBiru, idMerah, setIdMerah, idJadwal, setIdJadwal, jk, setJk, babak, setBabak}}>
        <ModalJadwal />
      </globalState.Provider>

      <globalState.Provider value = {{ showModalImport, setShowModalImport }}>
        <ModalImport />
      </globalState.Provider>

      <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, setDataJadwalTunggal, idJadwal }}>
        <ModalDelete />
      </globalState.Provider>

    </>

  )
}

export default jadwalTunggal