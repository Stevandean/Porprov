import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import axios from 'axios'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer';
import socketIo from 'socket.io-client'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// socket io
const socket = socketIo (BASE_URL)

const gelanggang = () => {

  // state kematian
  const router = useRouter()
  const { gelanggang } = router.query
  const [status, setStatus] = useState ('proses')
  
  // ini state
  const [data, setData] = useState ([])

  //config header
  const headerConfig = () => {
    let token = localStorage.getItem("token")
    let header = {
      headers : { Authorization : `Bearer ${token}` }
    }
    return header
  }

  // untuk ke dewan
  const toDewanBiru = (item) => {

    // untuk di kirim ke halaman dewan melalui local storage
    localStorage.setItem ('jadwalSeni', JSON.stringify (item))
    localStorage.setItem ("pesertaSeni", JSON.stringify (item.biru))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.biru.id
    }

    if (item.kategori.toLowerCase() == 'tunggal') {   
      axios.post (BASE_URL + "/api/nilai/tunggal/dewan", form)
      .then ((res) => {
        router.push ('/seni/dewan/dewanSeni')
        console.log(res.data.message);    
      })
      .catch ((err) => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'ganda') {
      axios.post (BASE_URL + `/api/nilai/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/dewanSeni')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'regu') {
      axios.post (BASE_URL + `/api/nilai/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/dewanSeni')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'solo_kreatif') {
      axios.post (BASE_URL + `/api/nilai/solo_kreatif/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/dewanSeni')
        console.log('berhasil');
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else {
      console.log('');
    }
  }

  const toDewanMerah = async (item) => {

    // untuk di kirim ke halaman dewan melalui local storage
    localStorage.setItem("jadwalSeni", JSON.stringify(item))
    localStorage.setItem ("pesertaSeni", JSON.stringify (item.merah))

    let form = {
      id_jadwal : item.id,
      id_peserta : item.merah.id
    }

    if (item.kategori.toLowerCase() === 'tunggal') {   
      axios.post (BASE_URL + "/api/nilai/tunggal/dewan", form)
      .then ((res) => {
        router.push ('/seni/dewan/dewanSeni')
        console.log(res.data.message);    
      })
      .catch ((err) => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'ganda') {
      axios.post (BASE_URL + `/api/nilai/ganda/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/dewanSeni')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'regu') {
      axios.post (BASE_URL + `/api/nilai/regu/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/dewanSeni')
        console.log(res.data.message);
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else if (item.kategori.toLowerCase() === 'solo_kreatif') {
      axios.post (BASE_URL + `/api/nilai/solo_kreatif/dewan`, form)
      .then (res => {
        router.push ('/seni/dewan/dewanSeni')
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    } else {
      console.log('gagal');
    }
  }

  //get jadwal
  const getData = () => {
    axios.get (BASE_URL+ "/api/seni/jadwal/gel/" + gelanggang, headerConfig())
    .then ((res) => {
      setData (res.data.data)
    })
    .catch((err) => {
      console.log(err.message);
      console.log(err.response.data.message);
    })
  }

  // untuk refresh
  const ubah_data = () => socket.emit ('init_data')

  useEffect (() => {
    if (!router.isReady) return;
    socket.emit ('init_data')
    socket.on ('getData', getData)
    socket.on ('change_data', ubah_data)
    getData()
  }, [router.query.kategori, router.isReady])

  return (
    <>
      <div className="flex ">

        {/* awal konten utama */}
        <div className="w-full overflow-y-auto h-screen"> 

          {/* header */}
          <Navbar />
          {/* akhir header */}

          {/* konten utama */}
          <div className="bg-white text-white min-h-full">
              
            {/* wrapper keseluruhan */}
            <div className="w-11/12 mx-auto py-10 space-y-5">
              {/* wrapper kategori & pool */}
              <div className="flex w-full gap-x-5 h-14">
                {/* button back */}
                  <button onClick={() => router.back()} className="bg-red-700 rounded-lg w-14 h-full flex m-auto">
                    <img className='p-1.5' src="../../../../../../svg/back.svg" />
                  </button>
                {/* kategori & pool */}
                <div className="flex flex-col text-center m-auto space-y-3 w-full">
                  <span className='bg-[#2C2F48] rounded-lg py-3 px-5 text-3xl tracking-widest'>GELANGGANG {gelanggang}</span>
                </div>
              </div>

              {/* button proses & selesai */}
              <div className="grid grid-cols-2 gap-x-7">
                  <button onClick={() => setStatus('proses')} className={status ==  'proses' ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                      <span className='text-2xl font-semibold uppercase'>proses</span>
                  </button>
                  <button onClick={() => setStatus('selesai')} className={status ==  'selesai' ? "bg-[#2C2F48] rounded-lg text-center py-1" : "bg-[#A8A9B3] rounded-lg text-center py-1"}>
                      <span className='text-2xl font-semibold uppercase'>Selesai</span>
                  </button>
              </div>
              
              {/* // wrapper */}
                {(() => {
                    if (status === 'proses') {
                        return(
                            <>
                                {data.filter (a => a.selesai == false).map ((item, index) => (
                                <div key={index + 1} className="text-center rounded-lg shadow-lg border-2 border-[#2C2F48]">
                                    <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                                    <span className='text-xl font-semibold'>PARTAI {item.partai} - {item.kategori} - {item.jk} {item.golongan} - {item.babak}</span>
                                    </div>
                                    {/* wrapper card */}
                                    <div className="grid grid-cols-2 gap-x-7 p-3 font-montserrat">
                                    {/* card pesilat biru */}
                                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                        {/* nama pesilat biru */}
                                        <div className="bg-blue-700 rounded-t-lg py-1 flex flex-col">
                                        {(() => {
                                            if (item.kategori.toLowerCase() == 'tunggal') {
                                            return (
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'ganda') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                                </>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'regu') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama3}</span>
                                                </>
                                                )
                                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                            )
                                            } else {
                                            console.log('gagal');
                                            }
                                        })()}
                                        </div>
                                        {/* kontingen pesilat merah */}
                                        <span className='font-medium text-lg text-blue-700'>{item.biru?.kontingen}</span>
                                        {/* action button */}
                                        <div className="px-7 pb-3">
                                        <button className='bg-[#39ac39] hover:bg-[#2f912f] py-2 rounded-lg w-full' onClick={() => toDewanBiru(item)}>Dewan</button>
                                        </div>
                                    </div>
                                    {/* card pesilat merah */}
                                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                        {/* nama pesilat merah */}
                                        <div className="bg-red-700 rounded-t-lg py-1 flex flex-col">
                                        {(() => {
                                            if (item.kategori.toLowerCase() == 'tunggal') {
                                            return (
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'ganda') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                                <span className='text-xl font-medium'>{item.merah.nama2}</span>
                                                </>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'regu') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                                <span className='text-xl font-medium'>{item.merah.nama2}</span>
                                                <span className='text-xl font-medium'>{item.merah.nama3}</span>
                                                </>
                                                )
                                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>
                                            )
                                            } else {
                                            console.log('gagal');
                                            }
                                        })()}
                                        </div>
                                        {/* kontingen pesilat merah */}
                                        <span className='font-medium text-lg text-red-700'>{item.merah.kontingen}</span>
                                        {/* action button */}
                                        <div className="px-7 pb-3">
                                        <button className='bg-[#39ac39] hover:bg-[#2f912f] py-2 rounded-lg w-full' onClick={() => toDewanMerah(item)}>Dewan</button>
                                        </div>
                                    </div>   
                                    </div>
                                </div>
                                ))}
                            </>
                        )   
                    } else if (status === 'selesai'){
                        return(
                            <>
                                {data.filter(a => a.selesai == true).sort((a, b) => b.partai - a.partai).map ((item, index) => (
                                <div key={index + 1} className="text-center rounded-lg shadow-lg pb-5">
                                    <div className="bg-[#2C2F48] py-2 rounded-t-lg">
                                    <span className='text-xl font-semibold'>Partai {item.partai} - {item.kategori} - {item.babak}</span>
                                    </div>
                                    {/* wrapper card */}
                                    <div className="grid grid-cols-2 gap-x-7 p-3">
                                    {/* card pesilat biru */}
                                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                        {/* nama pesilat biru */}
                                        <div className="bg-blue-700 rounded-t-lg py-1 flex flex-col">
                                        {(() => {
                                            if (item.kategori.toLowerCase() == 'tunggal') {
                                            return (
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                )
                                            } else if (item.kategori.toLowerCase () == 'ganda') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                                </>
                                                )
                                            } else if (item.kategori.toLowerCase() == 'regu') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama3}</span>
                                                </>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                )
                                            } else if (item.kategori.toLowerCase() == 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                )
                                            } else {
                                            console.log('gagal');
                                            }
                                        })()}
                                        </div>
                                        {/* kontingen pesilat biru */}
                                        <span className='font-medium texy-lg text-[#2C2F48]'>{item.biru.kontingen}</span>
                                        {/* score & selesai button */}
                                        <div className="px-7 pb-3">
                                        <div className="grid grid-rows-2 mt-2 gap-x-7 gap-y-0.5 mb-5">
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Hukuman</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.nilai_biru?.hukuman?.toFixed(2)}</span>
                                            </div>
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Waktu</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.nilai_biru?.waktu}</span>
                                            </div>
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Standart Deviasi</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.nilai_biru?.deviasi}</span>
                                            </div>
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1 text-xl'>Skor Akhir</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg text-xl font-bold'>{item.nilai_biru?.skor_akhir.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        {/* detail nilai button */}
                                        <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1.5' onClick={() => toDetailSelesaiBiru(item)}>Detail Nilai</button>
                                        {/* detail jurus button */}
                                        {(() => {
                                            if (item.kategori.toLowerCase() == 'tunggal' || item.kategori.toLowerCase() == 'regu') {
                                            return ( 
                                                <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold'onClick={() => toDetailJurusBiru (item)}>Details Jurus</button>
                                            )
                                            }
                                        })()}
                                        </div>
                                    </div>
                                    {/* card pesilat merah */}
                                    <div className="flex flex-col gap-y-2 border-2 border-[#2C2F48] rounded-lg">
                                        {/* nama pesilat merah */}
                                        <div className="bg-red-700 rounded-t-lg py-1 flex flex-col">
                                        {(() => {
                                            if (item.kategori.toLowerCase() === 'tunggal') {
                                            return (
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>                                        
                                            )
                                            } else if (item.kategori.toLowerCase() === 'ganda') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>                                        
                                                <span className='text-xl font-medium'>{item.merah.nama2}</span>                                        
                                                </>
                                            )
                                            } else if (item.kategori.toLowerCase() == 'regu') {
                                            return (
                                                <>
                                                <span className='text-xl font-medium'>{item.biru.nama1}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama2}</span>
                                                <span className='text-xl font-medium'>{item.biru.nama3}</span>
                                                </>
                                            )
                                            } else if (item.kategori.toLowerCase() === 'solo_kreatif') {
                                            return (
                                                <span className='text-xl font-medium'>{item.merah.nama1}</span>                                        
                                            )
                                            }
                                        })()}
                                        </div>
                                        {/* kontingen pesilat merah */}
                                        <span className='font-medium texy-lg text-[#2C2F48]'>{item.merah.kontingen}</span>
                                        {/* score & selesai button */}
                                        <div className="px-7 pb-3">
                                        <div className="grid grid-rows-2 mt-2 gap-x-7 gap-y-0.5 mb-5">
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Hukuman</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.nilai_merah?.hukuman?.toFixed(2)}</span>
                                            </div>
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Waktu</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.nilai_merah?.waktu}</span>
                                            </div>
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold py-1'>Standart Deviasi</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold'>{item.nilai_merah?.deviasi}</span>
                                            </div>
                                            <div className="grid grid-cols-2">
                                            <span className='bg-[#2C2F48] rounded-l-lg font-semibold text-xl py-1'>Skor Akhir</span>
                                            <span className='text-[#2C2F48] border-2 border-[#2C2F48] rounded-r-lg font-bold text-xl'>{item.nilai_merah?.skor_akhir.toFixed(2)}</span>
                                            </div>
                                        </div>
                                        {/* detail nilai button */}
                                        <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold mb-1'onClick={() => toDetailSelesaiMerah (item)}>Detail Nilai</button>
                                        {/* detail jurus button */}
                                        {(() => {
                                            if (item.kategori.toLowerCase() == 'tunggal' || item.kategori.toLowerCase() == 'regu') {
                                            return ( 
                                                <button className='bg-[#39ac39] hover:bg-[#2f912f] px-7 w-full rounded-lg py-2 font-lg font-semibold'onClick={() => toDetailJurusMerah (item)}>Details Jurus</button>
                                            )
                                            }
                                        })()}
                                        </div>
                                    </div>
                                    </div>
                                    {/* winner */}
                                    <div className="flex flex-col px-3 space-y-1">
                                    <span className='text-[#2C2F48] text-3xl font-bold'>Pemenang :</span>
                                    {(() => {
                                      console.log(data);
                                        if(item.id_pemenang == item.id_peserta_merah){
                                        return(
                                            <span className='bg-red-600 text-lg font-bold rounded-lg py-3'>SUDUT MERAH</span>
                                        )
                                        } else if(item.id_pemenang == item.id_peserta_biru){
                                        return(
                                            <span className='bg-blue-700 text-lg font-bold rounded-lg py-3'>SUDUT BIRU</span>
                                        )
                                        }
                                    })()}
                                    </div>
                                </div>
                                ))}
                            </>
                        )
                    }
                })()}

            </div>
          </div>
          <Footer />
        </div>
        {/* akhir konten utama */}
      </div>
    </>
  )
}

export default gelanggang