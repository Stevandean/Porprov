import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
import axios from 'axios'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const dewan = () => {

    const router = useRouter ()

    // ini state
    const [data, setData] = useState ([])
    const [jadwal, setJadwal] = useState ([])
    const [jadwalBiru, setJadwalBiru] = useState ([])
    const [jadwalMerah, setJadwalMerah] = useState ([])
    const [keterangan, setKeterangan] = useState ('')

    const getNilai = () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        axios.get (BASE_URL +`/api/nilai/tanding/jadwal/${id_jadwal}`)
        .then (res => {
            setData (res.data.data)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    const getJadwal = () => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal

        axios.get (BASE_URL + `/api/tanding/${id_jadwal}`)
        .then (res => {
            setJadwal (res.data.data)
            setJadwalBiru (res.data.data.biru)
            setJadwalMerah (res.data.data.merah)
        })
        .catch (err => {
            console.log(err.message);
        })
    }

    // tambah jatuhan
    const tambahJatuhan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        
        // babak 1
        if (e == 'tambahJatuhanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahJatuhanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, form)
            .then (res => {
                console.log(res.data.message);
                console.log('berhasil');
                getNilai ()
            })
            .catch (err => {
                console.log('gagal');
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahJatuhanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahJatuhanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahJatuhanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahJatuhanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // tambah binaan
    const tambahBinaan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'tambahBinaanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/binaan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahBinaanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/binaan`, form)
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahBinaanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/binaan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahBinaanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/binaan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahBinaanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post  (BASE_URL + `/api/nilai/tanding/biru/binaan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahBinaanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/binaan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // tambah teguran
    const tambahTeguran = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'tambahTeguranBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/teguran`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTeguranMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/teguran`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahTeguranBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/teguran`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTeguranMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/teguran`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahTeguranBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/teguran`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahTeguranMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/teguran`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // tambah peringatan
    const tambahPeringatan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'tambahPeringatanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/peringatan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPeringatanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/peringatan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'tambahPeringatanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/peringatan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPeringatanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/peringatan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'tambahPeringatanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/biru/peringatan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'tambahPeringatanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.post (BASE_URL + `/api/nilai/tanding/merah/peringatan`, form)
            .then (res => {
                console.log(res.data.message);
                getNilai ()
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // delete jatuhan
    const deleteJatuhan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusJatuhanBiru1') {
            let form = {
                id_jadwal : jadwal,
                babak : 'I',
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusJatuhanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'hapusJatuhanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusJatuhanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL +`/api/nilai/tanding/merah/jatuhan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'hapusJatuhanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/jatuhan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusJatuhanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/jatuhan`, {data : form})
            .then (res => {
                getNilai()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    // delete binaan
    const deleteBinaan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusBinaanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/binaan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message)
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusBinaanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/binaan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        if (e == 'hapusBinaanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/binaan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusBinaanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/binaan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        if (e == 'hapusBinaanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/binaan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusBinaanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/binaan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    //delete teguran
    const deleteTeguran = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusTeguranBiru1') {
            let form  = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/teguran`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusTeguranMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/teguran`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'hapusTeguranBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL +`/api/nilai/tanding/biru/teguran`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusTeguranMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/teguran`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'hapusTeguranBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/teguran`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusTeguranMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/teguran`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    //delete peringatan
    const deletePeringatan = (e) => {
        const jadwal = localStorage.getItem ('jadwal')

        // babak 1
        if (e == 'hapusPeringatanBiru1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/peringatan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusPeringatanMerah1') {
            let form = {
                babak : 'I',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/peringatan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 2
        else if (e == 'hapusPeringatanBiru2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/peringatan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusPeringatanMerah2') {
            let form = {
                babak : 'II',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL +  `/api/nilai/tanding/merah/peringatan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }

        // babak 3
        else if (e == 'hapusPeringatanBiru3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/biru/peringatan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        } else if (e == 'hapusPeringatanMerah3') {
            let form = {
                babak : 'III',
                id_jadwal : jadwal
            }
            axios.delete (BASE_URL + `/api/nilai/tanding/merah/peringatan`, {data : form})
            .then (res => {
                getNilai ()
                console.log(res.data.message);
            })
            .catch (err => {
                console.log(err.response.data.message);
            })
        }
    }

    const winner = (e) => {
        const jadwal = localStorage.getItem ('jadwal')
        let id_jadwal = jadwal
        setKeterangan (e)

        let form = {
            keterangan : e
        }
        axios.put (BASE_URL + `/api/tanding/keterangan/${id_jadwal}`, form)
        .then (res => {
            console.log(res.data.message);
        })
        .catch (err => {
            console.log(err.response.data.message);
        })
    }

    // tambah jatuhan

    useEffect (() => {
        getNilai ()
        getJadwal ()
    }, [])

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
                    <div className="w-9/12 mx-auto py-10">

                        {/* wrapper tanding information */}
                        <div className="grid grid-cols-3 gap-x-3 mb-8">
                            {/* partai */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>Partai {jadwal.partai}</h1>
                            </div>
                            {/* kelas and kategori */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwal.jk} {jadwal.golongan}</h1>
                            </div>
                            {/* babak */}
                            <div className="bg-[#222954] py-2 flex justify-center items-center rounded-lg">
                                <h1 className='text-xl font-bold'>{jadwal.babak}</h1>
                            </div>
                        </div>

                        {/* wrapper participant information */}
                        <div className="grid grid-cols-7 mb-8">
                            {/* sudut biru information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                    <div className="py-2 px-5 col-span-4">
                                        <h1 className='text-xl font-bold'>{jadwalBiru.nama}</h1>
                                        <h1 className='text-xl font-bold'>{jadwalBiru.kontingen}</h1>
                                    </div>
                                {/* nomor partai */}
                                <div className="bg-blue-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwal.total_biru}</h1>
                                </div>
                            </div>
                            <div></div>
                            {/* sudut merah information */}
                            <div className="col-span-3 grid grid-cols-5 text-[#222954] gap-x-5 border-2 border-[#222954] rounded-lg">
                                {/* nomor partai  */}
                                <div className="bg-red-600 flex justify-center items-center">
                                    <h1 className='text-4xl font-bold text-white'>{jadwal.total_merah}</h1>
                                </div>
                                <div className="py-2 px-5 col-span-4 flex flex-col items-end">
                                    <h1 className='text-xl font-bold'>{jadwalMerah.nama}</h1>
                                    <h1 className='text-xl font-bold'>{jadwalMerah.kontingen}</h1>
                                </div>
                            </div>
                        </div>

                        {/* table nilai */}
                        {data.map ((item, index) => (
                            <table key={index + 1} className='w-full table-fixed border-separate border-spacing-1 mb-4'>
                                <thead>
                                    <tr>
                                        <th className='rounded-lg py-3 bg-blue-600'>total</th>
                                        <th className='rounded-lg bg-blue-600' colSpan={4}>Detail poin</th>
                                        <th className='rounded-lg bg-yellow-300 text-[#222954]'>Babak</th>
                                        <th className='rounded-lg bg-red-600' colSpan={4}>Detail poin</th>
                                        <th className='rounded-lg bg-red-600'>total</th>
                                    </tr>
                                </thead>
                                <tbody className='text-[#222954]'>
                                    {/* wrapper nilai juri 1 */}
                                    <tr>
                                        {/* total */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.poin_biru.total_poin}</td>

                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                    {item.poin_biru.log_juri1.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                            </div>
                                        </td>

                                        {/* babak */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.babak}</td>

                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 1</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                    {item.poin_merah.log_juri1.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>

                                        {/* total */}
                                        <td className='border-2 border-[#222954] rounded-lg justify-center items-center text-3xl font-bold text-center' rowSpan={8}>{item.poin_merah.total_poin}</td>
                                    </tr>

                                    {/* wrapper nilai juri 2 */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                    {item.poin_biru.log_juri2.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 2</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 2</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                    {item.poin_merah.log_juri2.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper nilai juri 3 */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-blue-600">
                                                    {item.poin_biru.log_juri3.map((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 3</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* urutan juri */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center">Juri 3</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-4 text-red-600">
                                                    {item.poin_merah.log_juri3.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin masuk */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">
                                                    <span>{item.poin_biru.poin_masuk}</span>
                                                </div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0]">
                                                    {item.poin_biru.log_poin_masuk.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#FDFFA0]">Poin Masuk</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#FDFFA0]">
                                                    {item.poin_merah.log_poin_masuk.map ((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FDFFA0]">
                                                    <span>{item.poin_merah.poin_masuk}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin jatuhan */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total jatuhan */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">
                                                    <span>
                                                        {item.poin_biru.jatuhan}
                                                    </span>
                                                </div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">
                                                    {item.poin_biru.log_jatuhan.map((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama poin */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-2 text-center bg-[#BDEBFF]">Jatuhan</div>
                                                {/* nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg px-4 py-1 col-span-3 bg-[#BDEBFF]">
                                                    {item.poin_merah.log_jatuhan.map((item, index) => (
                                                        <span key={index + 1}>{item.poin}, </span>
                                                    ))}
                                                </div>
                                                {/* total nilai */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#BDEBFF]">
                                                    <span>{item.poin_merah.jatuhan}</span>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>

                                    {/* wrapper poin hukuman */}
                                    <tr>
                                        {/* wrapper detail poin biru */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* total hukuman */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">
                                                    <span>{item.poin_biru.total_hukum}</span>
                                                </div>
                                                {/* nilai hukuman */}
                                                <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_biru.log_binaan.map((item, index) => (
                                                            <span key={index + 1}>{item.poin}, </span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_biru.log_teguran.map((item, index) => (
                                                            <span key={index + 1}>{item.poin}, </span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_biru.log_peringatan.map((item, index) => (
                                                            <span key={index + 1}>{item.poin}, </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* nama hukuman */}
                                                <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                                </div>
                                            </div>
                                        </td>
                                        {/* wrapper detail poin merah */}
                                        <td className='text-lg font-semibold' colSpan={4}>
                                            {/* detail nilai */}
                                            <div className="grid grid-cols-6 gap-x-2">
                                                {/* nama hukuman */}
                                                <div className="py-1 col-span-2 grid grid-rows-3 gap-y-1 text-center">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Binaan</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Teguran</div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">Peringatan</div>
                                                </div>
                                                {/* nilai hukuman */}
                                                <div className="py-1 col-span-3 grid grid-rows-3 gap-y-1">
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_merah.log_binaan.map((item, index) => (
                                                            <span key={index + 1}>{item.poin}, </span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_merah.log_teguran.map((item, index) => (
                                                            <span key={index + 1}>{item.poin}, </span>
                                                        ))}
                                                    </div>
                                                    <div className="border-2 border-[#222954] rounded-lg px-4 bg-[#FFBBBB]">
                                                        {item.poin_merah.log_peringatan.map((item, index) => (
                                                            <span key={index + 1}>{item.poin}, </span>
                                                        ))}
                                                    </div>
                                                </div>
                                                {/* total hukuman */}
                                                <div className="border-2 border-[#222954] rounded-lg text-center py-1 col-span-1 bg-[#FFBBBB] flex justify-center items-center">{item.poin_merah.total_hukum}</div>
                                            </div>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        ))}

                        {/* wrapper button nilai */}
                        {(() => {
                            if (data.length == 1) {
                                return (
                                    <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                                        {/*  wrapper button tambah nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* button button nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanBiru1')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanMerah1')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* wrapper button hapus nilai */}
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button delete nilai biru */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanBiru1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button delete nilai merah */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanMerah1')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )        
                            } else if (data.length = 2) {
                                return (
                                    <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                                        {/*  button nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* button button nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanBiru2')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanMerah2')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* wrapper button hapus nilai */}
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button hapus nilai biru */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanBiru2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button hapus nilai merah */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanMerah2')} className='bg-yellow-300 hover:bg-yellow-400     text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            } else if (data.length = 3) {
                                return (
                                    <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                                        {/*  wrapper button nilai */}
                                        <div className="grid grid-cols-7 mb-3">
                                            {/* wrapper button nilai biru */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanBiru3')} className='bg-blue-600 hover:bg-blue-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button nilai merah */}
                                            <div className="col-span-3">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => tambahJatuhan ('tambahJatuhanMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Jatuhan</button>
                                                    <button onClick={() => tambahBinaan ('tambahBinaanMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Binaan</button>
                                                    <button onClick={() => tambahTeguran ('tambahTeguranMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Teguran</button>
                                                    <button onClick={() => tambahPeringatan ('tambahPeringatanMerah3')} className='bg-red-600 hover:bg-red-700 text-lg font-semibold py-2.5 rounded-lg'>Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        {/* wrapper button hapus nilai */}
                                        <div className="grid grid-cols-7">
                                            {/* wrapper button hapus nilai biru */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanBiru3')} className ='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanBiru3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranBiru3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanBiru3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                            <div></div>
                                            {/* wrapper button hapus nilai merah */}
                                            <div className="col-span-3 text-[#222954]">
                                                <div className="grid grid-cols-4 gap-x-3">
                                                    <button onClick={() => deleteJatuhan ('hapusJatuhanMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Jatuhan</button>
                                                    <button onClick={() => deleteBinaan ('hapusBinaanMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Binaan</button>
                                                    <button onClick={() => deleteTeguran ('hapusTeguranMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Teguran</button>
                                                    <button onClick={() => deletePeringatan ('hapusPeringatanMerah3')} className='bg-yellow-300 hover:bg-yellow-400 text-lg font-semibold py-2.5 rounded-lg'>Hapus Peringatan</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })()}

                        {/* wrapper verifikasi juri */}
                        <div className="border-2 border-black rounded-lg py-3 px-2 mb-8">
                            {/* verifikasi juri */}
                            <div className="bg-[#222954] text-center rounded-lg py-3 mb-3">
                                <h1 className='text-2xl font-bold'>Verifikasi juri</h1>
                            </div>
                            {/* wrapper button verifikasi juri */}
                            <div className="grid grid-cols-2 gap-x-7 text-center text-[#222954]">
                                <button className="bg-yellow-300 hover:bg-yellow-400 py-2 rounded-lg text-xl font-semibold">Jatuhan</button>
                                <button className="bg-yellow-300 hover:bg-yellow-400 py-2 rounded-lg text-xl font-semibold">Pelanggaran</button>
                            </div>
                        </div>

                        
                        {/* keputusan pemenang */}
                        <div className="border-2 border-[#222954] rounded-lg py-3 px-2 mb-8">
                            {/* keputusan pemenang */}
                            <div className="bg-[#222954] text-center rounded-lg py-3 mb-3">
                                <h1 className='text-2xl font-bold'>Keputusan Pemenang</h1>
                            </div>
                            {/* wrapper keputusan pemenang */}
                            <div className="grid grid-cols-2 gap-x-7">
                                {/* wrapper button Keputusan pemenang biru */}
                                <div className="text-center text-[#222954]">
                                    <div className="grid grid-cols-6 gap-x-2">
                                        <button onClick={() => winner ('angkaBiru')} className={keterangan === 'angkaBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Angka</button>
                                        <button onClick={() => winner ('udBiru')} className={keterangan === 'udBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>U.D</button>
                                        <button onClick={() => winner ('disBiru')} className={keterangan === 'disBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Dis</button>
                                        <button onClick={() => winner ('teknikBiru')} className={keterangan === 'teknikBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Teknik</button>
                                        <button onClick={() => winner ('wmpBiru')} className={keterangan === 'wmpBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>WMP</button>
                                        <button onClick={() => winner ('mutlakBiru')} className={keterangan === 'mutlakBiru' ? "bg-blue-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-blue-600 text-blue-600 py-1 rounded-lg text-lg font-semibold"}>Mutlak</button>
                                    </div>
                                </div>

                                {/* wrapper button Keputusan pemenang merah */}
                                <div className="text-center text-[#222954]">
                                    <div className="grid grid-cols-6 gap-x-2">
                                        <button onClick={() => winner ('angkaMerah')} className={keterangan === 'angkaMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Angka</button>
                                        <button onClick={() => winner ('udMerah')} className={keterangan === 'udMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>U.D</button>
                                        <button onClick={() => winner ('disMerah')} className={keterangan === 'disMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Dis</button>
                                        <button onClick={() => winner ('teknikMerah')} className={keterangan === 'teknikMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Teknik</button>
                                        <button onClick={() => winner ('wmpMerah')} className={keterangan === 'wmpMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>WMP</button>
                                        <button onClick={() => winner ('mutlakMerah')} className={keterangan === 'mutlakMerah' ? "bg-red-600 text-white py-1 rounded-lg text-lg font-semibold" : "border-2 border-red-600 text-red-700 py-1 rounded-lg text-lg font-semibold"}>Mutlak</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* wrapper back and selesai */}
                        <div className="grid grid-cols-6 gap-x-4">
                            <button onClick={() => router.back()} className="bg-green-600 hover:bg-green-700 col-span-3 py-3 text-center rounded-lg text-xl font-bold">Kembali</button>
                            <div className="col-span-3 bg-green-600 hover:bg-green-700 py-3 text-center rounded-lg text-xl font-bold">Selesai</div>
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

export default dewan