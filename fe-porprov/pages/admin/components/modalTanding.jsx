import React, { useContext, useState } from 'react'
import { globalState } from '../../../context/context';
import axios from 'axios';
import socketIo from 'socket.io-client'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalTanding = () => {

    const socket = socketIo (BASE_URL)    

    const {showModalInput, setShowModalInput} = useContext(globalState);
    const {action, id} = useContext(globalState)

    // ini state
    const {dataTanding, setDataTanding} = useContext (globalState)
    const {gelanggang, setGelanggang} = useContext (globalState)
    const {partai, setPartai} = useContext (globalState)
    const {kelas, setKelas} = useContext (globalState)
    const {namaBiru, setNamaBiru} = useContext (globalState)
    const {kontingenBiru, setKontingenBiru} = useContext (globalState)
    const {namaMerah, setNamaMerah} = useContext (globalState)
    const {kontingenMerah, setKontingenMerah} = useContext (globalState)
    const {babak, setBabak} = useContext (globalState)

    const getTanding = async () => {
        await axios.get(BASE_URL + '/api/tanding').then((res) => {
            setDataTanding(res.data.data)
        });
    }
    
    const handleSave = (e) => {
        e.preventDefault ()
        let form = {
            gelanggang : gelanggang,
            partai : partai,
            kelas : kelas,
            nm_biru : namaBiru,
            kontingen_biru : kontingenBiru,
            nm_merah : namaMerah,
            kontingen_merah : kontingenMerah,
            babak : babak,
        }
        let URL = ""
        console.log(form);

        if (action === 'insert') {
            URL = (BASE_URL+"/api/tanding")
            axios.post(URL, form)
            .then(res => {
                setShowModalInput(false)
                getTanding()
                socket.emit('editData')
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if (action === 'update') {
            URL = (BASE_URL+`/api/tanding/${id}`)
    
            axios.put(URL, form)
            .then(res => {
                setShowModalInput(false)
                getTanding()
                socket.emit ('editData')
            })
            .catch (err => {
                console.log(err.message);
            })
        }
    }

    return (
    <>
        {showModalInput ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#11121C] outline-none focus:outline-none">
                            <form action='POST' onSubmit={handleSave}>
                                {/*header Modal*/}
                                <div className="flex justify-center p-5 border-b border-solid border-slate-500 rounded-t">
                                    {(() => {
                                        if (action === 'insert') {
                                            return (
                                                <>    
                                                    <h3 className="text-3xl font-semibold text-white">
                                                        Tambah Jadwal Tanding
                                                    </h3>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>    
                                                    <h3 className="text-3xl font-semibold text-white">
                                                        Edit Jadwal Tanding
                                                    </h3>
                                                </>
                                            )
                                        }
                                    })()}
                                </div>

                                {/*Wrapper Input Field*/}
                                <div className="relative p-6 flex flex-col space-y-5 text-white text-lg">

                                    {/* Input */}
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Gelanggang</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type="text"
                                            value={gelanggang}
                                            onChange={(e) => setGelanggang(e.target.value)}
                                            required
                                            >        
                                            </input>
                                        
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Partai</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='text'
                                            value={partai}
                                            onChange={(e) => setPartai(e.target.value)}
                                            required
                                            >
                                            </input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Kelas</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">                                            
                                            {/* <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='text'
                                            value={kelas}
                                            onChange = {(e) => setKelas(e.target.value)}
                                            ></input> */}
                                            <div className="relative w-full">
                                                <div className='border-2 bg-[#2E335A] border-white rounded-lg px-2'>
                                                    <select className='w-full bg-[#2E335A] focus:outline-none' name={kelas} onChange = {(e) => setKelas (e.target.value)} required>
                                                        <option>Kelas</option>
                                                        <option value="Usia Dini">Usia Dini</option>
                                                        <option value="Pra Remaja">Pra Remaja</option>
                                                        <option value="Remaja">Remaja</option>
                                                           <option value="Dewasa">Dewasa</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Nama Biru</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='text'
                                            value={namaBiru}
                                            onChange = {(e) => setNamaBiru(e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Kontingen Biru</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='text'
                                            value={kontingenBiru}
                                            onChange = {(e) => setKontingenBiru (e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Nama Merah</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type = 'text'
                                            value={namaMerah}
                                            onChange = {(e) => setNamaMerah (e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Kontingen Merah</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type = 'text'
                                            value={kontingenMerah}
                                            onChange = {(e) => setKontingenMerah (e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Babak</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='text'
                                            value={babak}
                                            onChange = {(e) => setBabak (e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    
                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                                    <button
                                    className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={ () => setShowModalInput(false)}>
                                    Close
                                    </button>

                                    {(() => {
                                        if (action === 'insert') {
                                            return (
                                                <>
                                                    <button
                                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                    type="submit">
                                                        Tambah Jadwal Tanding
                                                    </button>
                                                </>
                                            )
                                        } else if (action === 'update') {
                                            return (
                                                <>
                                                    <button
                                                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                        type="submit">
                                                            Edit Jadwal Tanding
                                                    </button>
                                                </>
                                            )
                                        }
                                    })()}


                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
            </>
        ) :null}
    </>
  )
}

export default modalTanding