import { DataTypes } from "sequelize"
import sequelize from "../../config/database.js"

const User = sequelize.define("User", {
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    birthDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
        validate: {
            isDate: true
        }
    },
}, {
    timestamps: false,
})

export default User