const swaggerJsdoc = require('swagger-jsdoc');

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'API de Gestión de Usuarios',
        version: '1.0.0',
        description: 'Documentación de la API de usuarios',
    },
    servers: [
        {
            url: 'http://localhost:3000',
        },
    ],
    components: {
        schemas: {
            Usuario: {
                type: 'object',
                properties: {
                    _id: {
                        type: 'string',
                        example: '6871b9ffed38b2909f709382',
                    },
                    nombre: {
                        type: 'string',
                        example: 'Jhon Males',
                    },
                    email: {
                        type: 'string',
                        example: 'jhonmales@example.com',
                    },
                    createdAt: {
                        type: 'string',
                        format: 'date-time',
                        example: '2025-07-12T01:27:27.686Z',
                    },
                },
            },
        },
    },
};

const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
