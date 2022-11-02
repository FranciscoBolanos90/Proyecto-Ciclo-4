const Viaje = require("../models/viajes.model")
let response ={
    msg:"",
    exito: false
}

exports.create = function(req,res){
    let viaje = new Viaje({
        id_viaje: req.body.id_viaje,
        ruta: req.body.ruta,
        origen: req.body.origen,
        destino: req.body.destino,
        puestos: req.body.puestos,
        valor: req.body.valor
    })

    viaje.save(function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error  al guardar el viaje"
            res.json(response)
            return;
        }

        response.exito=true,
        response.msg="El viaje se guardo correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Viaje.find(function(err,viajes){
        res.json(viajes)
    })
}

exports.findOne = function(req,res){
    Viaje.findOne({_id: req.params.id}, function(err, viaje){
        res.json(viaje)
    })
}

exports.update = function(req,res){
    let viaje = ({
        id_viaje: req.body.id_viaje,
        ruta: req.body.ruta,
        origen: req.body.origen,
        destino: req.body.destino,
        puestos: req.body.puestos,
        valor: req.body.valor
    })
    Viaje.findByIdAndUpdate(req.params.id,{$set: viaje},function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error  al actualizar el viaje"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="El viaje se actualizo correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Viaje.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err),
            response.exito=false,
            response.msg="Error al eliminar el viaje"
            res.json(response)
            return;
        }
        response.exito=true,
        response.msg="El viaje se elimino correctamente"
        res.json(response)
    })
}