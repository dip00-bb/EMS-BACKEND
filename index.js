import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
const app=express()

// router
import authRouter from './routes/auth.route.js'
import { connectToDb } from './config/db.js'

app.use(cors())
app.use(express.json()) 

app.use('/api/auth',authRouter)

app.listen(process.env.PORT,()=>{
    connectToDb()
    console.log("server is running on port",process.env.PORT)
})
