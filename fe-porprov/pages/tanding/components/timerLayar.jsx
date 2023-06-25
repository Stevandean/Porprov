import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let socket

const timerLayar = (props) => {

    useEffect(() => {
        socketInitializer()
    }, [])

    
    const socketInitializer = async () => {
        socket = socketIo.connect(BASE_URL)
    }

    useEffect(() =>{
        socket.emit('join', id_jadwal)
        return(() =>{
            socket.close()
        })
    },[])

    const [running, setRunning] = useState(false)
    const [pause, setPause] = useState(false)
    const [waktuPause, setWaktuPause] = useState(0)
    const [data, setData] = useState([])  
    const [waktuStart, setWaktuStart] = useState()
    const [waktuSelesai, setWaktuSelesai] = useState()
    const [timer, setTimer] = useState(0) 
    const babak = props.babak
    const golongan = props.golongan
    const id_jadwal = props.id_jadwal
    const {round, setRound} = useContext(globalState)
  
    useEffect(() => {
        getData()
    },[round])

    const ubah_data = () => socket.emit ('init_time_tanding', id_jadwal)

    useEffect(() => {
          socket.emit('init_time_tanding', id_jadwal)
          socket.on ('get_time_tanding', getData)
          socket.on ('change_time_tanding', ubah_data)
      },[])

    const getData = async () => {
        let waktu = []
        //get waktu peserta
        // let babak = localStorage.getItem('babak')
        // console.log(golongan);
        await axios.get(BASE_URL + `/api/tanding/jadwal/get/timer/${id_jadwal}/${babak}`)
        .then(res => {
            setData(res.data.data)
            waktu = res.data.data
            //jika waktu null set time ke 0
            if(waktu === null){
                console.log('waktu null');
                setTimer(0)
                setWaktuStart(0)
                setRunning(false)
                waktu = null
            //jika waktu ada set sesuai waktu  
            }else if (waktu !== null){
                //jika pertandingan selesai tampilkan waktu selesai
                if(waktu.selesai === true){
                    if(golongan === 'SINGA' || golongan === 'MACAN' || golongan === 'USIA DINI' || golongan === 'MASTER A'){
                        if((new Date(waktu.finish).getTime() - (new Date(waktu.start).getTime())) > 90000){
                            setTimer(90000)
                            setRunning(false)
                        }   
                    }else if (golongan === 'PRA REMAJA' || golongan === 'REMAJA' || golongan === 'DEWASA'){
                        if((new Date(waktu.finish).getTime() - (new Date(waktu.start).getTime())) >= 120000){
                            setTimer(120000)
                            setRunning(false)
                        }   
                    }else if (golongan === 'MASTER B'){
                        if((new Date(waktu.finish).getTime() - (new Date(waktu.start).getTime())) > 60000){
                            setTimer(60000)
                            setRunning(false)
                        }   
                    }

                //jika pertandingan belum selesai tampilkan waktu berjalan  
                } else if (waktu.selesai === false){
                    if(waktu.running === true){
                        setWaktuStart (new Date(waktu.start).getTime() + waktu.total_pause)
                        setRunning(true)
                        setPause(false)
                    } else if (waktu.running === false) {
                        console.log('pause');
                        setWaktuStart (new Date(waktu.start).getTime())
                        setTimer (waktu.saved_time)
                        setRunning(false)
                        setPause(true)
                    }
                }
            }
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
        babak: round,
        waktu: time 
      }
  
      axios.put (BASE_URL + `/api/tanding/jadwal/timer/stop`, form)
      .then (res => {
        console.log(res.data.message);
        setRunning (false)
        getData()
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }
  
    // untuk merefresh saat data berubah

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTimer(new Date().getTime() - (waktuStart));
                if(golongan === 'SINGA' || golongan === 'MACAN' || golongan === 'USIA DINI' || golongan === 'MASTER A'){
                    if((new Date().getTime() - (waktuStart)) > 90000){
                        clearInterval(interval);
                        setRunning(false)
                        selesai()
                        console.log("HOP");
                    }   
                }else if (golongan === 'PRA REMAJA' || golongan === 'REMAJA' || golongan === 'DEWASA'){
                    if((new Date().getTime() - (waktuStart)) > 120000){
                        clearInterval(interval);
                        setRunning(false)
                        selesai()
                        console.log("HOP");
                    }   
                }else if (golongan === 'MASTER B'){
                    if((new Date().getTime() - (waktuStart)) > 60000){
                        clearInterval(interval);
                        setRunning(false)
                        selesai()
                        console.log("HOP");
                    }   
                }
            }, 1000);
        } else if (!running) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running]);

  return (
    <div className="text-5xl font-bold">
        <span>{("0" + Math.floor((timer / 1000 / 60) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
    </div>
  )
}

export default timerLayar