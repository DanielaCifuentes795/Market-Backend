require('dotenv').config();
const express = require('express');

// Importar Swagger
const { swaggerUi, swaggerSpec } = require('./src/swagger/swagger');

const app = express();
app.use(express.json());

// Servir la documentación de Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// ... Mantén el resto de tus rutas e inicio de servidor ...