import { DataTypes } from "sequelize";
import { connection } from "../../config/database.js";

// Import models
import { Accounts } from "../../Security/models/accounts.model.js";

export const Products = connection.define("products", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    account_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Accounts,
            key: "id"
        }
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    product_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    product_image: {
        type: DataTypes.STRING,
        allowNull: true
    },
    size: {
        type: DataTypes.STRING,
        allowNull: false
    },
    colors: {
        type: DataTypes.STRING,
        allowNull: false
    },
    ship_min: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    ship_max: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    commission: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    gst: {
        type: DataTypes.DECIMAL,
        allowNull: false
    },
    price: {
        type: DataTypes.DECIMAL,
        allowNull: false
    }
}, {
    timestamps: null
});

// Associations
Accounts.hasMany(Products, { foreignKey: "account_id" });
Products.belongsTo(Accounts, { foreignKey: "account_id" });

// Products.sync({ force: true });