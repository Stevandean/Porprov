require('dotenv').config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io")

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*",
    }
  });;

const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;

//endpoint to connect socket
// const SocketHandler = (req, res) => {
//   if (res.socket.server.io) {
//     console.log('Socket is already running')
//   } else {
//     console.log('Socket is initializing')
//     const io = new Server(res.socket.server)
//     res.socket.server.io = io
//   }
//   res.end()
// }


io.on('connection', socket => {
    // console.log(`⚡: ${socket.id} user just connected!`);
    console.log(`a user connected!`);
    // socket.disconnect() 
    // socket.disconnect(0) 

    //socket juri to dewan seni
    socket.on('juriToDewan', () =>{
      io.emit('refreshDewan')
    })

    // //socket penilaian 
    // socket.on("init_data", () => {
    //     io.emit("getData")
    // })

    // socket.on("editData", () =>{
    //   io.emit("change_data")
    // })\

    socket.on('naikBabak', () =>{
      io.emit('naikBabak')
    })
    
    socket.on('init_juri_tanding', () =>{
      io.emit('getJuri')
    })

    socket.on('edit_juri_tanding', () =>{
      io.emit('change_nilai_juri')
    })

    //socket juri to dewan seni
    socket.on('dewanToLayar', () =>{
      io.emit('refreshLayar')
    })

    //socket penilaian 
    socket.on("init_nilai_tanding", () => {
        io.emit("getNilaiTanding")
    })

    socket.on("editNilaiTanding", () =>{
      io.emit("change_nilai_tanding")
    })

    //socket timer seni
    socket.on("init_time_seni", () => {
      io.emit("get_time_seni")
    })

    socket.on("update_time_seni", () => {
      io.emit("change_time_seni")
    })

    //socket timer tanding
    socket.on("init_time_tanding", () => {
      io.emit("get_time_tanding")
    })

    socket.on("update_time_tanding", () => {
      io.emit("change_time_tanding")
    })

    //socket verifikasi
    socket.on("init_verif", () => {
      io.emit("getVerif")
    })

    socket.on("editVerif", () =>{
      io.emit("change_verif")
    })

    socket.on("closeVerif", () => {
      io.emit("close_verif")
    })

    socket.on("openVerif", () => {
      io.emit("open_verif")
    })

    //socket indikator juri
    socket.on("pbj1", () => {
      io.emit("pbj1On")
    })

    socket.on("pbj2", () => {
      io.emit("pbj2On")
    })

    socket.on("pbj3", () => {
      io.emit("pbj3On")
    })

    socket.on("pmj1", () => {
      io.emit("pmj1On")
    })

    socket.on("pmj2", () => {
      io.emit("pmj2On")
    })

    socket.on("pmj3", () => {
      io.emit("pmj3On")
    })

    socket.on("tbj1", () => {
      io.emit("tbj1On")
    })

    socket.on("tbj2", () => {
      io.emit("tbj2On")
    })

    socket.on("tbj3", () => {
      io.emit("tbj3On")
    })

    socket.on("tmj1", () => {
      io.emit("tmj1On")
    })

    socket.on("tmj2", () => {
      io.emit("tmj2On")
    })

    socket.on("tmj3", () => {
      io.emit("tmj3On")
    })
    socket.on('disconnect', () => {
      // socket.disconnect() 
      // console.log('🔥: A user disconnected');
      console.log(`a user disconnected`);
    });

})

app.use(cors())
app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.json())

const AdminRouter = require('./src/api/admin/admin.router.js')
app.use("/api/", AdminRouter)

const NamaRouter = require("./src/api/nama_juri/nama_router")
app.use("/api/nama", NamaRouter)

const JuriRouter = require('./src/api/juri/juri.router.js')
app.use("/api/juri", JuriRouter)

const pesertaTandingRouter = require('./src/api/peserta_tanding/peserta_tanding.router')
app.use("/api/peserta/tanding", pesertaTandingRouter)

const tandingRouter = require('./src/api/jadwal_tanding/jadwal_tanding.router')
app.use("/api/tanding", tandingRouter)

const pesertaSeniRouter = require('./src/api/peserta/peserta.router')
app.use("/api/peserta/seni", pesertaSeniRouter)

const tgrRouter = require('./src/api/jadwal_tgr/jadwal_tgr.router')
app.use("/api/tgr", tgrRouter)

const skorRouter = require('./src/api/skor/skor.router')
app.use("/api/skor/", skorRouter)

const tunggalRouter = require('./src/api/nilai_tunggal/nilai_tunggal.router')
app.use("/api/tunggal", tunggalRouter)

const gandaSoloRouter = require('./src/api/nilai_ganda/nilai_ganda.router')
app.use("/api/", gandaSoloRouter)

const reguRouter = require('./src/api/nilai_regu/nilai_regu.router')
app.use("/api/regu", reguRouter)

const hukumTGRRouter = require('./src/api/hukum_tgr/hukum_tgr.router')
app.use("/api/hukum/tgr", hukumTGRRouter)

const eventRouter = require('./src/api/event/event.router')
app.use("/api/event/", eventRouter)

const GelanggangRouter = require("./src/api/gelanggang/gelanggang.router")
app.use("/api/gelanggang/", GelanggangRouter)

const NilaiTandingRouter = require('./src/api/nilai_tanding/nilai_tanding.router')
app.use('/api/nilai/tanding', NilaiTandingRouter)

const verifRouter = require('./src/api/verif_tanding/verif_tanding.router')
app.use('/api/verif/tanding', verifRouter)

const peringatanRouter = require('./src/api/peringatan/peringatan.router')
app.use('/api/peringatan', peringatanRouter)

server.listen(PORT,() =>{
    console.log('server run on port ' + PORT)
})

