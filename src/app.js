const express = require('express');
const app = express();
const userRoutes = require('./routes/user.routes');
const errorHandler = require('./middlewares/errorHandler');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');

app.use(express.json());

// Documentación Swagger disponible en /api-docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/users', userRoutes);

app.use(errorHandler);

module.exports = app;
