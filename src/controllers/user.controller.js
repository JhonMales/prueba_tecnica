const userService = require('../services/user.service');

// Crea un nuevo usuario con los datos del cuerpo de la solicitud
exports.createUser = async (req, res, next) => {
    try {
        const user = await userService.createUser(req.body);
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
};

// Obtiene todos los usuarios existentes en la base de datos
exports.getUsers = async (req, res, next) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error) {
        next(error);
    }
};

// Obtiene un usuario por su ID
exports.getUserById = async (req, res, next) => {
    try {
        const user = await userService.getUserById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// Actualiza un usuario por su ID con los nuevos datos del cuerpo de la solicitud
exports.updateUser = async (req, res, next) => {
    try {
        const user = await userService.updateUser(req.params.id, req.body);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json(user);
    } catch (error) {
        next(error);
    }
};

// Elimina un usuario por su ID
exports.deleteUser = async (req, res, next) => {
    try {
        const user = await userService.deleteUser(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.json({ message: 'Usuario eliminado' });
    } catch (error) {
        next(error);
    }
};
