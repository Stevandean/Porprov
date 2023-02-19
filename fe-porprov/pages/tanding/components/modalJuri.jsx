import React, { useContext, useState, useEffect } from 'react'
import { globalState } from '../../../context/context'
import axios from 'axios';
import socketIo from 'socket.io-client'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const socket = socketIo (BASE_URL)

const modalJuri = (props) => {

    const {showModalJuri, setShowModalJuri} = useContext (globalState)
    const {infoVerif, setInfoVerif} = useContext (globalState)
    const [data, setData] = useState([])
    const [dataJuri, setDataJuri] = useState ([])
    // const jadwal = props.id_jadwal
    const verif = props.verif

    const getJuri = () => {
        const juri = JSON.parse (localStorage.getItem ('juriTanding'))
        setDataJuri (juri)
    }

    const cekVerif = async () => {
        let info = []
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        console.log(jadwal);
        await axios.get(BASE_URL + `/api/verif/tanding/${jadwal}`)
        .then (res => {
            setData(res.data.data)
            info = res.data.data
            if(info === null){
                console.log('verif null');
            } else if (info !== null){
                if(info.show === true){
                    setShowModalJuri(false)
                } else if (info.show === false){
                    setShowModalJuri(false)
                }
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    const selectBiru = async () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        const juri = JSON.parse (localStorage.getItem ('juriTanding'))
        let id_juri = juri.id

        let form = {
            id_jadwal: id_jadwal,
            id_juri: id_juri

        }
        await axios.put(BASE_URL + `/api/verif/tanding/jatuhan/juri/biru`, form)
        .then(res => {
            console.log(res.data.message);
            console.log("nilai masuk");
            socket.emit('editVerif')
            // setShowModalJuri(false)
        }).catch(err => {
            console.log(err.message);
        })
    }

    const selectMerah = async () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        const juri = JSON.parse (localStorage.getItem ('juriTanding'))
        let id_juri = juri.id

        let form = {
            id_jadwal: id_jadwal,
            id_juri: id_juri

        }
        await axios.put(BASE_URL + `/api/verif/tanding/jatuhan/juri/merah`, form)
        .then(res => {
            console.log(res.data.message);
            console.log("nilai masuk");
            socket.emit('editVerif')
            // setShowModalJuri(false)
        }).catch(err => {
            console.log(err.message);
        })
    }

    const selectKuning = async () =>{
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        const juri = JSON.parse (localStorage.getItem ('juriTanding'))
        let id_juri = juri.id

        let form = {
            id_jadwal: id_jadwal,
            id_juri: id_juri

        }
        await axios.put(BASE_URL + `/api/verif/tanding/jatuhan/juri/kuning`, form)
        .then(res => {
            console.log(res.data.message);
            console.log("nilai masuk");
            socket.emit('editVerif')
            // setShowModalJuri(false)
        }).catch(err => {
            console.log(err.message);
        })
    }
    
    useEffect(() => {
    //   cekVerif()
      getJuri()
    }, [])
    

    return (
        <>
        {showModalJuri ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <form 
                            // action='POST' onSubmit={handleSave}
                            >
                                {/*header Modal*/}
                                <div className="flex justify-between py-5 px-10 rounded-t text-[#222954]">
                                    <h3 className="text-3xl font-semibold">
                                        Verifikasi Juri
                                    </h3>
                                    {/* <button className="text-3xl font-semibold">
                                        X
                                    </button> */}
                                </div>
                                {/* body modal */}
                                <div className="relative flex flex-col text-white text-lg text-center px-6 pb-6">
                                    {/* wrapper body */}
                                    <div className="border-4 border-[#222954] rounded-lg p-4 space-y-3">
                                        <h1 className="text-3xl font-bold text-[#222954] tracking-wider">Verifikasi {verif}</h1>
                                        <h1 className="bg-[#222954] py-3 text-3xl font-bold">{dataJuri.username}</h1>
                                        {/* wraper button */}
                                        <div className="grid grid-cols-3 gap-x-3">
                                            <button type='button' onClick={() => selectBiru()} className="bg-blue-600 rounded-lg py-4 text-2xl font-semibold">
                                                Sudut Biru
                                            </button>
                                            <button type='button' onClick={() => selectMerah()} className="bg-red-600 rounded-lg py-4 text-2xl font-semibold">
                                                Sudut Merah
                                            </button>
                                            <button type='button' onClick={() => selectKuning()} className="bg-yellow-300 text-[#222954] rounded-lg py-4 text-2xl font-semibold">
                                                Tidak Sah
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
            </>
        ):null}
        </>
    )
}

export default modalJuri