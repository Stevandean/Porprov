require('dotenv').config();
const compression = require('compression');
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

io.on('connection', socket => {
    console.log(`⚡: ${socket.id} user just connected!`);
    // console.log(`a user connected!`);
    // socket.disconnect() 
    // socket.disconnect(0) 

    //--------------------------------
    //socket tanding
    //--------------------------------
    socket.on('join', (id_jadwal) =>{
      socket.join(id_jadwal)
      console.log("joiined "+ id_jadwal);
    })

    socket.on('leave', (id_jadwal) =>{
      socket.leave(id_jadwal)
      console.log("leave "+ id_jadwal);
    })

    socket.on('naikBabak', (id_jadwal) =>{
      io.to(id_jadwal).emit('naikBabak')
    })
    
    //socket juri to dewan seni
    socket.on('juriToDewan', (id_jadwal) =>{
      io.to(id_jadwal).emit('refreshDewan')
    })
    
    socket.on('init_juri_tanding', (id_jadwal) =>{
      io.to(id_jadwal).emit('getJuri')
    })
    
    socket.on('edit_juri_tanding', (id_jadwal) =>{
      io.to(id_jadwal).emit('change_nilai_juri')
    })
    
    socket.on('dewanToLayar', (id_jadwal) =>{
      io.to(id_jadwal).emit('refreshLayar')
    })

    //socket penilaian 
    socket.on("init_nilai_tanding", (id_jadwal) => {
      io.to(id_jadwal).emit("getNilaiTanding")
    })
    
    socket.on("editNilaiTanding", (id_jadwal) =>{
      io.to(id_jadwal).emit("change_nilai_tanding")
    })
    
    //socket timer tanding
    socket.on("init_time_tanding", (id_jadwal) => {
      io.to(id_jadwal).emit("get_time_tanding")
    })

    socket.on("update_time_tanding", (id_jadwal) => {
      io.to(id_jadwal).emit("change_time_tanding")
    })

    //socket verifikasi
    socket.on("init_verif", (id_jadwal) => {
      io.to(id_jadwal).emit("getVerif")
    })

    socket.on("editVerif", (id_jadwal) =>{
      io.to(id_jadwal).emit("change_verif")
    })

    socket.on("closeVerif", (id_jadwal) => {
      io.to(id_jadwal).emit("close_verif")
    })

    socket.on("openVerif", (id_jadwal) => {
      io.to(id_jadwal).emit("open_verif")
    })

    //socket indikator juri
    socket.on("pbj1", (id_jadwal) => {
      io.to(id_jadwal).emit("pbj1On")
    })

    socket.on("pbj2", (id_jadwal) => {
      io.to(id_jadwal).emit("pbj2On")
    })

    socket.on("pbj3", (id_jadwal) => {
      io.to(id_jadwal).emit("pbj3On")
    })

    socket.on("pmj1", (id_jadwal) => {
      io.to(id_jadwal).emit("pmj1On")
    })

    socket.on("pmj2", (id_jadwal) => {
      io.to(id_jadwal).emit("pmj2On")
    })

    socket.on("pmj3", (id_jadwal) => {
      io.to(id_jadwal).emit("pmj3On")
    })

    socket.on("tbj1", (id_jadwal) => {
      io.to(id_jadwal).emit("tbj1On")
    })

    socket.on("tbj2", (id_jadwal) => {
      io.to(id_jadwal).emit("tbj2On")
    })

    socket.on("tbj3", (id_jadwal) => {
      io.to(id_jadwal).emit("tbj3On")
    })

    socket.on("tmj1", (id_jadwal) => {
      io.to(id_jadwal).emit("tmj1On")
    })

    socket.on("tmj2", (id_jadwal) => {
      io.to(id_jadwal).emit("tmj2On")
    })

    socket.on("tmj3", (id_jadwal) => {
      io.to(id_jadwal).emit("tmj3On")
    })

    //--------------------------------
    // SOCKET SENI
    //--------------------------------

    // socket join room seni
    socket.on("joinSeni", ({ user, id_jadwal }) => {
      console.log(user+" Seni join "+ id_jadwal);
      socket.join(id_jadwal);
    });

    //socket juri to dewan & layar 
    socket.on("juriToDewanLayar", (id_jadwal) => {
      console.log(id_jadwal);
      io.to(id_jadwal).emit("getDewanLayar")
    })

    //socket timer to layar
    socket.on('seniTimerToLayar', (id_jadwal) =>{
      io.to(id_jadwal).emit("getLayarSeni")
    })

    // socket.on("editData", () =>{
    //   io.emit("change_data")
    // })\


    //socket juri to dewan seni


    //socket timer seni
    socket.on("init_time_seni", (id_jadwal) => {
      io.to(id_jadwal).emit("get_time_seni")
    })

    socket.on("update_time_seni", (id_jadwal) => {
      io.to(id_jadwal).emit("change_time_seni")
    })

    socket.on('stop_timer_seni', (id_jadwal) =>{
      io.to(id_jadwal).emit('save_timer_seni')
    })

    socket.on('disconnect', () => {
      // socket.disconnect() 
      console.log('🔥: A user disconnected');
      // console.log(`a user disconnected`);
    });

})


