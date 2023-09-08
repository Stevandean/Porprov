import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'//import rouert
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const login = () => {

  const router = useRouter()//define router

  const [nama, setNama] = useState ('')
  const [password, setPassword] = useState ('')
  const [event, setEvent] = useState ([])

  const Login = async (e) => {
    e.preventDefault()
    try{
      let form = {
        username: nama,
        password: password
      }
      await axios.post(BASE_URL + "/api/dewan/login", form)
      .then(res => {
        if (res.data.logged) {
          let data = res.data.data
          let token = res.data.token
          localStorage.setItem("user", JSON.stringify(data))
          localStorage.setItem("token", token)

          router.push('./gelanggang')//init router
        } else {
          window.alert (res.data.message)
        }
      })
    } catch (error) {
      console.log('gagal');
    }
  }

  const getEvent = () => {
    let event = JSON.parse(localStorage.getItem('event'))
    let event_id = event.id
    axios.get (BASE_URL + `/api/event/${event_id}`)
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
    <img
      src="../../images/wave.png"
      className="fixed hidden lg:block inset-0 h-full" />
    <img
      src="../../images/wave-mini.png"
      className="fixed hidden bottom-0 right-0 lg:block"/>
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <form className="flex flex-col justify-center items-center z-50" onSubmit={(e) => Login(e)}>
        <img className="w-32" src={BASE_URL + "/api/event/image/" + event.logo} />
        <h2 className="my-8 font-display font-bold text-3xl text-gray-700 text-center">Login Layar</h2>
        <div className="relative">
            <svg className='w-5 absolute' fill="#ff9d00" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0S96 57.3 96 128s57.3 128 128 128zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
            </svg>
            <input placeholder="Username" name="username" className="pl-8 border-b-2 font-display text-lg focus:outline-none focus:border-[#ff9d00] transition ease-in-out duration-500" 
            type='text'
            value={nama}
            onChange={(e) => setNama (e.target.value)}
            />
            <div className="invalid-feedback text-red-500">
            </div>
        </div>
        <div className="relative mt-8">           
            <svg className='absolute h-5' fill='#ff9d00' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"/>
            </svg>
            <input placeholder="Password" name="password" autoComplete="on" className="pl-8 border-b-2 font-display capitalize text-lg focus:outline-none focus:border-[#ff9d00] transition ease-in-out duration-500" 
            type='password'
            value={password}
            onChange={(e) => setPassword (e.target.value)}
            />
        </div>
        <button type="submit" className="py-3 px-20 bg-gradient-to-r from-[#ffd000] to-[#ff9d00] rounded-full text-white font-bold uppercase text-lg mt-4 transform hover:translate-y-1 transition-all duration-500">Login </button>
      </form>
    </div>
    </>
  )
}

export default login