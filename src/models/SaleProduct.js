
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const SaleProduct = sequelize.define('SaleProduct',{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        saleId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        quantity: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isPositive(value) {
                    if (value <= 0) {
                        throw new Error('Quantity must be greater than 0');
                    }
                }
            }
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isPositive(value) {
                    if (Number(value) <= 0) {
                        throw new Error('Price must be greater than 0');
                    }
                }
            }
        }
    },
    {
        tableName: 'sale_products',
        timestamps: false
    }
);

module.exports = SaleProduct;