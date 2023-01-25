import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ModalTgr from './components/modalTgr'
import ModalImport from './components/modalImport'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const tgrTunggal = () => {

  // handling error
  const [msg, setMsg] = useState ('')

  const location = useRouter();
  const {pathname} = location;
  const splitLoc = pathname.split('/admin/tgr')

  // state modal
  const [showModalInput, setShowModalInput] = useState (false)
  const [showModalImport, setShowModalImport] = useState (false)
  const [showAlertHapus, setShowAlertHapus] = useState (false)
  
  // ini state
  const [dataTunggal, setDataTunggal] = useState([])
  const [action, setAction] = useState('')
  const [id, setId] = useState ('')
  const [gelanggang, setGelanggang] = useState ('')
  const [pool, setPool] = useState ('')
  const [noUndian, setNoUndian] = useState ('')
  const [kelas, setKelas] = useState ('')
  const [nama1, setNama1] = useState ('')
  const [kontingen, setKontingen] = useState ('')
  const [aktif, setAktif] = useState ('')

  const addModal = () => {
    setShowModalInput (true)
    setAction ('insert')
    console.log(action);
    setGelanggang ('')
    setPool ('')
    setNoUndian ('')
    setKelas ('')
    setNama1 ('')
    setKontingen ('')

  }

  const editModal = (selectedItem) => {
    setShowModalInput (true)
    setAction ('update')
    setId (selectedItem.id)
    setGelanggang (selectedItem.gelanggang)
    setPool (selectedItem.pool)
    setNoUndian (selectedItem.no_undian)
    setKelas (selectedItem.kelas)
    setNama1 (selectedItem.nama1)
    setKontingen (selectedItem.kontingen)
    console.log(id);
  }

  const deleteModal = (selectedId) => {
    setShowAlertHapus (true)
    setId(selectedId)
  }

  const getTunggal = () => {
    axios.get (BASE_URL + '/api/tgr/tunggal')
    .then((res) => {
      setDataTunggal(res.data.data);
    });
  }

  React.useEffect(() => {
    getTunggal()
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
                <span className='text-lg uppercase font-semibold'>Jadwal TGR | {splitLoc}</span>
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
                      <th>Gel</th>
                      <th>Pool</th>
                      <th>No Undian</th>
                      <th className='w-[15%]'>Kelas</th>
                      <th className='w-[20%]'>Nama Pesilat</th>
                      <th className='w-[20%]'>Kontingen Pesilat</th>
                      <th>Aktif</th>
                      <th className='w-[10%]'>Aksi</th>
                    </tr>
                  </thead>
                <tbody className='text-center'>
                  {dataTunggal.map((item, index) => (
                    <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                      <td className='py-5'>{index + 1}</td>
                      <td>{item.gelanggang}</td>
                      <td>{item.pool}</td>
                      <td>{item.no_undian}</td>
                      <td>{item.kelas}</td>
                      <td>{item.nama1}</td>
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

    <globalState.Provider value={{ showModalInput, setShowModalInput, action, setAction, id, setId, dataTunggal, setDataTunggal, msg, setMsg, gelanggang, setGelanggang, pool, setPool, noUndian, setNoUndian, kelas, setKelas, nama1, setNama1, kontingen, setKontingen, aktif, setAktif }}>
      <ModalTgr />
    </globalState.Provider>

    <globalState.Provider value = {{ showModalImport, setShowModalImport }}>
      <ModalImport />
    </globalState.Provider>

    <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, id, setDataTunggal }}>
      <ModalDelete />
    </globalState.Provider>

    </>

  )
}

export default tgrTunggal