require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const prevsRouter = require('./controllers/prevs');
const userExtractor = require('./middleware/auth');


(async() => {

    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Conectado a Mongo DB')
    } catch (error) {
        console.log(error);
    }
})()
app.use(cors());
app.use(express.json());
app.use(cookieParser());
// rutas frontend
app.use('/' , express.static(path.resolve('views' , 'Home')));
app.use('/signup' , express.static(path.resolve('views' , 'signup')));
app.use('/login' , express.static(path.resolve('views' , 'login')));
app.use('/prevs' , express.static(path.resolve('views' , 'prevs')));
app.use('/ABarberP' , express.static(path.resolve('views' , 'ABarberP')));
app.use('/fecha' , express.static(path.resolve('views' , 'fecha')));
app.use('/Admin' , express.static(path.resolve('views' , 'Admin')));
app.use('/Confirmar' , express.static(path.resolve('views' , 'Confirmar')));
app.use('/Components' , express.static(path.resolve('views' , 'Components')));
app.use('/images' , express.static(path.resolve('img')));
app.use('/verify/:id/:token' , express.static(path.resolve('views' , 'verify')));

app.use(morgan('tiny'));

//Rutas backend
app.use('/api/users' , usersRouter);
app.use('/api/login' , loginRouter);
app.use('/api/prevs' , userExtractor, prevsRouter);

module.exports = app;