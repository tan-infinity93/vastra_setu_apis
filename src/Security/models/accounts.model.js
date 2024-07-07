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
    owner_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    business_pan: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    phone: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true
    },
    business_type: {
        type: DataTypes.ENUM,
        values: ["Wholesaler", "Retailer"],
        allowNull: false
    },
    ref_code: {
        type: DataTypes.STRING,
        unique:true
    },
    gst: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    },
    original_amount: {
        type: DataTypes.INTEGER,
    },
    ref_amount: {
        type: DataTypes.INTEGER,
    },
    is_ref: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    brand_img: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    business_inception_date: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
})

// Accounts.sync({ force: true });