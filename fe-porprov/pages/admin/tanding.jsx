import React, { useContext, useState } from 'react'
import axios from 'axios'
import Sidebar from './components/sidebar'
import Navbar from './components/navbar'
import Footer from './components/footer'
import ModalTanding from './components/modalTanding'
import ModalImport from './components/modalImport'
import ModalDelete from './components/modalDelete'
import { globalState } from '../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const tanding = () => {

  // untuk modal
  const [showModalInput, setShowModalInput] = React.useState (false);
  const [showModalImport, setShowModalImport] = React.useState (false);
  const [showAlertHapus, setShowAlertHapus] = React.useState (false);
  
  // ini state
  const [dataTanding, setDataTanding] = React.useState([])
  const [action, setAction] = React.useState("")
  const [id, setId] = React.useState ('')
  const [gelanggang, setGelanggang] = useState('')
  const [partai, setPartai] = useState('')
  const [kelas, setKelas] = useState('')
  const [namaBiru, setNamaBiru] = useState('')
  const [kontingenBiru, setKontingenBiru] = useState('')
  const [namaMerah, setNamaMerah] = useState('')
  const [kontingenMerah, setKontingenMerah] = useState('')
  const [babak, setBabak] = useState('')

  const addModal = () => {
    setShowModalInput(true)
    setAction("insert")
    console.log(action)
    setGelanggang ('')
    setPartai ('')
    setKelas ('')
    setNamaBiru ('')
    setKontingenBiru ('')
    setNamaMerah ('')
    setKontingenMerah ('')
    setBabak ('')

  }
  const editModal = (selectedItem) => {
    setShowModalInput(true)
    setAction('update')
    setId (selectedItem.id)
    setGelanggang (selectedItem.gelanggang)
    setPartai (selectedItem.partai)
    setKelas (selectedItem.kelas)
    setNamaBiru (selectedItem.nm_biru)
    setKontingenBiru (selectedItem.kontingen_biru)
    setNamaMerah (selectedItem.nm_merah)
    setKontingenMerah (selectedItem.kontingen_merah)
    setBabak (selectedItem.babak)
    console.log(id);
  }

  const deleteModal = (selectedId) => {
    setShowAlertHapus (true)
    setId(selectedId)
  }

  const getTanding = () => {
    axios.get (BASE_URL + '/api/tanding')
    .then((res) => {
      setDataTanding(res.data.data);
    });
  }

  React.useEffect(() => {
    getTanding()
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
                    <th>Gel</th>
                    <th>Partai</th>
                    <th className='w-[10%]'>Kelas</th>
                    <th className='w-[20%]'>Sudut Biru</th>
                    <th className='w-[20%]'>Sudut Merah</th>
                    <th>Babak</th>
                    <th>Aktif</th>
                    <th className='w-[10%]'>Aksi</th>
                  </tr>
                </thead>
                <tbody className='text-center'>
                 {dataTanding.map((item, index) => (
                  <tr className='even:bg-[#4C4F6D] odd:bg-[#2c2f48]'>
                    <td className='py-5'>{index + 1}</td>
                    <td>{item.gelanggang}</td>
                    <td>{item.partai}</td>
                    <td>{item.kelas}</td>
                    <td>{item.nm_biru} - {item.kontingen_biru}</td> 
                    <td>{item.nm_merah} - {item.kontingen_merah}</td>
                    <td>{item.babak}</td>
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

    
    <globalState.Provider value={{showModalInput, setShowModalInput, action, setAction, id, setId, dataTanding, setDataTanding, gelanggang, setGelanggang, partai, setPartai, kelas, setKelas, namaBiru, setNamaBiru, kontingenBiru, setKontingenBiru, namaMerah, setNamaMerah, kontingenMerah, setKontingenMerah, babak, setBabak}}>
      <ModalTanding />
    </globalState.Provider>

    <globalState.Provider value={{ showModalImport, setShowModalImport }}>
      <ModalImport />
    </globalState.Provider>

    <globalState.Provider value={{ showAlertHapus, setShowAlertHapus, id, setDataTanding }}>
      <ModalDelete />
    </globalState.Provider>

  </>

  )
}

export default tanding