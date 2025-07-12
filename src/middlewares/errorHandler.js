// Middleware centralizado para manejar errores no capturados
const errorHandler = (err, req, res, next) => {
    console.error(err); // Log para depuración
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};

module.exports = errorHandler;
