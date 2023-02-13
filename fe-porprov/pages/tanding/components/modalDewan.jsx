import React from 'react'

const modalDewan = () => {
    return (
        <>
        {/* {showModalJuri ? ( */}
            <>
                <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-full my-6 mx-auto max-w-3xl">

                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            <form 
                            // action='POST' onSubmit={handleSave}
                            >
                                {/*header Modal*/}
                                <div className="flex justify-between py-5 px-10 rounded-t text-[#222954]">
                                    <h3 className="text-3xl font-semibold">
                                        verifikasi Juri
                                    </h3>
                                    <button className="text-3xl font-semibold">
                                        X
                                    </button>
                                </div>
                                {/* body modal */}
                                <div className="relative flex flex-col text-white text-lg text-center px-6 pb-6">
                                    {/* wrapper body */}
                                    <div className="border-4 border-[#222954] rounded-lg p-4 space-y-3">
                                        <h1 className="text-3xl font-bold text-[#222954] tracking-wider">Verifikasi Jatuhan</h1>
                                        {/* table keputusan juri */}
                                        <table className='w-full table-fixed text-white'>
                                            <thead>
                                                <tr className='border-2 border-[#222954]'>
                                                    <th className='py-2 text-2xl bg-[#222954]'>Juri 1</th>
                                                    <th className='py-2 text-2xl bg-[#222954]'>Juri 2</th>
                                                    <th className='py-2 text-2xl bg-[#222954]'>Juri 3</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className='border-2 border-[#222954] p-3'>
                                                        <div className="bg-blue-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                                    </td>
                                                    <td className='border-2 border-[#222954] p-3'>
                                                        <div className="bg-yellow-300 rounded-lg py-4 text-2xl font-semibold text-[#222954]">Tidak Sah</div>
                                                    </td>
                                                    <td className='border-2 border-[#222954] p-3'>
                                                        <div className="bg-red-600 rounded-lg py-4 text-2xl font-semibold">Sudut Merah</div>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        {/* <div className="grid grid-cols-3 border-2 border-[#222954] gap-x-3">
                                            <div className="bg-blue-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                            <div className="bg-red-600 rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                            <div className="bg-yellow-300 text-[#222954] rounded-lg py-4 text-2xl font-semibold">Sudut Biru</div>
                                        </div> */}
                                    </div>
                                </div>
                            </form>
                            
                        </div>
                    </div>
                </div>
                <div className="opacity-70 fixed inset-0 z-40 bg-black"></div>
            </>
        {/* ):null} */}
        </>

    )
}

export default modalDewan