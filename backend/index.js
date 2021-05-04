'use strict'

/**
 * Dependencias
 */
 var mongoose = require('mongoose');
 var  app = require('./app');
 var port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise();

var url = 'mongodb://127.0.0.1:27017';
var opciones = {
    useNewUrlParser : true
};

mongoose.connect(url, opciones).then(()=>{
    /**
     * Crear servidor
     */
    app.listen(port, ()=>{
        console.log('Servidor ejecutandose en http://localhost:' + port);
    });
});