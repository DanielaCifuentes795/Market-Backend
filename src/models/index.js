const sequelize = require('../config/database');
const Provider = require('./Provider');
const Product = require('./Product');
const User = require('./User');
const Sale = require('./Sale');
const SaleProduct = require('./SaleProduct');

Provider.hasMany(Product,  { foreignKey: 'providerId', as: 'products' });
Product.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' });

User.hasMany(Sale,   { foreignKey: 'userId', as: 'sales' });
Sale.belongsTo(User, { foreignKey: 'userId', as: 'user' });

Sale.hasMany(SaleProduct,   { foreignKey: 'saleId', as: 'details' });
SaleProduct.belongsTo(Sale, { foreignKey: 'saleId', as: 'sale' });

Product.hasMany(SaleProduct,   { foreignKey: 'productId', as: 'saleDetails' });
SaleProduct.belongsTo(Product, { foreignKey: 'productId', as: 'product' });

module.exports = {
    sequelize,
    Provider,
    Product,
    User,
    Sale,
    SaleProduct
};