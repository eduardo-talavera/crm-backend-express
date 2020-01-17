const express = require('express');
const routes = require('./routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//  Cors permite que un cliente se conecte 
//  a otro servidor para el intercambio de recursos

const cors = require('cors');


// conectar mongo
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/restapis', {
    useNewUrlParser: true
});

// creando el servidor
const app = express();

// Habilitar bodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// Habilitando cors
app.use(cors());

// rutas de la app
app.use('/', routes());

// carpeta publica
app.use(express.static('uploads'));

//puerto
app.listen(7000);
