import React, { useContext, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer'
import ModalJuri from '../components/modalJuri'
import { globalState } from '../../../context/context';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { socket } from '../../../utils/socket'
// import socketIo from 'socket.io-client'
// const socket = socketIo(BASE_URL)

const nilai = () => {
    //websocket
    // const socket = useRef(null)

    const router = useRouter ()
    const [event, setEvent] = useState ([])
    
    // ini state
    const [data, setData] = useState ([])
    const [dataVerif, setDataVerif] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [jadwalBiru, setJadwalBiru] = useState ([])
    const [jadwalMerah, setJadwalMerah] = useState ([])
    const [dataJuri, setDataJuri] = useState ([])
    const [end, setEnd] = useState(false)
    const {showModalJuri, setShowModalJuri} = useContext (globalState)
    const {infoVerif, setInfoVerif} = useContext (globalState)
    const {clickedBlue,setClickedBlue} = useContext (globalState)
    const {clickedRed,setClickedRed} = useContext (globalState)
    const {clickedYellow,setClickedYellow} = useContext (globalState)

    // state get juri by babak and sudut
    const [biru1, setBiru1] = useState ([])
    const [biru2, setBiru2] = useState ([])
    const [biru3, setBiru3] = useState ([])
    const [merah1, setMerah1] = useState ([])
    const [merah2, setMerah2] = useState ([])
    const [merah3, setMerah3] = useState ([])

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }

    const getBiru1 = () => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))

        let data = {
            id_jadwal: jadwal,
            babak: "I"
        }
        axios.post (BASE_URL + `/api/nilai/tanding/juri/biru/${juri.no}`, data, headerConfig())
        .then (res => {
            setBiru1 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getBiru2 = () => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))
        
        let data = {
            id_jadwal: jadwal,
            babak: "ii"
        }

        axios.post (BASE_URL + `/api/nilai/tanding/juri/biru/${juri.no}`, data, headerConfig())
        .then (res => {
            setBiru2 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getBiru3 = () => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))
        let data = {
            id_jadwal: jadwal,
            babak: "iii"
        }

        axios.post (BASE_URL + `/api/nilai/tanding/juri/biru/${juri.no}`, data, headerConfig())
        .then (res => {
            setBiru3 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getMerah1 = () => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))
        
        let data = {
            id_jadwal: jadwal,
            babak: "i"
        }

        axios.post (BASE_URL + `/api/nilai/tanding/juri/merah/${juri.no}`, data, headerConfig())
        .then (res => {
            setMerah1 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getMerah2 = () => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))
        
        let data = {
            id_jadwal: jadwal,
            babak: "ii"
        }

        axios.post (BASE_URL + `/api/nilai/tanding/juri/merah/${juri.no}`, data, headerConfig())
        .then (res => {
            setMerah2 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getMerah3 = () => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))
        
        let data = {
            id_jadwal: jadwal,
            babak: "iii"
        }

        axios.post (BASE_URL + `/api/nilai/tanding/juri/merah/${juri.no}`, data, headerConfig())
        .then (res => {
            setMerah3 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getNilai = async () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        await axios.get (BASE_URL + `/api/nilai/tanding/babakbyjadwal/${id_jadwal}`)
        .then (res => {
            setData (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
        // console.log(BASE_URL + `/api/nilai/tanding/babakbyjadwal/${id_jadwal}`);
    }

    const getJadwal = () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        axios.get (BASE_URL + `/api/tanding/jadwal/${id_jadwal}`)
        .then (res => {
            setJadwal (res.data.data)
            setJadwalBiru (res.data.data.biru)
            setJadwalMerah (res.data.data.merah)
        })
    }

    const getJuri = () => {
        const juri = JSON.parse (localStorage.getItem ('user'))
        setDataJuri (juri)
    }

    const tambahPukulan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))

        // babak 1
        if (e == 'tambahPukulanBiru1') {
            if (juri.no === 1) {
                socket.emit ('pbj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('pbj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('pbj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/pukulan/biru/${juri.no}`, form)
            .then (res => {
                getBiru1()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPukulanMerah1') {
            if (juri.no === 1) {
                socket.emit ('pmj1', jadwal)
            } else if(juri.no === 2){
                socket.emit ('pmj2', jadwal)
            } else if(juri.no === 3){
                socket.emit ('pmj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/pukulan/merah/${juri.no}`, form)
            .then (res => {
                getMerah1()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahPukulanBiru2') {
            if (juri.no === 1) {
                socket.emit ('pbj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('pbj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('pbj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/pukulan/biru/${juri.no}`, form)
            .then (res => {
                getBiru2()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPukulanMerah2') {
            if (juri.no === 1) {
                socket.emit ('pmj1', jadwal)
            } else if(juri.no === 2){
                socket.emit ('pmj2', jadwal)
            } else if(juri.no === 3){
                socket.emit ('pmj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/pukulan/merah/${juri.no}`, form)
            .then (res => {
                getMerah2()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        //babak 3
        else if (e == 'tambahPukulanBiru3') {
            if (juri.no === 1) {
                socket.emit ('pbj1', jadwal)
            } else if(juri.no === 2){
                socket.emit ('pbj2', jadwal)
            } else if(juri.no === 3){
                socket.emit ('pbj3', jadwal)
            }

            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'III',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/pukulan/biru/${juri.no}`, form)
            .then (res => {
                getBiru3()                
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                    getBiru3()
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPukulanMerah3') {
            if (juri.no === 1) {
                socket.emit ('pmj1', jadwal)
            } else if(juri.no === 2){
                socket.emit ('pmj2', jadwal)
            } else if(juri.no === 3){
                socket.emit ('pmj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'III',
                poin : 1
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/pukulan/merah/${juri.no}`, form)
            .then (res => {
                getMerah3()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    const tambahTendangan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))

        // babak 1
        if (e == 'tambahTendanganBiru1') {
            if (juri.no === 1) {
                socket.emit ('tbj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('tbj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('tbj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/tendangan/biru/${juri.no}`, form)
            .then (res => {
                getBiru1()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    getBiru1()
                    socket.emit('edit_juri_tanding', jadwal)
                },3300)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTendanganMerah1') {
            if (juri.no === 1) {
                socket.emit ('tmj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('tmj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('tmj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'I',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/tendangan/merah/${juri.no}`, form)
            .then (res => {
                getMerah1()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahTendanganBiru2') {
            if (juri.no === 1) {
                socket.emit ('tbj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('tbj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('tbj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/tendangan/biru/${juri.no}`, form)
            .then (res => {
                getBiru2()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTendanganMerah2') {
            if (juri.no === 1) {
                socket.emit ('tmj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('tmj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('tmj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'II',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/tendangan/merah/${juri.no}`, form)
            .then (res => {
                getMerah2()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahTendanganBiru3') {
            if (juri.no === 1) {
                socket.emit ('tbj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('tbj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('tbj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'III',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/tendangan/biru/${juri.no}`, form)
            .then (res => {
                getBiru3()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTendanganMerah3', jadwal) {
            if (juri.no === 1) {
                socket.emit ('tmj1', jadwal)
            } 
            if(juri.no === 2){
                socket.emit ('tmj2', jadwal)
            }
            if(juri.no === 3){
                socket.emit ('tmj3', jadwal)
            }
            let form = {
                id_jadwal : jadwal,
                id_juri : juri.id,
                babak : 'III',
                poin : 2
            }
            axios.post (BASE_URL + `/api/nilai/tanding/juri/tendangan/merah/${juri.no}`, form)
            .then (res => {
                getMerah3()
                socket.emit('juriToDewan', jadwal)
                setTimeout(()=>{
                    socket.emit('edit_juri_tanding', jadwal)
                },2000)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    const deleteNilai = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        const juri = JSON.parse (localStorage.getItem ('user'))

        let form = {
            id_jadwal : jadwal,
            id_juri : juri.id,
            poin : 1
        }

        if (data.length === 1) {
            form.babak = 'i'
        } else if (data.length === 2){
            form.babak = 'ii'
        } else if (data.length === 3){
            form.babak = 'iii'
        }

        if (e == 'hapusNilaiBiru') {
            axios.delete (BASE_URL + `/api/nilai/tanding/juri/biru/${juri.no}`, {data:form})
            .then (res => {
                getBiru1()
                getBiru2()
                getBiru3()
                socket.emit('juriToDewan', jadwal)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusNilaiMerah') {
            axios.delete (BASE_URL + `/api/nilai/tanding/juri/merah/${juri.no}`, {data:form})
            .then (res => {
                getMerah1()
                getMerah2()
                getMerah3()
                socket.emit('juriToDewan', jadwal)
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    const selesai = () => {
        if (confirm('Anda yakin mengakhiri pertandingan?') == 1) {
            router.back()
        } else {
            console.log('batal selesai');
        }
    }

    const getEvent = () => {
        let event = JSON.parse(localStorage.getItem('event'))
        let event_id = event.id
        axios.get (BASE_URL + `/api/event/${event_id}`)
        .then (res => {
            setEvent (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }
    
    const handle = useFullScreenHandle ()    

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('juriTanding') === null) {
         router.push ('/tanding/juri/login') 
        }
    }

    const showModal = () => {
        setShowModalJuri(true)

    }

    const closeModal = () =>{
        setShowModalJuri(false)
    }

    const cekVerif = async () => {
        setClickedRed (true)
        setClickedYellow (true)
        setClickedBlue(true)
        let info = []
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        await axios.get(BASE_URL + `/api/tanding/verif/${id_jadwal}`)
        .then (res => {
            setDataVerif(res.data.data)
            info = res.data.data
            setInfoVerif(info.poin)
            // console.log(info.show);
            if(info == null){
                console.log('verif null');
            } else if (info != null){
                if(info.show == true){
                    setShowModalJuri(true)
                } else if (info.show === false){
                    setShowModalJuri(false)
                }
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    const ubah_data = () => socket.emit ('init_time_tanding')

    
    const cekTimer = async () => {
        getNilai()
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal    
        let waktu = []
        //get waktu peserta
        await axios.get(BASE_URL + `/api/tanding/jadwal/get/timer/${id_jadwal}/${data.babak}`)
        .then(res => {
            waktu = res.data.data
            //jika waktu null set time ke 0
            if(waktu === null){
                console.log('waktu null');
                setEnd(true)
            //jika waktu ada set sesuai waktu  
            }else if (waktu !== null){
                //jika pertandingan selesai tampilkan waktu selesai
                if(waktu.selesai === true){
                    console.log(golongan);
                    setEnd(true)
                    // setTimer(90000)
                    // setRunning(false)
                }
            }
        }).catch(err =>{
            console.log(err.response.data.message);
        })
    }

    //socket    
    const [isConnected, setIsConnected] = useState(socket.connected);
    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            console.log("connected");
            console.log(isConnected);   
        }
        // if (socket.connected === false) {
        //     socket.connect({'forceNew': true});
        //     console.log(isConnected);   
        // }
  
        function onDisconnect() {
            setIsConnected(false);
        }

        socket.on('connect', onConnect);
        socket.on('disconnect', onDisconnect);
        
        return () => {
            socket.off('connect', onConnect);
            socket.off('disconnect', onDisconnect);
        };
    }, []);
    
    useEffect (() => {
        const jadwal = localStorage.getItem ('jadwal')

        socket.emit('join', jadwal)
        console.log("joinned");
        //socket modal
        socket.on('open_verif', cekVerif)
        socket.on('close_verif', closeModal)

        getNilai ()
        socket.emit('init_time_tanding', jadwal)
        socket.on ('get_time_tanding', cekTimer)
        socket.on ('change_time_tanding', ubah_data)

        socket.on('naikBabak', getNilai)
        // get data awal
        getJadwal ()
        getJuri ()
        getEvent ()

        //get juri
        getBiru1 ()
        getBiru2 ()
        getBiru3 ()
        getMerah1 ()
        getMerah2 ()
        getMerah3 ()


        return () => {
            socket.emit('leave', jadwal)
            console.log('closed');
        }
    }, [isConnected === true])

    return (
    <>
        <FullScreen handle={handle} className="flex ">
            {/* awal konten utama */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <div className="hidden lg:block">
                    <div className="bg-[#2C2F48] sticky top-0 h-20 z-40 flex">
                        <div className="flex justify-between w-full text-white px-10">
                            <div className="flex space-x-3">
                                <button onClick={handle.enter} className="flex justify-center items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-maximize">
                                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
                                    </svg>
                                </button> 
                                <img className='py-3'src={BASE_URL + "/api/event/image/" + event.logo} alt="Kabupaten Trenggalek" />
                            </div>
                            <span className='text-xl font-semibold my-auto uppercase text-center'>{event.nama}</span>
                            <div className="flex space-x-3">
                                <img className='py-3' src={BASE_URL + "/api/event/image/" + event.icon1} alt="IPSI" />
                                <img className='py-3' src={BASE_URL + "/api/event/image/" + event.icon2} alt="IPSI2" />
                            </div>
                        </div>          
                    </div>
                </div>
                {/* akhir header */}

                {/* konten utama */}
                <div className="bg-white text-white min-h-full overflow-y-auto">
                    {/* wrapper keseluruhan */}
                    <div className="w-11/12 mx-auto py-5">
                        {/* wrapper tanding information */}
                        <div className="grid grid-cols-6 gap-x-2 text-center mb-3 lg:mb-5">
                            <div className="bg-[#222954] rounded-lg">
                                <h1 className='text-xl font-semibold py-1.5'>PARTAI {jadwal.partai}</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg col-span-2">
                                <h1 className='text-xl font-semibold py-1.5'>{jadwal.kelas} {jadwal.jk} {jadwal.golongan}</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg col-span-2">
                                <h1 className='text-xl font-semibold py-1.5'>{jadwal.babak}</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg">
                                {(() => {
                                    if (dataJuri.username == 'juri1') {
                                        return (
                                            <h1 className='text-xl font-semibold py-1.5'>JURI 1</h1>
                                        )
                                    } else if (dataJuri.username == 'juri2') {
                                        return (
                                            <h1 className='text-xl font-semibold py-1.5'>JURI 2</h1>
                                        )
                                    } else if (dataJuri.username == 'juri3') {
                                        return (
                                            <h1 className='text-xl font-semibold py-1.5'>JURI 3</h1>
                                        )
                                    }
                                })()}
                            </div>
                        </div>
                        {/* wrapper pesilat information */}
                        <div className="grid grid-cols-7 mb-3 lg:mb-5">
                            {/* pesilat biru information */}
                            <div className="col-span-3 bg-blue-600 rounded-lg py-1.5 px-4 text-white flex flex-col">
                                <h1 className='text-xl font-semibold'>{jadwalBiru.nama}</h1>
                                <h1 className='tracking-wider'>{jadwalBiru.kontingen}</h1>
                            </div>
                            <div></div>
                            {/* pesilat biru information */}
                            <div className="col-span-3 bg-red-600 rounded-lg py-1.5 px-4 text-white flex flex-col items-end">
                                <h1 className='text-xl font-semibold'>{jadwalMerah.nama}</h1>
                                <h1 className='tracking-wider'>{jadwalMerah.kontingen}</h1>
                            </div>
                        </div>
                        {/* table nilai */}
                        <table className='w-full table-fixed mb-3 lg:mb-5'>
                            <thead>
                                <tr>
                                    <th className='border-2 border-[#222954] bg-blue-600 py-1.5' colSpan={3}>Nilai</th>
                                    <th className='border-2 border-[#222954] text-[#222954]'>Babak</th>
                                    <th className='border-2 border-[#222954] bg-red-600' colSpan={3}>Nilai</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* nilai babak 1 */}
                                <tr>
                                    {/* nilai sudut biru */}
                                        <td className='border-2 border-[#222954] py-1.5 break-words' colSpan={3}>
                                            <div className="px-4 gap-x-1">
                                                {biru1?.nilai_biru?.log_juri.map ((item, index) => {
                                                    if (item.masuk == false) {
                                                        return (
                                                            <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest'>{item.poin}, 
                                                            </s>
                                                        )
                                                    } else if (item.masuk == true) {
                                                        return (
                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </td>
                                    {/* babak */}
                                    <td className='border-2 border-[#222954]'>
                                        <h1 className={data.length == 1 ? 'bg-green-600 text-2xl font-bold text-[#222954] flex justify-center items-center' : 'text-2xl font-bold text-[#222954] flex justify-center items-center'}>I</h1>
                                    </td>
                                    {/* nilai sudut merah */}
                                    <td className='border-2 border-[#222954] py-1.5 break-words' colSpan={3}>
                                        <div className="px-4 gap-x-1">
                                            {merah1?.nilai_merah?.log_juri.map ((item, index) => {
                                                if (item.masuk == false) {
                                                    return (
                                                        <s key={index + 1} className='text-lg font-bold text-red-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                        </s>
                                                    )
                                                } else if (item.masuk == true) {
                                                    return (
                                                        <span key={index + 1} className='bg-red-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </td>
                                </tr>

                                {/* nilai babak 2 */}
                                <tr>
                                    {/* nilai sudut biru */}
                                        <td className='border-2 border-[#222954] py-1.5 break-words' colSpan={3}>
                                            <div className="px-4 gap-x-1">
                                                {biru2?.nilai_biru?.log_juri.map ((item, index) => {
                                                    if (item.masuk == false) {
                                                        return (
                                                            <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest'>{item.poin}, 
                                                            </s>
                                                        )
                                                    } else if (item.masuk == true) {
                                                        return (
                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </td>
                                    {/* babak */}
                                    <td className='border-2 border-[#222954]'>
                                        <h1 className={data.length == 2 ? 'bg-green-600 text-2xl font-bold text-[#222954] flex justify-center items-center' : 'text-2xl font-bold text-[#222954] flex justify-center items-center'}>II</h1>
                                    </td>
                                    {/* nilai sudut merah */}
                                    <td className='border-2 border-[#222954] py-1.5 break-words' colSpan={3}>
                                        <div className="px-4 gap-x-1">
                                            {merah2?.nilai_merah?.log_juri.map ((item, index) => {
                                                if (item.masuk == false) {
                                                    return (
                                                        <s key={index + 1} className='text-lg font-bold text-red-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                        </s>
                                                    )
                                                } else if (item.masuk == true) {
                                                    return (
                                                        <span key={index + 1} className='bg-red-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </td>
                                </tr>

                                {/* nilai babak 3 */}
                                <tr>
                                    {/* nilai sudut biru */}
                                        <td className='border-2 border-[#222954] py-1.5 break-words' colSpan={3}>
                                            <div className="px-4 gap-x-1">
                                                {biru3?.nilai_biru?.log_juri.map ((item, index) => {
                                                    if (item.masuk == false) {
                                                        return (
                                                            <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest'>{item.poin}, 
                                                            </s>
                                                        )
                                                    } else if (item.masuk == true) {
                                                        return (
                                                            <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                        )
                                                    }
                                                })}
                                            </div>
                                        </td>
                                    {/* babak */}
                                    <td className='border-2 border-[#222954]'>
                                        <h1 className={data.length == 3 ? 'bg-green-600 text-2xl font-bold text-[#222954] flex justify-center items-center' : 'text-2xl font-bold text-[#222954] flex justify-center items-center'}>III</h1>
                                    </td>
                                    {/* nilai sudut merah */}
                                    <td className='border-2 border-[#222954] py-1.5 break-words' colSpan={3}>
                                        <div className="px-4 gap-x-1">
                                            {merah3?.nilai_merah?.log_juri.map ((item, index) => {
                                                if (item.masuk == false) {
                                                    return (
                                                        <s key={index + 1} className='text-lg font-bold text-red-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                        </s>
                                                    )
                                                } else if (item.masuk == true) {
                                                    return (
                                                        <span key={index + 1} className='bg-red-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                    )
                                                }
                                            })}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* wrapper button nilai */}
                        <div className="mb-6 lg:mb-10">
                            {(() => {
                                if (data.length == 1) {
                                    return (
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button nilai biru */}
                                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                    {/* button pukulan */}
                                                    <button onClick={() => tambahPukulan ('tambahPukulanBiru1')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                    </button>
                                                    {/* button tendangan */}
                                                    <button onClick={() => tambahTendangan ('tambahTendanganBiru1')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                    </button>
                                                </div>
                                                {/* button hapus */}
                                                <button onClick={() => deleteNilai ('hapusNilaiBiru')} className="bg-blue-600 hover:bg-blue-700 rounded-xl flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                                </button>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                                {/* button hapus */}
                                                <button onClick={() => deleteNilai ('hapusNilaiMerah')} className="bg-red-600 hover:bg-red-700 rounded-xl flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                                </button>
                                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                    {/* button pukulan */}
                                                    <button onClick={() => tambahPukulan ('tambahPukulanMerah1')} className="bg-red-600 hover:bg-red-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                    </button>
                                                    {/* button tendangan */}
                                                    <button onClick={() => tambahTendangan ('tambahTendanganMerah1')} className="bg-red-600 hover:bg-red-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else if (data.length == 2) {
                                    return (
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button nilai biru */}
                                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                    {/* button pukulan */}
                                                    <button onClick={() => tambahPukulan ('tambahPukulanBiru2')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                    </button>
                                                    {/* button tendangan */}
                                                    <button onClick={() => tambahTendangan ('tambahTendanganBiru2')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                    </button>
                                                </div>
                                                {/* button hapus */}
                                                <button onClick={() => deleteNilai ('hapusNilaiBiru')} className="bg-blue-600 hover:bg-blue-700 rounded-xl flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                                </button>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                                {/* button hapus */}
                                                <button onClick={() => deleteNilai ('hapusNilaiMerah')} className="bg-red-600 hover:bg-red-700 rounded-xl flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                                </button>
                                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                    {/* button pukulan */}
                                                    <button onClick={() => tambahPukulan ('tambahPukulanMerah2')} className="bg-red-600 hover:bg-red-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                    </button>
                                                    {/* button tendangan */}
                                                    <button onClick={() => tambahTendangan ('tambahTendanganMerah2')} className="bg-red-600 hover:bg-red-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else if (data.length == 3) {
                                    return (
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button nilai biru */}
                                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                    {/* button pukulan */}
                                                    <button onClick={() => tambahPukulan ('tambahPukulanBiru3')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                    </button>
                                                    {/* button tendangan */}
                                                    <button onClick={() => tambahTendangan ('tambahTendanganBiru3')} className="bg-blue-600 hover:bg-blue-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                    </button>
                                                </div>
                                                {/* button hapus */}
                                                <button onClick={() => deleteNilai ('hapusNilaiBiru')} className="bg-blue-600 hover:bg-blue-700 rounded-xl flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                                </button>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                                {/* button hapus */}
                                                <button onClick={() => deleteNilai ('hapusNilaiMerah')} className="bg-red-600 hover:bg-red-700 rounded-xl flex justify-center items-center">
                                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                                </button>
                                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                                    {/* button pukulan */}
                                                    <button onClick={() => tambahPukulan ('tambahPukulanMerah3')} className="bg-red-600 hover:bg-red-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                                    </button>
                                                    {/* button tendangan */}
                                                    <button onClick={() => tambahTendangan ('tambahTendanganMerah3')} className="bg-red-600 hover:bg-red-700 rounded-lg py-10 text-center">
                                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })()}
                        </div>
                        <button onClick={() => selesai()} className="bg-green-600 hover:bg-green-700 rounded-lg py-3 text-center w-full">
                            <h1 className='text-2xl font-semibold'>Selesai</h1>
                        </button>
                    </div>
                </div>
                <div className="hidden lg:block">
                    <Footer />
                </div>
            </div>
            {/* akhir konten utama */}

            {jadwal.id ?
                <ModalJuri verif={infoVerif} id_jadwal={jadwal.id} socket={socket}/>
            : null}
        </FullScreen>
    </>
    )
}

export default nilai