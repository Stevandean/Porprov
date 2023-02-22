import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const socket = socketIo (BASE_URL)

const timerLayar = props => {
  
  const [running, setRunning] = useState(false)
  const [data, setData] = useState([])  
  const [waktuStart, setWaktuStart] = useState()
  const [timer, setTimer] = useState(0) 
  const id_jadwal = props.id_jadwal
  const id_peserta = props.id_peserta

  
  const getData = async () => {
    let waktu = []
    //get waktu peserta
    await axios.get (BASE_URL + `/api/tgr/get/timer/${id_jadwal}/${id_peserta}`)
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
      getData()
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
      socket.emit('init_time_seni')
      socket.on ('get_time_seni', getData)
      socket.on ('change_time_seni', ubah_data)
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
    <div className="font-sans font-bold">
        <span>{("0" + Math.floor((timer / 1000 / 60) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
    </div>
  )
}

export default timerLayar