// Compress all HTTP responses
// app.use(compression());

app.use(cors())
app.use(express.static(__dirname))

app.use(bodyParser.json())
app.use(bodyParser.json())

//--------------------------------
//Endpoint Umum
//--------------------------------
const UserRouter = require('./src/api/user/user.router')
app.use("/api/", UserRouter)

const NamaRouter = require("./src/api/nama_juri/nama_router")
app.use("/api/nama", NamaRouter)

const JuriRouter = require('./src/api/juri/juri.router.js')
app.use("/api/juri", JuriRouter)

const eventRouter = require('./src/api/event/event.router')
app.use("/api/event/", eventRouter)

const GelanggangRouter = require("./src/api/gelanggang/gelanggang.router")
app.use("/api/gelanggang/", GelanggangRouter)

//--------------------------------
//Endpoint Tanding
//--------------------------------
const pesertaTandingRouter = require('./src/api/api_tanding/peserta_tanding/peserta_tanding.router')
app.use("/api/tanding/peserta", pesertaTandingRouter)

const tandingRouter = require('./src/api/api_tanding/jadwal_tanding/jadwal_tanding.router')
app.use("/api/tanding/jadwal", tandingRouter)

const NilaiTandingRouter = require('./src/api/api_tanding/nilai_tanding/nilai_tanding.router')
app.use('/api/nilai/tanding', NilaiTandingRouter)

const verifRouter = require('./src/api/api_tanding/verif_tanding/verif_tanding.router')
app.use('/api/tanding/verif', verifRouter)

const peringatanRouter = require('./src/api/api_tanding/peringatan/peringatan.router')
app.use('/api/tanding/peringatan', peringatanRouter)


//--------------------------------
//Endpoint Seni
//--------------------------------
const pesertaSeniRouter = require('./src/api/api_seni/peserta_seni/peserta_seni.router')
app.use("/api/seni/peserta", pesertaSeniRouter)

const tgrRouter = require('./src/api/api_seni/jadwal_seni/jadwal_seni.router')
app.use("/api/seni/jadwal", tgrRouter)

const skorRouter = require('./src/api/api_seni/detail_nilai_seni/detail_nilai_seni.router')
app.use("/api/seni/detail", skorRouter)

const tunggalRouter = require('./src/api/api_seni/nilai_tunggal/nilai_tunggal.router')
app.use("/api/nilai/tunggal", tunggalRouter)

const gandaSoloRouter = require('./src/api/api_seni/nilai_ganda/nilai_ganda.router')
app.use("/api/nilai/", gandaSoloRouter)

const reguRouter = require('./src/api/api_seni/nilai_regu/nilai_regu.router')
app.use("/api/nilai/regu", reguRouter)

const hukumTGRRouter = require('./src/api/api_seni/hukum_seni/hukum_seni.router')
app.use("/api/seni/hukum/", hukumTGRRouter)

server.listen(PORT,() =>{
    console.log('server run on port ' + PORT)
})

