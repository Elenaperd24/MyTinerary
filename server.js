require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Router = require('./routes/routes')
const passport = require('passport')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 4000
const HOST = process.env.HOST || "0.0.0.0"

require('./config/database')
require('./config/passport')
//middlewares
app.use(express.json());
app.use(cors());
app.use(passport.initialize())
app.use('/api',Router)

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))
    app.get("*", (req,res)=>{
        res.sendFile(path.join(__dirname+"/client/build/index.html"))
    })}

app.listen(PORT, HOST,()=>console.log('servidor inicializado en puerto 4000'))
//.sta