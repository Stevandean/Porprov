require('dotenv').config();
const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io")

const app = express();
const server = createServer(app);
const io = new Server(server, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });;

const cors = require("cors");
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT;

io.on('connection', socket => {
    console.log(`⚡: ${socket.id} user just connected!`);
    // socket.disconnect(0) 
    // socket.on("editData", (arg) => {
    //     console.log(arg); // world
    //   })

    socket.on("init_data", () => {
        io.emit("getData")
    })

    socket.on("editData", () =>{
        io.emit("change_data")
    } )

    socket.on('disconnect', () => {
      // socket.disconnect() 
      console.log('🔥: A user disconnected');
    });

})

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.json())

const AdminRouter = require('./src/api/admin/admin.router.js')
app.use("/api/admin", AdminRouter)

const NamaRouter = require("./src/api/nama_juri/nama_router")
app.use("/api/nama", NamaRouter)

const JuriRouter = require('./src/api/juri/juri.router.js')
app.use("/api/juri", JuriRouter)

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

const gandaRouter = require('./src/api/nilai_ganda/nilai_ganda.router')
app.use("/api/ganda", gandaRouter)

const reguRouter = require('./src/api/nilai_regu/nilai_regu.router')
app.use("/api/regu", reguRouter)

const hukumTGRRouter = require('./src/api/hukum_tgr/hukum_tgr.router')
app.use("/api/hukum/tgr", hukumTGRRouter)


server.listen(PORT,() =>{
    console.log('server run on port ' + PORT)
})

