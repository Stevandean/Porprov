import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const monitorSeniRegu = () => {
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
            <div className="w-4/5 mx-auto py-10 space-y-5">

                {/* wrapper info & aktif timer*/}
                <div className="flex justify-between ">
                    <div className="flex flex-row space-x-3">
                        {/* button back */}
                        <div className="bg-red-700 rounded-lg w-12 h-12 my-auto">
                            <img className='p-3' src="../../svg/back.svg" />
                        </div>
                    </div>
                    {/* info pesilat */}
                    <div className="flex flex-row items-center space-x-3 p-2 text-[#222954] text-end">
                        <div className="flex flex-col">
                            <span className='text-xl font-semibold'>Nama Pesilat</span>
                            <span className='text-xl font-semibold'>Nama Pesilat</span>
                            <span className='text-xl font-semibold'>Nama Pesilat</span>
                            <span className='text-lg font-normal'>Kontingen Pesilat</span>
                        </div>
                        <span className='text-5xl'>1</span>
                    </div>
                </div>

                {/* border table */}
                <div className="border-2 border-[#222954] p-5 space-y-4 rounded-lg">
                    {/* table skor juri */}
                    <table className='w-full table-fixed border-separate border-spacing-x-2'>
                        <thead className='bg-[#2C2F48]'>
                            <tr>
                                <th colSpan={2} className="border-2">Juri</th>
                                <th className='border-2'>1</th>
                                <th className='border-2'>2</th>
                                <th className='border-2'>3</th>
                                <th className='border-2'>4</th>
                                <th className='border-2'>5</th>
                                <th className='border-2'>6</th>
                                <th className='border-2'>7</th>
                                <th className='border-2'>8</th>
                                <th className='border-2'>9</th>
                                <th className='border-2'>10</th>
                            </tr>
                        </thead> 
                        <tbody className='text-center text-[#2C2F48] font-medium'>
                            {/* Juri A */}
                            <tr>
                                <td colSpan={2} className="text-lg font-semibold border-2">Juri A</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                            </tr>
                            {/* Juri B */}
                            <tr>
                                <td colSpan={2} className="text-lg font-semibold border-2">Juri B</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                            </tr>
                            {/* Total skor */}
                            <tr className='bg-[#2C2F48] text-white'>
                                <td colSpan={2} className="text-lg font-semibold border-2">Total Skor</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                                <td className='border-2'>9,90</td>
                            </tr>
                        </tbody>
                    </table>

                    {/* Table urutan juri */}
                    <table className='w-full table-fixed border-separate border-spacing-x-2 font-medium'>
                        <tbody className='text-center'>
                            <tr className='bg-[#2C2F48]'>
                                <th colSpan={2} rowSpan={2} className="text-lg border-2 ">urutan juri</th>
                                <th className='border-2'>1</th>
                                <th className='border-2'>2</th>
                                <th className='border-2'>3</th>
                                <th className='border-2'>4</th>
                                <th className='border-2'>5</th>
                                <th className='border-2'>6</th>
                                <th className='border-2'>7</th>
                                <th className='border-2'>8</th>
                                <th className='border-2'>9</th>
                                <th className='border-2'>10</th>
                            </tr>
                            <tr className='text-[#2C2F48]'>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                                <td className='border-2'>1</td>
                            </tr>
                        </tbody>
                    </table>
                    
                    {/* wrapper waktu & hukuman */}
                    <div className="grid grid-cols-12 px-2 gap-x-2">
                        {/* waktu & median */}
                        <div className="col-span-2 flex flex-col space-y-3 h-full">
                            {/* Waktu */}
                            <div>
                                <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                                    <span className='text-2xl font-semibold'>Waktu</span>
                                </div>
                                <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                                    <span className='text-4xl font-bold'>03.00</span>
                                </div>
                            </div>
                            {/* Median */}
                            <div>
                                <div className="bg-[#2C2F48] py-1 px-4 w-full flex justify-center">
                                    <span className='text-2xl font-semibold'>Median</span>
                                </div>
                                <div className="text-[#2C2F48] py-1 px-4 w-full flex justify-center border-2 border-[#2C2F48]">
                                    <span className='text-4xl font-bold'>9,85</span>
                                </div>
                            </div>
                        </div>
                        {/* table hukuman */}
                        <div className="col-span-10">
                            <table className='w-full table-fixed'>
                                <thead className='bg-[#FF3030]'>
                                    <tr>
                                        <th colSpan={9} className='border-2 border-[#FF3030] py-3'>Hukuman</th>
                                        <th className='border-2 border-[#FF3030]'>Skor</th>
                                    </tr>
                                </thead>
                                <tbody className='text-[#FF3030] font-semibold'>
                                    <tr>
                                        <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan melebihi toleransi waktu</td>
                                        <td className='border-2 border-[#FF3030] text-center'>0</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Penampilan keluar gelanggang 10m x 10m</td>
                                        <td className='border-2 border-[#FF3030] text-center'>0</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Pakaian tidak sesuai persyaratan (Sabuk putih jatuh)</td>
                                        <td className='border-2 border-[#FF3030] text-center'>0</td>
                                    </tr>
                                    <tr>
                                        <td colSpan={9} className='border-2 border-[#FF3030] px-4'>Menahan gerakan lebih dari 5 detik</td>
                                        <td className='border-2 border-[#FF3030] text-center'>0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Skor */}
                    <div className="grid grid-rows-2 text-center gap-y-2 px-2">
                        <div className="grid grid-cols-2 gap-x-4">
                            <span className='text-xl font-semibold rounded-lg bg-[#2C2F48]'>Skor Akhir</span>
                            <span className='text-xl font-semibold rounded-lg bg-white text-black border-2 border-[#2C2F48]'>0</span>
                        </div>
                        <div className="grid grid-cols-2 gap-x-4">
                            <span className='text-xl font-semibold rounded-lg bg-[#2C2F48]'>Skor Deviasi</span>
                            <span className='text-xl font-semibold rounded-lg bg-white text-black border-2 border-[#2C2F48]'>0</span>
                        </div>
                    </div>

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

export default monitorSeniRegu