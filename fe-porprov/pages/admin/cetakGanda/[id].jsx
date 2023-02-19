import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import Navbar from '../../seni/components/navbar'
import Footer from '../components/footer'
import {useReactToPrint} from 'react-to-print'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const detailNilaiGanda = () => {

    // state kematian
    const router = useRouter ()
    const { id } = router.query

    // ini state
    const [jadwalGanda, setJadwalGanda] = useState ([])
    const [nilaiGandaBiru, setNilaiGandaBiru] = useState ([])
    const [nilaiGandaMerah, setNilaiGandaMerah] = useState ([])
    const [hukumGandaBiru, setHukumGandaBiru] = useState ([])
    const [hukumGandaMerah, setHukumGandaMerah] = useState ([])

    const getJadwalGanda = () => {
        axios.get (BASE_URL + `/api/tgr/ganda/` + id)
        .then (res => {
            setJadwalGanda (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getNilaiGandaBiru = () => {
        const id_biru = localStorage.getItem ('jadwalGandaBiru')

        axios.get (BASE_URL + `/api/ganda/jadwal/` + id + "/" + id_biru)
        .then (res => {
            setNilaiGandaBiru (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getNilaiGandaMerah = () => {
        const id_merah = localStorage.getItem ('jadwalGandaMerah')

        axios.get (BASE_URL + `/api/ganda/jadwal/` + id + "/" + id_merah)
        .then (res => {
            setNilaiGandaMerah (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getHukumGandaBiru = () => {
        const id_biru = localStorage.getItem ('jadwalGandaBiru')

        axios.get (BASE_URL + `/api/hukum/tgr/jadwal/` + id + "/" + id_biru)
        .then (res => {
            setHukumGandaBiru (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    const getHukumGandaMerah = () => {
        const id_merah = localStorage.getItem ('jadwalGandaMerah')

        axios.get (BASE_URL + `/api/hukum/tgr/jadwal/` + id + "/" + id_merah)
        .then (res => {
            setHukumGandaMerah (res.data.data)
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    // print pdf
    const componentRef = useRef ()
    const handlePrint = useReactToPrint ({
        content : () => componentRef.current,
        documentTitle : `Nilai Ganda partai ${jadwalGanda.partai} ${jadwalGanda.kelas} ${jadwalGanda.jk} ${jadwalGanda.babak}`,
        onAfterPrint : () => alert ('Print Success')
    })

    useEffect (() => {
        if (!router.isReady) return 
        getJadwalGanda ()
        getNilaiGandaBiru ()
        getNilaiGandaMerah ()
        getHukumGandaBiru ()
        getHukumGandaMerah ()
    }, [router.query.id, router.isReady])

    return (
        <div className="flex ">

            {/* awal konten utama */}
            {/* supaya konten dan header dapat di scroll dan tidak memengaruhi sidebar */}
            <div className="w-full overflow-y-auto h-screen"> 
            
                {/* header */}
                <Navbar />
                {/* akhir header */}

                {/* konten utama */}
                <div className="min-h-full">

                    {/* wrapper */}
                    <div className="w-11/12 mx-auto py-10">
                        {/* match information and button back */}
                        <div className="text-white py-1 text-center mb-5 flex space-x-3">
                            {/* button back */}
                            <button onClick={() => router.back()} className="bg-red-700 hover:bg-red-800 rounded-lg my-auto py-1 px-3">
                                <img className='w-8 h-8' src="../../../../../../svg/back.svg" />
                            </button>
                            <h1 className='bg-[#2C2F48] rounded-lg text-xl w-full flex justify-center items-center'>Partai {jadwalGanda.partai} - {jadwalGanda.kelas} {jadwalGanda.jk} - {jadwalGanda.babak}</h1>
                            <button onClick={() => handlePrint()} className="bg-red-600 p-2 rounded-md w-24">Print</button>
                        </div>
                        {/* wrapper nilai */}
                        <div className="grid grid-cols-2 gap-x-3 mb-4">
                            {/* wrapper sudut biru */}
                            <div className="text-center">
                                {/* pesilat biru information */}
                                <div className="border-2 border-blue-600 mb-7">
                                    <h1 className='bg-blue-600 py-1 text-center text-white text-lg font-medium'>{jadwalGanda.biru?.nama1} - {jadwalGanda.biru?.nama2}</h1>
                                    <h1 className="text-blue-600 font-medium py-1">{jadwalGanda.biru?.kontingen}</h1>
                                </div>
                                {/* table nilai biru */}
                                <table className='w-full table-fixed font-semibold'>
                                    <thead>
                                        <tr className='text-white border-2 border-[#2C2F48]'>
                                        <th className='bg-[#2C2F48] py-1' colSpan={3}>juri</th>
                                        <th className='bg-[#2C2F48]'>Technique</th>
                                        <th className='bg-[#2C2F48]'>Firmness</th>
                                        <th className='bg-[#2C2F48]'>Soulfulness</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                        {/* nilai juri */}
                                        {nilaiGandaBiru.map ((item, index) => (
                                            <tr key={index + 1}>
                                                <td className='border-2 border-[#2C2F48] py-1' colSpan={2}>{item.nama_juri}</td>
                                                <td className='border-2 border-[#2C2F48]'>Juri {index + 1}</td>
                                                <td className='border-2 border-[#2C2F48]'>{item.technique}</td>
                                                <td className='border-2 border-[#2C2F48]'>{item.firmness}</td>
                                                <td className='border-2 border-[#2C2F48]'>{item.soulfulness}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            
                            {/* wrapper sudut merah */}
                            <div className="text-center">
                                {/* pesilat merah information */}
                                <div className="border-2 border-red-600 mb-7">
                                    <h1 className='bg-red-600 py-1 text-center text-white text-lg font-medium'>{jadwalGanda.merah?.nama1} - {jadwalGanda.merah?.nama2}</h1>
                                    <h1 className="text-red-600 font-medium py-1">{jadwalGanda.merah?.kontingen}</h1>
                                </div>
                                {/* table nilai merah */}
                                <table className='w-full table-fixed font-semibold'>
                                    <thead>
                                        <tr className='text-white border-2 border-[#2C2F48]'>
                                            <th className='bg-[#2C2F48] py-1' colSpan={3}>juri</th>
                                            <th className='bg-[#2C2F48]'>Technique</th>
                                            <th className='bg-[#2C2F48]'>Firmness</th>
                                            <th className='bg-[#2C2F48]'>Soulfulness</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* nilai juri */}
                                        {nilaiGandaMerah.map ((item, index) => (
                                            <tr key={index + 1}>
                                                <td className='border-2 border-[#2C2F48] py-1' colSpan={2}>{item.nama_juri}</td>
                                                <td className='border-2 border-[#2C2F48]'>Juri {index + 1}</td>
                                                <td className='border-2 border-[#2C2F48]'>{item.technique}</td>
                                                <td className='border-2 border-[#2C2F48]'>{item.firmness}</td>
                                                <td className='border-2 border-[#2C2F48]'>{item.soulfulness}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        {/* table hukuman */}
                        <table className='w-full table-fixed text-center font-semibold mb-4'>
                            <thead>
                                <tr className='text-white border-2 border-[#2C2F48]'>
                                    <th className='bg-blue-600 py-1.5'>Sudut Biru</th>
                                    <th className='bg-[#2C2F48]' colSpan={5}>Hukuman</th>
                                    <th className='bg-red-600'>Sudut Merah</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* hukuman 1 */}
                                <tr>
                                    {/* nilai hukuman biru */}
                                    <td className='border-2 border-[#2C2F48] py-1.5'>{hukumGandaBiru.hukum1}</td>
                                    {/* nama hukuman */}
                                    <td className='border-2 border-[#2C2F48]' colSpan={5}>Penampilan melebihi toleransi waktu</td>
                                    {/* nilai hukuman merah */}
                                    <td className='border-2 border-[#2C2F48]'>{hukumGandaMerah.hukum1}</td>
                                </tr>
                                {/* hukuman 2 */}
                                <tr>
                                    {/* nilai hukuman biru */}
                                    <td className='border-2 border-[#2C2F48] py-1.5'>{hukumGandaBiru.hukum2}</td>
                                    {/* nama hukuman */}
                                    <td className='border-2 border-[#2C2F48]' colSpan={5}>Penampilan keluar gelanggang 10m x 10m</td>
                                    {/* nilai hukuman merah */}
                                    <td className='border-2 border-[#2C2F48]'>{hukumGandaMerah.hukum2}</td>
                                </tr>
                                {/* hukuman 3 */}
                                <tr>
                                    {/* nilai hukuman biru */}
                                    <td className='border-2 border-[#2C2F48] py-1.5'>{hukumGandaBiru.hukum3}</td>
                                    {/* nama hukuman */}
                                    <td className='border-2 border-[#2C2F48]' colSpan={5}>Senjata jatuh tidak sesuai sinopsis</td>
                                    {/* nilai hukuman merah */}
                                    <td className='border-2 border-[#2C2F48]'>{hukumGandaMerah.hukum3}</td>
                                </tr>
                                {/* hukuman 4 */}
                                <tr>
                                    {/* nilai hukuman biru */}
                                    <td className='border-2 border-[#2C2F48] py-1.5'>{hukumGandaBiru.hukum4}</td>
                                    {/* nama hukuman */}
                                    <td className='border-2 border-[#2C2F48]' colSpan={5}>Senjata jatuh di luar gelanggang saat tim masih harus menggunakannya</td>
                                    {/* nilai hukuman merah */}
                                    <td className='border-2 border-[#2C2F48]'>{hukumGandaMerah.hukum4}</td>
                                </tr>
                                {/* hukuman 5 */}
                                <tr>
                                    {/* nilai hukuman biru */}
                                    <td className='border-2 border-[#2C2F48] py-1.5'>{hukumGandaBiru.hukum5}</td>
                                    {/* nama hukuman */}
                                    <td className='border-2 border-[#2C2F48]' colSpan={5}>Pakaian tidak sesuai aturan. atasan - bawahan, samping - tanjak tidak 1 warna</td>
                                    {/* nilai hukuman merah */}
                                    <td className='border-2 border-[#2C2F48]'>{hukumGandaMerah.hukum5}</td>
                                </tr>
                                {/* hukuman 6 */}
                                <tr>
                                    {/* nilai hukuman biru */}
                                    <td className='border-2 border-[#2C2F48] py-1.5'>{hukumGandaBiru.hukum6}</td>
                                    {/* nama hukuman */}
                                    <td className='border-2 border-[#2C2F48]' colSpan={5}>Menahan gerakan lebih dari 5 detik</td>
                                    {/* nilai hukuman merah */}
                                    <td className='border-2 border-[#2C2F48]'>{hukumGandaMerah.hukum6}</td>
                                </tr>
                            </tbody>
                        </table>
                        {/* wrapper skor akhir and standart deviasi */}
                        <div className="grid grid-cols-2 gap-x-3 text-center mb-4">
                            {/* skor akhir and standart deviasi biru */}
                            <table className='w-full table-fixed'>
                                <thead>
                                    {/* waktu */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-blue-600 text-white py-1'>Waktu</th>
                                        <th className='text-blue-600'>{jadwalGanda.skor_biru?.waktu}</th>
                                    </tr>
                                    {/* median */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-blue-600 text-white py-1'>Median</th>
                                        <th className='text-blue-600'>{jadwalGanda.skor_biru?.median}</th>
                                    </tr>
                                    {/* skor akhir */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-blue-600 text-white py-1'>Skor Akhir</th>
                                        <th className='text-blue-600'>{jadwalGanda.skor_biru?.skor_akhir}</th>
                                    </tr>
                                    {/* standart deviasi */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-blue-600 text-white py-1'>Standart Deviasi</th>
                                        <th className='text-blue-600'>{jadwalGanda.skor_biru?.deviasi}</th>
                                    </tr>
                                </thead>
                            </table>
                            {/* skor akhir and standart deviasi merah */}
                            <table className='w-full table-fixed'>
                                <thead>
                                    {/* waktu */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-red-600 text-white py-1'>Waktu</th>
                                        <th className='text-red-600'>{jadwalGanda.skor_merah?.waktu}</th>
                                    </tr>
                                    {/* median */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-red-600 text-white py-1'>Median</th>
                                        <th className='text-red-600'>{jadwalGanda.skor_merah?.median}</th>
                                    </tr>
                                    {/* skor akhir */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-red-600 text-white py-1'>Skor Akhir</th>
                                        <th className='text-red-600'>{jadwalGanda.skor_merah?.skor_akhir}</th>
                                    </tr>
                                    {/* standart deviasi */}
                                    <tr className='border-2 border-[#2C2F48]'>
                                        <th className='bg-red-600 text-white py-1'>Standart Deviasi</th>
                                        <th className='text-red-600'>{jadwalGanda.skor_merah?.deviasi}</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                        {/* pemenang */}
                        <div className="border-2 border-[#2C2F48] rounded-lg text-center text-white p-3">
                            <h1 className='bg-[#2C2F48] rounded-t-lg text-3xl font-semibold py-1'>Pemenang</h1>
                            {(() => {
                                if (jadwalGanda.id_pemenang == jadwalGanda.id_biru) {
                                    return (
                                        <h1 className='bg-blue-600 rounded-b-lg text-2xl font-semibold py-1'>Sudut Biru</h1>
                                    )
                                } else if (jadwalGanda.id_pemenang == jadwalGanda.id_merah) {
                                    return (
                                        <h1 className='bg-red-600 rounded-b-lg text-2xl font-semibold py-1'>Sudut Merah</h1>
                                    )
                                }
                            })()}
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            {/* akhir konten utama */}
        </div>
    )
}

export default detailNilaiGanda