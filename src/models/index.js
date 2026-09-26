const sequelize = require('../config/database')
const Provider = require('./Provider')
const Product = require('./Product')


Provider.hasMany(Product, {
    foreignKey: 'providerId',
    as: 'products',
    onDelete: 'RESTRICT',
    onUpdate: 'CASCADE'  
})

Product.belongsTo(Provider, {
    foreignKey: 'providerId',
    as: 'provider'
})

module.exports = {
    sequelize,
    Provider,
    Product
}

