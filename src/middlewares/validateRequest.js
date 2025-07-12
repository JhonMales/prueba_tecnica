const { validationResult } = require('express-validator');

// Middleware para validar resultados de express-validator
const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        // Si hay errores de validación, responder con estado 400
        return res.status(400).json({ errors: errors.array() });
    }
    next(); // Continuar si no hay errores
};

module.exports = validateRequest;
