import axios from 'axios';
import React, {useContext, useState, useEffect} from 'react'
import { globalState } from '../../../context/context';
import socketIo from 'socket.io-client'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const modalLayar = (props) => {
    const socket = props.socket

    const {showModalLayar, setShowModalLayar} = useContext (globalState)
    const [isLoadingJuri1, setIsLoadingJuri1] = useState(true)
    const [isLoadingJuri2, setIsLoadingJuri2] = useState(true)
    const [isLoadingJuri3, setIsLoadingJuri3] = useState(true)
    const [data, setData] = useState([])
    const verif = props.verif

    const cekVerif = async () => {
        let info = []
        const jadwal = JSON.parse(localStorage.getItem ('jadwalTanding'))
        let id_jadwal = jadwal.id
        await axios.get(BASE_URL + `/api/tanding/verif/${id_jadwal}`)
        .then (res => {
            setData(res.data.data)
            console.log(res.data.data);
            info = res.data.data
            console.log(info);
            if(info === null){
                console.log('verif null');
            } else if (info !== null){
                if(info.juri1 !== null){
                    setIsLoadingJuri1(false)
                } 
                if (info.juri2 !== null) {
                    setIsLoadingJuri2(false)
                }
                if (info.juri3 !== null) {
                    setIsLoadingJuri3(false)
                }
            }
        }).catch(err => {
            console.log(err.message);
        })
    }

    const ubah_data = () => socket.emit ('init_verif', JSON.parse(localStorage.getItem ('jadwalTanding')).id)


    useEffect(() => {
        const jadwal = JSON.parse(localStorage.getItem ('jadwalTanding'))
        socket.emit('join', jadwal.id)
    
        return () => {
            socket.emit('leave', jadwal)
        }
    }, [])
    
    useEffect(() => {
        // socket.emit('init_verif')
        socket.on('getVerif', cekVerif)
        socket.on ('change_verif', ubah_data)
    }, [])

    useEffect(() =>{
        setIsLoadingJuri1(true)
        setIsLoadingJuri2(true)
        setIsLoadingJuri3(true)
    }, [showModalLayar])

    return (
        <>
        {showModalLayar ? (
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
                                </div>
                                {/* body modal */}
                                <div className="relative flex flex-col text-white text-lg text-center px-6 pb-6">
                                    {/* wrapper body */}
                                    <div className="border-4 border-[#222954] rounded-lg p-4 space-y-3">
                                        <h1 className="text-3xl font-bold text-[#222954] tracking-wider">Verifikasi {verif}</h1>
                                        {/* table keputusan juri */}
                                        <table className='w-full table-fixed text-white'>
                                            <tbody>
                                                <tr>
                                                    <td className='border-2 border-[#222954] p-3'>
                                                        {(() => {
                                                            if(isLoadingJuri1) {
                                                                return (
                                                                    <div role="status" className='flex justify-center'>
                                                                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                                        </svg>
                                                                        <span className="sr-only">Loading...</span>
                                                                    </div>
                                                                )
                                                            } else {
                                                                if(data.juri1 === 'biru'){
                                                                    return (
                                                                        <div className="bg-blue-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                                                    )
                                                                } else if(data.juri1 === 'tidak_sah'){
                                                                    return (
                                                                        <div className="bg-yellow-300 rounded-lg py-4 text-2xl font-semibold text-[#222954]">Tidak Sah</div>
                                                                    )
                                                                } else if(data.juri1 === 'merah'){
                                                                    return (
                                                                        <div className="bg-red-600 rounded-lg py-4 text-2xl font-semibold">Sudut Merah</div>
                                                                    )
                                                                }
                                                            }
                                                        })()}
                                                    </td>
                                                    <td className='border-2 border-[#222954] p-3'>
                                                        {(() => {
                                                            if(isLoadingJuri2) {
                                                                return (
                                                                    <div role="status" className='flex justify-center'>
                                                                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                                        </svg>
                                                                        <span className="sr-only">Loading...</span>
                                                                    </div>
                                                                )
                                                            } else {
                                                                if(data.juri2 === 'biru'){
                                                                    return (
                                                                        <div className="bg-blue-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                                                    )
                                                                } else if(data.juri2 === 'tidak_sah'){
                                                                    return (
                                                                        <div className="bg-yellow-300 rounded-lg py-4 text-2xl font-semibold text-[#222954]">Tidak Sah</div>
                                                                    )
                                                                } else if(data.juri2 === 'merah'){
                                                                    return (
                                                                        <div className="bg-red-600 rounded-lg py-4 text-2xl font-semibold">Sudut Merah</div>
                                                                    )
                                                                }
                                                            }
                                                        })()}
                                                    </td>
                                                    <td className='border-2 border-[#222954] p-3'>
                                                        {(() => {
                                                            if(isLoadingJuri3) {
                                                                return (
                                                                    <div role="status" className='flex justify-center'>
                                                                        <svg aria-hidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                                        </svg>
                                                                        <span className="sr-only">Loading...</span>
                                                                    </div>
                                                                )
                                                            } else {
                                                                if(data.juri3 === 'biru'){
                                                                    return (
                                                                        <div className="bg-blue-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                                                    )
                                                                } else if(data.juri3 === 'tidak_sah'){
                                                                    return (
                                                                        <div className="bg-yellow-300 rounded-lg py-4 text-2xl font-semibold text-[#222954]">Tidak Sah</div>
                                                                    )
                                                                } else if(data.juri3 === 'merah'){
                                                                    return (
                                                                        <div className="bg-red-600 rounded-lg py-4 text-2xl font-semibold">Sudut Merah</div>
                                                                    )
                                                                }
                                                            }
                                                        })()}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <div className="grid grid-cols-3 border-2 border-[#222954] gap-x-3">
                                            <div className="bg-blue-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                            <div className="bg-red-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                            <div className="bg-yellow-300 text-[#222954] rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                        </div> */}
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

export default modalLayar