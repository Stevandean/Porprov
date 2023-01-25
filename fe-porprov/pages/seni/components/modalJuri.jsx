import axios from 'axios';
import Router, { useRouter } from 'next/router';
import React, { useContext, useEffect, useState } from 'react'
import { globalState } from '../../../context/context';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalJuri = () => {

    const {showModalJuri, setShowModalJuri} = useContext (globalState)
    const {namaJuri, setNamaJuri} = useContext (globalState)
    const [nama, setNama] = useState ([])

    const router = useRouter ()
    const { kategori } = router.query

    const handleSave = (e) => {
        localStorage.setItem ('nama', nama)
        setShowModalJuri (false)
        getJuri ()

        if (kategori.toLowerCase() === 'tunggal') {
            Router.push ('/seni/juri/nilaiSeniTunggal')
        } else if (kategori.toLowerCase() === 'ganda') {
            Router.push ('/seni/juri/nilaiSeniGanda')
        } else if (kategori.toLowerCase() === 'regu') {
            Router.push ('/seni/juri/nilaiSeniRegu')
        } else {
            console.log('gagal');
        }
    }

    const getJuri = () => {
        axios.get (BASE_URL + `/api/nama`)
        .then (res => {
            setNamaJuri (res.data.data)
        })
        .catch (err => [
            console.log(err.response.data.message)
        ]) 
    }

    useEffect (() => {
        getJuri()
    }, [])

    return (
        <>
        {showModalJuri ? (
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#212437] outline-none focus:outline-none">
                            <form action='POST' onSubmit={handleSave}>
                                {/*header Modal*/}
                                <div className="flex justify-center p-5 border-b border-solid border-slate-500 rounded-t">
                                    <h3 className="text-3xl font-semibold text-white">
                                        Tambah Jadwal Tanding
                                    </h3>
                                </div>

                                {/*Wrapper Input Field*/}
                                <div className="relative p-6 flex flex-col space-y-5 text-white text-lg">

                                    {/* Input */}
                                    <div className="flex flex-row space-x-3 w-full">
                                        <div className="w-2/6 flex justify-between">
                                            <span>Nama Juri</span>
                                            <span>:</span>
                                        </div>
                                        <div className="w-4/6">
                                            <div className="relative w-full">
                                                <div className='border-2 bg-[#212437] border-slate-200 rounded-lg px-2'>
                                                    <select className='w-full bg-[#212437] focus:outline-none' name={nama} onChange = {(e) => setNama (e.target.value)} required>
                                                        <option></option>
                                                        {namaJuri.map (item => (
                                                            <option value={item.nama}>{item.nama}</option>
                                                        ))}
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                {/*footer*/}
                                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                                    <button
                                    className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="button"
                                    onClick={ () => setShowModalJuri(false)}>
                                    Close
                                    </button>
                                    <button
                                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                    type="submit">
                                        Tambah Jadwal Tanding
                                    </button>
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