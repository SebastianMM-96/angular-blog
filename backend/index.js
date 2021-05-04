'use strict'

var mongoose = require('mongoose');
var url = 'mongodb://127.0.0.1:27017';
var opciones = {
    useNewUrlParser : true
};

mongoose.connect(url, opciones).then(()=>{
    console.log("Conexión exitosa");
});