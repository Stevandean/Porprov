import React, { useContext, useState } from 'react'
import { globalState } from '../../../context/context'
import axios from 'axios'
import { useRouter } from 'next/router';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalImport = () => {
    const location = useRouter()
    const {pathname} = location
    const splitLoc = pathname.split ('/admin/peserta')

    const {showModalImport, setShowModalImport} = useContext(globalState)
    const [file, setFile] = useState(null)
    const {dataPesertaTanding, setDataPesertaTanding} = useContext (globalState)

    const getPesertaTanding = () => {
        axios.get (BASE_URL + `/api/peserta/tanding`)
        .then (res => {
            setDataPesertaTanding (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const handleFile = (e) =>{
        setFile (e.target.files[0])
    }
    const handleSave = (e) => {
        e.preventDefault ()
        let form = new FormData() 
        form.append("file",file)

        if(splitLoc.toString() === ',Tunggal'){
            axios.post (BASE_URL + `/api/peserta/tanding/import`, form)
            .then (res => {
                setShowModalImport(false)
                getPesertaTanding()
            })
            .catch (err => {
                console.log(err.message);
            })
        }else if(splitLoc.toString() === ',Ganda'){
            axios.post (BASE_URL + `/api/peserta/tanding/import`, form)
            .then (res => {
                setShowModalImport(false)
                getPesertaTanding()
            })
            .catch (err => {
                console.log(err.message);
            })
        } else if(splitLoc.toString() === ',Regu'){
            axios.post (BASE_URL + `/api/peserta/tanding/import`, form)
            .then (res => {
                setShowModalImport(false)
                getPesertaTanding()
            })
            .catch (err => {
                console.log(err.message);
            })
        }

    }

    return (
        <>
            {showModalImport ? (
                <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">
        
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#11121C] outline-none focus:outline-none">
        
                        {/*header Modal*/}
                        <div className="flex justify-center p-5 border-b border-solid border-slate-500 rounded-t">
                        <h3 className="text-3xl font-semibold text-white">
                            Import Peserta {splitLoc}
                        </h3>
                        </div>
        
                        {/*Wrapper Input Field*/}
                        <form action='POST' onSubmit={(e) => handleSave(e)}>
                            <div className="relative p-6 flex flex-col space-y-5 text-white text-lg">
                            {/* Input Field */}
                            <div className="flex space-x-3 w-full">
                                <div className="w-2/6 flex justify-between">
                                <span>File</span>
                                <span>:</span>
                                </div>
                                <div className="w-4/6">
                                <input className='block w-full border-2 border-white rounded-lg cursor-pointer text-gray-400 bg-[#2E335A] focus:outline-none' aria-describedby='file_input_help' id='file_input' type="file" onChange={(e) => handleFile(e)} />
                                <p className='mt-2 text-sm text-gray-400' id='file_input_help'>*CSV File Only</p>
                                </div>
                            </div>
                            {/* <div className="flex space-x-3 w-full">
                                <div className="w-2/6 flex justify-between">
                                    <span>Jadwal</span>
                                    <span>:</span>
                                </div>
                                <div className="w-4/6">
                                    <form className='border-2 bg-[#2E335A] border-white rounded-lg px-2' action="">
                                        <select className='w-full bg-[#2E335A] focus:outline-none' name="" id="">
                                            <option value="">test</option>
                                            <option value="">test</option>
                                            <option value="">test</option>
                                        </select>
                                    </form>
                                </div>
                            </div> */}
                            </div>
            
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-slate-500 rounded-b">
                            <button
                                className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModalImport(false)}>
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
            ) : null}
        </>
    )
}

export default modalImport