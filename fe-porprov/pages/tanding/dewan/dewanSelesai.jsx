import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'

const dewanSelesai = () => {

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
                    <div className="w-9/12 mx-auto py-10">

                        {/* wrapper tanding information */}
                        <div className="grid grid-cols-3 gap-x-3 mb-8">
                            {/* partai */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>Partai 1</h1>
                            </div>
                            {/* kelas and kategori */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>Putra Dewasa</h1>
                            </div>
                            {/* babak */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>Penyisihan</h1>
                            </div>
                        </div>

                        {/* wrapper participant information */}
                        <div className="grid grid-cols-7 mb-8">
                            {/* sudut biru information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                <div className="py-2 px-5 col-span-4">
                                    <h1 className='text-xl font-bold'>Nama Pesilat Biru</h1>
                                    <h1 className='text-xl font-bold'>Kontingen Pesilat Biru</h1>
                                </div>
                                {/* nomor partai */}
                                <div className="bg-blue-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>2</h1>
                                </div>
                            </div>
                            <div></div>
                            {/* sudut merah information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                {/* nomor partai  */}
                                <div className="bg-red-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>2</h1>
                                </div>
                                <div className="py-2 px-5 col-span-4 flex flex-col items-end">
                                    <h1 className='text-xl font-bold'>Nama Pesilat Biru</h1>
                                    <h1 className='text-xl font-bold'>Kontingen Pesilat Biru</h1>
                                </div>
                            </div>
                        </div>

                        {/* table nilai */}
                        <table className='w-full table-fixed border-separate border-spacing-1 mb-4'>
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
                                    <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>2</td>

                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">1</div>
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                        </div>
                                    </td>

                                    {/* babak */}
                                    <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>I</td>

                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">1</div>
                                        </div>
                                    </td>

                                    {/* total */}
                                    <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>2</td>
                                </tr>

                                {/* wrapper nilai juri 2 */}
                                <tr>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">1</div>
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                        </div>
                                    </td>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">1</div>
                                        </div>
                                    </td>
                                </tr>

                                {/* wrapper nilai juri 3 */}
                                <tr>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">1</div>
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                        </div>
                                    </td>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">1</div>
                                        </div>
                                    </td>
                                </tr>

                                {/* wrapper poin masuk */}
                                <tr>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* total nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">1</div>
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0]">1</div>
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                        </div>
                                    </td>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0]">1</div>
                                            {/* total nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">1</div>
                                        </div>
                                    </td>
                                </tr>

                                {/* wrapper poin jatuhan */}
                                <tr>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* mboh opo */}
                                            <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">1</div>
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">1</div>
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                        </div>
                                    </td>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* urutan juri */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                            {/* nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">1</div>
                                            {/* total nilai */}
                                            <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">1</div>
                                        </div>
                                    </td>
                                </tr>

                                {/* wrapper poin hukuman */}
                                <tr>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* total hukuman */}
                                            <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">1</div>
                                            {/* nilai hukuman */}
                                            <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1">
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">a</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">a</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">a</div>
                                            </div>
                                            {/* nama hukuman */}
                                            <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                            </div>
                                        </div>
                                    </td>
                                    {/* wrapper detail poin */}
                                    <td className='text-lg font-semibold' colSpan={4}>
                                        {/* detail nilai */}
                                        <div className="grid grid-cols-6 gap-x-2">
                                            {/* nilai hukuman */}
                                            <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1">
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                            </div>
                                            {/* nama hukuman */}
                                            <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1 text-center">
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">a</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">a</div>
                                                <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">a</div>
                                            </div>
                                            {/* total hukuman */}
                                            <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">1</div>
                                        </div>
                                    </td>
                                </tr>

                            </tbody>
                        </table>

                        {/* Keputusan pemenang */}
                        <div className="bg-[#222954] text-center rounded-lg py-3 mb-3">
                            <h1 className='text-2xl font-bold'>Keputusan Pemenang</h1>
                        </div>
                        
                        {/* wrapper keputusan pemenang */}
                        <div className="bg-blue-600 text-2xl font-bold py-2 rounded-lg text-center mb-8">Angka</div>

                        {/* wrapper back and selesai */}
                        <div className="grid grid-cols-7 gap-x-4">
                            <button onClick={() => router.back ()} className="bg-green-600 hover:bg-green-700 col-span-2 py-3 text-center rounded-lg text-xl font-bold">Kembali</button>
                            <div className="bg-green-600 hover:bg-green-700 col-span-5 py-3 text-center rounded-lg text-xl font-bold">Selesai</div>
                        </div>

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