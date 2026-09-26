require('dotenv').config();
const express = require('express');
const { sequelize } = require('./src/models');
const { swaggerUi, swaggerSpec } = require('./src/swagger/swagger');
const providerRoutes = require('./src/routes/provider.routes');
const productRoutes = require('./src/routes/product.routes');
const saleProductRoutes = require('./src/routes/saleProduct.routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api/providers', providerRoutes);
app.use('/api/products', productRoutes);
app.use('/api/sale-products', saleProductRoutes);
app.get('/', (req, res) => {
    res.send('server is running succesfully');
});

const startServer = async () => {
    try {
        await sequelize.authenticate();
        console.log('Database connection established successfully.');

        await sequelize.sync();
        console.log('Database synchronized successfully.');

        app.listen(port, () => {
            console.log(`Server running on http://localhost:${port}`);
            console.log(`Swagger UI disponible en http://localhost:${port}/api-docs`);
        });
    } catch (error) {
        console.error('Unable to start application:', error);
    }
};

startServer();