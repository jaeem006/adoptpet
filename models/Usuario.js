// // Usuario.js
// /** Clase que representa a un usuario de la plataforma*/
// class Usuario {
//   constructor(id, username, nombre, apellido, email, password, tipo) {
//     this.id = id;
//     this.username = username;
//     this.nombre = nombre;
//     this.apellido = apellido;
//     this.email = email;
//     this.password = password;
//     this.tipo = tipo; // tipo normal o anunciante
//   }
// }

// module.exports = Usuario;

const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
  username:String,
  nombre: String,
  apellido: String,
  email: String,
  password: String,
  tipo:String
}, {collection:"usuarios", timestamps: true});

UsuarioSchema.methods.publicData = () => {
  return {
    id: this.id,
    username: this.username,
    nombre: this.nombre,
    apellido: this.apellido,
    email: this.email,
    tipo: this.tipo
  }
}

mongoose.model("Usuario", UsuarioSchema)

















