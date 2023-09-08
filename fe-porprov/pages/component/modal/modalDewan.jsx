import axios from 'axios'
import React, { useState } from 'react'
import { useRouter } from 'next/router';
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const modalDewan = (props) => {
  const router = useRouter()

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const login = async (e) => {
    try {
      e.preventDefault()
      let data = {
        username: username,
        password: password
      }
      await axios.post(BASE_URL + '/api/dewan/login', data)
      .then(res => {
        if(res.data.logged){
          let data = res.data.data
          let token = res.data.token
          localStorage.setItem("user", JSON.stringify(data))
          localStorage.setItem("token", token)
  
          router.push('./gelanggang')//init router
        } else {
          console.log();
          window.alert (res.data.message)
        }
      })
    } catch (error) {
      console.log(error.message);
      console.log(error.response.data.message);
    }

  }

  return (
    <div className=''>
      <div className="justify-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-2/4 my-6 mx-auto max-w-3xl">
          {/*content*/}
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            {/*header*/}
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">
                Login
              </h3>
              <button
                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                onClick={props.close}
              >
                <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                  x
                </span>
              </button>
            </div>
            {/*body*/}
            <form action='post' onSubmit={(e)=> login(e)}>
              <div className="relative p-6 flex-auto text-xl">

                {/* input nama */}
                <div className='mb-4'>
                  <label className='font-poppins font-bold mb-2'>Username :</label>
                  <br/>
                  <input 
                    className='border-2 w-full py-1 px-1 focus:border-sky-600 border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline' 
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>

                {/* input email */}
                <div className='mb-4'>
                  <label className='font-poppins font-bold mb-2'>Password :</label>
                  <br/>
                  <input 
                    className='border-2 w-full py-1 px-1 focus:border-sky-600 border-gray-400 hover:border-gray-500 rounded shadow leading-tight focus:outline-none focus:shadow-outline' 
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
              </div>
              {/*footer*/}
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={props.close}
                >
                  Close
                </button>
                <button
                  className=""
                  type="submit"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
    </div>
  )
}

export default modalDewan