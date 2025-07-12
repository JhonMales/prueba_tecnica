const Usuario = require('../models/user.model');

// Crea un nuevo usuario y lo guarda en la base de datos
exports.createUser = async (data) => {
    const nuevoUsuario = new Usuario(data);
    return await nuevoUsuario.save();
};

// Obtiene todos los usuarios
exports.getAllUsers = async () => {
    return await Usuario.find();
};

// Obtiene un usuario por su ID
exports.getUserById = async (id) => {
    return await Usuario.findById(id);
};

// Actualiza un usuario existente por ID
exports.updateUser = async (id, data) => {
    return await Usuario.findByIdAndUpdate(id, data, { new: true, runValidators: true });
};

// Elimina un usuario por ID
exports.deleteUser = async (id) => {
    return await Usuario.findByIdAndDelete(id);
};
