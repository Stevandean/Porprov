import axios from 'axios'
import React, { useState, useEffect, useContext } from 'react'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import Timer from '../components/timer';
import { globalState } from '../../../context/context';
// import CountDown from '../components/timercoba';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const getStaticPaths = async () => {
    const res = await axios.get (BASE_URL + '/api/tgr/tunggal')
    // const res = await fetch ('http://192.168.1.9:9001/api/tgr/tunggal')
    const data = res.data.data

    const paths = data.map (item => {
        return {
            params : {id: item.id.toString()}
        }
    })
    return {
        paths,
        fallback : false
    }
}

export const getStaticProps= async(context) =>{
    const id = context.params.id
    const res = await axios.get(BASE_URL + '/api/tgr/tunggal/' + id);
    const data = res.data.data

    return {
        props: { item:data }
    }
}


const namaPesilat = ({item}) => {

    const [duration, setDuration] = useState (0)

    const [juri1, setJuri1] = useState (0)
    const [juri2, setJuri2] = useState (0)
    const [juri3, setJuri3] = useState (0)
    const [juri4, setJuri4] = useState (0)
    const [juri5, setJuri5] = useState (0)
    const [juri6, setJuri6] = useState (0)
    const [juri7, setJuri7] = useState (0)
    const [juri8, setJuri8] = useState (0)
    const [juri9, setJuri9] = useState (0)
    const [juri10, setJuri10] = useState (0)

        

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
                <div className="mx-auto py-10 px-14">

                    <div className="space-y-8 p-10 rounded-lg">

                        {/* babak & back button */}
                        <div className="flex justify-between items-center">
                            {/* button back */}
                            <div className="bg-red-500 rounded-lg p-2">
                                <img className='h-7' src="../../svg/back.svg" />
                            </div>
                            {/* babak */}
                            <div className="bg-[#13385D] rounded-lg py-2 px-10 flex flex-col text-center">
                                <span className='text-2xl font-semibold'>Penyisihan</span>
                                <span className='text-xl font-semibold'>Tunggal</span>
                            </div>
                        </div>

                        {/* info & timer */}
                        <div className="bg-[#13385D] rounded-lg flex justify-between my-auto px-10 py-5 items-center">
                            <div className="flex flex-row gap-x-4 items-center">
                                <div className="text-4xl font-bold">1</div>
                                <div className='flex flex-col'>
                                    <span className='text-2xl font-semibold'>{item.nama1}</span>
                                    <span className='text-xl'>{item.kontingen}</span>
                                </div>
                            </div>
                            <globalState.Provider value={{ duration,  setDuration }}>
                                <Timer />
                            </globalState.Provider>
                            {/* <CountDown second={20} /> */}
                        </div>

                        {/* wrapper nilai juri */}
                        <div className="grid grid-cols-10 gap-x-5">
                            {/* nilai */}
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>1</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>2</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>3</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>4</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>5</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>6</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>7</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>8</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>9</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>10</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
                            </div>
                        </div>

                        {/* wrapper nilai */}
                        <div className="grid grid-rows-2 gap-y-8">
                            {/* median */}
                            <div className="grid grid-cols-3 gap-x-3">
                                <div className="flex flex-col text-center">
                                    <div className="bg-[#13385D] py-1 ">
                                        <span className='text-3xl font-bold'>Median</span>
                                    </div>
                                    <div className="p-1 bg-white border-2 border-[#13385D]">
                                        <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                    </div>
                                </div>
                                <div className="flex flex-col text-center">
                                    <div className="bg-[#13385D] py-1 ">
                                        <span className='text-3xl font-bold'>Hukuman</span>
                                    </div>
                                    <div className="p-1 bg-white border-2 border-[#13385D]">
                                        <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                    </div>
                                </div>
                                <div className="flex flex-col text-center">
                                    <div className="bg-[#13385D] py-1 ">
                                        <span className='text-3xl font-bold'>Total</span>
                                    </div>
                                    <div className="p-1 bg-white border-2 border-[#13385D]">
                                        <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                    </div>
                                </div>
                            </div>
                            {/* deviasi */}
                            <div className="flex flex-col text-center">
                                <div className="bg-[#13385D] py-1 ">
                                    <span className='text-3xl font-bold'>Standart Deviasi</span>
                                </div>
                                <div className="p-1 bg-white border-2 border-[#13385D]">
                                    <span className='text-2xl text-[#13385D] font-semibold'>9,90</span>
                                </div>
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

export default namaPesilat