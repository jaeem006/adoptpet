const Usuario = require('../models/Usuario')

// CRUD

function crearUsuario (req, res){
	var usuario = new Usuario(...req.body);
	res.status(200).send(usuario);
}

function obtenerUsuarios(req, res){
	var usuario1 = new Usuario(1,'juancho', 'Juan', 'Vega', 'juan@vega.com', 'abc', 'normal')
  	var usuario2 = new Usuario(2, 'montse', 'Monserrat', 'Vega', 'mon@vega.com', '123', 'anunciante')
  	res.send([usuario1,usuario2])
}

function modificarUsuario(req, res){
	var usuario = new Usuario(req.params.id,'juancho', 'Juan', 'Vega', 'juan@vega.com', 'abc', 'normal')
	var modificaciones = req.body
	usuario = {...usuario,...modificaciones }
	res.send(usuario)
}

function eliminarUsuario(req, res){
	res.status(200).send(`El usuario ${req.params.id} se elimino`)
}

module.exports = {
	crearUsuario,
	obtenerUsuarios,
	modificarUsuario,
	eliminarUsuario
}
















