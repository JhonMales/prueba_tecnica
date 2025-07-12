# Imagen base de Node.js
FROM node:22

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia archivos de dependencias
COPY package*.json ./

# Instala dependencias del proyecto
RUN npm install

# Copia el resto del código fuente
COPY . .

# Expone el puerto de la app
EXPOSE 3000

# Comando para iniciar la app
CMD ["npm", "start"]
