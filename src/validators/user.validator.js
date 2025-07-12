const { body } = require('express-validator');

// Validaciones para crear un usuario
exports.createUserValidator = [
    body('nombre').notEmpty().withMessage('El nombre es obligatorio'),
    body('email').isEmail().withMessage('El email debe ser válido').notEmpty().withMessage('El email es obligatorio'),
];
