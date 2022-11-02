const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ViajesSchema = new Schema({
    id_viaje:{type: String,require: true,max:60},
    ruta:{type: String, require: true, max:60},
    origen:{type: String, require: true, max:40},
    destino:{type: String, require: true, max:40},
    puestos:{type: String, require: true, max:15},
    valor:{type: Number, require: true, max:15},
});

module.exports = mongoose.model("viajes", ViajesSchema);