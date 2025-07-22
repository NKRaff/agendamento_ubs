import { DataTypes } from "sequelize"
import sequelize from "../../config/database.js"

const Auth = sequelize.define("Auth", {
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    rule: {
        type: DataTypes.ENUM('Admin', 'Paciente', 'Profissional'),
        allowNull: false
    },
    password: {
        type: DataTypes.TEXT,
        allowNull: false
    }
}, { timestamps: false })

export default Auth