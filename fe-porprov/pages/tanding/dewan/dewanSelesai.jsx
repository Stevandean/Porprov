import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const dewanSelesai = () => {

    // ini state
    const router = useRouter ()
    const [jadwalTanding, setJadwalTanding] = useState ([])
    const [nilaiTanding, setNilaiTanding] = useState ([])

    const getJadwal = () => {
        const jadwal = JSON.parse (localStorage.getItem ('jadwalTanding'))
        setJadwalTanding (jadwal)
    }

    const getNilaiTanding = () => {
        const jadwal = JSON.parse (localStorage.getItem ('jadwalTanding'))
        axios.get (BASE_URL + `/api/nilai/tanding/jadwal/` + jadwal.id)
        .then (res => {
            setNilaiTanding (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
        console.log(BASE_URL + `/api/nilai/tanding/jadwal/` + jadwal.id);
    }

    const isLogged = () => {
        if (localStorage.getItem ('token') === null || localStorage.getItem ('dewanTanding') === null) {
         router.push ('/tanding/dewan/login') 
        }
    }

    useEffect (() => {
        getJadwal ()
        getNilaiTanding ()
        isLogged ()
    }, [])

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
                                <h1 className='text-xl font-bold'>Partai {jadwalTanding.partai}</h1>
                            </div>
                            {/* kelas and kategori */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwalTanding.kelas} {jadwalTanding.jk} {jadwalTanding.golongan}</h1>
                            </div>
                            {/* babak */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwalTanding.babak}</h1>
                            </div>
                        </div>

                        {/* wrapper participant information */}
                        <div className="grid grid-cols-7 mb-8">
                            {/* sudut biru information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                <div className="py-2 px-5 col-span-4">
                                    <h1 className='text-xl font-bold'>{jadwalTanding.biru?.nama}</h1>
                                    <h1 className='text-xl font-bold'>{jadwalTanding.biru?.kontingen}</h1>
                                </div>
                                {/* total nilai */}
                                <div className="bg-blue-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwalTanding.total_biru}</h1>
                                </div>
                            </div>
                            <div></div>
                            {/* sudut merah information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                {/* total nilai  */}
                                <div className="bg-red-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwalTanding.total_merah}</h1>
                                </div>
                                <div className="py-2 px-5 col-span-4 flex flex-col items-end">
                                    <h1 className='text-xl font-bold'>{jadwalTanding.merah?.nama}</h1>
                                    <h1 className='text-xl font-bold'>{jadwalTanding.merah?.kontingen}</h1>
                                </div>
                            </div>
                        </div>

                        {/* table nilai */}
                        {nilaiTanding.map ((item, index) => (
                            <table key={index + 1} className='w-full table-fixed border-separate border-spacing-1 mb-4'>
                                <thead>
                                    <tr>
                                        <th className='border-2 border-[#222954] rounded-lg py-3 bg-blue-600'>total</th>
                                        <th className='border-2 border-[#222954] rounded-lg bg-blue-600' colSpan={4}>Detail poin</th>
                                        <th className='border-2 border-[#222954] rounded-lg bg-yellow-300 text-[#222954]'>Babak</th>
                                        <th className='border-2 border-[#222954] rounded-lg bg-red-600' colSpan={4}>Detail poin</th>
                                        <th className='border-2 border-[#222954] rounded-lg bg-red-600'>total</th>
                                    </tr>
                                </thead>
                                <tbody className='text-[#222954]'>
                                    {/* wrapper nilai juri 1 */}
                                    <tr>
                                        {/* total */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.poin_biru?.total_poin}</td>

                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                    {item.poin_biru?.log_juri1.map ((item, index) => (
                                                        <>
                                                        {(() => {
                                                            if (item.masuk == false) {
                                                                return (
                                                                    <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                    </s>
                                                                )
                                                            } else if (item.masuk == true) {
                                                                return (
                                                                    <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                )
                                                            }
                                                        })()}
                                                        </>
                                                    ))}
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
                                                    {item.poin_merah?.log_juri1.map ((item, index) => (
                                                        <>
                                                        {(() => {
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
                                                        })()}
                                                        </>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>

                                        {/* total */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.poin_merah?.total_poin}</td>
                                    </tr>

                                    {/* wrapper nilai juri 2 */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600 ">
                                                    {item.poin_biru.log_juri2.map ((item, index) => (
                                                        <>
                                                        {(() => {
                                                            if (item.masuk == false) {
                                                                return (
                                                                    <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                    </s>
                                                                )
                                                            } else if (item.masuk == true) {
                                                                return (
                                                                    <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                                )
                                                            }
                                                        })()}
                                                        </>
                                                    ))}
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
                                                    {item.poin_biru.log_juri2.map ((item, index) => (
                                                        <>
                                                        {(() => {
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
                                                        })()}
                                                        </>
                                                    ))}
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
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600 ">
                                                {item.poin_biru.log_juri3.map ((item, index) => (
                                                    <>
                                                    {(() => {
                                                        if (item.masuk == false) {
                                                            return (
                                                                <s key={index + 1} className='text-lg font-bold text-blue-600 tracking-widest justify-start items-center'>{item.poin}, 
                                                                </s>
                                                            )
                                                        } else if (item.masuk == true) {
                                                            return (
                                                                <span key={index + 1} className='bg-blue-600 text-white py-1 px-2 rounded-lg'>{item.poin}</span>
                                                            )
                                                        }
                                                    })()}
                                                    </>
                                                ))}
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
                                                    {item.poin_biru.log_juri3.map ((item, index) => (
                                                        <>
                                                        {(() => {
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
                                                        })()}
                                                        </>
                                                    ))}
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
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">{item.poin_biru?.poin_masuk}</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0] ">
                                                    {item.poin_biru?.log_poin_masuk.map ((item, index) => (
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
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0]">
                                                    {item.poin_merah?.log_poin_masuk.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">{item.poin_merah?.poin_masuk}</div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin jatuhan */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">{item.poin_biru?.jatuhan}</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF] ">
                                                    {item.poin_biru?.log_jatuhan.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">
                                                    {item.poin_merah?.log_jatuhan.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">
                                                    {item.poin_merah?.jatuhan}
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
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.poin_biru?.total_hukum}</div>
                                                {/* nilai hukuman */}
                                                <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1 ">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_biru?.log_binaan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">{item.poin_biru?.log_teguran.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin},</span>
                                                    ))}</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_biru?.log_peringatan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
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
                                                {/* nilai hukuman */}
                                                <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                                </div>
                                                {/* nama hukuman */}
                                                <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_merah?.log_binaan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_merah.log_teguran.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_merah?.log_peringatan.map ((item, index) => (
                                                            <span key={index + 1}>{item.poin},</span>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* total hukuman */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.poin_merah?.total_hukum}</div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        ))}

                        {/* Keputusan pemenang */}
                        <div className="bg-[#222954] text-center rounded-t-lg py-3">
                            <h1 className='text-2xl font-bold'>Keputusan Pemenang</h1>
                        </div>
                        
                        {/* wrapper keputusan pemenang */}
                        <div className={jadwalTanding.id_pemenang == jadwalTanding.id_biru ?  "bg-blue-600 text-2xl font-bold py-2 rounded-b-lg text-center mb-3" : "bg-red-600 text-2xl font-bold py-2 rounded-b-lg text-center mb-3"}>{jadwalTanding.keterangan}</div>

                        {/* wrapper back*/}
                        <button onClick={() => router.back ()} className="bg-green-600 hover:bg-green-700 col-span-2 py-3 text-center rounded-lg text-xl font-bold w-full">Kembali</button>

                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
        </>

    )
}

export default dewanSelesai