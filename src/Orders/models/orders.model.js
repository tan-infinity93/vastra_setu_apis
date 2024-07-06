import { DataTypes } from "sequelize";
import { connection } from "../../config/database.js";

// Import models
import { Accounts } from "../../Security/models/accounts.model.js";
import { Products } from "../../Products/models/products.model.js";

export const Orders = connection.define("orders", {
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
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Products,
            key: "id"
        }
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    amount: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    payment_type: {
        type: DataTypes.ENUM,
        values: ["wallet", "postpaid"],
        allowNull: false
    },
    order_date: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    order_update_date: {
        type: DataTypes.BIGINT
    },
    fail_reason: {
        type: DataTypes.STRING
    },
    logistic_partner: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

// Associations
Accounts.hasMany(Orders, { foreignKey: "account_id" });
Products.hasMany(Orders, { foreignKey: "product_id" });
Orders.belongsTo(Accounts, { foreignKey: "account_id" });
Orders.belongsTo(Products, { foreignKey: "product_id" });

// Orders.sync({ force: true });