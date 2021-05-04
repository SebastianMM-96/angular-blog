'use strict'

/**
 * Cargar modulos de node
 * para crear el servidor
 */
var express = require('express');
var bodyParser = require('body-parser');

/**
 * Ejecutar express
 */
var app = express();

/**
 * Cargar ficheros
 * de rutas
 */

/**
 * Middlewares
 */
app.use(bodyParser.urlencoded({extended : false}));
app.use(bodyParser.json());

/**
 * CORS
 */

/**
 * Prefijos de rutas
 */

/**
 * Rutas y metodos
 */


/**
 * Exportar modulo
 */
module.exports = app;