import React, { useState, useEffect, useRef } from 'react'
import swal from 'sweetalert';
import { useRouter } from 'next/router'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const index = () => {

    const router = useRouter()


    const [event, setEvent] = useState([])

    const getEvent = () => {
        axios.get(BASE_URL+'/api/event/active')
        .then(res => {
            setEvent(res.data.data)
        })
        .catch(err => {
            console.log(err.response.data.message);
        })
    }

    const handleLogin = async (e) => {
        e.preventDefault()
        try{
            let form = {
            nama: e.target.nama.value,
            password: e.target.password.value
            }
            await axios.post(BASE_URL + "/api/event/login", form)
            .then(res => {
                if (res.data.logged) {
                    swal({
                        title: "Success!",
                        text: "Login Success!",
                        icon: "success",
                        timer: '1000',
                        buttons: false
                    }).then(() =>{
                        let data = res.data.data
                        localStorage.setItem("event", JSON.stringify(data))
        
                        router.push('./event/user')//init router
                    })
                } else {
                    swal({
                        title: "Failed!",
                        text: "Token wrong!",
                        icon: "error",
                        timer: '1000',
                        buttons: false
                    })
                }
            })
        } catch (error) {
            console.log(error.message);
        //  console.log(error.response.data.message);
        }
    }

    useEffect(() => {
      getEvent()
      return () => {
      }
    }, [])
    

    return (
        <div className='bg-[#222954] min-w-screen w-auto min-h-screen h-auto'>
            <div className='flex justify-center items-center h-full flex-col space-y-5 w-full py-10'>
                <div className='flex justify-center'>
                    <img className="w-[80%]" src="../images/logo_kaypang.png" />
                </div>

                <div className='w-full'>
                    {/* swiper wrapper */}
                    <Swiper
                        effect={"coverflow"}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 300,
                            modifier: 1,
                            slideShadows: false,
                        }}
                        pagination={false}
                        navigation={true}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                    >

                        {event.map((item,index)=>(
                            <SwiperSlide className='!w-fit mx-[2em]' key={index+1}>
                                {({ isActive }) => (
                                    <div className='w-[24rem] h-auto bg-white flex items-center flex-col px-4 py-6 rounded-[2em]'>
                                        
                                        {/* event-name */}
                                        <div className='text-center mb-5'>
                                            <span className='text-4xl font-montserrat font-bold'>
                                                {item.nama}
                                            </span>
                                        </div>

                                        {/* event-image */}
                                        <div className='w-[12em] h-auto flex justify-center my-5'>
                                            <img className="w-[80%]" src={BASE_URL+'/api/event/image/'+item.logo} />
                                        </div>

                                        {/* token-input */}
                                        <form className='w-full space-y-2 mt-5 p-2' onSubmit={handleLogin}>
                                            <input 
                                                name='nama'
                                                type='hidden'
                                                value={item.nama}
                                            />
                                            <input 
                                                className='w-full px-2 py-2 text-xl bg-gray-300 rounded-lg focus:border-transparent focus:ring-0 border-none focus:outline-none' 
                                                name='password'
                                                type='password'
                                                // disabled={!isActive}
                                                placeholder={isActive ? 'Token': ''}
                                            />
                                            <button 
                                                className='w-full bg-[#04BA00] py-2 rounded-lg font-montserrat text-white text-xl font-bold'
                                                type='submit'
                                            >
                                                LOGIN
                                            </button>
                                        </form>
                                    </div>
                                )}
                            </SwiperSlide>

                        ))}

                    </Swiper>
                </div>

            </div>

        </div>
  )
}

export default index