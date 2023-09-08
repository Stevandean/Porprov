import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import ButtonFull from '../../seni/components/buttonFull';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const navbar = () => {

  const [event, setEvent] = useState ([])

  const headerConfig = () => {
    let token = localStorage.getItem("token")
    let header = {
      headers : { Authorization : `Bearer ${token}` }
    }
    return header
  }

  const getEvent = () => {
    let event = JSON.parse(localStorage.getItem('event'))
    let event_id = event.id
    axios.get (BASE_URL + `/api/event/${event_id}`, headerConfig())
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
        <div className="flex justify-between w-full text-white px-10">
          <div className="flex space-x-3">
            <img className='py-3'src={BASE_URL + "/api/event/image/" + event?.logo} alt="Logo" />
          </div>
          <span className='text-xl font-semibold my-auto uppercase text-center'>{event?.nama}</span>
          <div className="flex space-x-3">
            <img className='py-3' src={BASE_URL + "/api/event/image/" + event?.icon1} alt="IPSI" />
            <img className='py-3' src={BASE_URL + "/api/event/image/" + event?.icon2} alt="IPSI2" />
          </div>
        </div>          
      </div>
    </>
  )
}

export default navbar