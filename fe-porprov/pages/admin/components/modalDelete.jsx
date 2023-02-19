import React, { useContext } from 'react'
import axios from 'axios'
import { globalState } from '../../../context/context'
import { useRouter } from 'next/router'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalDelete = () => {

    const location = useRouter;
    const {pathname} = location()
    const splitLoc = pathname.split('/admin/')

    const {setDataPesertaTanding, setDataJadwalTanding, setDataPesertaTunggal, setDataJadwalTunggal, setDataPesertaGanda, setDataJadwalGanda,setDataPesertaRegu, setDataJadwalRegu, setDataPesertaSoloKreatif, setDataJadwalSoloKreatif, setNamaJuri, id, idJadwal, showAlertHapus, setShowAlertHapus} = useContext(globalState)

    const getPesertaTanding = () => {
      axios.get(BASE_URL + '/api/peserta/tanding')
      .then((res) => {
        setDataPesertaTanding(res.data.data);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }

    const getJadwalTanding = () => {
      axios.get (BASE_URL + `/api/tanding`)
      .then (res => {
        setDataJadwalTanding (res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }
    
    const getPesertaTunggal = () => {
      axios.get(BASE_URL + '/api/peserta/seni/tunggal')
      .then((res) => {
        setDataPesertaTunggal(res.data.data);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }

    const getPesertaGanda = () => {
      axios.get(BASE_URL + '/api/peserta/seni/ganda')
      .then((res) => {
        setDataPesertaGanda(res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }

    const getPesertaSoloKreatif = () => {
      axios.get (BASE_URL + `/api/peserta/seni/solo_kreatif`)
      .then (res => {
        setDataPesertaSoloKreatif (res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }

    const getPesertaRegu = () => {
      axios.get(BASE_URL + '/api/peserta/seni/regu ')
      .then ((res) => {
        setDataPesertaRegu(res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }

    const getJadwalTunggal = () => {
      axios.get (BASE_URL + `/api/tgr/tunggal`)
      .then (res => {
        setDataJadwalTunggal (res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }
    
    const getJadwalGanda = () => {
      axios.get (BASE_URL + `/api/tgr/ganda`)
      .then (res => {
        setDataJadwalGanda (res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }

    const getJadwalRegu = () => {
      axios.get (BASE_URL + `/api/tgr/regu`)
      .then (res => {
        setDataJadwalRegu (res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }

    const getJadwalSoloKreatif = () => {
      axios.get (BASE_URL + `/api/tgr/solo_kreatif`)
      .then (res => {
        setDataJadwalSoloKreatif (res.data.data)
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
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

    const handleDelete = (selectedId) => {

      if (splitLoc.toString() === ',pesertaTanding') {    
        axios.delete(BASE_URL + `/api/peserta/tanding/${id}` )
        .then(res => {
          getPesertaTanding()
          setShowAlertHapus (false)
        })
        .catch(err => {
          console.log(err.message);
        })
      } else if (splitLoc.toString() === ',pesertaTunggal') {
        axios.delete(BASE_URL + `/api/peserta/seni/${id}` )
        .then(res => {
          getPesertaTunggal()
          setShowAlertHapus (false)
        })
        .catch(err => {
          console.log(err.response.data.message);
        })
      } else if (splitLoc.toString() === ',pesertaGanda') {
        axios.delete(BASE_URL + `/api/peserta/seni/${id}`)
        .then(res => {
          getPesertaGanda()
          setShowAlertHapus (false)
        })
        .catch(err => {
          console.log(err.message);
        })
      } else if (splitLoc.toString() === ',pesertaSoloKreatif') {
        axios.delete(BASE_URL + `/api/peserta/seni/${id}`)
        .then (res => {
          getPesertaSoloKreatif ()
          setShowAlertHapus (false)
        })
        .catch (err => {
          console.log(err.response.data.message);
        })
      } else if (splitLoc.toString() === ',pesertaRegu') {
        axios.delete(BASE_URL + `/api/peserta/seni/${id}`)
        .then (res => {
          getPesertaRegu()
          setShowAlertHapus (false)
        })
        .catch(err => {
          console.log(err.message);
        })
      } else if (splitLoc.toString() === ',jadwalTanding') {
        axios.delete (BASE_URL + `/api/tanding/${idJadwal}`)
        .then (res => {
          getJadwalTanding ()
          setShowAlertHapus (false)
        })
        .catch (err => {
          console.log (err.response.data.message)
        })
      } else if (splitLoc.toString() === ',jadwalTunggal') {
        axios.delete (BASE_URL + `/api/tgr/${idJadwal}`)
        .then (res => {
          getJadwalTunggal ()
          setShowAlertHapus (false)
        })
        .catch (err => {
          console.log(err.message);
        })
      } else if (splitLoc.toString() === ',jadwalGanda') {
        axios.delete (BASE_URL + `/api/tgr/${idJadwal}`)
        .then (res => {
          getJadwalGanda ()
          setShowAlertHapus (false)
        })
        .catch (err => {
          console.log(err.message);
        })
      } else if (splitLoc.toString () === ',jadwalSoloKreatif') {
        axios.delete (BASE_URL + `/api/tgr/${idJadwal}`)
        .then (res => {
          getJadwalSoloKreatif ()
          setShowAlertHapus (false)
        })
        .catch (err => {
          console.log(err.response.data.message);
        })
      } else if (splitLoc.toString() === ',jadwalRegu') {
        axios.delete (BASE_URL + `/api/tgr/${idJadwal}`)
        .then (res => {
          getJadwalRegu ()
          setShowAlertHapus (false)
        })
        .catch (err => {
          console.log(err.message);
        })
      } else if (splitLoc.toString() === ',juri') {
        axios.delete (BASE_URL + `/api/nama/${id}`)
        .then (res => {
          getJuri ()
          setShowAlertHapus (false)
        })
        .catch (err => {
          console.log(err.response.data.message);
        })
      } else {
        console.log('gagal');
      }
    }

    return (
    <>
      {showAlertHapus ? (
      <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
          <div className="relative w-full my-6 mx-auto max-w-3xl">

            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#11121C] outline-none focus:outline-none">

              {/*Wrapper Input Field*/}
              <div className="relative p-6 flex flex-col space-y-5 text-white text-lg mt-5">

                {/* Input Field */}
                <div className="flex flex-col justify-center space-y-5">
                  <img className='h-28' src='../svg/trash.svg' />
                  <span className='text-center text-red-700 text-3xl font-semibold'>Apakah Anda Yakin?</span>
                  <span className='text-center text-white text-base'>Untuk menghapus data ini?</span>
                </div>
              </div>

              {/*footer*/}
              <div className="flex items-center justify-end p-6 rounded-b">
                <button
                  className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setShowAlertHapus(false)}>
                  Close
                </button>
                <button
                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => handleDelete()}>
                  Hapus Data
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
      </>
    ) : null}
    </>
  )
}

export default modalDelete