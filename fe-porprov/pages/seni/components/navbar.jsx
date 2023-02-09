import React, { useEffect, useState } from 'react'
import axios from 'axios'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const navbar = () => {

  const [event, setEvent] = useState ([])

  const getEvent = () => {
    axios.get (BASE_URL + `/api/event`)
    .then (res => {
        setEvent (res.data.data)
    })
    .catch (err => {
        console.log(err.response.data.message);
    })
  }

  useEffect (() => {
    getEvent ()
  }, [])

  return (
    <>
    {/* Navbar */}
    <div className="bg-[#2C2F48] sticky top-0 h-20 z-40 flex">
          {event.map((item, index) => (
          <div className="flex justify-between w-full text-white px-10">
            <img className='py-3'src={BASE_URL + "/api/event/image/" + item.logo} alt="Kabupaten Trenggalek" />
            <span className='text-xl font-semibold my-auto uppercase text-center'>{item.nama}</span>
            <div className="flex">
              <img className='py-3' src={BASE_URL + "/api/event/image/" + item.icon1} alt="IPSI" />
              <img className='py-3' src={BASE_URL + "/api/event/image/" + item.icon2} alt="IPSI2" />
            </div>
          </div>          
          ))}
    </div>
    </>
  )
}

export default navbar