const Solicitud = require('../models/Solicitud')

// CRUD

function crearSolicitud(req, res){
	var solicitud = new Solicitud(req.body);
	res.status(200).send(solicitud);
}

function obtenerSolicitud(req, res){
	var solicitud1 = new Solicitud(1, 2, '25/06/2021', 3, 2, 'Activa')
  	var solicitud2 = new Solicitud(2, 5, '5/12/2021', 4, 1, 'Rechazada')
  	res.send([solicitud1,solicitud2])
}

function modificarSolicitud(req, res){
	var solicitud = new Solicitud(req.params.id,2, '25/06/2021', 3, 2, 'Activa')
	var modificaciones = req.body
	solicitud = {...solicitud,...modificaciones }
	res.send(solicitud)
}

function eliminarSolicitud(req, res){
	res.status(200).send(`La solicitud ${req.params.id} se elimino`)
}

module.exports = {
	crearSolicitud,
	obtenerSolicitud,
	modificarSolicitud,
	eliminarSolicitud
}

