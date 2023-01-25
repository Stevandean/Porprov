import react, { useContext } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios';
import socketIo from 'socket.io-client'
import { globalState } from '../../../context/context'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalTgr = () => {

    const socket = socketIo (BASE_URL)
    
    const location = useRouter();
    const {pathname} = location;
    const splitLoc = pathname.split('/admin/tgr')

    const {showModalInput, setShowModalInput} = useContext (globalState)
    const {action, id} = useContext(globalState)


    // ini state
    const {setDataTunggal} = useContext (globalState)
    const {setDataGanda} = useContext (globalState)
    const {setDataRegu} = useContext (globalState)
    const {gelanggang, setGelanggang} = useContext (globalState)
    const {pool, setPool} = useContext (globalState)
    const {noUndian, setNoUndian} = useContext (globalState)
    const {kelas, setKelas} = useContext (globalState)
    const {nama1, setNama1} = useContext (globalState)
    const {nama2, setNama2} = useContext (globalState)
    const {nama3, setNama3} = useContext (globalState)
    const {kontingen, setKontingen} = useContext (globalState)
    const {msg, SetMsg} = useContext (globalState)


    const getTunggal = () => {
        axios.get (BASE_URL + '/api/tgr/tunggal')
        .then((res) => {
            setDataTunggal (res.data.data);
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getGanda = () => {
        axios.get (BASE_URL + '/api/tgr/ganda')
        .then ((res) => {
            setDataGanda (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getRegu = () => {
        axios.get (BASE_URL + '/api/tgr/regu')
        .then ((res) => {
            setDataRegu (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const handleSave = (e) => {
        e.preventDefault()
        let form = {
            gelanggang : gelanggang,
            pool : pool,
            no_undian : noUndian,
            kelas : kelas,
            nama1 : nama1,
            nama2 : nama2,
            nama3 : nama3,
            kontingen : kontingen,
        }
        let URL = ""
        console.log(form);
        
        if (action === 'insert') {
            if (splitLoc.toString() === ',Tunggal') {
                URL = (BASE_URL + '/api/tgr/tunggal')

                axios.post (URL, form)
                .then (res => {
                    getTunggal()
                    setShowModalInput (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log((err.message));
                    console.log(err.response.message);  
                })
            } else if (splitLoc.toString() === ',Ganda'){
                URL = (BASE_URL + '/api/tgr/ganda')

                axios.post (URL, form)
                .then (res => {
                    getGanda()
                    setShowModalInput (false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log((err.message));
                })
            } else if (splitLoc.toString() === ',Regu') {
                URL = (BASE_URL + '/api/tgr/regu')

                axios.post (URL, form)
                .then (res => {
                    getRegu()
                    setShowModalInput (false)
                    socket.emit('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else {
                console.log('kondisi tidak masuk');
            }
        } else if (action === 'update') {
            if (splitLoc.toString() === ',Tunggal') {
                URL = (BASE_URL+`/api/tgr/${id}`)
    
                axios.put(URL, form) 
                .then (res => {
                    getTunggal()
                    setShowModalInput(false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Ganda') {
                URL = (BASE_URL+`/api/tgr/${id}`)
    
                axios.put(URL, form) 
                .then (res => {
                    getGanda()
                    setShowModalInput(false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            } else if (splitLoc.toString() === ',Regu') {
                URL = (BASE_URL + `/api/tgr/${id}`)

                axios.put(URL, form)
                .then (res => {
                    getRegu()
                    setShowModalInput(false)
                    socket.emit ('editData')
                })
                .catch (err => {
                    console.log(err.message);
                })
            }
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
                            <form action="POST" onSubmit={handleSave}>
                                {/*header Modal*/}
                                <div className="flex justify-center p-5 border-b border-solid border-slate-500 rounded-t">
                                    <h3 className="text-3xl font-semibold text-white">
                                    Input Jadwal TGR ({splitLoc})
                                    </h3>
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
                                            type='text'
                                            value={gelanggang}
                                            onChange = {(e) => setGelanggang(e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Pool</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='type'
                                            value={pool}
                                            onChange = {(e) => setPool(e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>No Undian</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='number'
                                            value={noUndian}
                                            onChange = {(e) => setNoUndian(e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Kelas</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='text'
                                            value={kelas}
                                            onChange = {(e) => setKelas(e.target.value)}
                                            required
                                            ></input>
                                        </div>
                                    </div>
                                    <div className="flex flex-col space-y-5">

                                        {(()=> { 
                                            if (splitLoc.toString() === ',Tunggal') {
                                                return (
                                                    <>
                                                        <div className="flex flex-row space-x-3 w-full">
                                                            <div className="w-2/6 flex justify-between">
                                                                <span>Nama Pesilat</span>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="w-4/6">
                                                                <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                                                type='text'
                                                                value={nama1}
                                                                onChange = {(e) => setNama1(e.target.value)}
                                                                required
                                                                ></input>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            } else if (splitLoc.toString() === ',Ganda') {
                                                return (
                                                    <>
                                                        <div className="flex flex-row space-x-3 w-full">
                                                            <div className="w-2/6 flex justify-between">
                                                                <span>Nama Pesilat</span>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="w-4/6">
                                                                <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                                                type='text'
                                                                value={nama1}
                                                                onChange = {(e) => setNama1(e.target.value)}
                                                                required
                                                                ></input>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row space-x-3 w-full">
                                                            <div className="w-2/6 flex justify-between">
                                                                <span>Nama Pesilat 2</span>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="w-4/6">
                                                                <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                                                type='text'
                                                                value={nama2}
                                                                onChange = {(e) => setNama2(e.target.value)}
                                                                required
                                                                ></input>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            } else if (splitLoc.toString() === ',Regu') {
                                                return (
                                                    <>
                                                        <div className="flex flex-row space-x-3 w-full">
                                                            <div className="w-2/6 flex justify-between">
                                                                <span>Nama Pesilat</span>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="w-4/6">
                                                                <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                                                type='text'
                                                                value={nama1}
                                                                onChange = {(e) => setNama1(e.target.value)}
                                                                required
                                                                ></input>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-row space-x-3 w-full">
                                                            <div className="w-2/6 flex justify-between">
                                                                <span>Nama Pesilat 2</span>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="w-4/6">
                                                                <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                                                type='text'
                                                                value={nama2}
                                                                onChange = {(e) => setNama2(e.target.value)}
                                                                required
                                                                ></input>
                                                            </div>
                                                        </div><div className="flex flex-row space-x-3 w-full">
                                                            <div className="w-2/6 flex justify-between">
                                                                <span>Nama Pesilat 3</span>
                                                                <span>:</span>
                                                            </div>
                                                            <div className="w-4/6">
                                                                <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                                                type='text'
                                                                value={nama3}
                                                                onChange = {(e) => setNama3(e.target.value)}
                                                                required
                                                                ></input>
                                                            </div>
                                                        </div>
                                                    </>
                                                )
                                            }
                                        })()}

                                    </div>
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Kontingen Pesilat</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <input className='w-full bg-[#2E335A] rounded-md focus:outline-none border-2 border-white'
                                            type='text'
                                            value={kontingen}
                                            onChange = {(e) => setKontingen(e.target.value)}
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

export default modalTgr