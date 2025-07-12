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


/**
 * @swagger
 * tags:
 *   name: Usuarios
 *   description: API para gestión de usuarios
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crea un nuevo usuario
 *     tags: [Usuarios]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nombre
 *               - email
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Jhon Males
 *               email:
 *                 type: string
 *                 example: jhonMales@example.com
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       400:
 *         description: Error de validación
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtiene todos los usuarios
 *     tags: [Usuarios]
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Usuario'
 */

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtiene un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a obtener
 *         required: true
 *         schema:
 *           type: string
 *           example: 60f7a6c2f1d2b24a3c8e0f56
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualiza un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a actualizar
 *         required: true
 *         schema:
 *           type: string
 *           example: 60f7a6c2f1d2b24a3c8e0f56
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Juan Actualizado
 *               email:
 *                 type: string
 *                 example: juan.actualizado@example.com
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Usuario'
 *       404:
 *         description: Usuario no encontrado
 */

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Elimina un usuario por ID
 *     tags: [Usuarios]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID del usuario a eliminar
 *         required: true
 *         schema:
 *           type: string
 *           example: 60f7a6c2f1d2b24a3c8e0f56
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *       404:
 *         description: Usuario no encontrado
 */

module.exports = router;
