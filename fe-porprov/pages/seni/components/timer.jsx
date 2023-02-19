import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let socket

const timer = props => {
  const socketInitializer = async () => {
    socket = socketIo(BASE_URL)
  }
  //connect socket
  useEffect(() => {
      socketInitializer()
  }, [])

  const [running, setRunning] = useState(false)
  const [data, setData] = useState([])  
  const [waktuStart, setWaktuStart] = useState()
  const [timer, setTimer] = useState(0) 
  const id_jadwal = props.id_jadwal
  const id_peserta = props.id_peserta

  
  const getData = async () => {
    let waktu = []
    //get waktu peserta
    await axios.get(BASE_URL + `/api/tgr/get/timer/${id_jadwal}/${id_peserta}`)
    .then(res => {
      setData(res.data.data)
      waktu = res.data.data
      //jika waktu null set time ke 0
      if(waktu === null){
        setTimer(0)
      //jika waktu ada set sesuai waktu  
      }else{
        //jika pertandingan selesai tampilkan waktu selesai
        if(waktu.selesai === true){
          setTimer((new Date(waktu.finish).getTime()) - (new Date(waktu.start).getTime()))
          setRunning(false)

        //jika pertandingan belum selesai tampilkan waktu berjalan  
        } else if (waktu.selesai === false){
          setWaktuStart (new Date(waktu.start).getTime())
          setRunning(true)
        }
      }
    }).catch(err =>{
      console.log(err.response.data.message);
    })
  }

  const start = async () => {
    let data = {
      id_jadwal: id_jadwal,
      id_peserta: id_peserta
    }
    await axios.post(BASE_URL + "/api/tgr/timer/start", data)
    .then(res => {
      console.log(res.data.message);
      socket.emit ("update_time_seni")
    }).catch(err =>{
      console.log(err.response.data.message);
    })
  }

  const selesai = () => {    
    // set waktu
    let minute = `${("0" + Math.floor((timer / 1000 / 60) % 60)).slice(-2)}`
    let second = `${("0" + Math.floor((timer / 1000) % 60)) .slice(-2)}`
    let time = `${minute}:${second}`

    let form = {
      id_jadwal: id_jadwal,
      id_peserta: id_peserta,
      waktu: time
    }

    axios.put (BASE_URL + `/api/tgr/timer/selesai`, form)
    .then (res => {
      console.log(res.data.message);
      socket.emit ("update_time_seni")
      setRunning (false)
    })
    .catch (err => {
      console.log(err.message);
      console.log('gagal');
    })
  }

  // untuk merefresh saat data berubah
  const ubah_data = () => socket.emit ('init_time_seni')

  useEffect(() => {
    return () =>{
      socket.emit('init_time_seni')
      socket.on ('get_time_seni', getData)
      socket.on ('change_time_seni', ubah_data)
    }
  },[])

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
      setTimer(new Date().getTime() - waktuStart);
    }, 1000);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [running]);

  return (
    <div className="grid grid-cols-12">
      <button onClick={() => selesai()} className="col-span-2 bg-green-500 hover:bg-green-600 rounded-l-lg flex justify-center items-center">
        <svg className='w-32' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_429_11249)">
            <path d="M20 7.00018L10 17.0002L5 12.0002" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <defs>
            <clipPath id="clip0_429_11249">
              <rect width="24" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className="col-span-8 flex justify-center items-center border-y-2 text-black border-black lg:text-7xl text-5xl">
        <div className="font-sans font-bold">
          <span>{("0" + Math.floor((timer / 1000 / 60) % 60)).slice(-2)}:</span>
          <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
        </div>
      </div>
      <button onClick={() => start()} className="col-span-2 bg-green-500 hover:bg-green-600 rounded-r-lg flex justify-center items-center">
        <svg className='lg:w-16 w-10 py-3' viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 2.08008L19 13.9013L2 25.7225V2.08008Z" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}

export default timer