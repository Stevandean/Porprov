import React, { useEffect, useState, useContext } from 'react'
import Link from 'next/link'
import Navbar from '../../component/navbar/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import axios from 'axios'
import { globalState } from '../../../context/context';
import ModalDewan from '../components/modalDewan'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
import { socket } from '../../../utils/socket'

import socketIo from 'socket.io-client'
// const socket = socketIo (BASE_URL)

const dewan = () => {

    const router = useRouter ()

    // ini state
    const [data, setData] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [jadwalBiru, setJadwalBiru] = useState ([])
    const [jadwalMerah, setJadwalMerah] = useState ([])
    const [keterangan, setKeterangan] = useState ('')
    const {showModalDewan, setShowModalDewan} = useContext (globalState)
    const {infoVerif, setInfoVerif} = useContext (globalState)

    const [juri1Biru1, setJuri1Biru1] = useState([])
    const [juri2Biru1, setJuri2Biru1] = useState([])
    const [juri3Biru1, setJuri3Biru1] = useState([])
    const [juri1Merah1, setJuri1Merah1] = useState([])
    const [juri2Merah1, setJuri2Merah1] = useState([])
    const [juri3Merah1, setJuri3Merah1] = useState([])
    const [juri1Biru2, setJuri1Biru2] = useState([])
    const [juri2Biru2, setJuri2Biru2] = useState([])
    const [juri3Biru2, setJuri3Biru2] = useState([])
    const [juri1Merah2, setJuri1Merah2] = useState([])
    const [juri2Merah2, setJuri2Merah2] = useState([])
    const [juri3Merah2, setJuri3Merah2] = useState([])
    const [juri1Biru3, setJuri1Biru3] = useState([])
    const [juri2Biru3, setJuri2Biru3] = useState([])
    const [juri3Biru3, setJuri3Biru3] = useState([])
    const [juri1Merah3, setJuri1Merah3] = useState([])
    const [juri2Merah3, setJuri2Merah3] = useState([])
    const [juri3Merah3, setJuri3Merah3] = useState([])

    const [peringatan1merah, setPeringatan1merah] = useState([])
    const [peringatan2merah, setPeringatan2merah] = useState([])
    const [peringatan3merah, setPeringatan3merah] = useState([])

    const [peringatan1biru, setPeringatan1biru] = useState([])
    const [peringatan2biru, setPeringatan2biru] = useState([])
    const [peringatan3biru, setPeringatan3biru] = useState([])

    const headerConfig = () => {
        let token = localStorage.getItem("token")
        let header = {
          headers : { Authorization : `Bearer ${token}` }
        }
        return header
    }

    //socket    
    const [isConnected, setIsConnected] = useState(socket.connected);
    useEffect(() => {
        function onConnect() {
            setIsConnected(true);
            // console.log("connected");
            // console.log(isConnected);   
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

    const getNilai = async () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        await axios.get (BASE_URL +`/api/nilai/tanding/jadwal/${id_jadwal}`)
        .then (res => {
            setData (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
            console.log(err.response.data.message);
        })
    }

    const getPeringatan  = async () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        
        let babak = []
        await axios.get(BASE_URL + `/api/nilai/tanding/babakbyjadwal/${id_jadwal}`)
        .then (res => {
            babak = res.data.data
        })
        .catch (err => {
            console.log(err.message);
        })

        if (babak.length === 1) {
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })

            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if(babak.length === 2){
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 2 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })

            //get juri 1 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 2 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (babak.length === 3){
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 1 merah
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            await axios.get (BASE_URL +`/api/tanding/peringatan/merah/${id_jadwal}/iii`)
            .then (res => {
                setPeringatan3merah (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })

            //get juri 1 biry
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/i`)
            .then (res => {
                setPeringatan1biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 2 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/ii`)
            .then (res => {
                setPeringatan2biru (res.data.data)
            })
            .catch (err => {
                console.log(err.message);
            })
            //get juri 3 biru
            await axios.get (BASE_URL +`/api/tanding/peringatan/biru/${id_jadwal}/iii`)
            .then (res => {
                setPeringatan3biru (res.data.data)
                console.log(res.data.data);
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    const getJuriBiru1 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/biru/${id_jadwal}/i`)
        .then (res => {
            setJuri1Biru1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/biru/${id_jadwal}/i`)
        .then (res => {
            setJuri2Biru1 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/biru/${id_jadwal}/i`)
        .then (res => {
            setJuri3Biru1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriMerah1 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/merah/${id_jadwal}/i`)
        .then (res => {
            setJuri1Merah1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/merah/${id_jadwal}/i`)
        .then (res => {
            setJuri2Merah1 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/merah/${id_jadwal}/i`)
        .then (res => {
            setJuri3Merah1 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriBiru2 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/biru/${id_jadwal}/ii`)
        .then (res => {
            setJuri1Biru2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/biru/${id_jadwal}/ii`)
        .then (res => {
            setJuri2Biru2 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/biru/${id_jadwal}/ii`)
        .then (res => {
            setJuri3Biru2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriMerah2 = async () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 merah
        await axios.get (BASE_URL +`/api/nilai/tanding/log/1/merah/${id_jadwal}/ii`)
        .then (res => {
            setJuri1Merah2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 merah
        await axios.get (BASE_URL +`/api/nilai/tanding/log/2/merah/${id_jadwal}/ii`)
        .then (res => {
            setJuri2Merah2 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 merah
        await axios.get (BASE_URL +`/api/nilai/tanding/log/3/merah/${id_jadwal}/ii`)
        .then (res => {
            setJuri3Merah2 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriBiru3 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/biru/${id_jadwal}/iii`)
        .then (res => {
            setJuri1Biru3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/biru/${id_jadwal}/iii`)
        .then (res => {
            setJuri2Biru3 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 biru
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/biru/${id_jadwal}/iii`)
        .then (res => {
            setJuri3Biru3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJuriMerah3 = () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        //get juri 1 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/1/merah/${id_jadwal}/iii`)
        .then (res => {
            setJuri1Merah3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })

        //get juri 2 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/2/merah/${id_jadwal}/iii`)
        .then (res => {
            setJuri2Merah3 (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })

        //get juri 3 merah
        axios.get (BASE_URL +`/api/nilai/tanding/log/3/merah/${id_jadwal}/iii`)
        .then (res => {
            setJuri3Merah3 (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }


    const getJadwal = async () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        await axios.get (BASE_URL + `/api/tanding/jadwal/${id_jadwal}`)
        .then (res => {
            setJadwal (res.data.data);
            setJadwalBiru (res.data.data.biru)
            setJadwalMerah (res.data.data.merah)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    // tambah jatuhan
    const tambahJatuhan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        
        // babak 1
        if (e == 'tambahJatuhanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahJatuhanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log('gagal');
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahJatuhanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahJatuhanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahJatuhanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahJatuhanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // tambah binaan
    const tambahBinaan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'tambahBinaanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/binaan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahBinaanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/binaan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahBinaanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/binaan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahBinaanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/binaan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahBinaanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post  (BASE_URL + `/api/nilai/tanding/biru/binaan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahBinaanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/binaan`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // tambah teguran
    const tambahTeguran = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'tambahTeguranBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/teguran`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTeguranMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/teguran`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahTeguranBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/teguran`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTeguranMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/teguran`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahTeguranBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/teguran`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTeguranMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/teguran`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // tambah peringatan
    const tambahPeringatan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'tambahPeringatanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/tanding/peringatan/biru`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPeringatanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/tanding/peringatan/merah/`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahPeringatanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/tanding/peringatan/biru`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPeringatanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/tanding/peringatan/merah/`, form)
            .then (res => {
                socket.emit('dewanToLayar',jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahPeringatanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/tanding/peringatan/biru`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPeringatanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/tanding/peringatan/merah/`, form)
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // delete jatuhan
    const deleteJatuhan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusJatuhanBiru1') {
            let form = {
                id_jadwal : jadwal,
                babak : 'I',
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusJatuhanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'hapusJatuhanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusJatuhanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL +`/api/nilai/tanding/merah/jatuhan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'hapusJatuhanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusJatuhanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // delete binaan
    const deleteBinaan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusBinaanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/binaan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusBinaanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/binaan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        if (e == 'hapusBinaanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/binaan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusBinaanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/binaan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        if (e == 'hapusBinaanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/binaan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusBinaanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/binaan`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    //delete teguran
    const deleteTeguran = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusTeguranBiru1') {
            let form  = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/teguran`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusTeguranMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/teguran`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'hapusTeguranBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL +`/api/nilai/tanding/biru/teguran`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusTeguranMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/teguran`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'hapusTeguranBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/teguran`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusTeguranMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/teguran`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    //delete peringatan
    const deletePeringatan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusPeringatanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/tanding/peringatan/biru/`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusPeringatanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/tanding/peringatan/merah/`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'hapusPeringatanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/tanding/peringatan/biru/`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusPeringatanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL +  `/api/tanding/peringatan/merah/`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'hapusPeringatanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/tanding/peringatan/biru/`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusPeringatanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/tanding/peringatan/merah/`, {data : form})
            .then (res => {
                socket.emit('dewanToLayar', jadwal)
                getNilai ()
                getPeringatan()
                getJadwal()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    //tambah kartu kuning
    const tambahKartuKuning = async (e) =>{
        const jadwal = localStorage.getItem ('jadwal')
        await axios.post(BASE_URL + `/api/nilai/tanding/kartu_kuning/${e}/${jadwal}`)
        .then (res => {
            socket.emit('dewanToLayar', jadwal)
            getNilai ()
            getJadwal()
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    //hapus kartu kuning
    const deleteKartuKuning = async (e) =>{
        const jadwal = localStorage.getItem ('jadwal')
        await axios.post(BASE_URL + `/api/nilai/tanding/kartu_kuning/hapus/${e}/${jadwal}`)
        .then (res => {
            socket.emit('dewanToLayar', jadwal)
            getNilai ()
            getJadwal()
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const winner = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        setKeterangan (e)

        if (e == 'angkaBiru' || e == 'angkaMerah') {
            let form = {
                keterangan : 'ANGKA',
            }
            if (e == 'angkaBiru') {
                form.id_pemenang = jadwalBiru.id
            }else if (e == 'angkaMerah'){
                form.id_pemenang = jadwalMerah.id
            }

            axios.put (BASE_URL + `/api/tanding/jadwal/keterangan/${id_jadwal}`, form)
            .then (res => {
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'udBiru' || e == 'udMerah') {
            let form = {
                keterangan : 'U.D.'
            }
            if (e == 'udBiru') {
                form.id_pemenang = jadwalBiru.id
            }else if (e == 'udMerah'){
                form.id_pemenang = jadwalMerah.id
            }
            axios.put (BASE_URL + `/api/tanding/jadwal/keterangan/${id_jadwal}`, form)
            .then (res => {
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'disBiru' || e == 'disMerah') {
            let form = {
                keterangan : 'DIS'
            }
            if (e == 'disBiru') {
                form.id_pemenang = jadwalBiru.id
            }else if (e == 'disMerah'){
                form.id_pemenang = jadwalMerah.id
            }
            axios.put (BASE_URL + `/api/tanding/jadwal/keterangan/${id_jadwal}`, form)
            .then (res => {
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'teknikBiru' || e == 'teknikMerah') {
            let form = {
                keterangan : 'TEKNIK'
            }
            if (e == 'teknikBiru') {
                form.id_pemenang = jadwalBiru.id
            }else if (e == 'teknikMerah'){
                form.id_pemenang = jadwalMerah.id
            }
            axios.put (BASE_URL + `/api/tanding/jadwal/keterangan/${id_jadwal}`, form)
            .then (res => {
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'wmpBiru' || e == 'wmpMerah') {
            let form = {
                keterangan : 'W.M.P.'
            }
            if (e == 'wmpBiru') {
                form.id_pemenang = jadwalBiru.id
            }else if (e == 'wmpMerah'){
                form.id_pemenang = jadwalMerah.id
            }
            axios.put (BASE_URL + `/api/tanding/jadwal/keterangan/${id_jadwal}`, form)
            .then (res => {
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'mutlakBiru' || e == 'mutlakMerah') {
            let form = {
                keterangan : 'MUTLAK'
            }
            if (e == 'mutlakBiru') {
                form.id_pemenang = jadwalBiru.id
            }else if (e == 'mutlakMerah'){
                form.id_pemenang = jadwalMerah.id
            }
            axios.put (BASE_URL + `/api/tanding/jadwal/keterangan/${id_jadwal}`, form)
            .then (res => {
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } 
    }

    const selesai = () => {
        const jadwal = localStorage.getItem ('jadwal')

        let form = {
            selesai : 1,
        }

        if (confirm ('Apa anda yakin untuk mengakhiri pertandingan ini?') == 1) {
            axios.put (BASE_URL + `/api/tanding/selesai/${jadwal}`, form)
            .then (res => {
                router.back ()
            })
            .catch (err => {
                console.log(err.response.data.message);
                router.back ()
            })
        }
    }

    // verif jatuhan
    const addVerifJatuhan = async () => {
        // setInfoVerif('Jatuhan')
        // setShowModalDewan(true)
        // socket.emit('openVerif')

        const jadwal = localStorage.getItem ('jadwal')
            let form = {
                id_jadwal : jadwal
            }
            await axios.post(BASE_URL + `/api/tanding/verif/jatuhan`, form)
            .then(res =>{
                if(res.data.status === true){
                    setInfoVerif('Jatuhan')
                    setShowModalDewan(true)
                    socket.emit('openVerif', jadwal)
                }
            }).catch (err => {
                console.log(err.response.data.message);
            })
    }

    const addVerifHukum = async () =>{
        // setInfoVerif('Hukuman')
        // setShowModalDewan(true)
        // socket.emit('openVerif')
        const jadwal = localStorage.getItem ('jadwal')

        let form = {
            id_jadwal : jadwal
        }
        await axios.post(BASE_URL + `/api/tanding/verif/hukuman`, form)
        .then(res =>{
            if(res.data.status === true){
                setInfoVerif('Hukuman')
                setShowModalDewan(true)
                socket.emit('openVerif', jadwal)
            }
        }).catch (err => {
            console.log(err.response.data.message);
        })
    }

    const ubah_data = () => socket.emit ('init_juri_tanding', localStorage.getItem('jadwal'))

    useEffect(() => {
        const jadwal = localStorage.getItem ('jadwal')
        socket.emit('join', jadwal)
    
        return () => {
            socket.off('join')
        }
    }, [])
    
    useEffect (() => {
        (async () => {
            const jadwal = localStorage.getItem ('jadwal')
            let id_jadwal = jadwal


            let babak = []
            await axios.get (BASE_URL + `/api/nilai/tanding/babakbyjadwal/${id_jadwal}`)
            .then (res => {
                babak = res.data.data
            })
            .catch (err => {
                console.log(err.message);
            })

            socket.emit('init_juri_tanding', jadwal)
            console.log(babak.length);
            if (babak.length >= 1) {
                if (babak.length == 1) {
                    socket.on("refreshDewan", getJuriBiru1)
                    socket.on("refreshDewan", getJuriMerah1)
                }

                getJuriBiru1()
                getJuriMerah1()
            } 

            if (babak.length >= 2){
                if (babak.length == 2) {
                    socket.on("refreshDewan", getJuriBiru2)
                    socket.on("refreshDewan", getJuriMerah2)
                }
                getJuriBiru2()
                getJuriMerah2()
            }

            if (babak.length >= 3){
                if (babak.length == 3) {
                    socket.on("refreshDewan", getJuriBiru3)
                    socket.on("refreshDewan", getJuriMerah3)
                }
                getJuriBiru3()
                getJuriMerah3()

            }

            socket.emit('init_juri_tanding', localStorage.getItem('jadwal'))
            socket.on("getJuri", getNilai)
            socket.on("getJuri", getJadwal)
            socket.on("naikBabak", getNilai)
            socket.on('change_nilai_juri', ubah_data)
            getPeringatan()
            // isLogged ()
        })();

        return () => {
            socket.off("getJuri", getNilai)
            socket.off("getJuri", getJadwal)
            socket.off("naikBabak", getNilai)
            socket.off('change_nilai_juri', ubah_data)
            // console.log('closed');
        }
    }, [isConnected === true])

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
                    <div className="w-11/12 mx-auto py-10">

                        {/* wrapper tanding information */}
                        <div className="grid grid-cols-3 gap-x-3 mb-8">
                            {/* partai */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>PARTAI {jadwal.partai}</h1>
                            </div>
                            {/* kelas and kategori */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwal.kelas} {jadwal.jk} {jadwal.golongan}</h1>
                            </div>
                            {/* babak */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwal.babak}</h1>
                            </div>
                        </div>

                        {/* wrapper participant information */}
                        <div className="grid grid-cols-7 mb-8">
                            {/* sudut biru information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                    <div className="py-2 px-5 col-span-4">
                                        <h1 className='text-xl font-bold'>{jadwalBiru.nama}</h1>
                                        <h1 className='text-xl font-bold'>{jadwalBiru.kontingen}</h1>
                                    </div>
                                {/* nomor partai */}
                                <div className="bg-blue-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwal.total_biru}</h1>
                                </div>
                            </div>
                            <div></div>
                            {/* sudut merah information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                {/* nomor partai  */}
                                <div className="bg-red-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwal.total_merah}</h1>
                                </div>
                                <div className="py-2 px-5 col-span-4 flex flex-col items-end">
                                    <h1 className='text-xl font-bold'>{jadwalMerah.nama}</h1>
                                    <h1 className='text-xl font-bold'>{jadwalMerah.kontingen}</h1>
                                </div>
                            </div>
                        </div>

                        {/* table nilai */}
                        {data.map ((item, index) => (
                            <table key={index + 1} className='w-full table-fixed border-separate border-spacing-1 mb-4'>
                                <thead>
                                    <tr>
                                        <th className='rounded-lg py-3 bg-blue-600'>TOTAL</th>
                                        <th className='rounded-lg bg-blue-600' colSpan={4}>DETAIL POIN</th>
                                        <th className='rounded-lg bg-yellow-300 text-[#222954]'>BABAK</th>
                                        <th className='rounded-lg bg-red-600' colSpan={4}>DETAIL POIN</th>
                                        <th className='rounded-lg bg-red-600'>TOTAL</th>
                                    </tr>
                                </thead>
                                <tbody className='text-[#222954]'>
                                    {/* wrapper nilai juri 1 */}
                                    <tr>
                                        {/* total */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.nilai_biru.total_poin}</td>

                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                    {(() =>{
                                                        if(item.babak === 'I'){
                                                            return(
                                                                juri1Biru1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri1Biru2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri1Biru3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                            </div>
                                        </td>

                                        {/* babak */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.babak}</td>

                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                    {(()=>{
                                                        if(item.babak === "I"){
                                                            return(
                                                                juri1Merah1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri1Merah2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri1Merah3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                        </td>

                                        {/* total */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.nilai_merah.total_poin}</td>
                                    </tr>

                                    {/* wrapper nilai juri 2 */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                {(() =>{
                                                        if(item.babak === 'I'){
                                                            return(
                                                                juri2Biru1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri2Biru2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri2Biru3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 2</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 2</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                {(()=>{
                                                        if(item.babak === "I"){
                                                            return(
                                                                juri2Merah1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri2Merah2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri2Merah3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper nilai juri 3 */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                {(() =>{
                                                        if(item.babak === 'I'){
                                                            return(
                                                                juri3Biru1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri3Biru2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri3Biru3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 3</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 3</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                {(()=>{
                                                        if(item.babak === "I"){
                                                            return(
                                                                juri3Merah1.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'II'){
                                                            return(
                                                                juri3Merah2.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }else if(item.babak === 'III'){
                                                            return(
                                                                juri3Merah3.map ((item, index) => (
                                                                    <span key={index + 1}>{item.poin}, </span>
                                                                ))
                                                            )
                                                        }
                                                    })()}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin masuk */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">
                                                    <span>{item.nilai_biru.poin_masuk}</span>
                                                </div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0] break-words">
                                                    {item.nilai_biru.log_poin_masuk.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0] break-words">
                                                    {item.nilai_merah.log_poin_masuk.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">
                                                    <span>{item.nilai_merah.poin_masuk}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin jatuhan */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total jatuhan */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF] break-words">
                                                    <span>
                                                        {item.nilai_biru.jatuhan}
                                                    </span>
                                                </div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">
                                                    {item.nilai_biru.log_jatuhan.map((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF] break-words">
                                                    {item.nilai_merah.log_jatuhan.map((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">
                                                    <span>{item.nilai_merah.jatuhan}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin hukuman */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total hukuman */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">
                                                    <span>{item.nilai_biru?.total_hukum}</span>
                                                </div>
                                                {/* nilai hukuman */}
                                                <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.nilai_biru?.log_binaan.map((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.nilai_biru?.log_teguran.map((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {(()=>{
                                                            if(item.babak === "I"){
                                                                return(
                                                                    peringatan1biru.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }else if(item.babak === 'II'){
                                                                return(
                                                                    peringatan2biru.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }else if(item.babak === 'III'){
                                                                return(
                                                                    peringatan3biru.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }
                                                        })()}
                                                    </div>
                                                </div>
                                                {/* nama hukuman */}
                                                <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama hukuman */}
                                                <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                                </div>
                                                {/* nilai hukuman */}
                                                <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.nilai_merah.log_binaan.map((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.nilai_merah.log_teguran.map((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {(()=>{
                                                            if(item.babak === "I"){
                                                                return(
                                                                    peringatan1merah.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }else if(item.babak === 'II'){
                                                                return(
                                                                    peringatan2merah.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }else if(item.babak === 'III'){
                                                                return(
                                                                    peringatan3merah.map ((item, index) => (
                                                                        <span key={index + 1}>{item.poin}, </span>
                                                                    ))
                                                                )
                                                            }
                                                        })()}
                                                    </div>
                                                </div>
                                                {/* total hukuman */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.nilai_merah.total_hukum}</div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        ))}

                        {/* wrapper button nilai */}
                        {(() => {
                            if (data.length == 1) {
                                return (
                                    <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                                        {/*  wrapper button tambah nilai */}
                                        <div className="grid grid-cols-7 mb-3 ">
                                            {/* button button nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* wrapper button hapus nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* wrapper button delete nilai biru */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button delete nilai merah */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* wrapper button kartu kuning */}
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button delete nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-2 gap-x-3">
                                                    <button onClick={() => deleteKartuKuning ('biru')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold text-[#222954] py-2.5 rounded-lg'>Hapus Kartu Kuning</button>
                                                    <button onClick={() => tambahKartuKuning ('biru')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Kartu Kuning</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button delete nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-2 gap-x-3">
                                                    <button onClick={() => tambahKartuKuning ('merah')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Kartu Kuning</button>
                                                    <button onClick={() => deleteKartuKuning ('merah')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold text-[#222954] py-2.5 rounded-lg'>Hapus Kartu Kuning</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )        
                            } else if (data.length == 2) {
                                return (
                                    <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                                        {/*  button nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* button button nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* wrapper button hapus nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* wrapper button hapus nilai biru */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button hapus nilai merah */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                        </div>

                                        {/* wrapper button kartu kuning */}
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button delete nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-2 gap-x-3">
                                                    <button onClick={() => deleteKartuKuning ('biru')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold text-[#222954] py-2.5 rounded-lg'>Hapus Kartu Kuning</button>
                                                    <button onClick={() => tambahKartuKuning ('biru')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Kartu Kuning</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button delete nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-2 gap-x-3">
                                                    <button onClick={() => tambahKartuKuning ('merah')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Kartu Kuning</button>
                                                    <button onClick={() => deleteKartuKuning ('merah')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold text-[#222954] py-2.5 rounded-lg'>Hapus Kartu Kuning</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                )
                            } else if (data.length == 3) {
                                return (
                                    <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                                        {/*  wrapper button nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* wrapper button nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* wrapper button hapus nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* wrapper button hapus nilai biru */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanBiru3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranBiru3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanBiru3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanBiru3')} className ='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button hapus nilai merah */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>                        
                                        </div>

                                        {/* wrapper button kartu kuning */}
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button delete nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-2 gap-x-3">
                                                    <button onClick={() => deleteKartuKuning ('biru')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold text-[#222954] py-2.5 rounded-lg'>Hapus Kartu Kuning</button>
                                                    <button onClick={() => tambahKartuKuning ('biru')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Kartu Kuning</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button delete nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-2 gap-x-3">
                                                    <button onClick={() => tambahKartuKuning ('merah')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Kartu Kuning</button>
                                                    <button onClick={() => deleteKartuKuning ('merah')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold text-[#222954] py-2.5 rounded-lg'>Hapus Kartu Kuning</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })()}

                        {/* wrapper verifikasi juri */}
                        <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                            {/* verifikasi juri */}
                            <div className="bg-[#222954] text-center rounded-lg py-3 mb-3">
                                <h1 className='text-2xl font-bold'>VERIFIKASI JURI</h1>
                            </div>
                            {/* wrapper button verifikasi juri */}
                            <div className="grid grid-cols-2 gap-x-7 text-center text-[#222954]">
                                <button onClick={() => addVerifJatuhan()} className="bg-yellow-300 hover:bg-yellow-400 py-2 rounded-lg text-xl font-semibold">JATUHAN</button>
                                <button onClick={() => addVerifHukum()} className="bg-yellow-300 hover:bg-yellow-400 py-2 rounded-lg text-xl font-semibold">HUKUMAN</button>
                            </div>
                        </div>

                        
                        {/* keputusan pemenang */}
                        <div className="border-2 border-[#222954] rounded-lg py-3 px-2 mb-8">
                            {/* keputusan pemenang */}
                            <div className="bg-[#222954] text-center rounded-lg py-3 mb-3">
                                <h1 className='text-2xl font-bold'>KEPUTUSAN PEMENANG</h1>
                            </div>
                            {/* wrapper keputusan pemenang */}
                            <div className="grid grid-cols-2 gap-x-7">
                                {/* wrapper button Keputusan pemenang biru */}
                                <div className="text-center text-[#222954]">
                                    <div className="grid grid-cols-6 gap-x-2">
                                        <button onClick={() => winner ('angkaBiru')} className={keterangan === 'angkaBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Angka</button>
                                        <button onClick={() => winner ('udBiru')} className={keterangan === 'udBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>U.D</button>
                                        <button onClick={() => winner ('disBiru')} className={keterangan === 'disBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Dis</button>
                                        <button onClick={() => winner ('teknikBiru')} className={keterangan === 'teknikBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Teknik</button>
                                        <button onClick={() => winner ('wmpBiru')} className={keterangan === 'wmpBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>WMP</button>
                                        <button onClick={() => winner ('mutlakBiru')} className={keterangan === 'mutlakBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Mutlak</button>
                                    </div>
                                </div>

                                {/* wrapper button Keputusan pemenang merah */}
                                <div className="text-center text-[#222954]">
                                    <div className="grid grid-cols-6 gap-x-2">
                                        <button onClick={() => winner ('angkaMerah')} className={keterangan === 'angkaMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Angka</button>
                                        <button onClick={() => winner ('udMerah')} className={keterangan === 'udMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>U.D</button>
                                        <button onClick={() => winner ('disMerah')} className={keterangan === 'disMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Dis</button>
                                        <button onClick={() => winner ('teknikMerah')} className={keterangan === 'teknikMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Teknik</button>
                                        <button onClick={() => winner ('wmpMerah')} className={keterangan === 'wmpMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>WMP</button>
                                        <button onClick={() => winner ('mutlakMerah')} className={keterangan === 'mutlakMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Mutlak</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* wrapper back and selesai */}
                        <div className="grid grid-cols-6 gap-x-4">
                            <button onClick={() => router.back()} className="bg-green-600 hover:bg-green-700 col-span-3 py-3 text-center rounded-lg text-xl font-bold">Kembali</button>
                            <button onClick={() => selesai()} className="col-span-3 bg-green-600 hover:bg-green-700 py-3 text-center rounded-lg text-xl font-bold">Selesai</button>
                        </div>

                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}

            <ModalDewan verif={infoVerif} socket={socket}/>
        </div>
        </>
    )
}

export default dewan