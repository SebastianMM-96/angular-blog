'use strict'

var controller = {


    test : (req, res)=>{
        return res.status(200).send({
            message : 'Entrando al test'
        })
    }

}

module.exports = controller;