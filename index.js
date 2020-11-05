const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
require('dotenv').config({ path: 'variables.env'});

//  Cors permite que un cliente se conecte 
//  a otro servidor para el intercambio de recursos

const cors = require('cors');


// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
});

mongoose.connection.on('error', (error) => {
    console.log(error);
})



// creando el servidor
const app = express();


// Habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));




// Definir un dominio(s) para recibir las peticiones
const whitelist = [process.env.FRONTEND_URL];
const corsOptions = {
    origin: (origin, callback) => {  
        // revisar si la petision viene del servidor que esta en la lista blanca
        const existe = whitelist.some( dominio => dominio === origin );
        if (existe) {
            callback(null,true);
        } else{
            callback(new Error('No permitido por CORS'));
        }
    }
}

// carpeta publica
app.use(express.static('uploads'));

// Habilitando cors
app.use(cors(corsOptions));




// rutas de la app
app.use('/', routes());





const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 7000;

// iniciar app
app.listen(port, host, () => {
    console.log('El servidor esta funcionando en el puerto:', port);
    
    console.log(process.env.DB_URL);
    console.log(process.env.FRONTEND_URL);
})
