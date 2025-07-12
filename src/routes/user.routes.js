const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { createUserValidator } = require('../validators/user.validator');
const validateRequest = require('../middlewares/validateRequest');

//endpoint para crear un nuevo usuario
router.post('/', createUserValidator, validateRequest, userController.createUser);

//endpoint para obtener todos los usuarios
router.get('/', userController.getUsers);

//endpoint para obtener un usuario por ID
router.get('/:id', userController.getUserById);

//endpoint para actualizar un usuario por ID
router.put('/:id', userController.updateUser);

//endpoint para eliminar un usuario por ID
router.delete('/:id', userController.deleteUser);

module.exports = router;
