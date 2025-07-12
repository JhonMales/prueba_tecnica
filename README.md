# API de Gestión de Usuarios 

Mini API RESTful construida con **Node.js**, **Express** y **MongoDB** para la gestión básica de usuarios. Permite crear, consultar, actualizar y eliminar registros de usuario (CRUD).

---

## Instalación y ejecución 

## 🐳 Instalación usando Docker Compose

---

### 1. Clonar el repositorio

```bash
git clone https://github.com/JhonMales/prueba_tecnica.git
cd prueba_tecnica
```

```bash
docker-compose up --build
```

La aplicación estará disponible en: [http://localhost:3000](http://localhost:3000)  
La documentación Swagger en: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

---


## Instalación manual

### 1. Clonar el repositorio 

```bash
git clone https://github.com/JhonMales/prueba_tecnica.git
cd prueba_tecnica
npm install
```

### 2. Variables de entorno

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/usersdb
```

### 3. Ejecutar el servidor

```bash
npm run dev
```

El servidor se iniciará en: `http://localhost:3000`

---

##  Documentación Swagger

Una vez iniciado el servidor, puedes acceder a la documentación Swagger desde:

[http://localhost:3000/api-docs](http://localhost:3000/api-docs)

Esta documentación describe todos los endpoints disponibles de la API de usuarios y respuestas.

---

##  Patrones de diseño implementados

### 1. MVC (Model - View - Controller)

Este patrón organiza la lógica de la aplicación en capas separadas:

- **Model**: `models/user.model.js` define el esquema del usuario usando Mongoose.
- **Controller**: `controllers/user.controller.js` maneja las peticiones HTTP, validaciones y respuestas.
- **Service**: `services/user.service.js` contiene la lógica de negocio y acceso a base de datos.
- **Routes**: `routes/user.routes.js` define las rutas y las conecta con sus respectivos controladores.

**Ventajas:**
- Organización clara del código.
- Separación de responsabilidades.
- Facilita pruebas unitarias y mantenimiento.

---

### 2. Middleware

El patrón Middleware permite encadenar funciones entre la solicitud y la respuesta, interceptando o manipulando los datos.

**Implementaciones en el proyecto:**

- `middlewares/errorHandler.js`: Maneja errores globalmente y responde con mensajes consistentes.
- `middlewares/validateRequest.js`: Valida los datos de entrada usando `express-validator` antes de que lleguen al controlador.

**Ventajas:**
- Código reutilizable para validación y manejo de errores.
- Limpieza en los controladores.

## 🧪 Colección de Postman

Se incluye una colección de Postman en la raíz del proyecto para probar los endpoints de la API manualmente.

**Archivo:** `prueba-tecnica.postman_collection.json`
