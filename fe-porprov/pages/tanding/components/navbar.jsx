import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { globalState } from '../../../context/context';
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
        <div key={index + 1} className="flex justify-between w-full text-white px-10">
          <div className="flex space-x-3">     
            <img className='py-3'src={BASE_URL + "/api/event/image/" + item.logo} alt="Kabupaten Trenggalek" />
          </div>
          <span className='text-2xl font-semibold my-auto uppercase text-center'>{item.nama}</span>
          <div className="flex space-x-3">
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