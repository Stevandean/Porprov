import React from 'react'

const AlertHapus = (props) => {
    const showAlertHapus = props.showAlertHapus
  return (
    <>
        {showAlertHapus ? (
        <>
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 mx-auto max-w-3xl">

            {/*content*/}
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-[#11121C] outline-none focus:outline-none">

                {/*Wrapper Input Field*/}
                <div className="relative p-6 flex flex-col space-y-5 text-white text-lg mt-5">

                {/* Input Field */}
                <div className="flex flex-col justify-center space-y-5">
                    <img className='h-28' src='../svg/trash.svg' />
                    <span className='text-center text-red-700 text-3xl font-semibold'>Apakah Anda Yakin?</span>
                    <span className='text-center text-white text-base'>Untuk menghapus data ini?</span>
                </div>
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-6 rounded-b">
                <button
                    className="text-white bg-red-500 font-bold uppercase px-6 py-3 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.handleClose}>
                    Close
                </button>
                <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={props.handleDelete}>
                    Hapus Data
                </button>
                </div>
            </div>
            </div>
        </div>
        <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
        </>
        ) : null}
    </>
  )
}

export default AlertHapus