var router = require('express').Router()

var {
	crearMascota,
	obtenerMascota,
	modificarMascota,
	eliminarMascota,
	count
} = require('../controllers/mascotas');

router.get('/', obtenerMascota);
router.get('/count/:cat', count);
router.get('/:id', obtenerMascota);
router.post('/', crearMascota);
router.put('/:id', modificarMascota);
router.delete('/:id', eliminarMascota);

module.exports = router;

localhost:4001//v1/mascotas/count/Gato
localhost:4001//v1/mascotas/id=1244123531
