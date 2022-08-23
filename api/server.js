import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import studentRoute from './routes/student.js';
import userRoute from './routes/user.js';
import mongdbConnect from './config/db.js';
import errorHandelar from './middleware/errorHandelar.js';
import cookieParser from 'cookie-parser';



// init express
const app= express();
dotenv.config();

// init middleware
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cookieParser());

// init dotenv
const server_name = process.env.APP_NAME;
const port = process.env.APP_PORT;

// student router
app.use('/api/student', studentRoute);
app.use('/api/user', userRoute);


// error handelr
app.use(errorHandelar)

// server listen
app.listen(port, () =>{
    mongdbConnect();
    console.log(`${server_name} is runing on port ${port}`.bgGreen.white);
})