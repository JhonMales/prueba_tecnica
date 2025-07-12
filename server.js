// Punto de entrada principal del servidor
const app = require('./src/app');
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

// Conexión a la base de datos y arranque del servidor
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en el puerto ${PORT} `);
    });
});
