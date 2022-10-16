import Express from "express"
import cors from 'cors'
import dotenv from 'dotenv'

import AuthMidleware from './Middleware/Auth.js'
import TestRouter from './routes/Test.js'
import mongoose from "mongoose";

const app = Express();
dotenv.config()
//Options for cors permission
const corsOption = {
    credential: true,
    origin: true,
}

const atlasUrl = process.env.MONGO_ATLAS
mongoose.connect(atlasUrl, {})

const connection = mongoose.connection
connection.once('open', () => {
    console.log("MongoDb connected")
})

app.use(cors(corsOption))

//Create a server to listen
app.use(Express.json())
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Connected to server port: ${port}`);
})

app.use('/api/v1', AuthMidleware, TestRouter)