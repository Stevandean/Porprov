import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'

const nilai = () => {

    const router = useRouter ()

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
                    <div className="w-9/12 mx-auto py-10 space-y-10">
                        {/* wrapper tanding information */}
                        <div className="grid grid-cols-3 gap-x-2 text-center">
                            <div className="bg-[#222954] rounded-lg">
                                <h1 className='text-xl font-semibold py-1.5'>Partai 1</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg">
                                <h1 className='text-xl font-semibold py-1.5'>Putra Dewasa</h1>
                            </div>
                            <div className="bg-[#222954] rounded-lg">
                                <h1 className='text-xl font-semibold py-1.5'>Penyisihan</h1>
                            </div>
                        </div>
                        {/* wrapper pesilat information */}
                        <div className="grid grid-cols-7">
                            {/* pesilat biru information */}
                            <div className="col-span-3 bg-blue-600 rounded-lg py-1.5 px-4 text-white flex flex-col">
                                <h1 className='text-xl font-semibold'>Nama Pesilat Biru</h1>
                                <h1 className='tracking-wider'>Kontingen Pesilat Biru</h1>
                            </div>
                            <div></div>
                            {/* pesilat biru information */}
                            <div className="col-span-3 bg-red-600 rounded-lg py-1.5 px-4 text-white flex flex-col items-end">
                                <h1 className='text-xl font-semibold'>Nama Pesilat Biru</h1>
                                <h1 className='tracking-wider'>Kontingen Pesilat Biru</h1>
                            </div>
                        </div>
                        {/* table nilai */}
                        <table className='w-full table-fixed'>
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
                                    <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                        <span className='px-4 text-lg font-bold text-blue-600 tracking-widest flex justify-start items-center'>2,2,1,
                                            <span className='bg-blue-600 text-white py-1 px-2 rounded-lg'>1</span>
                                        </span>
                                    </td>
                                    {/* babak */}
                                    <td className='border-2 border-[#222954]'>
                                        <h1 className='text-2xl font-bold text-[#222954] flex justify-center items-center'>I</h1>
                                    </td>
                                    {/* nilai sudut merah */}
                                    <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                        <span className='px-4 text-lg font-bold text-red-600 tracking-widest flex justify-end items-center'>2,2,1,
                                            <span className='bg-red-600 text-white py-1 px-2 rounded-lg'>1</span>
                                        </span>
                                    </td>
                                </tr>
                                {/* nilai babak 2 */}
                                <tr>
                                    {/* nilai sudut biru */}
                                    <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                        <span className='px-4 text-lg font-bold text-blue-600 tracking-widest flex justify-start items-center'>2,2,1,
                                            <span className='bg-blue-600 text-white py-1 px-2 rounded-lg'>1</span>
                                        </span>
                                    </td>
                                    {/* babak */}
                                    <td className='border-2 border-[#222954]'>
                                        <h1 className='text-2xl font-bold text-[#222954] flex justify-center items-center'>I</h1>
                                    </td>
                                    {/* nilai sudut merah */}
                                    <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                        <span className='px-4 text-lg font-bold text-red-600 tracking-widest flex justify-end items-center'>2,2,1,
                                            <span className='bg-red-600 text-white py-1 px-2 rounded-lg'>1</span>
                                        </span>
                                    </td>
                                </tr>
                                {/* nilai babak 3 */}
                                <tr>
                                    {/* nilai sudut biru */}
                                    <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                        <span className='px-4 text-lg font-bold text-blue-600 tracking-widest flex justify-start items-center'>2,2,1,
                                            <span className='bg-blue-600 text-white py-1 px-2 rounded-lg'>1</span>
                                        </span>
                                    </td>
                                    {/* babak */}
                                    <td className='border-2 border-[#222954]'>
                                        <h1 className='text-2xl font-bold text-[#222954] flex justify-center items-center'>I</h1>
                                    </td>
                                    {/* nilai sudut merah */}
                                    <td className='border-2 border-[#222954] py-1.5' colSpan={3}>
                                        <span className='px-4 text-lg font-bold text-red-600 tracking-widest flex justify-end items-center'>2,2,1,
                                            <span className='bg-red-600 text-white py-1 px-2 rounded-lg'>1</span>
                                        </span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        {/* wrapper button nilai */}
                        <div className="grid grid-cols-7">
                            {/* wrapper button nilai biru */}
                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                    {/* button pukulan */}
                                    <button className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                    </button>
                                    {/* button tendangan */}
                                    <button className="bg-blue-600 hover:bg-blue-700 rounded-lg py-2 text-center">
                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                    </button>
                                </div>
                                {/* button hapus */}
                                <button className="bg-blue-600 hover:bg-blue-700 rounded-xl flex justify-center items-center">
                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                </button>
                            </div>
                            <div></div>
                            {/* wrapper button nilai biru */}
                            <div className="col-span-3 grid grid-cols-4 gap-x-5">
                                {/* button hapus */}
                                <button className="bg-red-600 hover:bg-red-700 rounded-xl flex justify-center items-center">
                                    <h1 className='text-xl font-semibold'>Hapus</h1>
                                </button>
                                <div className="col-span-3 grid grid-rows-2 gap-y-2">
                                    {/* button pukulan */}
                                    <button className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                        <h1 className='text-xl font-semibold tracking-wider'>Pukulan</h1>
                                    </button>
                                    {/* button tendangan */}
                                    <button className="bg-red-600 hover:bg-red-700 rounded-lg py-2 text-center">
                                        <h1 className='text-xl font-semibold tracking-wider'>Tendangan</h1>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => router.back ()} className="bg-green-600 hover:bg-green-700 rounded-lg py-3 text-center w-full">
                            <h1 className='text-2xl font-semibold'>Selesai</h1>
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
    </>
    )
}

export default nilai