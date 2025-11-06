import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongoose.js'



// App config

const  PORT = process.env.PORT || 5000
const app = express()

await connectDB()
app.use(cors())



// Initialize Middleware

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(cors())



// api route

app.get('/', (req, res) => {
    res.status(200).send('hello')
})


app.listen(PORT, () => {
    console.log(`Server Running on port http://localhost:${PORT}`)
})