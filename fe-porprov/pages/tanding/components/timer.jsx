import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import socketIo from 'socket.io-client'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
let socket

const timer = (props) => {

    useEffect(() => {
        socketInitializer()
    }, [])

    const socketInitializer = async () => {
      socket = socketIo(BASE_URL)
    }
    const [running, setRunning] = useState(false)
    const [pause, setPause] = useState(false)
    const [waktuPause, setWaktuPause] = useState(0)
    const [data, setData] = useState([])  
    const [waktuStart, setWaktuStart] = useState()
    const [waktuSelesai, setWaktuSelesai] = useState()
    const [timer, setTimer] = useState(0) 
    const golongan = props.golongan
    const id_jadwal = props.id_jadwal
    const {round, setRound} = useContext(globalState)
  
    useEffect(() => {
        getData()
    },[round])

    const getData = async () => {
        let waktu = []
        //get waktu peserta
        let babak = localStorage.getItem('babak')
        // console.log(golongan);
        await axios.get(BASE_URL + `/api/tanding/get/timer/${id_jadwal}/${babak}`)
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
                    console.log(golongan);
                    // setTimer(90000)
                    // setRunning(false)
                    if(golongan === 'SINGA' || golongan === 'MACAN' || golongan === 'USIA DINI' || golongan === 'MASTER A'){
                        setTimer(90000)
                        setRunning(false)
                    }else if (golongan === 'PRA REMAJA' || golongan === 'REMAJA' || golongan === 'DEWASA'){
                        setTimer(120000)
                        setRunning(false)
                    }else if (golongan == 'MASTER B'){
                        setTimer(60000)
                        setRunning(false)
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

    const pauseButton = async () => {
        let data = {
            time: timer,
            id_jadwal: id_jadwal,
            babak: round
        }
        await axios.put(BASE_URL + "/api/tanding/timer/pause", data)
        .then(res =>{
            console.log(res.data.message);
            socket.emit ("update_time_tanding")
            setRunning (false)
            setPause(true) 
        })
        .catch(err => {
            console.log(err.response.data.message);
        })
    }

    const start = async () => {
        let data = {
            pause: waktuPause,
            id_jadwal: id_jadwal,
            babak: round
        }
        await axios.post(BASE_URL + "/api/tanding/timer/start", data)
        .then(res => {
            console.log(res.data.message);
            socket.emit ("update_time_tanding")
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
        babak: round,
        waktu: time 
      }
  
      axios.put (BASE_URL + `/api/tanding/timer/stop`, form)
      .then (res => {
        console.log(res.data.message);
        socket.emit ("update_time_tanding")
        setRunning (false)
        getData()
      })
      .catch (err => {
        console.log(err.response.data.message);
      })
    }
  
    // untuk merefresh saat data berubah
    const ubah_data = () => socket.emit ('init_time_seni')

    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTimer(new Date().getTime() - (waktuStart));
                // console.log(new Date().getTime() - (waktuStart));
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
    <div className="grid grid-cols-3 gap-x-10 mb-8">
        {/* button pause */}
        {pause === false ? 
            data?.selesai === true ?
            <button disabled onClick={() => pauseButton()} className="bg-red-800 hover:bg-red-800 rounded-lg py-8 px-5 text-center">
                <h1 className='text-4xl font-semibold'>PAUSE</h1>
            </button>
            :
            <button onClick={() => pauseButton()} className="bg-red-600 hover:bg-red-700 rounded-lg py-8 px-5 text-center">
                <h1 className='text-4xl font-semibold'>PAUSE</h1>
            </button>
        :
        <button disabled onClick={() => pauseButton()} className="bg-red-800 hover:bg-red-800 rounded-lg py-8 px-5 text-center">
            <h1 className='text-4xl font-semibold'>PAUSE</h1>
        </button>
        }
        {/* timer */}
        <div className="flex justify-center items-center text-6xl text-[#222954] font-bold">
            <span>{("0" + Math.floor((timer / 1000 / 60) % 60)).slice(-2)}:</span>
            <span>{("0" + Math.floor((timer / 1000) % 60)).slice(-2)}</span>
        </div>
        {/* button start */}
            {data?.selesai === false ?
            <button onClick={() => start()} className="bg-green-600 hover:bg-green-700 rounded-lg py-8 px-5 text-center">
                <h1 className='text-4xl font-semibold'>START</h1>
            </button>
            :
        <button onClick={() => start()} className="bg-green-800 rounded-lg py-8 px-5 text-center">
            <h1 className='text-4xl font-semibold'>START</h1>
        </button>}
    </div>
  )
}

export default timer