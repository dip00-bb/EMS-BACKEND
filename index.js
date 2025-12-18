import dotenv from 'dotenv'
dotenv.config()
import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const app = express()

// router
import authRouter from './routes/auth.route.js'
import departmentRouter from './routes/dep.route.js'

import { connectToDb } from './config/db.js'

app.use(cors({
    origin: "http://localhost:3000",
    credentials:true
}))
app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRouter)
app.use('/api/department',departmentRouter)

app.listen(process.env.PORT, () => {
    connectToDb()
    console.log("server is running on port", process.env.PORT)
})
