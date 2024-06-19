import { DataTypes } from "sequelize";
import { connection } from "../../config/database.js";

export const Accounts = connection.define("accounts", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    business_type: {
        type: DataTypes.ENUM,
        values: ["Wholsesaler", "Retailer"],
        allowNull: false
    },
    ref_code: {
        type: DataTypes.STRING,
        unique:true
    },
    gst: {
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    original_amount: {
        type: DataTypes.INTEGER,
        // allowedNull: false
    },
    ref_amount: {
        type: DataTypes.INTEGER,
        // allowNull: false
    },
    is_ref: {
        type:DataTypes.BOOLEAN,
        // allowNull: false
    }
}, {
    timestamps: false
})

Accounts.sync({ force: true });